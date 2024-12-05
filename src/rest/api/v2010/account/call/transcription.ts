/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V2010 from "../../../V2010";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

export type TranscriptionStatus = "in-progress" | "stopped";

export type TranscriptionTrack =
  | "inbound_track"
  | "outbound_track"
  | "both_tracks";

export type TranscriptionUpdateStatus = "stopped";

/**
 * Options to pass to update a TranscriptionInstance
 */
export interface TranscriptionContextUpdateOptions {
  /**  */
  status: TranscriptionUpdateStatus;
}

/**
 * Options to pass to create a TranscriptionInstance
 */
export interface TranscriptionListInstanceCreateOptions {
  /** The user-specified name of this Transcription, if one was given when the Transcription was created. This may be used to stop the Transcription. */
  name?: string;
  /**  */
  track?: TranscriptionTrack;
  /** Absolute URL of the status callback. */
  statusCallbackUrl?: string;
  /** The http method for the status_callback (one of GET, POST). */
  statusCallbackMethod?: string;
  /** Friendly name given to the Inbound Track */
  inboundTrackLabel?: string;
  /** Friendly name given to the Outbound Track */
  outboundTrackLabel?: string;
  /** Indicates if partial results are going to be sent to the customer */
  partialResults?: boolean;
  /** Language code used by the transcription engine, specified in [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) format */
  languageCode?: string;
  /** Definition of the transcription engine to be used, among those supported by Twilio */
  transcriptionEngine?: string;
  /** indicates if the server will attempt to filter out profanities, replacing all but the initial character in each filtered word with asterisks */
  profanityFilter?: boolean;
  /** Recognition model used by the transcription engine, among those supported by the provider */
  speechModel?: string;
  /** A Phrase contains words and phrase \\\"hints\\\" so that the speech recognition engine is more likely to recognize them. */
  hints?: string;
  /** The provider will add punctuation to recognition result */
  enableAutomaticPunctuation?: boolean;
  /** The SID or the unique name of the [IntelligentService](https://www.twilio.com/docs/voice/intelligence/api/service-resource) to process the transcription. */
  intelligenceService?: string;
}

export interface TranscriptionContext {
  /**
   * Update a TranscriptionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TranscriptionInstance
   */
  update(
    params: TranscriptionContextUpdateOptions,
    callback?: (error: Error | null, item?: TranscriptionInstance) => any
  ): Promise<TranscriptionInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TranscriptionContextSolution {
  accountSid: string;
  callSid: string;
  sid: string;
}

export class TranscriptionContextImpl implements TranscriptionContext {
  protected _solution: TranscriptionContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V2010,
    accountSid: string,
    callSid: string,
    sid: string
  ) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(callSid)) {
      throw new Error("Parameter 'callSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, callSid, sid };
    this._uri = `/Accounts/${accountSid}/Calls/${callSid}/Transcriptions/${sid}.json`;
  }

  update(
    params: TranscriptionContextUpdateOptions,
    callback?: (error: Error | null, item?: TranscriptionInstance) => any
  ): Promise<TranscriptionInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["status"] === null || params["status"] === undefined) {
      throw new Error("Required parameter \"params['status']\" missing.");
    }

    let data: any = {};

    data["Status"] = params["status"];

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
        new TranscriptionInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
          instance._solution.callSid,
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

interface TranscriptionPayload extends TranscriptionResource {}

interface TranscriptionResource {
  sid: string;
  account_sid: string;
  call_sid: string;
  name: string;
  status: TranscriptionStatus;
  date_updated: Date;
  uri: string;
}

export class TranscriptionInstance {
  protected _solution: TranscriptionContextSolution;
  protected _context?: TranscriptionContext;

