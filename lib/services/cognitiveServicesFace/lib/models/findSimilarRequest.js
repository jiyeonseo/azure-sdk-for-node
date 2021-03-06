/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Request body for find similar operation.
 *
 */
class FindSimilarRequest {
  /**
   * Create a FindSimilarRequest.
   * @member {uuid} faceId FaceId of the query face. User needs to call Face -
   * Detect first to get a valid faceId. Note that this faceId is not persisted
   * and will expire 24 hours after the detection call
   * @member {string} [faceListId] An existing user-specified unique candidate
   * face list, created in Face List - Create a Face List. Face list contains a
   * set of persistedFaceIds which are persisted and will never expire.
   * Parameter faceListId, largeFaceListId and faceIds should not be provided
   * at the same time。
   * @member {string} [largeFaceListId] An existing user-specified unique
   * candidate large face list, created in LargeFaceList - Create. Large face
   * list contains a set of persistedFaceIds which are persisted and will never
   * expire. Parameter faceListId, largeFaceListId and faceIds should not be
   * provided at the same time.
   * @member {array} [faceIds] An array of candidate faceIds. All of them are
   * created by Face - Detect and the faceIds will expire 24 hours after the
   * detection call. The number of faceIds is limited to 1000. Parameter
   * faceListId, largeFaceListId and faceIds should not be provided at the same
   * time.
   * @member {number} [maxNumOfCandidatesReturned] The number of top similar
   * faces returned. The valid range is [1, 1000]. Default value: 20 .
   * @member {string} [mode] Similar face searching mode. It can be
   * "matchPerson" or "matchFace". Possible values include: 'matchPerson',
   * 'matchFace'. Default value: 'matchPerson' .
   */
  constructor() {
  }

  /**
   * Defines the metadata of FindSimilarRequest
   *
   * @returns {object} metadata of FindSimilarRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FindSimilarRequest',
      type: {
        name: 'Composite',
        className: 'FindSimilarRequest',
        modelProperties: {
          faceId: {
            required: true,
            serializedName: 'faceId',
            type: {
              name: 'String'
            }
          },
          faceListId: {
            required: false,
            serializedName: 'faceListId',
            constraints: {
              MaxLength: 64,
              Pattern: '^[a-z0-9-_]+$'
            },
            type: {
              name: 'String'
            }
          },
          largeFaceListId: {
            required: false,
            serializedName: 'largeFaceListId',
            constraints: {
              MaxLength: 64,
              Pattern: '^[a-z0-9-_]+$'
            },
            type: {
              name: 'String'
            }
          },
          faceIds: {
            required: false,
            serializedName: 'faceIds',
            constraints: {
              MaxItems: 1000
            },
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UuidElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          maxNumOfCandidatesReturned: {
            required: false,
            serializedName: 'maxNumOfCandidatesReturned',
            defaultValue: 20,
            constraints: {
              InclusiveMaximum: 1000,
              InclusiveMinimum: 1
            },
            type: {
              name: 'Number'
            }
          },
          mode: {
            required: false,
            nullable: false,
            serializedName: 'mode',
            defaultValue: 'matchPerson',
            type: {
              name: 'Enum',
              allowedValues: [ 'matchPerson', 'matchFace' ]
            }
          }
        }
      }
    };
  }
}

module.exports = FindSimilarRequest;
