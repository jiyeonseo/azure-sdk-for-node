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
 * A system service running on a compute.
 *
 */
class SystemService {
  /**
   * Create a SystemService.
   * @member {string} [systemServiceType] The type of this system service.
   * @member {string} [publicIpAddress] Public IP address
   * @member {string} [version] The version for this type.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SystemService
   *
   * @returns {object} metadata of SystemService
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SystemService',
      type: {
        name: 'Composite',
        className: 'SystemService',
        modelProperties: {
          systemServiceType: {
            required: false,
            readOnly: true,
            serializedName: 'systemServiceType',
            type: {
              name: 'String'
            }
          },
          publicIpAddress: {
            required: false,
            readOnly: true,
            serializedName: 'publicIpAddress',
            type: {
              name: 'String'
            }
          },
          version: {
            required: false,
            readOnly: true,
            serializedName: 'version',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SystemService;