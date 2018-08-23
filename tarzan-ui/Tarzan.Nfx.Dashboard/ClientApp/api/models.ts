/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v11.18.6.0 (NJsonSchema v9.10.67.0 (Newtonsoft.Json v9.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming



export class DnsObject implements IDnsObject {
    __isset!: Isset;
    objectName?: string | undefined;
    flowUid?: string | undefined;
    transactionId?: string | undefined;
    timestamp!: number;
    client?: string | undefined;
    server?: string | undefined;
    dnsTtl!: number;
    dnsType?: string | undefined;
    dnsQuery?: string | undefined;
    dnsAnswer?: string | undefined;

    constructor(data?: IDnsObject) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.__isset = new Isset();
        }
    }

    init(data?: any) {
        if (data) {
            this.__isset = data["__isset"] ? Isset.fromJS(data["__isset"]) : new Isset();
            this.objectName = data["objectName"];
            this.flowUid = data["flowUid"];
            this.transactionId = data["transactionId"];
            this.timestamp = data["timestamp"];
            this.client = data["client"];
            this.server = data["server"];
            this.dnsTtl = data["dnsTtl"];
            this.dnsType = data["dnsType"];
            this.dnsQuery = data["dnsQuery"];
            this.dnsAnswer = data["dnsAnswer"];
        }
    }

    static fromJS(data: any): DnsObject {
        data = typeof data === 'object' ? data : {};
        let result = new DnsObject();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["__isset"] = this.__isset ? this.__isset.toJSON() : <any>undefined;
        data["objectName"] = this.objectName;
        data["flowUid"] = this.flowUid;
        data["transactionId"] = this.transactionId;
        data["timestamp"] = this.timestamp;
        data["client"] = this.client;
        data["server"] = this.server;
        data["dnsTtl"] = this.dnsTtl;
        data["dnsType"] = this.dnsType;
        data["dnsQuery"] = this.dnsQuery;
        data["dnsAnswer"] = this.dnsAnswer;
        return data;
    }
}

export interface IDnsObject {
    __isset: Isset;
    objectName?: string | undefined;
    flowUid?: string | undefined;
    transactionId?: string | undefined;
    timestamp: number;
    client?: string | undefined;
    server?: string | undefined;
    dnsTtl: number;
    dnsType?: string | undefined;
    dnsQuery?: string | undefined;
    dnsAnswer?: string | undefined;
}

export class Isset implements IIsset {
    flowUid!: boolean;
    transactionId!: boolean;
    timestamp!: boolean;
    client!: boolean;
    server!: boolean;
    dnsTtl!: boolean;
    dnsType!: boolean;
    dnsQuery!: boolean;
    dnsAnswer!: boolean;

    constructor(data?: IIsset) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.flowUid = data["flowUid"];
            this.transactionId = data["transactionId"];
            this.timestamp = data["timestamp"];
            this.client = data["client"];
            this.server = data["server"];
            this.dnsTtl = data["dnsTtl"];
            this.dnsType = data["dnsType"];
            this.dnsQuery = data["dnsQuery"];
            this.dnsAnswer = data["dnsAnswer"];
        }
    }

    static fromJS(data: any): Isset {
        data = typeof data === 'object' ? data : {};
        let result = new Isset();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["flowUid"] = this.flowUid;
        data["transactionId"] = this.transactionId;
        data["timestamp"] = this.timestamp;
        data["client"] = this.client;
        data["server"] = this.server;
        data["dnsTtl"] = this.dnsTtl;
        data["dnsType"] = this.dnsType;
        data["dnsQuery"] = this.dnsQuery;
        data["dnsAnswer"] = this.dnsAnswer;
        return data;
    }
}

export interface IIsset {
    flowUid: boolean;
    transactionId: boolean;
    timestamp: boolean;
    client: boolean;
    server: boolean;
    dnsTtl: boolean;
    dnsType: boolean;
    dnsQuery: boolean;
    dnsAnswer: boolean;
}

export class Host implements IHost {
    __isset!: Isset2;
    address?: string | undefined;
    hostname?: string | undefined;
    upFlows!: number;
    downFlows!: number;
    octetsSent!: number;
    octetsRecv!: number;
    packetsSent!: number;
    packetsRecv!: number;
    objectName?: string | undefined;

