/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Content
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to create a ApprovalCreateInstance
 */
export interface ApprovalCreateListInstanceCreateOptions {
  /**  */
  body?: object;
}

export interface ApprovalCreateSolution {
  sid: string;
}

export interface ApprovalCreateListInstance {
  _version: V1;
  _solution: ApprovalCreateSolution;
  _uri: string;

  /**
   * Create a ApprovalCreateInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ApprovalCreateInstance
   */
  create(
    callback?: (error: Error | null, item?: ApprovalCreateInstance) => any
  ): Promise<ApprovalCreateInstance>;
  /**
   * Create a ApprovalCreateInstance
   *
   * @param params - Body for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ApprovalCreateInstance
   */
  create(
    params: object,
    callback?: (error: Error | null, item?: ApprovalCreateInstance) => any
  ): Promise<ApprovalCreateInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ApprovalCreateListInstance(
  version: V1,
  sid: string
): ApprovalCreateListInstance {
  if (!isValidPathParam(sid)) {
    throw new Error("Parameter 'sid' is not valid.");
  }

  const instance = {} as ApprovalCreateListInstance;

  instance._version = version;
  instance._solution = { sid };
  instance._uri = `/Content/${sid}/ApprovalRequests/whatsapp`;

  instance.create = function create(
    params?:
      | object
      | ((error: Error | null, items: ApprovalCreateInstance) => any),
    callback?: (error: Error | null, items: ApprovalCreateInstance) => any
  ): Promise<ApprovalCreateInstance> {
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

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ApprovalCreateInstance(
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

interface ApprovalCreatePayload extends ApprovalCreateResource {}

interface ApprovalCreateResource {
  name: string;
  category: string;
  content_type: string;
  status: string;
  rejection_reason: string;
  allow_category_change: boolean;
}

export class ApprovalCreateInstance {
  constructor(
    protected _version: V1,
    payload: ApprovalCreateResource,
    sid: string
  ) {
    this.name = payload.name;
    this.category = payload.category;
    this.contentType = payload.content_type;
    this.status = payload.status;
    this.rejectionReason = payload.rejection_reason;
    this.allowCategoryChange = payload.allow_category_change;
  }

  name: string;
  category: string;
  contentType: string;
  status: string;
  rejectionReason: string;
  allowCategoryChange: boolean;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      name: this.name,
      category: this.category,
      contentType: this.contentType,
      status: this.status,
      rejectionReason: this.rejectionReason,
      allowCategoryChange: this.allowCategoryChange,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
