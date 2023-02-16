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
 * A product feed.
 * @export
 * @interface ProductModelsReadFeed
 */
export interface ProductModelsReadFeed {
    /**
     * The feed id.
     * @type {number}
     * @memberof ProductModelsReadFeed
     */
    feedId?: number;
    /**
     * The feed name.
     * @type {string}
     * @memberof ProductModelsReadFeed
     */
    name?: string;
    /**
     * The url to the feed.
     * @type {string}
     * @memberof ProductModelsReadFeed
     */
    url?: string;
    /**
     * The name of the feed layout.
     * @type {string}
     * @memberof ProductModelsReadFeed
     */
    layout?: string;
    /**
     * The market of the feed.
     * @type {number}
     * @memberof ProductModelsReadFeed
     */
    market?: number;
    /**
     * The language code of the feed.
     * @type {string}
     * @memberof ProductModelsReadFeed
     */
    language?: string;
    /**
     * The default currency for the market
     * @type {string}
     * @memberof ProductModelsReadFeed
     */
    defaultCurrency?: string;
    /**
     * The default country for the market
     * @type {string}
     * @memberof ProductModelsReadFeed
     */
    defaultCountry?: string;
}

/**
 * Check if a given object implements the ProductModelsReadFeed interface.
 */
export function instanceOfProductModelsReadFeed(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductModelsReadFeedFromJSON(json: any): ProductModelsReadFeed {
    return ProductModelsReadFeedFromJSONTyped(json, false);
}

export function ProductModelsReadFeedFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductModelsReadFeed {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'feedId': !exists(json, 'FeedId') ? undefined : json['FeedId'],
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'url': !exists(json, 'Url') ? undefined : json['Url'],
        'layout': !exists(json, 'Layout') ? undefined : json['Layout'],
        'market': !exists(json, 'Market') ? undefined : json['Market'],
        'language': !exists(json, 'Language') ? undefined : json['Language'],
        'defaultCurrency': !exists(json, 'DefaultCurrency') ? undefined : json['DefaultCurrency'],
        'defaultCountry': !exists(json, 'DefaultCountry') ? undefined : json['DefaultCountry'],
    };
}

export function ProductModelsReadFeedToJSON(value?: ProductModelsReadFeed | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'FeedId': value.feedId,
        'Name': value.name,
        'Url': value.url,
        'Layout': value.layout,
        'Market': value.market,
        'Language': value.language,
        'DefaultCurrency': value.defaultCurrency,
        'DefaultCountry': value.defaultCountry,
    };
}