    constructor(data?: IHost) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.__isset = new Isset2();
        }
    }

    init(data?: any) {
        if (data) {
            this.__isset = data["__isset"] ? Isset2.fromJS(data["__isset"]) : new Isset2();
            this.address = data["address"];
            this.hostname = data["hostname"];
            this.upFlows = data["upFlows"];
            this.downFlows = data["downFlows"];
            this.octetsSent = data["octetsSent"];
            this.octetsRecv = data["octetsRecv"];
            this.packetsSent = data["packetsSent"];
            this.packetsRecv = data["packetsRecv"];
            this.objectName = data["objectName"];
        }
    }

    static fromJS(data: any): Host {
        data = typeof data === 'object' ? data : {};
        let result = new Host();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["__isset"] = this.__isset ? this.__isset.toJSON() : <any>undefined;
        data["address"] = this.address;
        data["hostname"] = this.hostname;
        data["upFlows"] = this.upFlows;
        data["downFlows"] = this.downFlows;
        data["octetsSent"] = this.octetsSent;
        data["octetsRecv"] = this.octetsRecv;
        data["packetsSent"] = this.packetsSent;
        data["packetsRecv"] = this.packetsRecv;
        data["objectName"] = this.objectName;
        return data;
    }
}

export interface IHost {
    __isset: Isset2;
    address?: string | undefined;
    hostname?: string | undefined;
    upFlows: number;
    downFlows: number;
    octetsSent: number;
    octetsRecv: number;
    packetsSent: number;
    packetsRecv: number;
    objectName?: string | undefined;
}

export class Isset2 implements IIsset2 {
    address!: boolean;
    hostname!: boolean;
    upFlows!: boolean;
    downFlows!: boolean;
    octetsSent!: boolean;
    octetsRecv!: boolean;
    packetsSent!: boolean;
    packetsRecv!: boolean;

    constructor(data?: IIsset2) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.address = data["address"];
            this.hostname = data["hostname"];
            this.upFlows = data["upFlows"];
            this.downFlows = data["downFlows"];
            this.octetsSent = data["octetsSent"];
            this.octetsRecv = data["octetsRecv"];
            this.packetsSent = data["packetsSent"];
            this.packetsRecv = data["packetsRecv"];
        }
    }

    static fromJS(data: any): Isset2 {
        data = typeof data === 'object' ? data : {};
        let result = new Isset2();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["address"] = this.address;
        data["hostname"] = this.hostname;
        data["upFlows"] = this.upFlows;
        data["downFlows"] = this.downFlows;
        data["octetsSent"] = this.octetsSent;
        data["octetsRecv"] = this.octetsRecv;
        data["packetsSent"] = this.packetsSent;
        data["packetsRecv"] = this.packetsRecv;
        return data;
    }
}

export interface IIsset2 {
    address: boolean;
    hostname: boolean;
    upFlows: boolean;
    downFlows: boolean;
    octetsSent: boolean;
    octetsRecv: boolean;
    packetsSent: boolean;
    packetsRecv: boolean;
}

export class HttpObject implements IHttpObject {
    __isset!: Isset3;
    flowUid?: string | undefined;
    objectIndex?: string | undefined;
    timestamp!: number;
    client?: string | undefined;
    server?: string | undefined;
    method?: string | undefined;
    host?: string | undefined;
    uri?: string | undefined;
    referrer?: string | undefined;
    version?: string | undefined;
    userAgent?: string | undefined;
    username?: string | undefined;
    password?: string | undefined;
    statusCode?: string | undefined;
    statusMessage?: string | undefined;
    requestHeaders?: string[] | undefined;
    responseHeaders?: string[] | undefined;
    requestBodyLength!: number;
    responseBodyLength!: number;
    requestBodyChunks?: string[] | undefined;
    responseBodyChunks?: string[] | undefined;
    requestContentType?: string | undefined;
    responseContentType?: string | undefined;
    objectName?: string | undefined;

