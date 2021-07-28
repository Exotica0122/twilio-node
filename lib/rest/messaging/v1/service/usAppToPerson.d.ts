/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the UsAppToPersonList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 * @param messagingServiceSid - The SID of the Messaging Service the resource is associated with
 */
declare function UsAppToPersonList(version: V1, messagingServiceSid: string): UsAppToPersonListInstance;

interface UsAppToPersonListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): UsAppToPersonContext;
  /**
   * create a UsAppToPersonInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: UsAppToPersonListInstanceCreateOptions, callback?: (error: Error | null, item: UsAppToPersonInstance) => any): Promise<UsAppToPersonInstance>;
  /**
   * Streams UsAppToPersonInstance records from the API.
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
   * @param callback - Function to process each record
   */
  each(callback?: (item: UsAppToPersonInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams UsAppToPersonInstance records from the API.
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
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: UsAppToPersonListInstanceEachOptions, callback?: (item: UsAppToPersonInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a us_app_to_person
   *
   * @param sid - The SID that identifies the US A2P Compliance resource to fetch
   */
  get(sid: string): UsAppToPersonContext;
  /**
   * Retrieve a single target page of UsAppToPersonInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: UsAppToPersonPage) => any): Promise<UsAppToPersonPage>;
  /**
   * Retrieve a single target page of UsAppToPersonInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: UsAppToPersonPage) => any): Promise<UsAppToPersonPage>;
  /**
   * Lists UsAppToPersonInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: UsAppToPersonInstance[]) => any): Promise<UsAppToPersonInstance[]>;
  /**
   * Lists UsAppToPersonInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: UsAppToPersonListInstanceOptions, callback?: (error: Error | null, items: UsAppToPersonInstance[]) => any): Promise<UsAppToPersonInstance[]>;
  /**
   * Retrieve a single page of UsAppToPersonInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: UsAppToPersonPage) => any): Promise<UsAppToPersonPage>;
  /**
   * Retrieve a single page of UsAppToPersonInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: UsAppToPersonListInstancePageOptions, callback?: (error: Error | null, items: UsAppToPersonPage) => any): Promise<UsAppToPersonPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property brandRegistrationSid - A2P Brand Registration SID
 * @property description - A short description of what this SMS campaign does
 * @property hasEmbeddedLinks - Indicates that this SMS campaign will send messages that contain links
 * @property hasEmbeddedPhone - Indicates that this SMS campaign will send messages that contain phone numbers
 * @property messageSamples - Message samples
 * @property usAppToPersonUsecase - A2P Campaign Use Case.
 */
interface UsAppToPersonListInstanceCreateOptions {
  brandRegistrationSid: string;
  description: string;
  hasEmbeddedLinks: boolean;
  hasEmbeddedPhone: boolean;
  messageSamples: string | string[];
  usAppToPersonUsecase: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface UsAppToPersonListInstanceEachOptions {
  callback?: (item: UsAppToPersonInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface UsAppToPersonListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface UsAppToPersonListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface UsAppToPersonPayload extends UsAppToPersonResource, Page.TwilioResponsePayload {
}

interface UsAppToPersonResource {
  account_sid: string;
  brand_registration_sid: string;
  campaign_id: string;
  campaign_status: string;
  date_created: Date;
  date_updated: Date;
  description: string;
  has_embedded_links: boolean;
  has_embedded_phone: boolean;
  is_externally_registered: boolean;
  message_samples: string[];
  messaging_service_sid: string;
  rate_limits: object;
  sid: string;
  url: string;
  us_app_to_person_usecase: string;
}

interface UsAppToPersonSolution {
  messagingServiceSid?: string;
}


declare class UsAppToPersonContext {
  /**
   * Initialize the UsAppToPersonContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param messagingServiceSid - The SID of the Messaging Service to fetch the resource from
   * @param sid - The SID that identifies the US A2P Compliance resource to fetch
   */
  constructor(version: V1, messagingServiceSid: string, sid: string);

  /**
   * fetch a UsAppToPersonInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: UsAppToPersonInstance) => any): Promise<UsAppToPersonInstance>;
  /**
   * remove a UsAppToPersonInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: UsAppToPersonInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class UsAppToPersonInstance extends SerializableClass {
  /**
   * Initialize the UsAppToPersonContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param messagingServiceSid - The SID of the Messaging Service the resource is associated with
   * @param sid - The SID that identifies the US A2P Compliance resource to fetch
   */
  constructor(version: V1, payload: UsAppToPersonPayload, messagingServiceSid: string, sid: string);

  private _proxy: UsAppToPersonContext;
  accountSid: string;
  brandRegistrationSid: string;
  campaignId: string;
  campaignStatus: string;
  dateCreated: Date;
  dateUpdated: Date;
  description: string;
  /**
   * fetch a UsAppToPersonInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: UsAppToPersonInstance) => any): Promise<UsAppToPersonInstance>;
  hasEmbeddedLinks: boolean;
  hasEmbeddedPhone: boolean;
  isExternallyRegistered: boolean;
  messageSamples: string[];
  messagingServiceSid: string;
  rateLimits: any;
  /**
   * remove a UsAppToPersonInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: UsAppToPersonInstance) => any): Promise<boolean>;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
  usAppToPersonUsecase: string;
}


declare class UsAppToPersonPage extends Page<V1, UsAppToPersonPayload, UsAppToPersonResource, UsAppToPersonInstance> {
  /**
   * Initialize the UsAppToPersonPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: UsAppToPersonSolution);

  /**
   * Build an instance of UsAppToPersonInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: UsAppToPersonPayload): UsAppToPersonInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { UsAppToPersonContext, UsAppToPersonInstance, UsAppToPersonList, UsAppToPersonListInstance, UsAppToPersonListInstanceCreateOptions, UsAppToPersonListInstanceEachOptions, UsAppToPersonListInstanceOptions, UsAppToPersonListInstancePageOptions, UsAppToPersonPage, UsAppToPersonPayload, UsAppToPersonResource, UsAppToPersonSolution }