  constructor(
    protected _version: V2010,
    payload: TranscriptionResource,
    accountSid: string,
    callSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.callSid = payload.call_sid;
    this.name = payload.name;
    this.status = payload.status;
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.uri = payload.uri;

    this._solution = { accountSid, callSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Transcription resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Transcription resource.
   */
  accountSid: string;
  /**
   * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Transcription resource is associated with.
   */
  callSid: string;
  /**
   * The user-specified name of this Transcription, if one was given when the Transcription was created. This may be used to stop the Transcription.
   */
  name: string;
  status: TranscriptionStatus;
  /**
   * The date and time in GMT that this resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  uri: string;

  private get _proxy(): TranscriptionContext {
    this._context =
      this._context ||
      new TranscriptionContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.callSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Update a TranscriptionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TranscriptionInstance
   */
  update(
    params: TranscriptionContextUpdateOptions,
    callback?: (error: Error | null, item?: TranscriptionInstance) => any
  ): Promise<TranscriptionInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: TranscriptionInstance) => any
  ): Promise<TranscriptionInstance> {
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
      callSid: this.callSid,
      name: this.name,
      status: this.status,
      dateUpdated: this.dateUpdated,
      uri: this.uri,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface TranscriptionSolution {
  accountSid: string;
  callSid: string;
}

export interface TranscriptionListInstance {
  _version: V2010;
  _solution: TranscriptionSolution;
  _uri: string;

  (sid: string): TranscriptionContext;
  get(sid: string): TranscriptionContext;

  /**
   * Create a TranscriptionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TranscriptionInstance
   */
  create(
    callback?: (error: Error | null, item?: TranscriptionInstance) => any
  ): Promise<TranscriptionInstance>;
  /**
   * Create a TranscriptionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TranscriptionInstance
   */
  create(
    params: TranscriptionListInstanceCreateOptions,
    callback?: (error: Error | null, item?: TranscriptionInstance) => any
  ): Promise<TranscriptionInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function TranscriptionListInstance(
  version: V2010,
  accountSid: string,
  callSid: string
): TranscriptionListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  if (!isValidPathParam(callSid)) {
    throw new Error("Parameter 'callSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as TranscriptionListInstance;

  instance.get = function get(sid): TranscriptionContext {
    return new TranscriptionContextImpl(version, accountSid, callSid, sid);
  };

  instance._version = version;
  instance._solution = { accountSid, callSid };
  instance._uri = `/Accounts/${accountSid}/Calls/${callSid}/Transcriptions.json`;

  instance.create = function create(
    params?:
      | TranscriptionListInstanceCreateOptions
      | ((error: Error | null, items: TranscriptionInstance) => any),
    callback?: (error: Error | null, items: TranscriptionInstance) => any
  ): Promise<TranscriptionInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["name"] !== undefined) data["Name"] = params["name"];
    if (params["track"] !== undefined) data["Track"] = params["track"];
    if (params["statusCallbackUrl"] !== undefined)
      data["StatusCallbackUrl"] = params["statusCallbackUrl"];
    if (params["statusCallbackMethod"] !== undefined)
      data["StatusCallbackMethod"] = params["statusCallbackMethod"];
    if (params["inboundTrackLabel"] !== undefined)
      data["InboundTrackLabel"] = params["inboundTrackLabel"];
    if (params["outboundTrackLabel"] !== undefined)
      data["OutboundTrackLabel"] = params["outboundTrackLabel"];
    if (params["partialResults"] !== undefined)
      data["PartialResults"] = serialize.bool(params["partialResults"]);
    if (params["languageCode"] !== undefined)
      data["LanguageCode"] = params["languageCode"];
    if (params["transcriptionEngine"] !== undefined)
      data["TranscriptionEngine"] = params["transcriptionEngine"];
    if (params["profanityFilter"] !== undefined)
      data["ProfanityFilter"] = serialize.bool(params["profanityFilter"]);
    if (params["speechModel"] !== undefined)
      data["SpeechModel"] = params["speechModel"];
    if (params["hints"] !== undefined) data["Hints"] = params["hints"];
    if (params["enableAutomaticPunctuation"] !== undefined)
      data["EnableAutomaticPunctuation"] = serialize.bool(
        params["enableAutomaticPunctuation"]
      );
    if (params["intelligenceService"] !== undefined)
      data["IntelligenceService"] = params["intelligenceService"];

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
      (payload) =>
        new TranscriptionInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
          instance._solution.callSid
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