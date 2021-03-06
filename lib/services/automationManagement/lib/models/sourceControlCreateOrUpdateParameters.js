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
 * The parameters supplied to the create or update source control operation.
 *
 */
class SourceControlCreateOrUpdateParameters {
  /**
   * Create a SourceControlCreateOrUpdateParameters.
   * @member {string} [repoUrl] The repo url of the source control.
   * @member {string} [branch] The repo branch of the source control. Include
   * branch as empty string for VsoTfvc.
   * @member {string} [folderPath] The folder path of the source control. Path
   * must be relative.
   * @member {boolean} [autoSync] The auto async of the source control. Default
   * is false.
   * @member {boolean} [publishRunbook] The auto publish of the source control.
   * Default is true.
   * @member {string} [sourceType] The source type. Must be one of VsoGit,
   * VsoTfvc, GitHub, case sensitive. Possible values include: 'VsoGit',
   * 'VsoTfvc', 'GitHub'
   * @member {object} [securityToken] The authorization token for the repo of
   * the source control.
   * @member {string} [securityToken.accessToken] The access token.
   * @member {string} [securityToken.refreshToken] The refresh token.
   * @member {string} [securityToken.tokenType] The token type. Must be either
   * PersonalAccessToken or Oauth. Possible values include:
   * 'PersonalAccessToken', 'Oauth'
   * @member {string} [description] The user description of the source control.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SourceControlCreateOrUpdateParameters
   *
   * @returns {object} metadata of SourceControlCreateOrUpdateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SourceControlCreateOrUpdateParameters',
      type: {
        name: 'Composite',
        className: 'SourceControlCreateOrUpdateParameters',
        modelProperties: {
          repoUrl: {
            required: false,
            serializedName: 'properties.repoUrl',
            constraints: {
              MaxLength: 2000
            },
            type: {
              name: 'String'
            }
          },
          branch: {
            required: false,
            serializedName: 'properties.branch',
            constraints: {
              MaxLength: 255
            },
            type: {
              name: 'String'
            }
          },
          folderPath: {
            required: false,
            serializedName: 'properties.folderPath',
            constraints: {
              MaxLength: 255
            },
            type: {
              name: 'String'
            }
          },
          autoSync: {
            required: false,
            serializedName: 'properties.autoSync',
            type: {
              name: 'Boolean'
            }
          },
          publishRunbook: {
            required: false,
            serializedName: 'properties.publishRunbook',
            type: {
              name: 'Boolean'
            }
          },
          sourceType: {
            required: false,
            serializedName: 'properties.sourceType',
            type: {
              name: 'String'
            }
          },
          securityToken: {
            required: false,
            serializedName: 'properties.securityToken',
            type: {
              name: 'Composite',
              className: 'SourceControlSecurityTokenProperties'
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            constraints: {
              MaxLength: 512
            },
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SourceControlCreateOrUpdateParameters;
