// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup2266/providers/Microsoft.Cdn/profiles/cdnTestProfile6758/endpoints/someFakeEndpoint/purge?api-version=2017-04-02', '*')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Cdn/profiles/cdnTestProfile6758/endpoints/someFakeEndpoint' under resource group 'cdnTestGroup2266' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '65af945a-4e51-46e8-84c8-fc5d7df82473',
  'x-ms-correlation-request-id': '65af945a-4e51-46e8-84c8-fc5d7df82473',
  'x-ms-routing-request-id': 'WESTUS2:20161028T014113Z:65af945a-4e51-46e8-84c8-fc5d7df82473',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 28 Oct 2016 01:41:13 GMT',
  connection: 'close',
  'content-length': '188' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup2266/providers/Microsoft.Cdn/profiles/cdnTestProfile6758/endpoints/someFakeEndpoint/purge?api-version=2017-04-02', '*')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Cdn/profiles/cdnTestProfile6758/endpoints/someFakeEndpoint' under resource group 'cdnTestGroup2266' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '65af945a-4e51-46e8-84c8-fc5d7df82473',
  'x-ms-correlation-request-id': '65af945a-4e51-46e8-84c8-fc5d7df82473',
  'x-ms-routing-request-id': 'WESTUS2:20161028T014113Z:65af945a-4e51-46e8-84c8-fc5d7df82473',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 28 Oct 2016 01:41:13 GMT',
  connection: 'close',
  'content-length': '188' });
 return result; }]];