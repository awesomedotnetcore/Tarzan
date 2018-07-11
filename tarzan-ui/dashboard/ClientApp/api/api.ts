/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * TarzanDashboard API
 * TarzanDashboard ASP.NET Core Web API
 *
 * OpenAPI spec version: v1
 * Contact: rysavy@fit.vutbr.cz
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


import * as url from "url";
import * as portableFetch from "portable-fetch";
import { Configuration } from "./configuration";

const BASE_PATH = "https://localhost".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 *  
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 * 
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = portableFetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 * 
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * Represents a single flow record.
 * @export
 * @interface Capture
 */
export interface Capture {
    /**
     * A unique identifier of the capture file.
     * @type {number}
     * @memberof Capture
     */
    id?: number;
    /**
     * The name of the capture file..
     * @type {string}
     * @memberof Capture
     */
    name?: string;
    /**
     * A type of the capture file. It can be pcap, pcapng, etc.
     * @type {string}
     * @memberof Capture
     */
    type?: string;
    /**
     * The total size of the capture file.
     * @type {number}
     * @memberof Capture
     */
    size?: number;
    /**
     * Timestamp when the file was originally created.
     * @type {Date}
     * @memberof Capture
     */
    createdOn?: Date;
    /**
     * Timestamp when the file was upload to the system.
     * @type {Date}
     * @memberof Capture
     */
    uploadOn?: Date;
    /**
     * Hash value computed by MD5 algorithm.
     * @type {string}
     * @memberof Capture
     */
    hash?: string;
    /**
     * Name of the person who captured the file.
     * @type {string}
     * @memberof Capture
     */
    author?: string;
    /**
     * Arbitrary notes associated with the capture.
     * @type {string}
     * @memberof Capture
     */
    notes?: string;
    /**
     * List of tags that label the capture.
     * @type {Array&lt;string&gt;}
     * @memberof Capture
     */
    tags?: Array<string>;
}

/**
 * Represents a single flow record.
 * @export
 * @interface FlowRecord
 */
export interface FlowRecord {
    /**
     * A unique identifier of the flow record.
     * @type {number}
     * @memberof FlowRecord
     */
    id?: number;
    /**
     * Type of transport (or internet) protocol of the flow.
     * @type {string}
     * @memberof FlowRecord
     */
    protocol?: string;
    /**
     * The network source address of the flow.
     * @type {string}
     * @memberof FlowRecord
     */
    sourceAddress?: string;
    /**
     * Source port (if any) of the flow.
     * @type {number}
     * @memberof FlowRecord
     */
    sourcePort?: number;
    /**
     * The network destination address of the flow.
     * @type {string}
     * @memberof FlowRecord
     */
    destinationAddress?: string;
    /**
     * The destination port of the flow.
     * @type {number}
     * @memberof FlowRecord
     */
    destinationPort?: number;
    /**
     * Unix time stamp of the start of flow.
     * @type {number}
     * @memberof FlowRecord
     */
    firstSeen?: number;
    /**
     * The unix time stamp of the end of flow.
     * @type {number}
     * @memberof FlowRecord
     */
    lastSeen?: number;
    /**
     * Number of packets carried by the flow.
     * @type {number}
     * @memberof FlowRecord
     */
    packets?: number;
    /**
     * Total number of octets carried by the flow.
     * @type {number}
     * @memberof FlowRecord
     */
    octets?: number;
}


/**
 * CapturesApi - fetch parameter creator
 * @export
 */
export const CapturesApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets some values.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCapturesGet(options: any = {}): FetchArgs {
            const localVarPath = `/api/Captures`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CapturesApi - functional programming interface
 * @export
 */
export const CapturesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets some values.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCapturesGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<Capture>> {
            const localVarFetchArgs = CapturesApiFetchParamCreator(configuration).apiCapturesGet(options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * CapturesApi - factory interface
 * @export
 */
export const CapturesApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @summary Gets some values.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCapturesGet(options?: any) {
            return CapturesApiFp(configuration).apiCapturesGet(options)(fetch, basePath);
        },
    };
};

/**
 * CapturesApi - object-oriented interface
 * @export
 * @class CapturesApi
 * @extends {BaseAPI}
 */
export class CapturesApi extends BaseAPI {
    /**
     * 
     * @summary Gets some values.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CapturesApi
     */
    public apiCapturesGet(options?: any) {
        return CapturesApiFp(this.configuration).apiCapturesGet(options)(this.fetch, this.basePath);
    }

}

/**
 * FlowRecordApi - fetch parameter creator
 * @export
 */
export const FlowRecordApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets all flow records.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFlowsIndexGet(options: any = {}): FetchArgs {
            const localVarPath = `/api/flows/index`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Gets the flow record of the specified id.
         * @param {number} [id] Flow record identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFlowsItemGet(id?: number, options: any = {}): FetchArgs {
            const localVarPath = `/api/flows/item`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FlowRecordApi - functional programming interface
 * @export
 */
export const FlowRecordApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Gets all flow records.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFlowsIndexGet(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<FlowRecord>> {
            const localVarFetchArgs = FlowRecordApiFetchParamCreator(configuration).apiFlowsIndexGet(options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Gets the flow record of the specified id.
         * @param {number} [id] Flow record identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFlowsItemGet(id?: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<FlowRecord> {
            const localVarFetchArgs = FlowRecordApiFetchParamCreator(configuration).apiFlowsItemGet(id, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * FlowRecordApi - factory interface
 * @export
 */
export const FlowRecordApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @summary Gets all flow records.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFlowsIndexGet(options?: any) {
            return FlowRecordApiFp(configuration).apiFlowsIndexGet(options)(fetch, basePath);
        },
        /**
         * 
         * @summary Gets the flow record of the specified id.
         * @param {number} [id] Flow record identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiFlowsItemGet(id?: number, options?: any) {
            return FlowRecordApiFp(configuration).apiFlowsItemGet(id, options)(fetch, basePath);
        },
    };
};

/**
 * FlowRecordApi - object-oriented interface
 * @export
 * @class FlowRecordApi
 * @extends {BaseAPI}
 */
export class FlowRecordApi extends BaseAPI {
    /**
     * 
     * @summary Gets all flow records.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlowRecordApi
     */
    public apiFlowsIndexGet(options?: any) {
        return FlowRecordApiFp(this.configuration).apiFlowsIndexGet(options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Gets the flow record of the specified id.
     * @param {} [id] Flow record identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FlowRecordApi
     */
    public apiFlowsItemGet(id?: number, options?: any) {
        return FlowRecordApiFp(this.configuration).apiFlowsItemGet(id, options)(this.fetch, this.basePath);
    }

}
