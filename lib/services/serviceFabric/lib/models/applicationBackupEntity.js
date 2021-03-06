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
 * Identifies the Service Fabric application which is being backed up.
 *
 * @extends models['BackupEntity']
 */
class ApplicationBackupEntity extends models['BackupEntity'] {
  /**
   * Create a ApplicationBackupEntity.
   * @member {string} [applicationName] The name of the application, including
   * the 'fabric:' URI scheme.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ApplicationBackupEntity
   *
   * @returns {object} metadata of ApplicationBackupEntity
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Application',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'EntityKind',
          clientName: 'entityKind'
        },
        uberParent: 'BackupEntity',
        className: 'ApplicationBackupEntity',
        modelProperties: {
          entityKind: {
            required: true,
            serializedName: 'EntityKind',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          applicationName: {
            required: false,
            serializedName: 'ApplicationName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationBackupEntity;
