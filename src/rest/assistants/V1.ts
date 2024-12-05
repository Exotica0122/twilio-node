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

import AssistantsBase from "../AssistantsBase";
import Version from "../../base/Version";
import { AssistantListInstance } from "./v1/assistant";
import { KnowledgeListInstance } from "./v1/knowledge";
import { PolicyListInstance } from "./v1/policy";
import { SessionListInstance } from "./v1/session";
import { ToolListInstance } from "./v1/tool";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of Assistants
   *
   * @param domain - The Twilio (Twilio.Assistants) domain
   */
  constructor(domain: AssistantsBase) {
    super(domain, "v1");
  }

  /** assistants - { Twilio.Assistants.V1.AssistantListInstance } resource */
  protected _assistants?: AssistantListInstance;
  /** knowledge - { Twilio.Assistants.V1.KnowledgeListInstance } resource */
  protected _knowledge?: KnowledgeListInstance;
  /** policies - { Twilio.Assistants.V1.PolicyListInstance } resource */
  protected _policies?: PolicyListInstance;
  /** sessions - { Twilio.Assistants.V1.SessionListInstance } resource */
  protected _sessions?: SessionListInstance;
  /** tools - { Twilio.Assistants.V1.ToolListInstance } resource */
  protected _tools?: ToolListInstance;

  /** Getter for assistants resource */
  get assistants(): AssistantListInstance {
    this._assistants = this._assistants || AssistantListInstance(this);
    return this._assistants;
  }

  /** Getter for knowledge resource */
  get knowledge(): KnowledgeListInstance {
    this._knowledge = this._knowledge || KnowledgeListInstance(this);
    return this._knowledge;
  }

  /** Getter for policies resource */
  get policies(): PolicyListInstance {
    this._policies = this._policies || PolicyListInstance(this);
    return this._policies;
  }

  /** Getter for sessions resource */
  get sessions(): SessionListInstance {
    this._sessions = this._sessions || SessionListInstance(this);
    return this._sessions;
  }

  /** Getter for tools resource */
  get tools(): ToolListInstance {
    this._tools = this._tools || ToolListInstance(this);
    return this._tools;
  }
}
