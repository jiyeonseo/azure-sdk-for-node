// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'matthchreastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://matthchreastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '2915bbd6-1252-405f-8173-6c00428146d9';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/certificates(thumbprintAlgorithm=sha1,thumbprint=cff2ab63c8c955aaf71989efa641b906558d9fb7)?api-version=2016-07-01.3.1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#certificates/@Element\",\"thumbprint\":\"cff2ab63c8c955aaf71989efa641b906558d9fb7\",\"thumbprintAlgorithm\":\"sha1\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/certificates(thumbprintAlgorithm=sha1,thumbprint=cff2ab63c8c955aaf71989efa641b906558d9fb7)\",\"state\":\"active\",\"stateTransitionTime\":\"2016-07-29T16:37:23.0325833Z\",\"publicData\":\"MIIBrzCCAV2gAwIBAgIQHZGt2k0LCLFKYYCFxlJnkTAJBgUrDgMCHQUAMBYxFDASBgNVBAMTC1Jvb3QgQWdlbmN5MB4XDTE2MDEwMTA3MDAwMFoXDTE4MDEwMTA3MDAwMFowEjEQMA4GA1UEAxMHbm9kZXNkazCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAuX4XMWyR8cQRCA81TjHOerNOFOpOBj2O8jEdZvqwRlUYgMleEY2OlPd+nalxwlQ9+qbNkNGfjnhIMgiJ5CMlXgdRMF3E6DnMnktmHFG9L0VmQ6Lgt7bhXR8IitRHeYlvy5LJlw6Lcle5Kas2j4ThYjLQbjBMDSXD4HvZNe4UYEUCAwEAAaNLMEkwRwYDVR0BBEAwPoAQEuQJLQYdHU8AjWEh3BZkY6EYMBYxFDASBgNVBAMTC1Jvb3QgQWdlbmN5ghAGN2wAqgBkihHPuNSqXDX0MAkGBSsOAwIdBQADQQB5djPe0G6c3Z8DuR6EQbIhBMTnC0zYPhigq+x1LG83761Ir8PiSy+6oxwCHOaYZyvheW0PByntC/WFwUipfn78\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '60ce6b5e-991b-4437-b9c3-791434ac0c83',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 29 Jul 2016 16:37:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/certificates(thumbprintAlgorithm=sha1,thumbprint=cff2ab63c8c955aaf71989efa641b906558d9fb7)?api-version=2016-07-01.3.1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#certificates/@Element\",\"thumbprint\":\"cff2ab63c8c955aaf71989efa641b906558d9fb7\",\"thumbprintAlgorithm\":\"sha1\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/certificates(thumbprintAlgorithm=sha1,thumbprint=cff2ab63c8c955aaf71989efa641b906558d9fb7)\",\"state\":\"active\",\"stateTransitionTime\":\"2016-07-29T16:37:23.0325833Z\",\"publicData\":\"MIIBrzCCAV2gAwIBAgIQHZGt2k0LCLFKYYCFxlJnkTAJBgUrDgMCHQUAMBYxFDASBgNVBAMTC1Jvb3QgQWdlbmN5MB4XDTE2MDEwMTA3MDAwMFoXDTE4MDEwMTA3MDAwMFowEjEQMA4GA1UEAxMHbm9kZXNkazCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAuX4XMWyR8cQRCA81TjHOerNOFOpOBj2O8jEdZvqwRlUYgMleEY2OlPd+nalxwlQ9+qbNkNGfjnhIMgiJ5CMlXgdRMF3E6DnMnktmHFG9L0VmQ6Lgt7bhXR8IitRHeYlvy5LJlw6Lcle5Kas2j4ThYjLQbjBMDSXD4HvZNe4UYEUCAwEAAaNLMEkwRwYDVR0BBEAwPoAQEuQJLQYdHU8AjWEh3BZkY6EYMBYxFDASBgNVBAMTC1Jvb3QgQWdlbmN5ghAGN2wAqgBkihHPuNSqXDX0MAkGBSsOAwIdBQADQQB5djPe0G6c3Z8DuR6EQbIhBMTnC0zYPhigq+x1LG83761Ir8PiSy+6oxwCHOaYZyvheW0PByntC/WFwUipfn78\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '60ce6b5e-991b-4437-b9c3-791434ac0c83',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 29 Jul 2016 16:37:23 GMT',
  connection: 'close' });
 return result; }]];