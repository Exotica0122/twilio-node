/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Assistants
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
import { AssistantsKnowledgeListInstance } from "./assistant/assistantsKnowledge";
import { AssistantsToolListInstance } from "./assistant/assistantsTool";
import { FeedbackListInstance } from "./assistant/feedback";
import { MessageListInstance } from "./assistant/message";

export class AssistantsV1ServiceCreateAssistantRequest {
  "customerAi"?: AssistantsV1ServiceCustomerAi;
  /**
   * The name of the assistant.
   */
  "name": string;
  /**
   * The owner/company of the assistant.
   */
  "owner"?: string;
  /**
   * The personality prompt to be used for assistant.
   */
  "personalityPrompt"?: string;
  "segmentCredential"?: AssistantsV1ServiceSegmentCredential;
}

export class AssistantsV1ServiceCustomerAi {
  /**
   * True if the perception engine is enabled.
   */
  "perceptionEngineEnabled": boolean;
  /**
   * True if the personalization engine is enabled.
   */
  "personalizationEngineEnabled": boolean;
}

export class AssistantsV1ServiceKnowledge {
  /**
   * The type of knowledge source.
   */
  "description"?: string;
  /**
   * The description of knowledge.
   */
  "id"?: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Knowledge resource.
   */
  "accountSid"?: string;
  /**
   * The details of the knowledge source based on the type.
   */
  "knowledgeSourceDetails"?: Record<string, object>;
  /**
   * The name of the knowledge source.
   */
  "name"?: string;
  /**
   * The status of processing the knowledge source (\'QUEUED\', \'PROCESSING\', \'COMPLETED\', \'FAILED\')
   */
  "status"?: string;
  /**
   * The type of knowledge source (\'Web\', \'Database\', \'Text\', \'File\')
   */
  "type"?: string;
  /**
   * The url of the knowledge resource.
   */
  "url"?: string;
  /**
   * The date and time in GMT when the Knowledge was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  "dateCreated"?: Date;
  /**
   * The date and time in GMT when the Knowledge was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  "dateUpdated"?: Date;
}

export class AssistantsV1ServiceSegmentCredential {
  /**
   * The profile API key.
   */
  "profileApiKey"?: string;
  /**
   * The space ID.
   */
  "spaceId"?: string;
  /**
   * The write key.
   */
  "writeKey"?: string;
}

export class AssistantsV1ServiceTool {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Tool resource.
   */
  "accountSid"?: string;
  /**
   * The description of the tool.
   */
  "description": string;
  /**
   * True if the tool is enabled.
   */
  "enabled": boolean;
  /**
   * The tool ID.
   */
  "id": string;
  /**
   * The metadata related to method, url, input_schema to used with the Tool.
   */
  "meta": Record<string, object>;
  /**
   * The name of the tool.
   */
  "name": string;
  /**
   * The authentication requirement for the tool.
   */
  "requiresAuth": boolean;
  /**
   * The type of the tool. (\'WEBHOOK\')
   */
  "type": string;
  /**
   * The url of the tool resource.
   */
  "url"?: string;
  /**
   * The date and time in GMT when the Tool was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  "dateCreated": Date;
  /**
   * The date and time in GMT when the Tool was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  "dateUpdated": Date;
}

export class AssistantsV1ServiceUpdateAssistantRequest {
  "customerAi"?: AssistantsV1ServiceCustomerAi;
  /**
   * The name of the assistant.
   */
  "name"?: string;
  /**
   * The owner/company of the assistant.
   */
  "owner"?: string;
  /**
   * The personality prompt to be used for assistant.
   */
  "personalityPrompt"?: string;
  "segmentCredential"?: AssistantsV1ServiceSegmentCredential;
}

/**
 * Options to pass to update a AssistantInstance
 */
export interface AssistantContextUpdateOptions {
  /**  */
  assistantsV1ServiceUpdateAssistantRequest?: AssistantsV1ServiceUpdateAssistantRequest;
}

/**
 * Options to pass to create a AssistantInstance
 */
export interface AssistantListInstanceCreateOptions {
  /**  */
  assistantsV1ServiceCreateAssistantRequest: AssistantsV1ServiceCreateAssistantRequest;
}
/**
 * Options to pass to each
 */
export interface AssistantListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: AssistantInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface AssistantListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface AssistantListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface AssistantContext {
  assistantsKnowledge: AssistantsKnowledgeListInstance;
  assistantsTools: AssistantsToolListInstance;
  feedbacks: FeedbackListInstance;
  messages: MessageListInstance;

