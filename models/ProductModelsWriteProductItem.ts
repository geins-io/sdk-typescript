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
 * A product item belonging to a product.
 * @export
 * @interface ProductModelsWriteProductItem
 */
export interface ProductModelsWriteProductItem {
    /**
     * Id of the product item.
     * @type {number}
     * @memberof ProductModelsWriteProductItem
     */
    itemId?: number;
    /**
     * The article number for the product item.
     * @type {string}
     * @memberof ProductModelsWriteProductItem
     */
    articleNumber?: string;
    /**
     * The name of the product item.
     * @type {string}
     * @memberof ProductModelsWriteProductItem
     */
    name?: string;
    /**
     * The shelf name where the product item can be found.
     * @type {string}
     * @memberof ProductModelsWriteProductItem
     */
    shelf?: string;
    /**
     * The weight of the item in grams (g).
     * @type {number}
     * @memberof ProductModelsWriteProductItem
     */
    weight?: number;
    /**
     * The length of the item in millimeters (mm).
     * @type {number}
     * @memberof ProductModelsWriteProductItem
     */
    length?: number;
    /**
     * The width of the item in millimeters (mm).
     * @type {number}
     * @memberof ProductModelsWriteProductItem
     */
    width?: number;
    /**
     * The height of the item in millimeters (mm).
     * @type {number}
     * @memberof ProductModelsWriteProductItem
     */
    height?: number;
    /**
     * The GTIN number for the item.
     * @type {string}
     * @memberof ProductModelsWriteProductItem
     */
    gtin?: string;
    /**
     * The current state of the item.
     * @type {boolean}
     * @memberof ProductModelsWriteProductItem
     */
    active?: boolean;
    /**
     * External Id of the product item.
     * @type {string}
     * @memberof ProductModelsWriteProductItem
     */
    externalId?: string;
}

/**
 * Check if a given object implements the ProductModelsWriteProductItem interface.
 */
export function instanceOfProductModelsWriteProductItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductModelsWriteProductItemFromJSON(json: any): ProductModelsWriteProductItem {
    return ProductModelsWriteProductItemFromJSONTyped(json, false);
}

export function ProductModelsWriteProductItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductModelsWriteProductItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'itemId': !exists(json, 'ItemId') ? undefined : json['ItemId'],
        'articleNumber': !exists(json, 'ArticleNumber') ? undefined : json['ArticleNumber'],
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'shelf': !exists(json, 'Shelf') ? undefined : json['Shelf'],
        'weight': !exists(json, 'Weight') ? undefined : json['Weight'],
        'length': !exists(json, 'Length') ? undefined : json['Length'],
        'width': !exists(json, 'Width') ? undefined : json['Width'],
        'height': !exists(json, 'Height') ? undefined : json['Height'],
        'gtin': !exists(json, 'Gtin') ? undefined : json['Gtin'],
        'active': !exists(json, 'Active') ? undefined : json['Active'],
        'externalId': !exists(json, 'ExternalId') ? undefined : json['ExternalId'],
    };
}

export function ProductModelsWriteProductItemToJSON(value?: ProductModelsWriteProductItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ItemId': value.itemId,
        'ArticleNumber': value.articleNumber,
        'Name': value.name,
        'Shelf': value.shelf,
        'Weight': value.weight,
        'Length': value.length,
        'Width': value.width,
        'Height': value.height,
        'Gtin': value.gtin,
        'Active': value.active,
        'ExternalId': value.externalId,
    };
}