    constructor(data?: IHttpObject) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.__isset = new Isset3();
        }
    }

    init(data?: any) {
        if (data) {
            this.__isset = data["__isset"] ? Isset3.fromJS(data["__isset"]) : new Isset3();
            this.flowUid = data["flowUid"];
            this.objectIndex = data["objectIndex"];
            this.timestamp = data["timestamp"];
            this.client = data["client"];
            this.server = data["server"];
            this.method = data["method"];
            this.host = data["host"];
            this.uri = data["uri"];
            this.referrer = data["referrer"];
            this.version = data["version"];
            this.userAgent = data["userAgent"];
            this.username = data["username"];
            this.password = data["password"];
            this.statusCode = data["statusCode"];
            this.statusMessage = data["statusMessage"];
            if (data["requestHeaders"] && data["requestHeaders"].constructor === Array) {
                this.requestHeaders = [];
                for (let item of data["requestHeaders"])
                    this.requestHeaders.push(item);
            }
            if (data["responseHeaders"] && data["responseHeaders"].constructor === Array) {
                this.responseHeaders = [];
                for (let item of data["responseHeaders"])
                    this.responseHeaders.push(item);
            }
            this.requestBodyLength = data["requestBodyLength"];
            this.responseBodyLength = data["responseBodyLength"];
            if (data["requestBodyChunks"] && data["requestBodyChunks"].constructor === Array) {
                this.requestBodyChunks = [];
                for (let item of data["requestBodyChunks"])
                    this.requestBodyChunks.push(item);
            }
            if (data["responseBodyChunks"] && data["responseBodyChunks"].constructor === Array) {
                this.responseBodyChunks = [];
                for (let item of data["responseBodyChunks"])
                    this.responseBodyChunks.push(item);
            }
            this.requestContentType = data["requestContentType"];
            this.responseContentType = data["responseContentType"];
            this.objectName = data["objectName"];
        }
    }

    static fromJS(data: any): HttpObject {
        data = typeof data === 'object' ? data : {};
        let result = new HttpObject();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["__isset"] = this.__isset ? this.__isset.toJSON() : <any>undefined;
        data["flowUid"] = this.flowUid;
        data["objectIndex"] = this.objectIndex;
        data["timestamp"] = this.timestamp;
        data["client"] = this.client;
        data["server"] = this.server;
        data["method"] = this.method;
        data["host"] = this.host;
        data["uri"] = this.uri;
        data["referrer"] = this.referrer;
        data["version"] = this.version;
        data["userAgent"] = this.userAgent;
        data["username"] = this.username;
        data["password"] = this.password;
        data["statusCode"] = this.statusCode;
        data["statusMessage"] = this.statusMessage;
        if (this.requestHeaders && this.requestHeaders.constructor === Array) {
            data["requestHeaders"] = [];
            for (let item of this.requestHeaders)
                data["requestHeaders"].push(item);
        }
        if (this.responseHeaders && this.responseHeaders.constructor === Array) {
            data["responseHeaders"] = [];
            for (let item of this.responseHeaders)
                data["responseHeaders"].push(item);
        }
        data["requestBodyLength"] = this.requestBodyLength;
        data["responseBodyLength"] = this.responseBodyLength;
        if (this.requestBodyChunks && this.requestBodyChunks.constructor === Array) {
            data["requestBodyChunks"] = [];
            for (let item of this.requestBodyChunks)
                data["requestBodyChunks"].push(item);
        }
        if (this.responseBodyChunks && this.responseBodyChunks.constructor === Array) {
            data["responseBodyChunks"] = [];
            for (let item of this.responseBodyChunks)
                data["responseBodyChunks"].push(item);
        }
        data["requestContentType"] = this.requestContentType;
        data["responseContentType"] = this.responseContentType;
        data["objectName"] = this.objectName;
        return data;
    }
}

export interface IHttpObject {
    __isset: Isset3;
    flowUid?: string | undefined;
    objectIndex?: string | undefined;
    timestamp: number;
    client?: string | undefined;
    server?: string | undefined;
    method?: string | undefined;
    host?: string | undefined;
    uri?: string | undefined;
    referrer?: string | undefined;
    version?: string | undefined;
    userAgent?: string | undefined;
    username?: string | undefined;
    password?: string | undefined;
    statusCode?: string | undefined;
    statusMessage?: string | undefined;
    requestHeaders?: string[] | undefined;
    responseHeaders?: string[] | undefined;
    requestBodyLength: number;
    responseBodyLength: number;
    requestBodyChunks?: string[] | undefined;
    responseBodyChunks?: string[] | undefined;
    requestContentType?: string | undefined;
    responseContentType?: string | undefined;
    objectName?: string | undefined;
}

