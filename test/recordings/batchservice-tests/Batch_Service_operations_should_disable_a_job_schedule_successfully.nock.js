// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .post('/jobschedules/NodeSDKTestSchedule/disable?api-version=2017-09-01.6.0')
  .reply(204, "", { 'content-length': '0',
  'last-modified': 'Thu, 20 Jul 2017 20:12:34 GMT',
  etag: '0x8D4CFABA89FC387',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '0c789738-9c46-4f20-961c-95c848ec33dd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobschedules/NodeSDKTestSchedule/disable',
  date: 'Thu, 20 Jul 2017 20:12:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .post('/jobschedules/NodeSDKTestSchedule/disable?api-version=2017-09-01.6.0')
  .reply(204, "", { 'content-length': '0',
  'last-modified': 'Thu, 20 Jul 2017 20:12:34 GMT',
  etag: '0x8D4CFABA89FC387',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '0c789738-9c46-4f20-961c-95c848ec33dd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/jobschedules/NodeSDKTestSchedule/disable',
  date: 'Thu, 20 Jul 2017 20:12:34 GMT',
  connection: 'close' });
 return result; }]];