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
 * The response of the List EventSources operation.
 *
 */
class EventSourceListResponse {
  /**
   * Create a EventSourceListResponse.
   * @member {array} [value] Result of the List EventSources operation.
   */
  constructor() {
  }

  /**
   * Defines the metadata of EventSourceListResponse
   *
   * @returns {object} metadata of EventSourceListResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EventSourceListResponse',
      type: {
        name: 'Composite',
        className: 'EventSourceListResponse',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'EventSourceResourceElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: 'kind',
                      clientName: 'kind'
                    },
                    uberParent: 'BaseResource',
                    className: 'EventSourceResource'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = EventSourceListResponse;