export class Isset3 implements IIsset3 {
    flowUid!: boolean;
    objectIndex!: boolean;
    timestamp!: boolean;
    client!: boolean;
    server!: boolean;
    method!: boolean;
    host!: boolean;
    uri!: boolean;
    referrer!: boolean;
    version!: boolean;
    userAgent!: boolean;
    username!: boolean;
    password!: boolean;
    statusCode!: boolean;
    statusMessage!: boolean;
    requestHeaders!: boolean;
    responseHeaders!: boolean;
    requestBodyLength!: boolean;
    responseBodyLength!: boolean;
    requestBodyChunks!: boolean;
    responseBodyChunks!: boolean;
    requestContentType!: boolean;
    responseContentType!: boolean;

    constructor(data?: IIsset3) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.flowUid = data["flowUid"];
            this.objectIndex = data["objectIndex"];
            this.timestamp = data["timestamp"];
            this.client = data["client"];
            this.server = data["server"];
            this.method = data["method"];
            this.host = data["host"];
            this.uri = data["uri"];
            this.referrer = data["referrer"];
            this.version = data["version"];
            this.userAgent = data["userAgent"];
            this.username = data["username"];
            this.password = data["password"];
            this.statusCode = data["statusCode"];
            this.statusMessage = data["statusMessage"];
            this.requestHeaders = data["requestHeaders"];
            this.responseHeaders = data["responseHeaders"];
            this.requestBodyLength = data["requestBodyLength"];
            this.responseBodyLength = data["responseBodyLength"];
            this.requestBodyChunks = data["requestBodyChunks"];
            this.responseBodyChunks = data["responseBodyChunks"];
            this.requestContentType = data["requestContentType"];
            this.responseContentType = data["responseContentType"];
        }
    }

    static fromJS(data: any): Isset3 {
        data = typeof data === 'object' ? data : {};
        let result = new Isset3();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["flowUid"] = this.flowUid;
        data["objectIndex"] = this.objectIndex;
        data["timestamp"] = this.timestamp;
        data["client"] = this.client;
        data["server"] = this.server;
        data["method"] = this.method;
        data["host"] = this.host;
        data["uri"] = this.uri;
        data["referrer"] = this.referrer;
        data["version"] = this.version;
        data["userAgent"] = this.userAgent;
        data["username"] = this.username;
        data["password"] = this.password;
        data["statusCode"] = this.statusCode;
        data["statusMessage"] = this.statusMessage;
        data["requestHeaders"] = this.requestHeaders;
        data["responseHeaders"] = this.responseHeaders;
        data["requestBodyLength"] = this.requestBodyLength;
        data["responseBodyLength"] = this.responseBodyLength;
        data["requestBodyChunks"] = this.requestBodyChunks;
        data["responseBodyChunks"] = this.responseBodyChunks;
        data["requestContentType"] = this.requestContentType;
        data["responseContentType"] = this.responseContentType;
        return data;
    }
}

export interface IIsset3 {
    flowUid: boolean;
    objectIndex: boolean;
    timestamp: boolean;
    client: boolean;
    server: boolean;
    method: boolean;
    host: boolean;
    uri: boolean;
    referrer: boolean;
    version: boolean;
    userAgent: boolean;
    username: boolean;
    password: boolean;
    statusCode: boolean;
    statusMessage: boolean;
    requestHeaders: boolean;
    responseHeaders: boolean;
    requestBodyLength: boolean;
    responseBodyLength: boolean;
    requestBodyChunks: boolean;
    responseBodyChunks: boolean;
    requestContentType: boolean;
    responseContentType: boolean;
}

export class Service implements IService {
    __isset!: Isset4;
    serviceName?: string | undefined;
    flows!: number;
    packets!: number;
    minPackets!: number;
    maxPackets!: number;
    octets!: number;
    minOctets!: number;
    maxOctets!: number;
    minDuration!: number;
    maxDuration!: number;
    avgDuration!: number;

    constructor(data?: IService) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.__isset = new Isset4();
        }
    }

    init(data?: any) {
        if (data) {
            this.__isset = data["__isset"] ? Isset4.fromJS(data["__isset"]) : new Isset4();
            this.serviceName = data["serviceName"];
            this.flows = data["flows"];
            this.packets = data["packets"];
            this.minPackets = data["minPackets"];
            this.maxPackets = data["maxPackets"];
            this.octets = data["octets"];
            this.minOctets = data["minOctets"];
            this.maxOctets = data["maxOctets"];
            this.minDuration = data["minDuration"];
            this.maxDuration = data["maxDuration"];
            this.avgDuration = data["avgDuration"];
        }
    }

    static fromJS(data: any): Service {
        data = typeof data === 'object' ? data : {};
        let result = new Service();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["__isset"] = this.__isset ? this.__isset.toJSON() : <any>undefined;
        data["serviceName"] = this.serviceName;
        data["flows"] = this.flows;
        data["packets"] = this.packets;
        data["minPackets"] = this.minPackets;
        data["maxPackets"] = this.maxPackets;
        data["octets"] = this.octets;
        data["minOctets"] = this.minOctets;
        data["maxOctets"] = this.maxOctets;
        data["minDuration"] = this.minDuration;
        data["maxDuration"] = this.maxDuration;
        data["avgDuration"] = this.avgDuration;
        return data;
    }
}

