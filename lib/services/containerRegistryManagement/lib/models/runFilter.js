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
 * Properties that are enabled for Odata querying on runs.
 *
 */
class RunFilter {
  /**
   * Create a RunFilter.
   * @member {string} [runId] The unique identifier for the run.
   * @member {string} [runType] The type of run. Possible values include:
   * 'QuickBuild', 'QuickRun', 'AutoBuild', 'AutoRun'
   * @member {string} [status] The current status of the run. Possible values
   * include: 'Queued', 'Started', 'Running', 'Succeeded', 'Failed',
   * 'Canceled', 'Error', 'Timeout'
   * @member {date} [createTime] The create time for a run.
   * @member {date} [finishTime] The time the run finished.
   * @member {string} [outputImageManifests] The list of comma-separated image
   * manifests that were generated from the run. This is applicable if the run
   * is of
   * build type.
   * @member {boolean} [isArchiveEnabled] The value that indicates whether
   * archiving is enabled or not.
   * @member {string} [taskName] The name of the task that the run corresponds
   * to.
   */
  constructor() {
  }

  /**
   * Defines the metadata of RunFilter
   *
   * @returns {object} metadata of RunFilter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RunFilter',
      type: {
        name: 'Composite',
        className: 'RunFilter',
        modelProperties: {
          runId: {
            required: false,
            serializedName: 'runId',
            type: {
              name: 'String'
            }
          },
          runType: {
            required: false,
            serializedName: 'runType',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          createTime: {
            required: false,
            serializedName: 'createTime',
            type: {
              name: 'DateTime'
            }
          },
          finishTime: {
            required: false,
            serializedName: 'finishTime',
            type: {
              name: 'DateTime'
            }
          },
          outputImageManifests: {
            required: false,
            serializedName: 'outputImageManifests',
            type: {
              name: 'String'
            }
          },
          isArchiveEnabled: {
            required: false,
            serializedName: 'isArchiveEnabled',
            type: {
              name: 'Boolean'
            }
          },
          taskName: {
            required: false,
            serializedName: 'taskName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RunFilter;