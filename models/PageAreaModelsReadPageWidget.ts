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
 * The API-representation of page widgets
 * @export
 * @interface PageAreaModelsReadPageWidget
 */
export interface PageAreaModelsReadPageWidget {
    /**
     * The IDs of widgets are immutable (determined by each view model implementation, in the namespace Carismar.Core)
     * @type {string}
     * @memberof PageAreaModelsReadPageWidget
     */
    id?: string;
    /**
     * The static name of this widget. Used to translate into icons, or to append to css-classes.
     * @type {string}
     * @memberof PageAreaModelsReadPageWidget
     */
    name?: string;
    /**
     * The name of the widget-type
     * @type {string}
     * @memberof PageAreaModelsReadPageWidget
     */
    type?: string;
    /**
     * Decides if this {PageArea.Models.Read.PageWidget} is active or not
     * @type {boolean}
     * @memberof PageAreaModelsReadPageWidget
     */
    active?: boolean;
    /**
     * Holds all CSS Class names that this widget should render
     * @type {Array<string>}
     * @memberof PageAreaModelsReadPageWidget
     */
    classNames?: Array<string>;
    /**
     * The fractional size for this widget in it's container.
     * @type {string}
     * @memberof PageAreaModelsReadPageWidget
     */
    size?: string;
    /**
     * The configuration for this {PageArea.Models.Read.PageWidget}
     * @type {string}
     * @memberof PageAreaModelsReadPageWidget
     */
    _configuration?: string;
}

/**
 * Check if a given object implements the PageAreaModelsReadPageWidget interface.
 */
export function instanceOfPageAreaModelsReadPageWidget(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PageAreaModelsReadPageWidgetFromJSON(json: any): PageAreaModelsReadPageWidget {
    return PageAreaModelsReadPageWidgetFromJSONTyped(json, false);
}

export function PageAreaModelsReadPageWidgetFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageAreaModelsReadPageWidget {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'Id') ? undefined : json['Id'],
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'type': !exists(json, 'Type') ? undefined : json['Type'],
        'active': !exists(json, 'Active') ? undefined : json['Active'],
        'classNames': !exists(json, 'ClassNames') ? undefined : json['ClassNames'],
        'size': !exists(json, 'Size') ? undefined : json['Size'],
        '_configuration': !exists(json, 'Configuration') ? undefined : json['Configuration'],
    };
}

export function PageAreaModelsReadPageWidgetToJSON(value?: PageAreaModelsReadPageWidget | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Id': value.id,
        'Name': value.name,
        'Type': value.type,
        'Active': value.active,
        'ClassNames': value.classNames,
        'Size': value.size,
        'Configuration': value._configuration,
    };
}

