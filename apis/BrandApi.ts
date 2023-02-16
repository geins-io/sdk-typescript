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


import * as runtime from '../runtime';
import type {
  BrandModelsBrandQuery,
  BrandModelsReadBrand,
  BrandModelsWriteBrand,
  EnvelopeBrandModelsReadBrand,
} from '../models';
import {
    BrandModelsBrandQueryFromJSON,
    BrandModelsBrandQueryToJSON,
    BrandModelsReadBrandFromJSON,
    BrandModelsReadBrandToJSON,
    BrandModelsWriteBrandFromJSON,
    BrandModelsWriteBrandToJSON,
    EnvelopeBrandModelsReadBrandFromJSON,
    EnvelopeBrandModelsReadBrandToJSON,
} from '../models';

export interface CreateBrandRequest {
    brand: BrandModelsWriteBrand;
}

export interface GetBrandByIdRequest {
    id: number;
}

export interface QueryBrandsRequest {
    query: BrandModelsBrandQuery;
}

export interface UpdateBrandRequest {
    id: number;
    brand: BrandModelsWriteBrand;
}

/**
 * 
 */
export class BrandApi extends runtime.BaseAPI {

    /**
     * Create a new brand
     */
    async createBrandRaw(requestParameters: CreateBrandRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeBrandModelsReadBrand>> {
        if (requestParameters.brand === null || requestParameters.brand === undefined) {
            throw new runtime.RequiredError('brand','Required parameter requestParameters.brand was null or undefined when calling createBrand.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-apikey"] = this.configuration.apiKey("x-apikey"); // apiKey authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/API/Brand`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BrandModelsWriteBrandToJSON(requestParameters.brand),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeBrandModelsReadBrandFromJSON(jsonValue));
    }

    /**
     * Create a new brand
     */
    async createBrand(requestParameters: CreateBrandRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeBrandModelsReadBrand> {
        const response = await this.createBrandRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a specific brand
     */
    async getBrandByIdRaw(requestParameters: GetBrandByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeBrandModelsReadBrand>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getBrandById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-apikey"] = this.configuration.apiKey("x-apikey"); // apiKey authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/API/Brand/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeBrandModelsReadBrandFromJSON(jsonValue));
    }

    /**
     * Get a specific brand
     */
    async getBrandById(requestParameters: GetBrandByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeBrandModelsReadBrand> {
        const response = await this.getBrandByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Query brands
     */
    async queryBrandsRaw(requestParameters: QueryBrandsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<BrandModelsReadBrand>>> {
        if (requestParameters.query === null || requestParameters.query === undefined) {
            throw new runtime.RequiredError('query','Required parameter requestParameters.query was null or undefined when calling queryBrands.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-apikey"] = this.configuration.apiKey("x-apikey"); // apiKey authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/API/Brand/Query`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BrandModelsBrandQueryToJSON(requestParameters.query),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BrandModelsReadBrandFromJSON));
    }

    /**
     * Query brands
     */
    async queryBrands(requestParameters: QueryBrandsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<BrandModelsReadBrand>> {
        const response = await this.queryBrandsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Leaving out a property will ensure no changes are made to that property.  Collection properties will delete and/or add as necessary to match the supplied data.
     * Updates a brand
     */
    async updateBrandRaw(requestParameters: UpdateBrandRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopeBrandModelsReadBrand>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateBrand.');
        }

        if (requestParameters.brand === null || requestParameters.brand === undefined) {
            throw new runtime.RequiredError('brand','Required parameter requestParameters.brand was null or undefined when calling updateBrand.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-apikey"] = this.configuration.apiKey("x-apikey"); // apiKey authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/API/Brand/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: BrandModelsWriteBrandToJSON(requestParameters.brand),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopeBrandModelsReadBrandFromJSON(jsonValue));
    }

    /**
     * Leaving out a property will ensure no changes are made to that property.  Collection properties will delete and/or add as necessary to match the supplied data.
     * Updates a brand
     */
    async updateBrand(requestParameters: UpdateBrandRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopeBrandModelsReadBrand> {
        const response = await this.updateBrandRaw(requestParameters, initOverrides);
        return await response.value();
    }

}