'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('CredentialList', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'credential_lists': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': 'Wed, 11 Sep 2013 17:51:38 +0000',
                  'date_updated': 'Wed, 11 Sep 2013 17:51:38 +0000',
                  'friendly_name': 'Low Rises',
                  'sid': 'CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'subresource_uris': {
                      'credentials': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/CredentialLists/CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Credentials.json'
                  },
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/CredentialLists/CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
              }
          ],
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/CredentialLists.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'start': 0,
          'end': 0,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/CredentialLists.json?PageSize=50&Page=0'
      };
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .sip
                      .credentialLists.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'credential_lists': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': 'Wed, 11 Sep 2013 17:51:38 +0000',
                  'date_updated': 'Wed, 11 Sep 2013 17:51:38 +0000',
                  'friendly_name': 'Low Rises',
                  'sid': 'CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'subresource_uris': {
                      'credentials': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/CredentialLists/CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Credentials.json'
                  },
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/CredentialLists/CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
              }
          ],
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/CredentialLists.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'start': 0,
          'end': 0,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/CredentialLists.json?PageSize=50&Page=0'
      };
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .sip
                      .credentialLists.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://api.twilio.com/2010-04-01/Accounts/${accountSid}/SIP/CredentialLists.json',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'credential_lists': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': 'Wed, 11 Sep 2013 17:51:38 +0000',
                  'date_updated': 'Wed, 11 Sep 2013 17:51:38 +0000',
                  'friendly_name': 'Low Rises',
                  'sid': 'CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'subresource_uris': {
                      'credentials': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/CredentialLists/CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Credentials.json'
                  },
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/CredentialLists/CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
              }
          ],
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/CredentialLists.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'start': 0,
          'end': 0,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/CredentialLists.json?PageSize=50&Page=0'
      };
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .sip
                      .credentialLists.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .credentialLists.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/SIP/CredentialLists.json`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = {
          'credential_lists': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': 'Wed, 11 Sep 2013 17:51:38 +0000',
                  'date_updated': 'Wed, 11 Sep 2013 17:51:38 +0000',
                  'friendly_name': 'Low Rises',
                  'sid': 'CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'subresource_uris': {
                      'credentials': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/CredentialLists/CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Credentials.json'
                  },
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/CredentialLists/CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
              }
          ],
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/CredentialLists.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'start': 0,
          'end': 0,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/CredentialLists.json?PageSize=50&Page=0'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .credentialLists.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'credential_lists': [],
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/CredentialLists.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'start': 0,
          'end': 0,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/CredentialLists.json?PageSize=50&Page=0'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .credentialLists.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {friendlyName: 'friendly_name'};
      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .credentialLists.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/SIP/CredentialLists.json`;

      var values = {FriendlyName: 'friendly_name', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': 'Wed, 11 Sep 2013 17:51:38 +0000',
          'date_updated': 'Wed, 11 Sep 2013 17:51:38 +0000',
          'friendly_name': 'Low Rises',
          'sid': 'CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'subresource_uris': {
              'credentials': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/CredentialLists/CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Credentials.json'
          },
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/CredentialLists/CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
      };

      holodeck.mock(new Response(201, body));

      var opts = {friendlyName: 'friendly_name'};
      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .credentialLists.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .credentialLists('CLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'CLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/SIP/CredentialLists/${sid}.json`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': 'Wed, 11 Sep 2013 17:51:38 +0000',
          'date_updated': 'Wed, 11 Sep 2013 17:51:38 +0000',
          'friendly_name': 'Low Rises',
          'sid': 'CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'subresource_uris': {
              'credentials': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/CredentialLists/CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Credentials.json'
          },
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/CredentialLists/CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .credentialLists('CLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {friendlyName: 'friendly_name'};
      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .credentialLists('CLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'CLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/SIP/CredentialLists/${sid}.json`;

      var values = {FriendlyName: 'friendly_name', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': 'Wed, 11 Sep 2013 17:51:38 +0000',
          'date_updated': 'Wed, 11 Sep 2013 17:51:38 +0000',
          'friendly_name': 'Low Rises',
          'sid': 'CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'subresource_uris': {
              'credentials': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/CredentialLists/CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Credentials.json'
          },
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/CredentialLists/CLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
      };

      holodeck.mock(new Response(200, body));

      var opts = {friendlyName: 'friendly_name'};
      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .credentialLists('CLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid remove request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .credentialLists('CLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'CLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/SIP/CredentialLists/${sid}.json`;

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function(done) {
      var body = null;

      holodeck.mock(new Response(204, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .credentialLists('CLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
