/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Conversations
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

export type ConfigurationAddressAutoCreationType =
  | "webhook"
  | "studio"
  | "default";

export type ConfigurationAddressMethod = "GET" | "POST";

export type ConfigurationAddressType = "sms" | "whatsapp" | "messenger" | "gbm";

/**
 * Options to pass to update a AddressConfigurationInstance
 */
export interface AddressConfigurationContextUpdateOptions {
  /** The human-readable name of this configuration, limited to 256 characters. Optional. */
  friendlyName?: string;
  /** Enable/Disable auto-creating conversations for messages to this address */
  "autoCreation.enabled"?: boolean;
  /**  */
  "autoCreation.type"?: ConfigurationAddressAutoCreationType;
  /** Conversation Service for the auto-created conversation. If not set, the conversation is created in the default service. */
  "autoCreation.conversationServiceSid"?: string;
  /** For type `webhook`, the url for the webhook request. */
  "autoCreation.webhookUrl"?: string;
  /**  */
  "autoCreation.webhookMethod"?: ConfigurationAddressMethod;
  /** The list of events, firing webhook event for this Conversation. Values can be any of the following: `onMessageAdded`, `onMessageUpdated`, `onMessageRemoved`, `onConversationUpdated`, `onConversationStateUpdated`, `onConversationRemoved`, `onParticipantAdded`, `onParticipantUpdated`, `onParticipantRemoved`, `onDeliveryUpdated` */
  "autoCreation.webhookFilters"?: Array<string>;
  /** For type `studio`, the studio flow SID where the webhook should be sent to. */
  "autoCreation.studioFlowSid"?: string;
  /** For type `studio`, number of times to retry the webhook request */
  "autoCreation.studioRetryCount"?: number;
}

/**
 * Options to pass to create a AddressConfigurationInstance
 */
export interface AddressConfigurationListInstanceCreateOptions {
  /**  */
  type: ConfigurationAddressType;
  /** The unique address to be configured. The address can be a whatsapp address or phone number */
  address: string;
  /** The human-readable name of this configuration, limited to 256 characters. Optional. */
  friendlyName?: string;
  /** Enable/Disable auto-creating conversations for messages to this address */
  "autoCreation.enabled"?: boolean;
  /**  */
  "autoCreation.type"?: ConfigurationAddressAutoCreationType;
  /** Conversation Service for the auto-created conversation. If not set, the conversation is created in the default service. */
  "autoCreation.conversationServiceSid"?: string;
  /** For type `webhook`, the url for the webhook request. */
  "autoCreation.webhookUrl"?: string;
  /**  */
  "autoCreation.webhookMethod"?: ConfigurationAddressMethod;
  /** The list of events, firing webhook event for this Conversation. Values can be any of the following: `onMessageAdded`, `onMessageUpdated`, `onMessageRemoved`, `onConversationUpdated`, `onConversationStateUpdated`, `onConversationRemoved`, `onParticipantAdded`, `onParticipantUpdated`, `onParticipantRemoved`, `onDeliveryUpdated` */
  "autoCreation.webhookFilters"?: Array<string>;
  /** For type `studio`, the studio flow SID where the webhook should be sent to. */
  "autoCreation.studioFlowSid"?: string;
  /** For type `studio`, number of times to retry the webhook request */
  "autoCreation.studioRetryCount"?: number;
}
/**
 * Options to pass to each
 */
