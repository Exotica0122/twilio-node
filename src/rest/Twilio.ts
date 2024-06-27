/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Client, ClientOpts, RequestOpts } from "../base/BaseTwilio";
import Accounts from "./Accounts";
import Api from "./Api";
import Bulkexports from "./Bulkexports";
import Chat from "./Chat";
import Content from "./Content";
import Conversations from "./Conversations";
import Events from "./Events";
import FlexApi from "./FlexApi";
import FrontlineApi from "./FrontlineApi";
import PreviewIam from "./PreviewIam";
import Insights from "./Insights";
import Intelligence from "./Intelligence";
import IpMessaging from "./IpMessaging";
import Lookups from "./Lookups";
import Marketplace from "./Marketplace";
import Messaging from "./Messaging";
import Microvisor from "./Microvisor";
import Monitor from "./Monitor";
import Notify from "./Notify";
import Numbers from "./Numbers";
import Oauth from "./Oauth";
import Preview from "./Preview";
import Pricing from "./Pricing";
import Proxy from "./Proxy";
import Routes from "./Routes";
import Serverless from "./Serverless";
import Studio from "./Studio";
import Supersim from "./Supersim";
import Sync from "./Sync";
import Taskrouter from "./Taskrouter";
import Trunking from "./Trunking";
import Trusthub from "./Trusthub";
import Verify from "./Verify";
import Video from "./Video";
import Voice from "./Voice";
import Wireless from "./Wireless";
import { AddressListInstance } from "./api/v2010/account/address";
import { ApplicationListInstance } from "./api/v2010/account/application";
import { AuthorizedConnectAppListInstance } from "./api/v2010/account/authorizedConnectApp";
import { AvailablePhoneNumberCountryListInstance } from "./api/v2010/account/availablePhoneNumberCountry";
import { BalanceListInstance } from "./api/v2010/account/balance";
import { CallListInstance } from "./api/v2010/account/call";
import { ConferenceListInstance } from "./api/v2010/account/conference";
import { ConnectAppListInstance } from "./api/v2010/account/connectApp";
import { IncomingPhoneNumberListInstance } from "./api/v2010/account/incomingPhoneNumber";
import { KeyListInstance } from "./api/v2010/account/key";
import { MessageListInstance } from "./api/v2010/account/message";
import { NewKeyListInstance } from "./api/v2010/account/newKey";
import { NewSigningKeyListInstance } from "./api/v2010/account/newSigningKey";
import { NotificationListInstance } from "./api/v2010/account/notification";
import { OutgoingCallerIdListInstance } from "./api/v2010/account/outgoingCallerId";
import { QueueListInstance } from "./api/v2010/account/queue";
import { RecordingListInstance } from "./api/v2010/account/recording";
import { ShortCodeListInstance } from "./api/v2010/account/shortCode";
import { SigningKeyListInstance } from "./api/v2010/account/signingKey";
import { SipListInstance } from "./api/v2010/account/sip";
import { TokenListInstance } from "./api/v2010/account/token";
import { TranscriptionListInstance } from "./api/v2010/account/transcription";
import { UsageListInstance } from "./api/v2010/account/usage";
import { ValidationRequestListInstance } from "./api/v2010/account/validationRequest";

/* jshint ignore:start */
/**
 * Twilio Client to interact with the Rest API
 */
/* jshint ignore:end */