  /**
   * Remove a AssistantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a AssistantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssistantInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AssistantInstance) => any
  ): Promise<AssistantInstance>;

  /**
   * Update a AssistantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssistantInstance
   */
  update(
    callback?: (error: Error | null, item?: AssistantInstance) => any
  ): Promise<AssistantInstance>;
  /**
   * Update a AssistantInstance
   *
   * @param params - Body for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssistantInstance
   */
  update(
    params: AssistantsV1ServiceUpdateAssistantRequest,
    callback?: (error: Error | null, item?: AssistantInstance) => any
  ): Promise<AssistantInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AssistantContextSolution {
  id: string;
}

export class AssistantContextImpl implements AssistantContext {
  protected _solution: AssistantContextSolution;
  protected _uri: string;

  protected _assistantsKnowledge?: AssistantsKnowledgeListInstance;
  protected _assistantsTools?: AssistantsToolListInstance;
  protected _feedbacks?: FeedbackListInstance;
  protected _messages?: MessageListInstance;

  constructor(protected _version: V1, id: string) {
    if (!isValidPathParam(id)) {
      throw new Error("Parameter 'id' is not valid.");
    }

    this._solution = { id };
    this._uri = `/Assistants/${id}`;
  }

  get assistantsKnowledge(): AssistantsKnowledgeListInstance {
    this._assistantsKnowledge =
      this._assistantsKnowledge ||
      AssistantsKnowledgeListInstance(this._version, this._solution.id);
    return this._assistantsKnowledge;
  }

  get assistantsTools(): AssistantsToolListInstance {
    this._assistantsTools =
      this._assistantsTools ||
      AssistantsToolListInstance(this._version, this._solution.id);
    return this._assistantsTools;
  }

  get feedbacks(): FeedbackListInstance {
    this._feedbacks =
      this._feedbacks || FeedbackListInstance(this._version, this._solution.id);
    return this._feedbacks;
  }

  get messages(): MessageListInstance {
    this._messages =
      this._messages || MessageListInstance(this._version, this._solution.id);
    return this._messages;
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
    callback?: (error: Error | null, item?: AssistantInstance) => any
  ): Promise<AssistantInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AssistantInstance(operationVersion, payload, instance._solution.id)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | AssistantsV1ServiceUpdateAssistantRequest
      | ((error: Error | null, item?: AssistantInstance) => any),
    callback?: (error: Error | null, item?: AssistantInstance) => any
  ): Promise<AssistantInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    data = params;

