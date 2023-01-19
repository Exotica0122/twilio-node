/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Microvisor
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Options to pass to update a DeviceInstance
 */
export interface DeviceContextUpdateOptions {
  /** A unique and addressable name to be assigned to this Device by the developer. It may be used in place of the Device SID. */
  uniqueName?: string;
  /** The SID or unique name of the App to be targeted to the Device. */
  targetApp?: string;
  /** A Boolean flag specifying whether to enable application logging. Logs will be enabled or extended for 24 hours. */
  loggingEnabled?: boolean;
}
/**
 * Options to pass to each
 */
export interface DeviceListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: DeviceInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface DeviceListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface DeviceListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface DeviceContext {
  /**
   * Fetch a DeviceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DeviceInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DeviceInstance) => any
  ): Promise<DeviceInstance>;

  /**
   * Update a DeviceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DeviceInstance
   */
  update(
    callback?: (error: Error | null, item?: DeviceInstance) => any
  ): Promise<DeviceInstance>;
  /**
   * Update a DeviceInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DeviceInstance
   */
  update(
    params: DeviceContextUpdateOptions,
    callback?: (error: Error | null, item?: DeviceInstance) => any
  ): Promise<DeviceInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DeviceContextSolution {
  sid: string;
}

export class DeviceContextImpl implements DeviceContext {
  protected _solution: DeviceContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Devices/${sid}`;
  }

  fetch(
    callback?: (error: Error | null, item?: DeviceInstance) => any
  ): Promise<DeviceInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new DeviceInstance(operationVersion, payload, instance._solution.sid)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | DeviceContextUpdateOptions
      | ((error: Error | null, item?: DeviceInstance) => any),
    callback?: (error: Error | null, item?: DeviceInstance) => any
  ): Promise<DeviceInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["targetApp"] !== undefined)
      data["TargetApp"] = params["targetApp"];
    if (params["loggingEnabled"] !== undefined)
      data["LoggingEnabled"] = serialize.bool(params["loggingEnabled"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new DeviceInstance(operationVersion, payload, instance._solution.sid)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface DevicePayload extends TwilioResponsePayload {
  devices: DeviceResource[];
}

interface DeviceResource {
  sid: string;
  unique_name: string;
  account_sid: string;
  app: any;
  logging: any;
  date_created: Date;
  date_updated: Date;
  url: string;
  links: Record<string, string>;
}

export class DeviceInstance {
  protected _solution: DeviceContextSolution;
  protected _context?: DeviceContext;

  constructor(protected _version: V1, payload: DeviceResource, sid?: string) {
    this.sid = payload.sid;
    this.uniqueName = payload.unique_name;
    this.accountSid = payload.account_sid;
    this.app = payload.app;
    this.logging = payload.logging;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * A string that uniquely identifies this Device.
   */
  sid: string;
  /**
   * A developer-defined string that uniquely identifies the Device.
   */
  uniqueName: string;
  /**
   * Account SID.
   */
  accountSid: string;
  /**
   * Information about the target App and the App reported by this Device.
   */
  app: any;
  /**
   * Object specifying whether application logging is enabled for this Device.
   */
  logging: any;
  /**
   * The date that this Device was created.
   */
  dateCreated: Date;
  /**
   * The date that this Device was last updated.
   */
  dateUpdated: Date;
  /**
   * The URL of this resource.
   */
  url: string;
  /**
   * The absolute URLs of related resources
   */
  links: Record<string, string>;

  private get _proxy(): DeviceContext {
    this._context =
      this._context || new DeviceContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a DeviceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DeviceInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DeviceInstance) => any
  ): Promise<DeviceInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a DeviceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DeviceInstance
   */
  update(
    callback?: (error: Error | null, item?: DeviceInstance) => any
  ): Promise<DeviceInstance>;
  /**
   * Update a DeviceInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DeviceInstance
   */
  update(
    params: DeviceContextUpdateOptions,
    callback?: (error: Error | null, item?: DeviceInstance) => any
  ): Promise<DeviceInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: DeviceInstance) => any
  ): Promise<DeviceInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      uniqueName: this.uniqueName,
      accountSid: this.accountSid,
      app: this.app,
      logging: this.logging,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface DeviceSolution {}

export interface DeviceListInstance {
  _version: V1;
  _solution: DeviceSolution;
  _uri: string;

  (sid: string): DeviceContext;
  get(sid: string): DeviceContext;

  /**
   * Streams DeviceInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DeviceListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: DeviceInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: DeviceListInstanceEachOptions,
    callback?: (item: DeviceInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of DeviceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: DevicePage) => any
  ): Promise<DevicePage>;
  /**
   * Lists DeviceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DeviceListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: DeviceInstance[]) => any
  ): Promise<DeviceInstance[]>;
  list(
    params: DeviceListInstanceOptions,
    callback?: (error: Error | null, items: DeviceInstance[]) => any
  ): Promise<DeviceInstance[]>;
  /**
   * Retrieve a single page of DeviceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DeviceListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: DevicePage) => any
  ): Promise<DevicePage>;
  page(
    params: DeviceListInstancePageOptions,
    callback?: (error: Error | null, items: DevicePage) => any
  ): Promise<DevicePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function DeviceListInstance(version: V1): DeviceListInstance {
  const instance = ((sid) => instance.get(sid)) as DeviceListInstance;

  instance.get = function get(sid): DeviceContext {
    return new DeviceContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Devices`;

  instance.page = function page(
    params?:
      | DeviceListInstancePageOptions
      | ((error: Error | null, items: DevicePage) => any),
    callback?: (error: Error | null, items: DevicePage) => any
  ): Promise<DevicePage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new DevicePage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: DevicePage) => any
  ): Promise<DevicePage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new DevicePage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

export class DevicePage extends Page<
  V1,
  DevicePayload,
  DeviceResource,
  DeviceInstance
> {
  /**
   * Initialize the DevicePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: DeviceSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of DeviceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DeviceResource): DeviceInstance {
    return new DeviceInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}