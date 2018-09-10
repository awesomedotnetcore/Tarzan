﻿using Apache.Ignite.Core;
using Apache.Ignite.Core.Binary;
using Apache.Ignite.Core.Cache.Configuration;
using Apache.Ignite.Core.Communication.Tcp;
using Apache.Ignite.Core.Discovery.Tcp;
using Apache.Ignite.Core.Discovery.Tcp.Static;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Tarzan.Nfx.Ingest.Ignite
{
    public static class GlobalIgniteConfiguration
    {
        public static IgniteConfiguration GetDefaultIgniteConfiguration()
        {

            var providers = GetConfigurationProviders();

            var config = new IgniteConfiguration();
            config.JvmOptions = new[] { "-Xms2g", "-Xmx2g", "-XX:+AlwaysPreTouch", "-XX:+UseG1GC", "-XX:+ScavengeBeforeFullGC", "-XX:+DisableExplicitGC", "-XX:MaxDirectMemorySize=256m" };
            config.DiscoverySpi = new TcpDiscoverySpi
            {
                IpFinder = new TcpDiscoveryStaticIpFinder
                {
                    Endpoints = new[] { "127.0.0.1:47500..47520" }
                },
                SocketTimeout = TimeSpan.FromSeconds(0.3)
            };
            config.CommunicationSpi = new TcpCommunicationSpi
            {
                MessageQueueLimit = 1024,
            };
            config.BinaryConfiguration = new BinaryConfiguration()
            {
                TypeConfigurations = providers.Select(p => p.TypeConfiguration).ToArray()
            };

            config.CacheConfiguration = providers.Select(p => p.CacheConfiguration).ToArray();
            return config;
        }
        private static IEnumerable<ITableConfigurationProvider> GetConfigurationProviders()
        {
            var configProviders = AppDomain.CurrentDomain.GetAssemblies().SelectMany(x => x.GetTypes())
                           .Where(x => typeof(ITableConfigurationProvider).IsAssignableFrom(x) && !x.IsInterface && !x.IsAbstract)
                           .Select(x => x.GetConstructor(new Type[] { }).Invoke(null) as ITableConfigurationProvider);
            return configProviders.ToList();
        }       
    }
}
