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
 * Trigger Rollover Request.
 *
 */
class TriggerRolloverRequest {
  /**
   * Create a TriggerRolloverRequest.
   * @member {string} [certificateData] Certificate Data
   */
  constructor() {
  }

  /**
   * Defines the metadata of TriggerRolloverRequest
   *
   * @returns {object} metadata of TriggerRolloverRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TriggerRolloverRequest',
      type: {
        name: 'Composite',
        className: 'TriggerRolloverRequest',
        modelProperties: {
          certificateData: {
            required: false,
            serializedName: 'certificateData',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TriggerRolloverRequest;