export interface IService {
    __isset: Isset4;
    serviceName?: string | undefined;
    flows: number;
    packets: number;
    minPackets: number;
    maxPackets: number;
    octets: number;
    minOctets: number;
    maxOctets: number;
    minDuration: number;
    maxDuration: number;
    avgDuration: number;
}

export class Isset4 implements IIsset4 {
    serviceName!: boolean;
    flows!: boolean;
    packets!: boolean;
    minPackets!: boolean;
    maxPackets!: boolean;
    octets!: boolean;
    minOctets!: boolean;
    maxOctets!: boolean;
    minDuration!: boolean;
    maxDuration!: boolean;
    avgDuration!: boolean;

    constructor(data?: IIsset4) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.serviceName = data["serviceName"];
            this.flows = data["flows"];
            this.packets = data["packets"];
            this.minPackets = data["minPackets"];
            this.maxPackets = data["maxPackets"];
            this.octets = data["octets"];
            this.minOctets = data["minOctets"];
            this.maxOctets = data["maxOctets"];
            this.minDuration = data["minDuration"];
            this.maxDuration = data["maxDuration"];
            this.avgDuration = data["avgDuration"];
        }
    }

    static fromJS(data: any): Isset4 {
        data = typeof data === 'object' ? data : {};
        let result = new Isset4();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["serviceName"] = this.serviceName;
        data["flows"] = this.flows;
        data["packets"] = this.packets;
        data["minPackets"] = this.minPackets;
        data["maxPackets"] = this.maxPackets;
        data["octets"] = this.octets;
        data["minOctets"] = this.minOctets;
        data["maxOctets"] = this.maxOctets;
        data["minDuration"] = this.minDuration;
        data["maxDuration"] = this.maxDuration;
        data["avgDuration"] = this.avgDuration;
        return data;
    }
}

export interface IIsset4 {
    serviceName: boolean;
    flows: boolean;
    packets: boolean;
    minPackets: boolean;
    maxPackets: boolean;
    octets: boolean;
    minOctets: boolean;
    maxOctets: boolean;
    minDuration: boolean;
    maxDuration: boolean;
    avgDuration: boolean;
}

export class Capture implements ICapture {
    __isset!: Isset5;
    uid?: string | undefined;
    name?: string | undefined;
    creationTime!: number;
    length!: number;
    hash?: string | undefined;

    constructor(data?: ICapture) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.__isset = new Isset5();
        }
    }

    init(data?: any) {
        if (data) {
            this.__isset = data["__isset"] ? Isset5.fromJS(data["__isset"]) : new Isset5();
            this.uid = data["uid"];
            this.name = data["name"];
            this.creationTime = data["creationTime"];
            this.length = data["length"];
            this.hash = data["hash"];
        }
    }

    static fromJS(data: any): Capture {
        data = typeof data === 'object' ? data : {};
        let result = new Capture();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["__isset"] = this.__isset ? this.__isset.toJSON() : <any>undefined;
        data["uid"] = this.uid;
        data["name"] = this.name;
        data["creationTime"] = this.creationTime;
        data["length"] = this.length;
        data["hash"] = this.hash;
        return data;
    }
}

export interface ICapture {
    __isset: Isset5;
    uid?: string | undefined;
    name?: string | undefined;
    creationTime: number;
    length: number;
    hash?: string | undefined;
}

export class Isset5 implements IIsset5 {
    uid!: boolean;
    name!: boolean;
    creationTime!: boolean;
    length!: boolean;
    hash!: boolean;

    constructor(data?: IIsset5) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.uid = data["uid"];
            this.name = data["name"];
            this.creationTime = data["creationTime"];
            this.length = data["length"];
            this.hash = data["hash"];
        }
    }

    static fromJS(data: any): Isset5 {
        data = typeof data === 'object' ? data : {};
        let result = new Isset5();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["uid"] = this.uid;
        data["name"] = this.name;
        data["creationTime"] = this.creationTime;
        data["length"] = this.length;
        data["hash"] = this.hash;
        return data;
    }
}

