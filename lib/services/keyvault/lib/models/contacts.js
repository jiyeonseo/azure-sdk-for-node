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
 * The contacts for the vault certificates.
 *
 */
class Contacts {
  /**
   * Create a Contacts.
   * @member {string} [id] Identifier for the contacts collection.
   * @member {array} [contactList] The contact list for the vault certificates.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Contacts
   *
   * @returns {object} metadata of Contacts
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Contacts',
      type: {
        name: 'Composite',
        className: 'Contacts',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          contactList: {
            required: false,
            serializedName: 'contacts',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ContactElementType',
                  type: {
                    name: 'Composite',
                    className: 'Contact'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Contacts;