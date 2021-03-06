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
 * Represents applicable recovery vm sizes.
 *
 */
class TargetComputeSize {
  /**
   * Create a TargetComputeSize.
   * @member {string} [id] The Id.
   * @member {string} [name] The name.
   * @member {string} [type] The Type of the object.
   * @member {object} [properties] The custom data.
   * @member {string} [properties.name] Target compute size name.
   * @member {string} [properties.friendlyName] Target compute size display
   * name.
   * @member {number} [properties.cpuCoresCount] The maximum cpu cores count
   * supported by target compute size.
   * @member {number} [properties.memoryInGB] The maximum memory in GB
   * supported by target compute size.
   * @member {number} [properties.maxDataDiskCount] The maximum data disks
   * count supported by target compute size.
   * @member {number} [properties.maxNicsCount] The maximum Nics count
   * supported by target compute size.
   * @member {array} [properties.errors] The reasons why the target compute
   * size is not applicable for the protected item.
   * @member {string} [properties.highIopsSupported] The value indicating
   * whether the target compute size supports high Iops.
   */
  constructor() {
  }

  /**
   * Defines the metadata of TargetComputeSize
   *
   * @returns {object} metadata of TargetComputeSize
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TargetComputeSize',
      type: {
        name: 'Composite',
        className: 'TargetComputeSize',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              className: 'TargetComputeSizeProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = TargetComputeSize;
