// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls4897.azuredatalakestore.net:443')
  .delete('/webhdfs/v1/adlssdkfolder01%2Fmovefile.txt?op=DELETE&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":false}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '252c3d04-bc26-4856-92dc-771c8b849601',
  'set-cookie': [ 'UserPrincipalSession=f737f962-0e4f-482b-8983-5289dec4b734; path=/; secure; HttpOnly' ],
  'server-perf': '[252c3d04bc26485692dc771c8b849601][ AuthTime::1379.31565414205::PostAuthTime::30745.6943966852 ][FsDelete :: 00:00:094 ms]%0a[CleanCacheDelete :: 00:00:000 ms]%0a[Delete :: 00:00:095 ms]%0a[DELETE :: 00:00:095 ms]%0a',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:23 GMT',
  connection: 'close',
  'content-length': '17' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls4897.azuredatalakestore.net:443')
  .delete('/webhdfs/v1/adlssdkfolder01%2Fmovefile.txt?op=DELETE&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":false}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '252c3d04-bc26-4856-92dc-771c8b849601',
  'set-cookie': [ 'UserPrincipalSession=f737f962-0e4f-482b-8983-5289dec4b734; path=/; secure; HttpOnly' ],
  'server-perf': '[252c3d04bc26485692dc771c8b849601][ AuthTime::1379.31565414205::PostAuthTime::30745.6943966852 ][FsDelete :: 00:00:094 ms]%0a[CleanCacheDelete :: 00:00:000 ms]%0a[Delete :: 00:00:095 ms]%0a[DELETE :: 00:00:095 ms]%0a',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:23 GMT',
  connection: 'close',
  'content-length': '17' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls4897.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fmovefile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlssdkfolder01/movefile.txt [8189d61975c0419aabbd091d78321f21]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8189d619-75c0-419a-abbd-091d78321f21',
  'set-cookie': [ 'UserPrincipalSession=2e92e1c3-23ac-47d5-9753-f800cec234f1; path=/; secure; HttpOnly' ],
  'server-perf': '[8189d61975c0419aabbd091d78321f21][ AuthTime::1410.53676954575::PostAuthTime::30965.943962599 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:306 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:306 ms]%0a',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:23 GMT',
  connection: 'close',
  'content-length': '210' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls4897.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fmovefile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlssdkfolder01/movefile.txt [8189d61975c0419aabbd091d78321f21]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8189d619-75c0-419a-abbd-091d78321f21',
  'set-cookie': [ 'UserPrincipalSession=2e92e1c3-23ac-47d5-9753-f800cec234f1; path=/; secure; HttpOnly' ],
  'server-perf': '[8189d61975c0419aabbd091d78321f21][ AuthTime::1410.53676954575::PostAuthTime::30965.943962599 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:306 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:306 ms]%0a',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:23 GMT',
  connection: 'close',
  'content-length': '210' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls4897.azuredatalakestore.net:443')
  .delete('/webhdfs/v1/adlssdkfolder02?recursive=true&op=DELETE&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'eabbd0ba-a8a8-4630-a35f-132bf866f7ac',
  'set-cookie': [ 'UserPrincipalSession=920df764-eccb-4a99-8f11-95f64026b0e6; path=/; secure; HttpOnly' ],
  'server-perf': '[eabbd0baa8a84630a35f132bf866f7ac][ AuthTime::1475.54887210327::PostAuthTime::31186.2600310592 ][FsDelete :: 00:00:472 ms]%0a[CleanCacheDelete :: 00:00:000 ms]%0a[Delete : Recursive :: 00:00:473 ms]%0a[DELETE :: 00:00:473 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:23 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls4897.azuredatalakestore.net:443')
  .delete('/webhdfs/v1/adlssdkfolder02?recursive=true&op=DELETE&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'eabbd0ba-a8a8-4630-a35f-132bf866f7ac',
  'set-cookie': [ 'UserPrincipalSession=920df764-eccb-4a99-8f11-95f64026b0e6; path=/; secure; HttpOnly' ],
  'server-perf': '[eabbd0baa8a84630a35f132bf866f7ac][ AuthTime::1475.54887210327::PostAuthTime::31186.2600310592 ][FsDelete :: 00:00:472 ms]%0a[CleanCacheDelete :: 00:00:000 ms]%0a[Delete : Recursive :: 00:00:473 ms]%0a[DELETE :: 00:00:473 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:23 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls4897.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder02?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlssdkfolder02 [17507523799947c3b3f0f36386266160]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '17507523-7999-47c3-b3f0-f36386266160',
  'server-perf': '[17507523799947c3b3f0f36386266160][ AuthTime::668.48779336157::PostAuthTime::143.277933957854 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:042 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:042 ms]%0a',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:24 GMT',
  connection: 'close',
  'content-length': '197' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls4897.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder02?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlssdkfolder02 [17507523799947c3b3f0f36386266160]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '17507523-7999-47c3-b3f0-f36386266160',
  'server-perf': '[17507523799947c3b3f0f36386266160][ AuthTime::668.48779336157::PostAuthTime::143.277933957854 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:042 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:042 ms]%0a',
  status: '0x8309000A',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:45:24 GMT',
  connection: 'close',
  'content-length': '197' });
 return result; }]];