export interface IIsset5 {
    uid: boolean;
    name: boolean;
    creationTime: boolean;
    length: boolean;
    hash: boolean;
}

export class PacketFlow implements IPacketFlow {
    __isset!: Isset6;
    uid?: string | undefined;
    protocol?: string | undefined;
    sourceAddress?: string | undefined;
    sourcePort!: number;
    destinationAddress?: string | undefined;
    destinationPort!: number;
    firstSeen!: number;
    lastSeen!: number;
    packets!: number;
    octets!: number;
    objectName?: string | undefined;

    constructor(data?: IPacketFlow) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.__isset = new Isset6();
        }
    }

    init(data?: any) {
        if (data) {
            this.__isset = data["__isset"] ? Isset6.fromJS(data["__isset"]) : new Isset6();
            this.uid = data["uid"];
            this.protocol = data["protocol"];
            this.sourceAddress = data["sourceAddress"];
            this.sourcePort = data["sourcePort"];
            this.destinationAddress = data["destinationAddress"];
            this.destinationPort = data["destinationPort"];
            this.firstSeen = data["firstSeen"];
            this.lastSeen = data["lastSeen"];
            this.packets = data["packets"];
            this.octets = data["octets"];
            this.objectName = data["objectName"];
        }
    }

    static fromJS(data: any): PacketFlow {
        data = typeof data === 'object' ? data : {};
        let result = new PacketFlow();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["__isset"] = this.__isset ? this.__isset.toJSON() : <any>undefined;
        data["uid"] = this.uid;
        data["protocol"] = this.protocol;
        data["sourceAddress"] = this.sourceAddress;
        data["sourcePort"] = this.sourcePort;
        data["destinationAddress"] = this.destinationAddress;
        data["destinationPort"] = this.destinationPort;
        data["firstSeen"] = this.firstSeen;
        data["lastSeen"] = this.lastSeen;
        data["packets"] = this.packets;
        data["octets"] = this.octets;
        data["objectName"] = this.objectName;
        return data;
    }
}

export interface IPacketFlow {
    __isset: Isset6;
    uid?: string | undefined;
    protocol?: string | undefined;
    sourceAddress?: string | undefined;
    sourcePort: number;
    destinationAddress?: string | undefined;
    destinationPort: number;
    firstSeen: number;
    lastSeen: number;
    packets: number;
    octets: number;
    objectName?: string | undefined;
}

export class Isset6 implements IIsset6 {
    uid!: boolean;
    protocol!: boolean;
    sourceAddress!: boolean;
    sourcePort!: boolean;
    destinationAddress!: boolean;
    destinationPort!: boolean;
    firstSeen!: boolean;
    lastSeen!: boolean;
    packets!: boolean;
    octets!: boolean;

    constructor(data?: IIsset6) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.uid = data["uid"];
            this.protocol = data["protocol"];
            this.sourceAddress = data["sourceAddress"];
            this.sourcePort = data["sourcePort"];
            this.destinationAddress = data["destinationAddress"];
            this.destinationPort = data["destinationPort"];
            this.firstSeen = data["firstSeen"];
            this.lastSeen = data["lastSeen"];
            this.packets = data["packets"];
            this.octets = data["octets"];
        }
    }

    static fromJS(data: any): Isset6 {
        data = typeof data === 'object' ? data : {};
        let result = new Isset6();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["uid"] = this.uid;
        data["protocol"] = this.protocol;
        data["sourceAddress"] = this.sourceAddress;
        data["sourcePort"] = this.sourcePort;
        data["destinationAddress"] = this.destinationAddress;
        data["destinationPort"] = this.destinationPort;
        data["firstSeen"] = this.firstSeen;
        data["lastSeen"] = this.lastSeen;
        data["packets"] = this.packets;
        data["octets"] = this.octets;
        return data;
    }
}

export interface IIsset6 {
    uid: boolean;
    protocol: boolean;
    sourceAddress: boolean;
    sourcePort: boolean;
    destinationAddress: boolean;
    destinationPort: boolean;
    firstSeen: boolean;
    lastSeen: boolean;
    packets: boolean;
    octets: boolean;
}

export interface FileResponse {
    data: Blob;
    status: number;
    fileName?: string;
    headers?: { [name: string]: any };
}