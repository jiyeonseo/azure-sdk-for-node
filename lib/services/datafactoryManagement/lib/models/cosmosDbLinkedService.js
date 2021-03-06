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
 * Microsoft Azure Cosmos Database (CosmosDB) linked service.
 *
 * @extends models['LinkedService']
 */
class CosmosDbLinkedService extends models['LinkedService'] {
  /**
   * Create a CosmosDbLinkedService.
   * @member {object} connectionString The connection string. Type: string,
   * SecureString or AzureKeyVaultSecretReference.
   * @member {object} [encryptedCredential] The encrypted credential used for
   * authentication. Credentials are encrypted using the integration runtime
   * credential manager. Type: string (or Expression with resultType string).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of CosmosDbLinkedService
   *
   * @returns {object} metadata of CosmosDbLinkedService
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CosmosDb',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'LinkedService',
        className: 'CosmosDbLinkedService',
        modelProperties: {
          connectVia: {
            required: false,
            serializedName: 'connectVia',
            type: {
              name: 'Composite',
              className: 'IntegrationRuntimeReference'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          parameters: {
            required: false,
            serializedName: 'parameters',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'ParameterSpecificationElementType',
                  type: {
                    name: 'Composite',
                    className: 'ParameterSpecification'
                  }
              }
            }
          },
          annotations: {
            required: false,
            serializedName: 'annotations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Object'
                  }
              }
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          connectionString: {
            required: true,
            serializedName: 'typeProperties.connectionString',
            type: {
              name: 'Object'
            }
          },
          encryptedCredential: {
            required: false,
            serializedName: 'typeProperties.encryptedCredential',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = CosmosDbLinkedService;
