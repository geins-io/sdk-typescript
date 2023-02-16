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
 * 
 * @export
 * @interface ProductModelsMonitorSku
 */
export interface ProductModelsMonitorSku {
    /**
     * 
     * @type {number}
     * @memberof ProductModelsMonitorSku
     */
    siteId?: number;
    /**
     * 
     * @type {string}
     * @memberof ProductModelsMonitorSku
     */
    languageCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductModelsMonitorSku
     */
    email?: string;
    /**
     * 
     * @type {number}
     * @memberof ProductModelsMonitorSku
     */
    skuId?: number;
}

/**
 * Check if a given object implements the ProductModelsMonitorSku interface.
 */
export function instanceOfProductModelsMonitorSku(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductModelsMonitorSkuFromJSON(json: any): ProductModelsMonitorSku {
    return ProductModelsMonitorSkuFromJSONTyped(json, false);
}

export function ProductModelsMonitorSkuFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductModelsMonitorSku {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'siteId': !exists(json, 'SiteId') ? undefined : json['SiteId'],
        'languageCode': !exists(json, 'LanguageCode') ? undefined : json['LanguageCode'],
        'email': !exists(json, 'Email') ? undefined : json['Email'],
        'skuId': !exists(json, 'SkuId') ? undefined : json['SkuId'],
    };
}

export function ProductModelsMonitorSkuToJSON(value?: ProductModelsMonitorSku | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'SiteId': value.siteId,
        'LanguageCode': value.languageCode,
        'Email': value.email,
        'SkuId': value.skuId,
    };
}

