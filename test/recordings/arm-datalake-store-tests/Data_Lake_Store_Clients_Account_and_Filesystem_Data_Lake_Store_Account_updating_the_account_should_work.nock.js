// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4897?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls4897.azuredatalakestore.net\",\"creationTime\":\"2016-03-16T21:43:58.6675286Z\",\"lastModifiedTime\":\"2016-03-16T21:45:07.2724505Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4897\",\"name\":\"xplattestadls4897\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '585',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '55850e68-b673-40cb-a223-e9cb520c5e33',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '2e832dc6-12ff-4865-8f9c-f550bb1b8826',
  'x-ms-routing-request-id': 'WESTUS:20160316T214508Z:2e832dc6-12ff-4865-8f9c-f550bb1b8826',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4897?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallRules\":[],\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadls4897.azuredatalakestore.net\",\"creationTime\":\"2016-03-16T21:43:58.6675286Z\",\"lastModifiedTime\":\"2016-03-16T21:45:07.2724505Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeStore/accounts/xplattestadls4897\",\"name\":\"xplattestadls4897\",\"type\":\"Microsoft.DataLakeStore/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '585',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '55850e68-b673-40cb-a223-e9cb520c5e33',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '2e832dc6-12ff-4865-8f9c-f550bb1b8826',
  'x-ms-routing-request-id': 'WESTUS:20160316T214508Z:2e832dc6-12ff-4865-8f9c-f550bb1b8826',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:07 GMT',
  connection: 'close' });
 return result; }]];