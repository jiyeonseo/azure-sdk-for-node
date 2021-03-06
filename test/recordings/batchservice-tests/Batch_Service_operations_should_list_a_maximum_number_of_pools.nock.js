// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'lchency4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://lchency4.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ee7eaf5-6a2f-49fd-953f-d760b5ac2e05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .get('/pools?api-version=2018-08-01.7.0&maxresults=1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#pools\",\"value\":[\r\n    {\r\n      \"id\":\"nodesdkinboundendpointpool\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/pools/nodesdkinboundendpointpool\",\"eTag\":\"0x8D607A2FA29DA10\",\"lastModified\":\"2018-08-21T20:16:28.2647056Z\",\"creationTime\":\"2018-08-21T20:16:28.2647056Z\",\"state\":\"active\",\"stateTransitionTime\":\"2018-08-21T20:16:28.2647056Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2018-08-21T20:18:10.9689835Z\",\"vmSize\":\"standard_a1\",\"resizeTimeout\":\"PT15M\",\"currentDedicatedNodes\":1,\"targetDedicatedNodes\":1,\"currentLowPriorityNodes\":0,\"targetLowPriorityNodes\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"virtualMachineConfiguration\":{\r\n        \"imageReference\":{\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"16.04-LTS\",\"version\":\"latest\"\r\n        },\"nodeAgentSKUId\":\"batch.node.ubuntu 16.04\"\r\n      },\"networkConfiguration\":{\r\n        \"endpointConfiguration\":{\r\n          \"inboundNATPools\":[\r\n            {\r\n              \"name\":\"TestEndpointConfig\",\"protocol\":\"udp\",\"backendPort\":64444,\"frontendPortRangeStart\":60000,\"frontendPortRangeEnd\":61000\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    }\r\n  ],\"odata.nextLink\":\"https://lchency4.westcentralus.batch.azure.com/pools?api-version=2018-08-01.7.0&maxresults=1&$skiptoken=WATV2:eCinib1p8ymm8mMqiNz3Wrsmzu1MV0tNnD7vb1K8ix63zzBYpQt8rSEaNFjUaVcwLUPB8mh/KHfFNqe1sl%5EwbUnwefQHvR666nStghj%5E4RyeIYMXrCVszuXexL2M2xE46VMRye8no6mCp1A2nF3%5E61KI2APbciMWa99n5lSxStX7EWaSO0EDGQz42t1Vl32lIqXRwioWaGdu59ncYpW3vCpoHu9dLyURLacM8HURFz01i5Kam63t9bD0uO5iEgDm97YGoad%5EqxpTlH14iCj%5EyQ==:1$1\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '69c37e01-027c-45bf-a26b-448165c3d374',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:25:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .get('/pools?api-version=2018-08-01.7.0&maxresults=1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#pools\",\"value\":[\r\n    {\r\n      \"id\":\"nodesdkinboundendpointpool\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/pools/nodesdkinboundendpointpool\",\"eTag\":\"0x8D607A2FA29DA10\",\"lastModified\":\"2018-08-21T20:16:28.2647056Z\",\"creationTime\":\"2018-08-21T20:16:28.2647056Z\",\"state\":\"active\",\"stateTransitionTime\":\"2018-08-21T20:16:28.2647056Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2018-08-21T20:18:10.9689835Z\",\"vmSize\":\"standard_a1\",\"resizeTimeout\":\"PT15M\",\"currentDedicatedNodes\":1,\"targetDedicatedNodes\":1,\"currentLowPriorityNodes\":0,\"targetLowPriorityNodes\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"virtualMachineConfiguration\":{\r\n        \"imageReference\":{\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"16.04-LTS\",\"version\":\"latest\"\r\n        },\"nodeAgentSKUId\":\"batch.node.ubuntu 16.04\"\r\n      },\"networkConfiguration\":{\r\n        \"endpointConfiguration\":{\r\n          \"inboundNATPools\":[\r\n            {\r\n              \"name\":\"TestEndpointConfig\",\"protocol\":\"udp\",\"backendPort\":64444,\"frontendPortRangeStart\":60000,\"frontendPortRangeEnd\":61000\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    }\r\n  ],\"odata.nextLink\":\"https://lchency4.westcentralus.batch.azure.com/pools?api-version=2018-08-01.7.0&maxresults=1&$skiptoken=WATV2:eCinib1p8ymm8mMqiNz3Wrsmzu1MV0tNnD7vb1K8ix63zzBYpQt8rSEaNFjUaVcwLUPB8mh/KHfFNqe1sl%5EwbUnwefQHvR666nStghj%5E4RyeIYMXrCVszuXexL2M2xE46VMRye8no6mCp1A2nF3%5E61KI2APbciMWa99n5lSxStX7EWaSO0EDGQz42t1Vl32lIqXRwioWaGdu59ncYpW3vCpoHu9dLyURLacM8HURFz01i5Kam63t9bD0uO5iEgDm97YGoad%5EqxpTlH14iCj%5EyQ==:1$1\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '69c37e01-027c-45bf-a26b-448165c3d374',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:25:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .get('/pools?api-version=2018-08-01.7.0&maxresults=1&$skiptoken=WATV2:eCinib1p8ymm8mMqiNz3Wrsmzu1MV0tNnD7vb1K8ix63zzBYpQt8rSEaNFjUaVcwLUPB8mh/KHfFNqe1sl%5EwbUnwefQHvR666nStghj%5E4RyeIYMXrCVszuXexL2M2xE46VMRye8no6mCp1A2nF3%5E61KI2APbciMWa99n5lSxStX7EWaSO0EDGQz42t1Vl32lIqXRwioWaGdu59ncYpW3vCpoHu9dLyURLacM8HURFz01i5Kam63t9bD0uO5iEgDm97YGoad%5EqxpTlH14iCj%5EyQ==:1$1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#pools\",\"value\":[\r\n    {\r\n      \"id\":\"nodesdktestpool1\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1\",\"eTag\":\"0x8D607A437BD2FE0\",\"lastModified\":\"2018-08-21T20:25:21.0680288Z\",\"creationTime\":\"2018-08-21T20:05:04.4042325Z\",\"state\":\"active\",\"stateTransitionTime\":\"2018-08-21T20:05:04.4042325Z\",\"allocationState\":\"stopping\",\"allocationStateTransitionTime\":\"2018-08-21T20:25:21.0680288Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicatedNodes\":3,\"targetDedicatedNodes\":2,\"currentLowPriorityNodes\":0,\"targetLowPriorityNodes\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo hello > hello.txt\",\"userIdentity\":{\r\n          \"autoUser\":{\r\n            \"elevationLevel\":\"nonadmin\"\r\n          }\r\n        },\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n      },\"userAccounts\":[\r\n        {\r\n          \"name\":\"nonAdminUser\",\"elevationLevel\":\"nonadmin\"\r\n        }\r\n      ],\"metadata\":[\r\n        {\r\n          \"name\":\"foo2\",\"value\":\"bar2\"\r\n        }\r\n      ],\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"cloudServiceConfiguration\":{\r\n        \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n      }\r\n    }\r\n  ],\"odata.nextLink\":\"https://lchency4.westcentralus.batch.azure.com/pools?api-version=2018-08-01.7.0&maxresults=1&$skiptoken=WATV2:PQFgS3ENlQlwds40%5E7uYOKDzwaZBB9m2eCCzqo4yyCYqYUUcaHHWRRGF2QxPFPbRIs9ieKcy8pXJRvrFrE/LfERgbwn0qDIpGeQUtRuCCzUkxLdjVR4JI%5EqOEu%5E4qWKjEMz/UFNZh6IJZssFaB25H4meeYwalq%5EOhgubOwHGNP8FgquCDtUYiU8rqDP9Mm8sl6xVWqwjvsXh5uNDV2oqCYTIJYecHeDQbQfMB0sZ2sqkHPLlbvCD3oAmH3Tr62gByV/Q28zuPJHrzzqn1SSrzg==:1$1\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '9cb6fb66-9157-47f5-9b8c-1896d1441162',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:25:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .get('/pools?api-version=2018-08-01.7.0&maxresults=1&$skiptoken=WATV2:eCinib1p8ymm8mMqiNz3Wrsmzu1MV0tNnD7vb1K8ix63zzBYpQt8rSEaNFjUaVcwLUPB8mh/KHfFNqe1sl%5EwbUnwefQHvR666nStghj%5E4RyeIYMXrCVszuXexL2M2xE46VMRye8no6mCp1A2nF3%5E61KI2APbciMWa99n5lSxStX7EWaSO0EDGQz42t1Vl32lIqXRwioWaGdu59ncYpW3vCpoHu9dLyURLacM8HURFz01i5Kam63t9bD0uO5iEgDm97YGoad%5EqxpTlH14iCj%5EyQ==:1$1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#pools\",\"value\":[\r\n    {\r\n      \"id\":\"nodesdktestpool1\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1\",\"eTag\":\"0x8D607A437BD2FE0\",\"lastModified\":\"2018-08-21T20:25:21.0680288Z\",\"creationTime\":\"2018-08-21T20:05:04.4042325Z\",\"state\":\"active\",\"stateTransitionTime\":\"2018-08-21T20:05:04.4042325Z\",\"allocationState\":\"stopping\",\"allocationStateTransitionTime\":\"2018-08-21T20:25:21.0680288Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicatedNodes\":3,\"targetDedicatedNodes\":2,\"currentLowPriorityNodes\":0,\"targetLowPriorityNodes\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo hello > hello.txt\",\"userIdentity\":{\r\n          \"autoUser\":{\r\n            \"elevationLevel\":\"nonadmin\"\r\n          }\r\n        },\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n      },\"userAccounts\":[\r\n        {\r\n          \"name\":\"nonAdminUser\",\"elevationLevel\":\"nonadmin\"\r\n        }\r\n      ],\"metadata\":[\r\n        {\r\n          \"name\":\"foo2\",\"value\":\"bar2\"\r\n        }\r\n      ],\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"cloudServiceConfiguration\":{\r\n        \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n      }\r\n    }\r\n  ],\"odata.nextLink\":\"https://lchency4.westcentralus.batch.azure.com/pools?api-version=2018-08-01.7.0&maxresults=1&$skiptoken=WATV2:PQFgS3ENlQlwds40%5E7uYOKDzwaZBB9m2eCCzqo4yyCYqYUUcaHHWRRGF2QxPFPbRIs9ieKcy8pXJRvrFrE/LfERgbwn0qDIpGeQUtRuCCzUkxLdjVR4JI%5EqOEu%5E4qWKjEMz/UFNZh6IJZssFaB25H4meeYwalq%5EOhgubOwHGNP8FgquCDtUYiU8rqDP9Mm8sl6xVWqwjvsXh5uNDV2oqCYTIJYecHeDQbQfMB0sZ2sqkHPLlbvCD3oAmH3Tr62gByV/Q28zuPJHrzzqn1SSrzg==:1$1\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '9cb6fb66-9157-47f5-9b8c-1896d1441162',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:25:21 GMT',
  connection: 'close' });
 return result; }]];