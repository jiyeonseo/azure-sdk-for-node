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
 * @class
 * Initializes a new instance of the KeyAndSecretDetails class.
 * @constructor
 * BEK stands for Bitlocker Encryption Key.
 * KEK stands for Key Encryption Key. KEK is the encryption key used to protect
 * the Secret for the BEK
 * If the VM is encrypted, then the service stores the following details :
 * 1. Secret(BEK) - Url + Backup Data + vaultID.
 * 2. Key(KEK) - Url + Backup Data + vaultID.
 * It is possible for the BEK and KEK to have different vaultIDs.
 *
 * @member {object} [kekDetails] The Key Encryption Key (KEK) is the encryption
 * key for the Bitlocker Encryption Key (BEK).
 *
 * @member {string} [kekDetails.keyUrl] Key refers to the Key Encryption Key
 * (KEK). The KEK is the Key to unlock the Secret.
 *
 * @member {string} [kekDetails.keyVaultId] Key Vault ID identifies where the
 * KEK is stored.
 *
 * @member {string} [kekDetails.keyBackupData] Key Backup Data refers to Key
 * Encryption Key (KEK) data.
 *
 * @member {object} [bekDetails] BEK is Bitlocker Encrpytion Key.
 *
 * @member {string} [bekDetails.secretUrl] Secret refers to Bitlocker
 * Encryption Key (BEK). The Secret can be unlocked by the key (or KEK).
 *
 * @member {string} [bekDetails.secretVaultId] ID of the Key Vault where this
 * Secret is stored.
 *
 * @member {string} [bekDetails.secretData] Bitlocker Encryption Key (BEK)
 * data.
 *
 */
class KeyAndSecretDetails {
  constructor() {
  }

  /**
   * Defines the metadata of KeyAndSecretDetails
   *
   * @returns {object} metadata of KeyAndSecretDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'KeyAndSecretDetails',
      type: {
        name: 'Composite',
        className: 'KeyAndSecretDetails',
        modelProperties: {
          kekDetails: {
            required: false,
            serializedName: 'kekDetails',
            type: {
              name: 'Composite',
              className: 'KEKDetails'
            }
          },
          bekDetails: {
            required: false,
            serializedName: 'bekDetails',
            type: {
              name: 'Composite',
              className: 'BEKDetails'
            }
          }
        }
      }
    };
  }
}

module.exports = KeyAndSecretDetails;