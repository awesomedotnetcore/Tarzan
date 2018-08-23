/**
 * Autogenerated by Thrift Compiler (0.11.0)
 *
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 *  @generated
 */
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.IO;
using Thrift;
using Thrift.Collections;
using System.Runtime.Serialization;
using Thrift.Protocol;
using Thrift.Transport;

namespace Tarzan.Nfx.Model
{

  #if !SILVERLIGHT
  [Serializable]
  #endif
  public partial class AffObject : TBase
  {
    private string _ObjectName;
    private string _ObjectType;
    private string _Interface;
    private string _Stored;

    public string ObjectName
    {
      get
      {
        return _ObjectName;
      }
      set
      {
        __isset.ObjectName = true;
        this._ObjectName = value;
      }
    }

    public string ObjectType
    {
      get
      {
        return _ObjectType;
      }
      set
      {
        __isset.ObjectType = true;
        this._ObjectType = value;
      }
    }

    public string Interface
    {
      get
      {
        return _Interface;
      }
      set
      {
        __isset.@Interface = true;
        this._Interface = value;
      }
    }

    public string Stored
    {
      get
      {
        return _Stored;
      }
      set
      {
        __isset.Stored = true;
        this._Stored = value;
      }
    }


    public Isset __isset;
    #if !SILVERLIGHT
    [Serializable]
    #endif
    public struct Isset {
      public bool ObjectName;
      public bool ObjectType;
      public bool @Interface;
      public bool Stored;
    }

    public AffObject() {
    }

    public void Read (TProtocol iprot)
    {
      iprot.IncrementRecursionDepth();
      try
      {
        TField field;
        iprot.ReadStructBegin();
        while (true)
        {
          field = iprot.ReadFieldBegin();
          if (field.Type == TType.Stop) { 
            break;
          }
          switch (field.ID)
          {
            case 1:
              if (field.Type == TType.String) {
                ObjectName = iprot.ReadString();
              } else { 
                TProtocolUtil.Skip(iprot, field.Type);
              }
              break;
            case 2:
              if (field.Type == TType.String) {
                ObjectType = iprot.ReadString();
              } else { 
                TProtocolUtil.Skip(iprot, field.Type);
              }
              break;
            case 3:
              if (field.Type == TType.String) {
                Interface = iprot.ReadString();
              } else { 
                TProtocolUtil.Skip(iprot, field.Type);
              }
              break;
            case 4:
              if (field.Type == TType.String) {
                Stored = iprot.ReadString();
              } else { 
                TProtocolUtil.Skip(iprot, field.Type);
              }
              break;
            default: 
              TProtocolUtil.Skip(iprot, field.Type);
              break;
          }
          iprot.ReadFieldEnd();
        }
        iprot.ReadStructEnd();
      }
      finally
      {
        iprot.DecrementRecursionDepth();
      }
    }

    public void Write(TProtocol oprot) {
      oprot.IncrementRecursionDepth();
      try
      {
        TStruct struc = new TStruct("AffObject");
        oprot.WriteStructBegin(struc);
        TField field = new TField();
        if (ObjectName != null && __isset.ObjectName) {
          field.Name = "ObjectName";
          field.Type = TType.String;
          field.ID = 1;
          oprot.WriteFieldBegin(field);
          oprot.WriteString(ObjectName);
          oprot.WriteFieldEnd();
        }
        if (ObjectType != null && __isset.ObjectType) {
          field.Name = "ObjectType";
          field.Type = TType.String;
          field.ID = 2;
          oprot.WriteFieldBegin(field);
          oprot.WriteString(ObjectType);
          oprot.WriteFieldEnd();
        }
        if (Interface != null && __isset.@Interface) {
          field.Name = "Interface";
          field.Type = TType.String;
          field.ID = 3;
          oprot.WriteFieldBegin(field);
          oprot.WriteString(Interface);
          oprot.WriteFieldEnd();
        }
        if (Stored != null && __isset.Stored) {
          field.Name = "Stored";
          field.Type = TType.String;
          field.ID = 4;
          oprot.WriteFieldBegin(field);
          oprot.WriteString(Stored);
          oprot.WriteFieldEnd();
        }
        oprot.WriteFieldStop();
        oprot.WriteStructEnd();
      }
      finally
      {
        oprot.DecrementRecursionDepth();
      }
    }

    public override string ToString() {
      StringBuilder __sb = new StringBuilder("AffObject(");
      bool __first = true;
      if (ObjectName != null && __isset.ObjectName) {
        if(!__first) { __sb.Append(", "); }
        __first = false;
        __sb.Append("ObjectName: ");
        __sb.Append(ObjectName);
      }
      if (ObjectType != null && __isset.ObjectType) {
        if(!__first) { __sb.Append(", "); }
        __first = false;
        __sb.Append("ObjectType: ");
        __sb.Append(ObjectType);
      }
      if (Interface != null && __isset.@Interface) {
        if(!__first) { __sb.Append(", "); }
        __first = false;
        __sb.Append("Interface: ");
        __sb.Append(Interface);
      }
      if (Stored != null && __isset.Stored) {
        if(!__first) { __sb.Append(", "); }
        __first = false;
        __sb.Append("Stored: ");
        __sb.Append(Stored);
      }
      __sb.Append(")");
      return __sb.ToString();
    }

  }

}
