/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * ARM resource.
 *
 * @member {string} [id] Resource ID.
 * @member {string} [name] Resource name.
 * @member {string} [type] Resource type.
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
}

/**
 * @class
 * Initializes a new instance of the AgreementTerms class.
 * @constructor
 * Terms properties for provided Publisher/Offer/Plan tuple
 *
 * @member {string} [publisher] Publisher identifier string of image being
 * deployed.
 * @member {string} [product] Offer identifier string of image being deployed.
 * @member {string} [plan] Plan identifier string of image being deployed.
 * @member {string} [licenseTextLink] Link to HTML with Microsoft and Publisher
 * terms.
 * @member {string} [privacyPolicyLink] Link to the privacy policy of the
 * publisher.
 * @member {date} [retrieveDatetime] Date and time in UTC of when the terms
 * were accepted. This is empty if Accepted is false.
 * @member {string} [signature] Terms signature.
 * @member {boolean} [accepted] If any version of the terms have been accepted,
 * otherwise false.
 */
export interface AgreementTerms extends Resource {
  publisher?: string;
  product?: string;
  plan?: string;
  licenseTextLink?: string;
  privacyPolicyLink?: string;
  retrieveDatetime?: Date;
  signature?: string;
  accepted?: boolean;
}

/**
 * @class
 * Initializes a new instance of the ErrorResponseError class.
 * @constructor
 * The details of the error.
 *
 * @member {string} [code] Error code.
 * @member {string} [message] Error message indicating why the operation
 * failed.
 */
export interface ErrorResponseError {
  readonly code?: string;
  readonly message?: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorResponse class.
 * @constructor
 * Error reponse indicates Microsoft.MarketplaceOrdering service is not able to
 * process the incoming request. The reason is provided in the error message.
 *
 * @member {object} [error] The details of the error.
 * @member {string} [error.code] Error code.
 * @member {string} [error.message] Error message indicating why the operation
 * failed.
 */
export interface ErrorResponse {
  error?: ErrorResponseError;
}

/**
 * @class
 * Initializes a new instance of the OperationDisplay class.
 * @constructor
 * The object that represents the operation.
 *
 * @member {string} [provider] Service provider: Microsoft.MarketplaceOrdering
 * @member {string} [resource] Resource on which the operation is performed:
 * Agreement, virtualmachine, etc.
 * @member {string} [operation] Operation type: Get Agreement, Sign Agreement,
 * Cancel Agreement etc.
 */
export interface OperationDisplay {
  provider?: string;
  resource?: string;
  operation?: string;
}

/**
 * @class
 * Initializes a new instance of the Operation class.
 * @constructor
 * Microsoft.MarketplaceOrdering REST API operation
 *
 * @member {string} [name] Operation name: {provider}/{resource}/{operation}
 * @member {object} [display] The object that represents the operation.
 * @member {string} [display.provider] Service provider:
 * Microsoft.MarketplaceOrdering
 * @member {string} [display.resource] Resource on which the operation is
 * performed: Agreement, virtualmachine, etc.
 * @member {string} [display.operation] Operation type: Get Agreement, Sign
 * Agreement, Cancel Agreement etc.
 */
export interface Operation {
  name?: string;
  display?: OperationDisplay;
}


/**
 * @class
 * Initializes a new instance of the OperationListResult class.
 * @constructor
 * Result of the request to list MarketplaceOrdering operations. It contains a
 * list of operations and a URL link to get the next set of results.
 *
 * @member {string} [nextLink] URL to get the next set of operation list
 * results if there are any.
 */
export interface OperationListResult extends Array<Operation> {
  readonly nextLink?: string;
}
