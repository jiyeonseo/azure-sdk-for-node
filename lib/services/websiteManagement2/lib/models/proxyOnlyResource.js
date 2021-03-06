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

const models = require('./index');

/**
 * Azure proxy only resource. This resource is not tracked by Azure Resource
 * Manager.
 *
 * @extends models['BaseResource']
 */
class ProxyOnlyResource extends models['BaseResource'] {
  /**
   * Create a ProxyOnlyResource.
   * @member {string} [id] Resource Id.
   * @member {string} [name] Resource Name.
   * @member {string} [kind] Kind of resource.
   * @member {string} [type] Resource type.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ProxyOnlyResource
   *
   * @returns {object} metadata of ProxyOnlyResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ProxyOnlyResource',
      type: {
        name: 'Composite',
        className: 'ProxyOnlyResource',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: false,
            serializedName: 'kind',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ProxyOnlyResource;
