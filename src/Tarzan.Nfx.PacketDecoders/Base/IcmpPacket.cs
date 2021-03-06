// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

using System;
using System.Collections.Generic;
using Kaitai;

namespace Tarzan.Nfx.Packets.Base
{

    /// <summary>
    /// Originally developed by Kaitai team and part of its format gallery.
    /// </summary>
    public partial class IcmpPacket : KaitaiStruct
    {
        public static IcmpPacket FromFile(string fileName)
        {
            return new IcmpPacket(new KaitaiStream(fileName));
        }

        public enum IcmpTypeEnum
        {
            EchoReply = 0,
            DestinationUnreachable = 3,
            SourceQuench = 4,
            Redirect = 5,
            Echo = 8,
            TimeExceeded = 11,
        }

        public IcmpPacket(KaitaiStream io, KaitaiStruct parent = null, IcmpPacket root = null) : base(io)
        {
            m_parent = parent;
            m_root = root ?? this;
            _parse();
        }

        private void _parse()
        {
            _icmpType = ((IcmpTypeEnum) m_io.ReadU1());
            if (IcmpType == IcmpTypeEnum.DestinationUnreachable) {
                _destinationUnreachable = new DestinationUnreachableMsg(m_io, this, m_root);
            }
            if (IcmpType == IcmpTypeEnum.TimeExceeded) {
                _timeExceeded = new TimeExceededMsg(m_io, this, m_root);
            }
            if ( ((IcmpType == IcmpTypeEnum.Echo) || (IcmpType == IcmpTypeEnum.EchoReply)) ) {
                _echo = new EchoMsg(m_io, this, m_root);
            }
        }
        public partial class DestinationUnreachableMsg : KaitaiStruct
        {
            public static DestinationUnreachableMsg FromFile(string fileName)
            {
                return new DestinationUnreachableMsg(new KaitaiStream(fileName));
            }

            public enum DestinationUnreachableCode
            {
                NetUnreachable = 0,
                HostUnreachable = 1,
                ProtocolUnreachable = 2,
                PortUnreachable = 3,
                FragmentationNeededAndDfSet = 4,
                SourceRouteFailed = 5,
            }

            public DestinationUnreachableMsg(KaitaiStream io, IcmpPacket parent = null, IcmpPacket root = null) : base(io)
            {
                m_parent = parent;
                m_root = root;
                _parse();
            }

            private void _parse()
            {
                _code = ((DestinationUnreachableCode) m_io.ReadU1());
                _checksum = m_io.ReadU2be();
            }
            private DestinationUnreachableCode _code;
            private ushort _checksum;
            private IcmpPacket m_root;
            private IcmpPacket m_parent;
            public DestinationUnreachableCode Code { get { return _code; } }
            public ushort Checksum { get { return _checksum; } }
            public IcmpPacket M_Root { get { return m_root; } }
            public IcmpPacket M_Parent { get { return m_parent; } }
        }
        public partial class TimeExceededMsg : KaitaiStruct
        {
            public static TimeExceededMsg FromFile(string fileName)
            {
                return new TimeExceededMsg(new KaitaiStream(fileName));
            }

            public enum TimeExceededCode
            {
                TimeToLiveExceededInTransit = 0,
                FragmentReassemblyTimeExceeded = 1,
            }

            public TimeExceededMsg(KaitaiStream io, IcmpPacket parent = null, IcmpPacket root = null) : base(io)
            {
                m_parent = parent;
                m_root = root;
                _parse();
            }

            private void _parse()
            {
                _code = ((TimeExceededCode) m_io.ReadU1());
                _checksum = m_io.ReadU2be();
            }
            private TimeExceededCode _code;
            private ushort _checksum;
            private IcmpPacket m_root;
            private IcmpPacket m_parent;
            public TimeExceededCode Code { get { return _code; } }
            public ushort Checksum { get { return _checksum; } }
            public IcmpPacket M_Root { get { return m_root; } }
            public IcmpPacket M_Parent { get { return m_parent; } }
        }
        public partial class EchoMsg : KaitaiStruct
        {
            public static EchoMsg FromFile(string fileName)
            {
                return new EchoMsg(new KaitaiStream(fileName));
            }

            public EchoMsg(KaitaiStream io, IcmpPacket parent = null, IcmpPacket root = null) : base(io)
            {
                m_parent = parent;
                m_root = root;
                _parse();
            }

            private void _parse()
            {
                _code = m_io.EnsureFixedContents(new byte[] { 0 });
                _checksum = m_io.ReadU2be();
                _identifier = m_io.ReadU2be();
                _seqNum = m_io.ReadU2be();
            }
            private byte[] _code;
            private ushort _checksum;
            private ushort _identifier;
            private ushort _seqNum;
            private IcmpPacket m_root;
            private IcmpPacket m_parent;
            public byte[] Code { get { return _code; } }
            public ushort Checksum { get { return _checksum; } }
            public ushort Identifier { get { return _identifier; } }
            public ushort SeqNum { get { return _seqNum; } }
            public IcmpPacket M_Root { get { return m_root; } }
            public IcmpPacket M_Parent { get { return m_parent; } }
        }
        private IcmpTypeEnum _icmpType;
        private DestinationUnreachableMsg _destinationUnreachable;
        private TimeExceededMsg _timeExceeded;
        private EchoMsg _echo;
        private IcmpPacket m_root;
        private KaitaiStruct m_parent;
        public IcmpTypeEnum IcmpType { get { return _icmpType; } }
        public DestinationUnreachableMsg DestinationUnreachable { get { return _destinationUnreachable; } }
        public TimeExceededMsg TimeExceeded { get { return _timeExceeded; } }
        public EchoMsg Echo { get { return _echo; } }
        public IcmpPacket M_Root { get { return m_root; } }
        public KaitaiStruct M_Parent { get { return m_parent; } }
    }
}