class Twilio extends Client {
  /** (Twilio.Accounts) - accounts domain */
  _accounts?: Accounts;
  /** (Twilio.Api) - api domain */
  _api?: Api;
  /** (Twilio.Bulkexports) - bulkexports domain */
  _bulkexports?: Bulkexports;
  /** (Twilio.Chat) - chat domain */
  _chat?: Chat;
  /** (Twilio.Content) - content domain */
  _content?: Content;
  /** (Twilio.Conversations) - conversations domain */
  _conversations?: Conversations;
  /** (Twilio.Events) - events domain */
  _events?: Events;
  /** (Twilio.FlexApi) - flexApi domain */
  _flexApi?: FlexApi;
  /** (Twilio.FrontlineApi) - frontlineApi domain */
  _frontlineApi?: FrontlineApi;
  /** (Twilio.PreviewIam) - previewIam domain */
  _previewIam?: PreviewIam;
  /** (Twilio.Insights) - insights domain */
  _insights?: Insights;
  /** (Twilio.Intelligence) - intelligence domain */
  _intelligence?: Intelligence;
  /** (Twilio.IpMessaging) - ipMessaging domain */
  _ipMessaging?: IpMessaging;
  /** (Twilio.Lookups) - lookups domain */
  _lookups?: Lookups;
  /** (Twilio.Marketplace) - marketplace domain */
  _marketplace?: Marketplace;
  /** (Twilio.Messaging) - messaging domain */
  _messaging?: Messaging;
  /** (Twilio.Microvisor) - microvisor domain */
  _microvisor?: Microvisor;
  /** (Twilio.Monitor) - monitor domain */
  _monitor?: Monitor;
  /** (Twilio.Notify) - notify domain */
  _notify?: Notify;
  /** (Twilio.Numbers) - numbers domain */
  _numbers?: Numbers;
  /** (Twilio.Oauth) - oauth domain */
  _oauth?: Oauth;
  /** (Twilio.Preview) - preview domain */
  _preview?: Preview;
  /** (Twilio.Pricing) - pricing domain */
  _pricing?: Pricing;
  /** (Twilio.Proxy) - proxy domain */
  _proxy?: Proxy;
  /** (Twilio.Routes) - routes domain */
  _routes?: Routes;
  /** (Twilio.Serverless) - serverless domain */
  _serverless?: Serverless;
  /** (Twilio.Studio) - studio domain */
  _studio?: Studio;
  /** (Twilio.Supersim) - supersim domain */
  _supersim?: Supersim;
  /** (Twilio.Sync) - sync domain */
  _sync?: Sync;
  /** (Twilio.Taskrouter) - taskrouter domain */
  _taskrouter?: Taskrouter;
  /** (Twilio.Trunking) - trunking domain */
  _trunking?: Trunking;
  /** (Twilio.Trusthub) - trusthub domain */
  _trusthub?: Trusthub;
  /** (Twilio.Verify) - verify domain */
  _verify?: Verify;
  /** (Twilio.Video) - video domain */
  _video?: Video;
  /** (Twilio.Voice) - voice domain */
  _voice?: Voice;
  /** (Twilio.Wireless) - wireless domain */
  _wireless?: Wireless;

  /* jshint ignore:start */
  /**
   * Creates a new instance of Twilio Client
   *
   * @param username -
   *          The username used for authentication. This is normally account sid, but if using key/secret auth will be the api key sid.
   * @param password -
   *          The password used for authentication. This is normally auth token, but if using key/secret auth will be the secret.
   * @param opts - The options argument
   *
   * @returns A new instance of Twilio client
   */
  /* jshint ignore:end */
  constructor(username?: string, password?: string, opts?: ClientOpts) {
    super(username, password, opts);

    if (this.opts?.lazyLoading === false) {
      this.accounts;
      this.api;
      this.bulkexports;
      this.chat;
      this.content;
      this.conversations;
      this.events;
      this.flexApi;
      this.frontlineApi;
      this.previewIam;
      this.insights;
      this.intelligence;
      this.ipMessaging;
      this.lookups;
      this.marketplace;
      this.messaging;
      this.microvisor;
      this.monitor;
      this.notify;
      this.numbers;
      this.oauth;
      this.preview;
      this.pricing;
      this.proxy;
      this.routes;
      this.serverless;
      this.studio;
      this.supersim;
      this.sync;
      this.taskrouter;
      this.trunking;
      this.trusthub;
      this.verify;
      this.video;
      this.voice;
      this.wireless;
    }
  }

