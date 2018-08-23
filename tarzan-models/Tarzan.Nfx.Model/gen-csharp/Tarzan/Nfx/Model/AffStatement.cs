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
  public partial class AffStatement : TBase
  {
    private string _Subject;
    private string _Attribute;
    private string _Value;

    public string Subject
    {
      get
      {
        return _Subject;
      }
      set
      {
        __isset.Subject = true;
        this._Subject = value;
      }
    }

    public string Attribute
    {
      get
      {
        return _Attribute;
      }
      set
      {
        __isset.Attribute = true;
        this._Attribute = value;
      }
    }

    public string Value
    {
      get
      {
        return _Value;
      }
      set
      {
        __isset.@Value = true;
        this._Value = value;
      }
    }


    public Isset __isset;
    #if !SILVERLIGHT
    [Serializable]
    #endif
    public struct Isset {
      public bool Subject;
      public bool Attribute;
      public bool @Value;
    }

    public AffStatement() {
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
                Subject = iprot.ReadString();
              } else { 
                TProtocolUtil.Skip(iprot, field.Type);
              }
              break;
            case 2:
              if (field.Type == TType.String) {
                Attribute = iprot.ReadString();
              } else { 
                TProtocolUtil.Skip(iprot, field.Type);
              }
              break;
            case 3:
              if (field.Type == TType.String) {
                Value = iprot.ReadString();
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
        TStruct struc = new TStruct("AffStatement");
        oprot.WriteStructBegin(struc);
        TField field = new TField();
        if (Subject != null && __isset.Subject) {
          field.Name = "Subject";
          field.Type = TType.String;
          field.ID = 1;
          oprot.WriteFieldBegin(field);
          oprot.WriteString(Subject);
          oprot.WriteFieldEnd();
        }
        if (Attribute != null && __isset.Attribute) {
          field.Name = "Attribute";
          field.Type = TType.String;
          field.ID = 2;
          oprot.WriteFieldBegin(field);
          oprot.WriteString(Attribute);
          oprot.WriteFieldEnd();
        }
        if (Value != null && __isset.@Value) {
          field.Name = "Value";
          field.Type = TType.String;
          field.ID = 3;
          oprot.WriteFieldBegin(field);
          oprot.WriteString(Value);
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
      StringBuilder __sb = new StringBuilder("AffStatement(");
      bool __first = true;
      if (Subject != null && __isset.Subject) {
        if(!__first) { __sb.Append(", "); }
        __first = false;
        __sb.Append("Subject: ");
        __sb.Append(Subject);
      }
      if (Attribute != null && __isset.Attribute) {
        if(!__first) { __sb.Append(", "); }
        __first = false;
        __sb.Append("Attribute: ");
        __sb.Append(Attribute);
      }
      if (Value != null && __isset.@Value) {
        if(!__first) { __sb.Append(", "); }
        __first = false;
        __sb.Append("Value: ");
        __sb.Append(Value);
      }
      __sb.Append(")");
      return __sb.ToString();
    }

  }

}