export interface AddressConfigurationListInstanceEachOptions {
  /** Filter the address configurations by its type. This value can be one of: `whatsapp`, `sms`. */
  type?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: AddressConfigurationInstance,
    done: (err?: Error) => void
  ) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface AddressConfigurationListInstanceOptions {
  /** Filter the address configurations by its type. This value can be one of: `whatsapp`, `sms`. */
  type?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface AddressConfigurationListInstancePageOptions {
  /** Filter the address configurations by its type. This value can be one of: `whatsapp`, `sms`. */
  type?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface AddressConfigurationContext {
  /**
   * Remove a AddressConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a AddressConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AddressConfigurationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AddressConfigurationInstance) => any
  ): Promise<AddressConfigurationInstance>;

  /**
   * Update a AddressConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AddressConfigurationInstance
   */
  update(
    callback?: (error: Error | null, item?: AddressConfigurationInstance) => any
  ): Promise<AddressConfigurationInstance>;
  /**
   * Update a AddressConfigurationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AddressConfigurationInstance
   */
  update(
    params: AddressConfigurationContextUpdateOptions,
    callback?: (error: Error | null, item?: AddressConfigurationInstance) => any
  ): Promise<AddressConfigurationInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AddressConfigurationContextSolution {
  sid: string;
}

export class AddressConfigurationContextImpl
  implements AddressConfigurationContext
{
  protected _solution: AddressConfigurationContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Configuration/Addresses/${sid}`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: AddressConfigurationInstance) => any
  ): Promise<AddressConfigurationInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AddressConfigurationInstance(
          operationVersion,
          payload,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | AddressConfigurationContextUpdateOptions
      | ((error: Error | null, item?: AddressConfigurationInstance) => any),
    callback?: (error: Error | null, item?: AddressConfigurationInstance) => any
  ): Promise<AddressConfigurationInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["autoCreation.enabled"] !== undefined)
      data["AutoCreation.Enabled"] = serialize.bool(
        params["autoCreation.enabled"]
      );
    if (params["autoCreation.type"] !== undefined)
      data["AutoCreation.Type"] = params["autoCreation.type"];
    if (params["autoCreation.conversationServiceSid"] !== undefined)
      data["AutoCreation.ConversationServiceSid"] =
        params["autoCreation.conversationServiceSid"];
    if (params["autoCreation.webhookUrl"] !== undefined)
      data["AutoCreation.WebhookUrl"] = params["autoCreation.webhookUrl"];
    if (params["autoCreation.webhookMethod"] !== undefined)
      data["AutoCreation.WebhookMethod"] = params["autoCreation.webhookMethod"];
    if (params["autoCreation.webhookFilters"] !== undefined)
      data["AutoCreation.WebhookFilters"] = serialize.map(
        params["autoCreation.webhookFilters"],
        (e: string) => e
      );
    if (params["autoCreation.studioFlowSid"] !== undefined)
      data["AutoCreation.StudioFlowSid"] = params["autoCreation.studioFlowSid"];
    if (params["autoCreation.studioRetryCount"] !== undefined)
      data["AutoCreation.StudioRetryCount"] =
        params["autoCreation.studioRetryCount"];

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
        new AddressConfigurationInstance(
          operationVersion,
          payload,
          instance._solution.sid
        )
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

interface AddressConfigurationPayload extends TwilioResponsePayload {
  address_configurations: AddressConfigurationResource[];
}

interface AddressConfigurationResource {
  sid: string;
  account_sid: string;
  type: string;
  address: string;
  friendly_name: string;
  auto_creation: any;
  date_created: Date;
  date_updated: Date;
  url: string;
}

export class AddressConfigurationInstance {
  protected _solution: AddressConfigurationContextSolution;
  protected _context?: AddressConfigurationContext;

  constructor(
    protected _version: V1,
    payload: AddressConfigurationResource,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.type = payload.type;
    this.address = payload.address;
    this.friendlyName = payload.friendly_name;
    this.autoCreation = payload.auto_creation;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) the address belongs to
   */
  accountSid: string;
  /**
   * Type of Address, value can be `whatsapp` or `sms`.
   */
  type: string;
  /**
   * The unique address to be configured. The address can be a whatsapp address or phone number
   */
  address: string;
  /**
   * The human-readable name of this configuration, limited to 256 characters. Optional.
   */
  friendlyName: string;
  /**
   * Auto Creation configuration for the address.
   */
  autoCreation: any;
  /**
   * The date that this resource was created.
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated.
   */
  dateUpdated: Date;
  /**
   * An absolute API resource URL for this address configuration.
   */
  url: string;

  private get _proxy(): AddressConfigurationContext {
    this._context =
      this._context ||
      new AddressConfigurationContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a AddressConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a AddressConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AddressConfigurationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AddressConfigurationInstance) => any
  ): Promise<AddressConfigurationInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a AddressConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AddressConfigurationInstance
   */
  update(
    callback?: (error: Error | null, item?: AddressConfigurationInstance) => any
  ): Promise<AddressConfigurationInstance>;
  /**
   * Update a AddressConfigurationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AddressConfigurationInstance
   */
  update(
    params: AddressConfigurationContextUpdateOptions,
    callback?: (error: Error | null, item?: AddressConfigurationInstance) => any
  ): Promise<AddressConfigurationInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: AddressConfigurationInstance) => any
  ): Promise<AddressConfigurationInstance> {
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
      accountSid: this.accountSid,
      type: this.type,
      address: this.address,
      friendlyName: this.friendlyName,
      autoCreation: this.autoCreation,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AddressConfigurationSolution {}

export interface AddressConfigurationListInstance {
  _version: V1;
  _solution: AddressConfigurationSolution;
  _uri: string;

  (sid: string): AddressConfigurationContext;
  get(sid: string): AddressConfigurationContext;

  /**
   * Create a AddressConfigurationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AddressConfigurationInstance
   */
  create(
    params: AddressConfigurationListInstanceCreateOptions,
    callback?: (error: Error | null, item?: AddressConfigurationInstance) => any
  ): Promise<AddressConfigurationInstance>;

  /**
   * Streams AddressConfigurationInstance records from the API.
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
   * @param { AddressConfigurationListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: AddressConfigurationInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: AddressConfigurationListInstanceEachOptions,
    callback?: (
      item: AddressConfigurationInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of AddressConfigurationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: AddressConfigurationPage) => any
  ): Promise<AddressConfigurationPage>;
  /**
   * Lists AddressConfigurationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AddressConfigurationListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: AddressConfigurationInstance[]
    ) => any
  ): Promise<AddressConfigurationInstance[]>;
  list(
    params: AddressConfigurationListInstanceOptions,
    callback?: (
      error: Error | null,
      items: AddressConfigurationInstance[]
    ) => any
  ): Promise<AddressConfigurationInstance[]>;
  /**
   * Retrieve a single page of AddressConfigurationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AddressConfigurationListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: AddressConfigurationPage) => any
  ): Promise<AddressConfigurationPage>;
  page(
    params: AddressConfigurationListInstancePageOptions,
    callback?: (error: Error | null, items: AddressConfigurationPage) => any
  ): Promise<AddressConfigurationPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function AddressConfigurationListInstance(
  version: V1
): AddressConfigurationListInstance {
  const instance = ((sid) =>
    instance.get(sid)) as AddressConfigurationListInstance;

  instance.get = function get(sid): AddressConfigurationContext {
    return new AddressConfigurationContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Configuration/Addresses`;

  instance.create = function create(
    params: AddressConfigurationListInstanceCreateOptions,
    callback?: (error: Error | null, items: AddressConfigurationInstance) => any
  ): Promise<AddressConfigurationInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["type"] === null || params["type"] === undefined) {
      throw new Error("Required parameter \"params['type']\" missing.");
    }

    if (params["address"] === null || params["address"] === undefined) {
      throw new Error("Required parameter \"params['address']\" missing.");
    }

    let data: any = {};

    data["Type"] = params["type"];

    data["Address"] = params["address"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["autoCreation.enabled"] !== undefined)
      data["AutoCreation.Enabled"] = serialize.bool(
        params["autoCreation.enabled"]
      );
    if (params["autoCreation.type"] !== undefined)
      data["AutoCreation.Type"] = params["autoCreation.type"];
    if (params["autoCreation.conversationServiceSid"] !== undefined)
      data["AutoCreation.ConversationServiceSid"] =
        params["autoCreation.conversationServiceSid"];
    if (params["autoCreation.webhookUrl"] !== undefined)
      data["AutoCreation.WebhookUrl"] = params["autoCreation.webhookUrl"];
    if (params["autoCreation.webhookMethod"] !== undefined)
      data["AutoCreation.WebhookMethod"] = params["autoCreation.webhookMethod"];
    if (params["autoCreation.webhookFilters"] !== undefined)
      data["AutoCreation.WebhookFilters"] = serialize.map(
        params["autoCreation.webhookFilters"],
        (e: string) => e
      );
    if (params["autoCreation.studioFlowSid"] !== undefined)
      data["AutoCreation.StudioFlowSid"] = params["autoCreation.studioFlowSid"];
    if (params["autoCreation.studioRetryCount"] !== undefined)
      data["AutoCreation.StudioRetryCount"] =
        params["autoCreation.studioRetryCount"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new AddressConfigurationInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | AddressConfigurationListInstancePageOptions
      | ((error: Error | null, items: AddressConfigurationPage) => any),
    callback?: (error: Error | null, items: AddressConfigurationPage) => any
  ): Promise<AddressConfigurationPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["type"] !== undefined) data["Type"] = params["type"];
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
      (payload) =>
        new AddressConfigurationPage(
          operationVersion,
          payload,
          instance._solution
        )
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
    callback?: (error: Error | null, items: AddressConfigurationPage) => any
  ): Promise<AddressConfigurationPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new AddressConfigurationPage(
          instance._version,
          payload,
          instance._solution
        )
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

export class AddressConfigurationPage extends Page<
  V1,
  AddressConfigurationPayload,
  AddressConfigurationResource,
  AddressConfigurationInstance
> {
  /**
   * Initialize the AddressConfigurationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: AddressConfigurationSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AddressConfigurationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: AddressConfigurationResource
  ): AddressConfigurationInstance {
    return new AddressConfigurationInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}