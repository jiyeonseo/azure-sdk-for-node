// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/stdout.txt?api-version=2017-09-01.6.0')
  .reply(200, "hello world\r\n", { 'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  'last-modified': 'Thu, 20 Jul 2017 20:06:27 GMT',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'a130e9c8-0b5e-4e6a-be3f-48eb4d9030dd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  'ocp-creation-time': 'Thu, 20 Jul 2017 20:06:27 GMT',
  'ocp-batch-file-isdirectory': 'False',
  'ocp-batch-file-url': 'https%3A%2F%2Fbatchtestnodesdk.japaneast.batch.azure.com%2Fjobs%2FHelloWorldJobNodeSDKTest%2Ftasks%2FHelloWorldNodeSDKTestTask2%2Ffiles%2Fstdout.txt',
  date: 'Thu, 20 Jul 2017 20:08:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/stdout.txt?api-version=2017-09-01.6.0')
  .reply(200, "hello world\r\n", { 'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  'last-modified': 'Thu, 20 Jul 2017 20:06:27 GMT',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'a130e9c8-0b5e-4e6a-be3f-48eb4d9030dd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  'ocp-creation-time': 'Thu, 20 Jul 2017 20:06:27 GMT',
  'ocp-batch-file-isdirectory': 'False',
  'ocp-batch-file-url': 'https%3A%2F%2Fbatchtestnodesdk.japaneast.batch.azure.com%2Fjobs%2FHelloWorldJobNodeSDKTest%2Ftasks%2FHelloWorldNodeSDKTestTask2%2Ffiles%2Fstdout.txt',
  date: 'Thu, 20 Jul 2017 20:08:30 GMT',
  connection: 'close' });
 return result; }]];