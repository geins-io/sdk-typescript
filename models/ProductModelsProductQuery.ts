/* tslint:disable */
/* eslint-disable */
/**
 * Geins Management API
 *  Geins Management API is an RESTful api to power your applications who manages your geins services. Geins provides an easy-to-use and scalable solution for managing all aspects of an online store, from product listings and customer information to order processing and payment transactions.   :::tip With this API, you can build custom applications and integrate with third-party systems, dashboards and other bussiness logic apps. :::    ## Getting started Once you have created an account, you can start using the Management API by creating an `API key`. You can create as many API keys as you need. Each `API key` is connected to a specific account so you can keep track of operations and manage keys. You can find your `API key` in the `geins merchant center`.   ### Fast track Use one of our [SDKs](https://docs.geins.io/docs/sdk/introduction) to get started quickly. The SDKs are available for the most popular programming languages and frameworks.  Or, if you prefer to just take it for a test run:  [![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/25895885-aaf6598f-1a7c-4949-85d7-ba846c42d553?action=collection%2Ffork&collection-url=entityId%3D25895885-aaf6598f-1a7c-4949-85d7-ba846c42d553%26entityType%3Dcollection%26workspaceId%3Da2a179ce-158e-46b0-8d06-e9640f45112c)  ### Authentication Two authentication methods are supported:   - `API Key`   - `Basic Auth` 
 *
 * The version of the OpenAPI document: v1.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * A prroduct query.
 * @export
 * @interface ProductModelsProductQuery
 */
export interface ProductModelsProductQuery {
    /**
     * Limits query to products updated after the specified date.
     * @type {Date}
     * @memberof ProductModelsProductQuery
     */
    updatedAfter?: Date;
    /**
     * Limits query to only include the supplied product ids.
     * @type {Array<number>}
     * @memberof ProductModelsProductQuery
     */
    productIds?: Array<number>;
    /**
     * Limits query to only include products with supplied article numbers.
     * @type {Array<string>}
     * @memberof ProductModelsProductQuery
     */
    articleNumbers?: Array<string>;
    /**
     * Limits query to only include products that are available for purchase
     * @type {boolean}
     * @memberof ProductModelsProductQuery
     */
    onlySellable?: boolean;
    /**
     * Limits query to only include products contained in the specified feed.
     * @type {number}
     * @memberof ProductModelsProductQuery
     */
    feedId?: number;
    /**
     * Used to fetch products where the result set is split into batches
     * @type {string}
     * @memberof ProductModelsProductQuery
     */
    batchId?: string;
}

/**
 * Check if a given object implements the ProductModelsProductQuery interface.
 */
export function instanceOfProductModelsProductQuery(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductModelsProductQueryFromJSON(json: any): ProductModelsProductQuery {
    return ProductModelsProductQueryFromJSONTyped(json, false);
}

export function ProductModelsProductQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductModelsProductQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'updatedAfter': !exists(json, 'UpdatedAfter') ? undefined : (new Date(json['UpdatedAfter'])),
        'productIds': !exists(json, 'ProductIds') ? undefined : json['ProductIds'],
        'articleNumbers': !exists(json, 'ArticleNumbers') ? undefined : json['ArticleNumbers'],
        'onlySellable': !exists(json, 'OnlySellable') ? undefined : json['OnlySellable'],
        'feedId': !exists(json, 'FeedId') ? undefined : json['FeedId'],
        'batchId': !exists(json, 'BatchId') ? undefined : json['BatchId'],
    };
}

export function ProductModelsProductQueryToJSON(value?: ProductModelsProductQuery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'UpdatedAfter': value.updatedAfter === undefined ? undefined : (value.updatedAfter.toISOString()),
        'ProductIds': value.productIds,
        'ArticleNumbers': value.articleNumbers,
        'OnlySellable': value.onlySellable,
        'FeedId': value.feedId,
        'BatchId': value.batchId,
    };
}