  //Domains
  /** Getter for (Twilio.Accounts) domain */
  get accounts(): Accounts {
    return (
      this._accounts ?? (this._accounts = new (require("./Accounts"))(this))
    );
  }
  /** Getter for (Twilio.Api) domain */
  get api(): Api {
    return this._api ?? (this._api = new (require("./Api"))(this));
  }
  /** Getter for (Twilio.Bulkexports) domain */
  get bulkexports(): Bulkexports {
    return (
      this._bulkexports ??
      (this._bulkexports = new (require("./Bulkexports"))(this))
    );
  }
  /** Getter for (Twilio.Chat) domain */
  get chat(): Chat {
    return this._chat ?? (this._chat = new (require("./Chat"))(this));
  }
  /** Getter for (Twilio.Content) domain */
  get content(): Content {
    return this._content ?? (this._content = new (require("./Content"))(this));
  }
  /** Getter for (Twilio.Conversations) domain */
  get conversations(): Conversations {
    return (
      this._conversations ??
      (this._conversations = new (require("./Conversations"))(this))
    );
  }
  /** Getter for (Twilio.Events) domain */
  get events(): Events {
    return this._events ?? (this._events = new (require("./Events"))(this));
  }
  /** Getter for (Twilio.FlexApi) domain */
  get flexApi(): FlexApi {
    return this._flexApi ?? (this._flexApi = new (require("./FlexApi"))(this));
  }
  /** Getter for (Twilio.FrontlineApi) domain */
  get frontlineApi(): FrontlineApi {
    return (
      this._frontlineApi ??
      (this._frontlineApi = new (require("./FrontlineApi"))(this))
    );
  }
  /** Getter for (Twilio.PreviewIam) domain */
  get previewIam(): PreviewIam {
    return (
      this._previewIam ??
      (this._previewIam = new (require("./PreviewIam"))(this))
    );
  }
  /** Getter for (Twilio.Insights) domain */
  get insights(): Insights {
    return (
      this._insights ?? (this._insights = new (require("./Insights"))(this))
    );
  }
  /** Getter for (Twilio.Intelligence) domain */
  get intelligence(): Intelligence {
    return (
      this._intelligence ??
      (this._intelligence = new (require("./Intelligence"))(this))
    );
  }
  /** Getter for (Twilio.IpMessaging) domain */
  get ipMessaging(): IpMessaging {
    return (
      this._ipMessaging ??
      (this._ipMessaging = new (require("./IpMessaging"))(this))
    );
  }
  /** Getter for (Twilio.Lookups) domain */
  get lookups(): Lookups {
    return this._lookups ?? (this._lookups = new (require("./Lookups"))(this));
  }
  /** Getter for (Twilio.Marketplace) domain */
  get marketplace(): Marketplace {
    return (
      this._marketplace ??
      (this._marketplace = new (require("./Marketplace"))(this))
    );
  }
  /** Getter for (Twilio.Messaging) domain */
  get messaging(): Messaging {
    return (
      this._messaging ?? (this._messaging = new (require("./Messaging"))(this))
    );
  }
  /** Getter for (Twilio.Microvisor) domain */
  get microvisor(): Microvisor {
    return (
      this._microvisor ??
      (this._microvisor = new (require("./Microvisor"))(this))
    );
  }
  /** Getter for (Twilio.Monitor) domain */
  get monitor(): Monitor {
    return this._monitor ?? (this._monitor = new (require("./Monitor"))(this));
  }
  /** Getter for (Twilio.Notify) domain */
  get notify(): Notify {
    return this._notify ?? (this._notify = new (require("./Notify"))(this));
  }
  /** Getter for (Twilio.Numbers) domain */
  get numbers(): Numbers {
    return this._numbers ?? (this._numbers = new (require("./Numbers"))(this));
  }
  /** Getter for (Twilio.Oauth) domain */
  get oauth(): Oauth {
    return this._oauth ?? (this._oauth = new (require("./Oauth"))(this));
  }
  /** Getter for (Twilio.Preview) domain */
  get preview(): Preview {
    return this._preview ?? (this._preview = new (require("./Preview"))(this));
  }
  /** Getter for (Twilio.Pricing) domain */
  get pricing(): Pricing {
    return this._pricing ?? (this._pricing = new (require("./Pricing"))(this));
  }
  /** Getter for (Twilio.Proxy) domain */
  get proxy(): Proxy {
    return this._proxy ?? (this._proxy = new (require("./Proxy"))(this));
  }
  /** Getter for (Twilio.Routes) domain */
  get routes(): Routes {
    return this._routes ?? (this._routes = new (require("./Routes"))(this));
  }
  /** Getter for (Twilio.Serverless) domain */
  get serverless(): Serverless {
    return (
      this._serverless ??
      (this._serverless = new (require("./Serverless"))(this))
    );
  }
  /** Getter for (Twilio.Studio) domain */
  get studio(): Studio {
    return this._studio ?? (this._studio = new (require("./Studio"))(this));
  }
  /** Getter for (Twilio.Supersim) domain */
  get supersim(): Supersim {
    return (
      this._supersim ?? (this._supersim = new (require("./Supersim"))(this))
    );
  }
  /** Getter for (Twilio.Sync) domain */
  get sync(): Sync {
    return this._sync ?? (this._sync = new (require("./Sync"))(this));
  }
  /** Getter for (Twilio.Taskrouter) domain */
  get taskrouter(): Taskrouter {
    return (
      this._taskrouter ??
      (this._taskrouter = new (require("./Taskrouter"))(this))
    );
  }
  /** Getter for (Twilio.Trunking) domain */
  get trunking(): Trunking {
    return (
      this._trunking ?? (this._trunking = new (require("./Trunking"))(this))
    );
  }
  /** Getter for (Twilio.Trusthub) domain */
  get trusthub(): Trusthub {
    return (
      this._trusthub ?? (this._trusthub = new (require("./Trusthub"))(this))
    );
  }
  /** Getter for (Twilio.Verify) domain */
  get verify(): Verify {
    return this._verify ?? (this._verify = new (require("./Verify"))(this));
  }
  /** Getter for (Twilio.Video) domain */
  get video(): Video {
    return this._video ?? (this._video = new (require("./Video"))(this));
  }
  /** Getter for (Twilio.Voice) domain */
  get voice(): Voice {
    return this._voice ?? (this._voice = new (require("./Voice"))(this));
  }
  /** Getter for (Twilio.Wireless) domain */
  get wireless(): Wireless {
    return (
      this._wireless ?? (this._wireless = new (require("./Wireless"))(this))
    );
  }

