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
 * Deny assignment permissions.
 *
 */
class DenyAssignmentPermission {
  /**
   * Create a DenyAssignmentPermission.
   * @member {array} [actions] Actions to which the deny assignment does not
   * grant access.
   * @member {array} [notActions] Actions to exclude from that the deny
   * assignment does not grant access.
   * @member {array} [dataActions] Data actions to which the deny assignment
   * does not grant access.
   * @member {array} [notDataActions] Data actions to exclude from that the
   * deny assignment does not grant access.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DenyAssignmentPermission
   *
   * @returns {object} metadata of DenyAssignmentPermission
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DenyAssignmentPermission',
      type: {
        name: 'Composite',
        className: 'DenyAssignmentPermission',
        modelProperties: {
          actions: {
            required: false,
            serializedName: 'actions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          notActions: {
            required: false,
            serializedName: 'notActions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          dataActions: {
            required: false,
            serializedName: 'dataActions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          notDataActions: {
            required: false,
            serializedName: 'notDataActions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = DenyAssignmentPermission;
