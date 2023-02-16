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
 * An existing product parameter.
 * @export
 * @interface ProductParameterModelsReadProductParameter
 */
export interface ProductParameterModelsReadProductParameter {
    /**
     * The unique identifier for the parameter.
     * @type {number}
     * @memberof ProductParameterModelsReadProductParameter
     */
    parameterId?: number;
    /**
     * The unique identifier of the group that this parameter belongs to.
     * @type {number}
     * @memberof ProductParameterModelsReadProductParameter
     */
    groupId?: number;
    /**
     * The name of the group that this parameter belongs to.
     * @type {string}
     * @memberof ProductParameterModelsReadProductParameter
     */
    groupName?: string;
    /**
     * The type of parameter.
     * @type {number}
     * @memberof ProductParameterModelsReadProductParameter
     */
    parameterType?: ProductParameterModelsReadProductParameterParameterTypeEnum;
    /**
     * The non-localized name of the parameter.
     * @type {string}
     * @memberof ProductParameterModelsReadProductParameter
     */
    name?: string;
}


/**
 * @export
 */
export const ProductParameterModelsReadProductParameterParameterTypeEnum = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
    NUMBER_6: 6,
    NUMBER_7: 7
} as const;
export type ProductParameterModelsReadProductParameterParameterTypeEnum = typeof ProductParameterModelsReadProductParameterParameterTypeEnum[keyof typeof ProductParameterModelsReadProductParameterParameterTypeEnum];


/**
 * Check if a given object implements the ProductParameterModelsReadProductParameter interface.
 */
export function instanceOfProductParameterModelsReadProductParameter(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductParameterModelsReadProductParameterFromJSON(json: any): ProductParameterModelsReadProductParameter {
    return ProductParameterModelsReadProductParameterFromJSONTyped(json, false);
}

export function ProductParameterModelsReadProductParameterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductParameterModelsReadProductParameter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'parameterId': !exists(json, 'ParameterId') ? undefined : json['ParameterId'],
        'groupId': !exists(json, 'GroupId') ? undefined : json['GroupId'],
        'groupName': !exists(json, 'GroupName') ? undefined : json['GroupName'],
        'parameterType': !exists(json, 'ParameterType') ? undefined : json['ParameterType'],
        'name': !exists(json, 'Name') ? undefined : json['Name'],
    };
}

export function ProductParameterModelsReadProductParameterToJSON(value?: ProductParameterModelsReadProductParameter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ParameterId': value.parameterId,
        'GroupId': value.groupId,
        'GroupName': value.groupName,
        'ParameterType': value.parameterType,
        'Name': value.name,
    };
}