  /** Getter for (Twilio.Api.V2010.AccountContext.AddressListInstance) addresses resource */
  get addresses(): AddressListInstance {
    return this.api.v2010.account.addresses;
  }
  /** Getter for (Twilio.Api.V2010.AccountContext.ApplicationListInstance) applications resource */
  get applications(): ApplicationListInstance {
    return this.api.v2010.account.applications;
  }
  /** Getter for (Twilio.Api.V2010.AccountContext.AuthorizedConnectAppListInstance) authorizedConnectApps resource */
  get authorizedConnectApps(): AuthorizedConnectAppListInstance {
    return this.api.v2010.account.authorizedConnectApps;
  }
  /** Getter for (Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryListInstance) availablePhoneNumbers resource */
  get availablePhoneNumbers(): AvailablePhoneNumberCountryListInstance {
    return this.api.v2010.account.availablePhoneNumbers;
  }
  /** Getter for (Twilio.Api.V2010.AccountContext.BalanceListInstance) balance resource */
  get balance(): BalanceListInstance {
    return this.api.v2010.account.balance;
  }
  /** Getter for (Twilio.Api.V2010.AccountContext.CallListInstance) calls resource */
  get calls(): CallListInstance {
    return this.api.v2010.account.calls;
  }
  /** Getter for (Twilio.Api.V2010.AccountContext.ConferenceListInstance) conferences resource */
  get conferences(): ConferenceListInstance {
    return this.api.v2010.account.conferences;
  }
  /** Getter for (Twilio.Api.V2010.AccountContext.ConnectAppListInstance) connectApps resource */
  get connectApps(): ConnectAppListInstance {
    return this.api.v2010.account.connectApps;
  }
  /** Getter for (Twilio.Api.V2010.AccountContext.IncomingPhoneNumberListInstance) incomingPhoneNumbers resource */
  get incomingPhoneNumbers(): IncomingPhoneNumberListInstance {
    return this.api.v2010.account.incomingPhoneNumbers;
  }
  /** Getter for (Twilio.Api.V2010.AccountContext.KeyListInstance) keys resource */
  get keys(): KeyListInstance {
    return this.api.v2010.account.keys;
  }
  /** Getter for (Twilio.Api.V2010.AccountContext.MessageListInstance) messages resource */
  get messages(): MessageListInstance {
    return this.api.v2010.account.messages;
  }
  /** Getter for (Twilio.Api.V2010.AccountContext.NewKeyListInstance) newKeys resource */
  get newKeys(): NewKeyListInstance {
    return this.api.v2010.account.newKeys;
  }
  /** Getter for (Twilio.Api.V2010.AccountContext.NewSigningKeyListInstance) newSigningKeys resource */
  get newSigningKeys(): NewSigningKeyListInstance {
    return this.api.v2010.account.newSigningKeys;
  }
  /** Getter for (Twilio.Api.V2010.AccountContext.NotificationListInstance) notifications resource */
  get notifications(): NotificationListInstance {
    return this.api.v2010.account.notifications;
  }
  /** Getter for (Twilio.Api.V2010.AccountContext.OutgoingCallerIdListInstance) outgoingCallerIds resource */
  get outgoingCallerIds(): OutgoingCallerIdListInstance {
    return this.api.v2010.account.outgoingCallerIds;
  }
  /** Getter for (Twilio.Api.V2010.AccountContext.QueueListInstance) queues resource */
  get queues(): QueueListInstance {
    return this.api.v2010.account.queues;
  }
  /** Getter for (Twilio.Api.V2010.AccountContext.RecordingListInstance) recordings resource */
  get recordings(): RecordingListInstance {
    return this.api.v2010.account.recordings;
  }
  /** Getter for (Twilio.Api.V2010.AccountContext.ShortCodeListInstance) shortCodes resource */
  get shortCodes(): ShortCodeListInstance {
    return this.api.v2010.account.shortCodes;
  }
  /** Getter for (Twilio.Api.V2010.AccountContext.SigningKeyListInstance) signingKeys resource */
  get signingKeys(): SigningKeyListInstance {
    return this.api.v2010.account.signingKeys;
  }
  /** Getter for (Twilio.Api.V2010.AccountContext.SipListInstance) sip resource */
  get sip(): SipListInstance {
    return this.api.v2010.account.sip;
  }
  /** Getter for (Twilio.Api.V2010.AccountContext.TokenListInstance) tokens resource */
  get tokens(): TokenListInstance {
    return this.api.v2010.account.tokens;
  }
  /** Getter for (Twilio.Api.V2010.AccountContext.TranscriptionListInstance) transcriptions resource */
  get transcriptions(): TranscriptionListInstance {
    return this.api.v2010.account.transcriptions;
  }
  /** Getter for (Twilio.Api.V2010.AccountContext.UsageListInstance) usage resource */
  get usage(): UsageListInstance {
    return this.api.v2010.account.usage;
  }
  /** Getter for (Twilio.Api.V2010.AccountContext.ValidationRequestListInstance) validationRequests resource */
  get validationRequests(): ValidationRequestListInstance {
    return this.api.v2010.account.validationRequests;
  }
}

namespace Twilio {
  export interface RequestClientOptions extends ClientOpts {}
  export interface RequestOptions extends RequestOpts {}
}

export = Twilio;
