// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/jobschedules/NodeSDKTestSchedule?api-version=2017-09-01.6.0', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 20 Jul 2017 20:12:33 GMT',
  etag: '0x8D4CFABA8509A9A',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'be8ca50d-8cf7-4235-9bdd-c5be3553571c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobschedules/NodeSDKTestSchedule',
  date: 'Thu, 20 Jul 2017 20:12:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/jobschedules/NodeSDKTestSchedule?api-version=2017-09-01.6.0', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Thu, 20 Jul 2017 20:12:33 GMT',
  etag: '0x8D4CFABA8509A9A',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'be8ca50d-8cf7-4235-9bdd-c5be3553571c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobschedules/NodeSDKTestSchedule',
  date: 'Thu, 20 Jul 2017 20:12:33 GMT',
  connection: 'close' });
 return result; }]];