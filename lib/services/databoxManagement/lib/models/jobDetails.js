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
 * Job details.
 *
 */
class JobDetails {
  /**
   * Create a JobDetails.
   * @member {number} [expectedDataSizeInTeraBytes] The expected size of the
   * data, which needs to be transfered in this job, in tera bytes.
   * @member {array} [jobStages] List of stages that run in the job.
   * @member {object} contactDetails Contact details for notification and
   * shipping.
   * @member {string} [contactDetails.contactName] Contact name of the person.
   * @member {string} [contactDetails.phone] Phone number of the contact
   * person.
   * @member {string} [contactDetails.phoneExtension] Phone extension number of
   * the contact person.
   * @member {string} [contactDetails.mobile] Mobile number of the contact
   * person.
   * @member {array} [contactDetails.emailList] List of Email-ids to be
   * notified about job progress.
   * @member {array} [contactDetails.notificationPreference] Notification
   * preference for a job stage.
   * @member {object} shippingAddress Shipping address of the customer.
   * @member {string} [shippingAddress.streetAddress1] Street Address line 1.
   * @member {string} [shippingAddress.streetAddress2] Street Address line 2.
   * @member {string} [shippingAddress.streetAddress3] Street Address line 3.
   * @member {string} [shippingAddress.city] Name of the City.
   * @member {string} [shippingAddress.stateOrProvince] Name of the State or
   * Province.
   * @member {string} [shippingAddress.country] Name of the Country.
   * @member {string} [shippingAddress.postalCode] Postal code.
   * @member {string} [shippingAddress.zipExtendedCode] Extended Zip Code.
   * @member {string} [shippingAddress.companyName] Name of the company.
   * @member {string} [shippingAddress.addressType] Type of address. Possible
   * values include: 'None', 'Residential', 'Commercial'
   * @member {object} [deliveryPackage] Delivery package shipping details.
   * @member {string} [deliveryPackage.carrierName] Name of the carrier.
   * @member {string} [deliveryPackage.trackingId] Tracking Id of shipment.
   * @member {string} [deliveryPackage.trackingUrl] Url where shipment can be
   * tracked.
   * @member {object} [returnPackage] Return package shipping details.
   * @member {string} [returnPackage.carrierName] Name of the carrier.
   * @member {string} [returnPackage.trackingId] Tracking Id of shipment.
   * @member {string} [returnPackage.trackingUrl] Url where shipment can be
   * tracked.
   * @member {array} destinationAccountDetails Destination account details.
   * @member {array} [errorDetails] Error details for failure. This is
   * optional.
   * @member {object} [preferences] Preferences for the order.
   * @member {array} [preferences.preferredDataCenterRegion]
   * @member {array} [copyLogDetails] List of copy log details.
   * @member {string} [reverseShipmentLabelSasKey] Shared access key to
   * download the return shipment label
   * @member {string} [chainOfCustodySasKey] Shared access key to download the
   * chain of custody logs
   * @member {string} jobDetailsType Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of JobDetails
   *
   * @returns {object} metadata of JobDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobDetails',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'jobDetailsType',
          clientName: 'jobDetailsType'
        },
        uberParent: 'JobDetails',
        className: 'JobDetails',
        modelProperties: {
          expectedDataSizeInTeraBytes: {
            required: false,
            serializedName: 'expectedDataSizeInTeraBytes',
            type: {
              name: 'Number'
            }
          },
          jobStages: {
            required: false,
            readOnly: true,
            serializedName: 'jobStages',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'JobStagesElementType',
                  type: {
                    name: 'Composite',
                    className: 'JobStages'
                  }
              }
            }
          },
          contactDetails: {
            required: true,
            serializedName: 'contactDetails',
            type: {
              name: 'Composite',
              className: 'ContactDetails'
            }
          },
          shippingAddress: {
            required: true,
            serializedName: 'shippingAddress',
            type: {
              name: 'Composite',
              className: 'ShippingAddress'
            }
          },
          deliveryPackage: {
            required: false,
            readOnly: true,
            serializedName: 'deliveryPackage',
            type: {
              name: 'Composite',
              className: 'PackageShippingDetails'
            }
          },
          returnPackage: {
            required: false,
            readOnly: true,
            serializedName: 'returnPackage',
            type: {
              name: 'Composite',
              className: 'PackageShippingDetails'
            }
          },
          destinationAccountDetails: {
            required: true,
            serializedName: 'destinationAccountDetails',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DestinationAccountDetailsElementType',
                  type: {
                    name: 'Composite',
                    className: 'DestinationAccountDetails'
                  }
              }
            }
          },
          errorDetails: {
            required: false,
            readOnly: true,
            serializedName: 'errorDetails',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'JobErrorDetailsElementType',
                  type: {
                    name: 'Composite',
                    className: 'JobErrorDetails'
                  }
              }
            }
          },
          preferences: {
            required: false,
            serializedName: 'preferences',
            type: {
              name: 'Composite',
              className: 'Preferences'
            }
          },
          copyLogDetails: {
            required: false,
            readOnly: true,
            serializedName: 'copyLogDetails',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CopyLogDetailsElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: 'copyLogDetailsType',
                      clientName: 'copyLogDetailsType'
                    },
                    uberParent: 'CopyLogDetails',
                    className: 'CopyLogDetails'
                  }
              }
            }
          },
          reverseShipmentLabelSasKey: {
            required: false,
            readOnly: true,
            serializedName: 'reverseShipmentLabelSasKey',
            type: {
              name: 'String'
            }
          },
          chainOfCustodySasKey: {
            required: false,
            readOnly: true,
            serializedName: 'chainOfCustodySasKey',
            type: {
              name: 'String'
            }
          },
          jobDetailsType: {
            required: true,
            serializedName: 'jobDetailsType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = JobDetails;