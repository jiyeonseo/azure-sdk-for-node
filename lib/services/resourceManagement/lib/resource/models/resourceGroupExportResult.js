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
 * Resource group export result.
 *
 */
class ResourceGroupExportResult {
  /**
   * Create a ResourceGroupExportResult.
   * @member {object} [template] The template content.
   * @member {object} [error] The error.
   * @member {string} [error.code] The error code returned when exporting the
   * template.
   * @member {string} [error.message] The error message describing the export
   * error.
   * @member {string} [error.target] The target of the error.
   * @member {array} [error.details] Validation error.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ResourceGroupExportResult
   *
   * @returns {object} metadata of ResourceGroupExportResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ResourceGroupExportResult',
      type: {
        name: 'Composite',
        className: 'ResourceGroupExportResult',
        modelProperties: {
          template: {
            required: false,
            serializedName: 'template',
            type: {
              name: 'Object'
            }
          },
          error: {
            required: false,
            serializedName: 'error',
            type: {
              name: 'Composite',
              className: 'ResourceManagementErrorWithDetails'
            }
          }
        }
      }
    };
  }
}

module.exports = ResourceGroupExportResult;
