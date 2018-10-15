﻿namespace Tarzan.Nfx.FlowTracker
{
    public interface IRecordProvider<TPacket, TFlowRecord>
    {
        TFlowRecord GetRecord(TPacket packet);
    }
}