    const headers: any = {};
    headers["Content-Type"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "put",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AssistantInstance(operationVersion, payload, instance._solution.id)
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

interface AssistantPayload extends TwilioResponsePayload {
  assistants: AssistantResource[];
}

interface AssistantResource {
  account_sid: string;
  customer_ai: Record<string, object>;
  id: string;
  model: string;
  name: string;
  owner: string;
  url: string;
  personality_prompt: string;
  date_created: Date;
  date_updated: Date;
  knowledge: Array<AssistantsV1ServiceKnowledge>;
  tools: Array<AssistantsV1ServiceTool>;
}

export class AssistantInstance {
  protected _solution: AssistantContextSolution;
  protected _context?: AssistantContext;

  constructor(protected _version: V1, payload: AssistantResource, id?: string) {
    this.accountSid = payload.account_sid;
    this.customerAi = payload.customer_ai;
    this.id = payload.id;
    this.model = payload.model;
    this.name = payload.name;
    this.owner = payload.owner;
    this.url = payload.url;
    this.personalityPrompt = payload.personality_prompt;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.knowledge = payload.knowledge;
    this.tools = payload.tools;

    this._solution = { id: id || this.id };
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Assistant resource.
   */
  accountSid: string;
  /**
   * The Personalization and Perception Engine settings.
   */
  customerAi: Record<string, object>;
  /**
   * The Assistant ID.
   */
  id: string;
  /**
   * The default model used by the assistant.
   */
  model: string;
  /**
   * The name of the assistant.
   */
  name: string;
  /**
   * The owner/company of the assistant.
   */
  owner: string;
  /**
   * The url of the assistant resource.
   */
  url: string;
  /**
   * The personality prompt to be used for assistant.
   */
  personalityPrompt: string;
  /**
   * The date and time in GMT when the Assistant was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the Assistant was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The list of knowledge sources associated with the assistant.
   */
  knowledge: Array<AssistantsV1ServiceKnowledge>;
  /**
   * The list of tools associated with the assistant.
   */
  tools: Array<AssistantsV1ServiceTool>;

  private get _proxy(): AssistantContext {
    this._context =
      this._context ||
      new AssistantContextImpl(this._version, this._solution.id);
    return this._context;
  }

  /**
   * Remove a AssistantInstance
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
   * Fetch a AssistantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssistantInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AssistantInstance) => any
  ): Promise<AssistantInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a AssistantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssistantInstance
   */
  update(
    callback?: (error: Error | null, item?: AssistantInstance) => any
  ): Promise<AssistantInstance>;
  /**
   * Update a AssistantInstance
   *
   * @param params - Body for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssistantInstance
   */
  update(
    params: AssistantsV1ServiceUpdateAssistantRequest,
    callback?: (error: Error | null, item?: AssistantInstance) => any
  ): Promise<AssistantInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: AssistantInstance) => any
  ): Promise<AssistantInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the assistantsKnowledge.
   */
  assistantsKnowledge(): AssistantsKnowledgeListInstance {
    return this._proxy.assistantsKnowledge;
  }

  /**
   * Access the assistantsTools.
   */
  assistantsTools(): AssistantsToolListInstance {
    return this._proxy.assistantsTools;
  }

  /**
   * Access the feedbacks.
   */
  feedbacks(): FeedbackListInstance {
    return this._proxy.feedbacks;
  }

  /**
   * Access the messages.
   */
  messages(): MessageListInstance {
    return this._proxy.messages;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      customerAi: this.customerAi,
      id: this.id,
      model: this.model,
      name: this.name,
      owner: this.owner,
      url: this.url,
      personalityPrompt: this.personalityPrompt,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      knowledge: this.knowledge,
      tools: this.tools,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AssistantSolution {}

export interface AssistantListInstance {
  _version: V1;
  _solution: AssistantSolution;
  _uri: string;

  (id: string): AssistantContext;
  get(id: string): AssistantContext;

  /**
   * Create a AssistantInstance
   *
   * @param params - Body for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssistantInstance
   */
  create(
    params: AssistantsV1ServiceCreateAssistantRequest,
    callback?: (error: Error | null, item?: AssistantInstance) => any
  ): Promise<AssistantInstance>;

  /**
   * Streams AssistantInstance records from the API.
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
   * @param { AssistantListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: AssistantInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: AssistantListInstanceEachOptions,
    callback?: (item: AssistantInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of AssistantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: AssistantPage) => any
  ): Promise<AssistantPage>;
  /**
   * Lists AssistantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AssistantListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: AssistantInstance[]) => any
  ): Promise<AssistantInstance[]>;
  list(
    params: AssistantListInstanceOptions,
    callback?: (error: Error | null, items: AssistantInstance[]) => any
  ): Promise<AssistantInstance[]>;
  /**
   * Retrieve a single page of AssistantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AssistantListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: AssistantPage) => any
  ): Promise<AssistantPage>;
  page(
    params: AssistantListInstancePageOptions,
    callback?: (error: Error | null, items: AssistantPage) => any
  ): Promise<AssistantPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function AssistantListInstance(version: V1): AssistantListInstance {
  const instance = ((id) => instance.get(id)) as AssistantListInstance;

  instance.get = function get(id): AssistantContext {
    return new AssistantContextImpl(version, id);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Assistants`;

  instance.create = function create(
    params: AssistantsV1ServiceCreateAssistantRequest,
    callback?: (error: Error | null, items: AssistantInstance) => any
  ): Promise<AssistantInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    let data: any = {};

    data = params;

    const headers: any = {};
    headers["Content-Type"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new AssistantInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | AssistantListInstancePageOptions
      | ((error: Error | null, items: AssistantPage) => any),
    callback?: (error: Error | null, items: AssistantPage) => any
  ): Promise<AssistantPage> {
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
      (payload) =>
        new AssistantPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: AssistantPage) => any
  ): Promise<AssistantPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new AssistantPage(instance._version, payload, instance._solution)
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

export class AssistantPage extends Page<
  V1,
  AssistantPayload,
  AssistantResource,
  AssistantInstance
> {
  /**
   * Initialize the AssistantPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: AssistantSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AssistantInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AssistantResource): AssistantInstance {
    return new AssistantInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
