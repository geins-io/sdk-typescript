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
  EnvelopePageAreaModelsReadPageArea,
  EnvelopePageAreaModelsReadPageAreaFamily,
  PageAreaModelsReadPageArea,
  PageAreaModelsReadPageAreaFamily,
  PageAreaModelsWritePageArea,
  PageAreaModelsWritePageAreaFamily,
} from '../models';
import {
    EnvelopePageAreaModelsReadPageAreaFromJSON,
    EnvelopePageAreaModelsReadPageAreaToJSON,
    EnvelopePageAreaModelsReadPageAreaFamilyFromJSON,
    EnvelopePageAreaModelsReadPageAreaFamilyToJSON,
    PageAreaModelsReadPageAreaFromJSON,
    PageAreaModelsReadPageAreaToJSON,
    PageAreaModelsReadPageAreaFamilyFromJSON,
    PageAreaModelsReadPageAreaFamilyToJSON,
    PageAreaModelsWritePageAreaFromJSON,
    PageAreaModelsWritePageAreaToJSON,
    PageAreaModelsWritePageAreaFamilyFromJSON,
    PageAreaModelsWritePageAreaFamilyToJSON,
} from '../models';

export interface CreateOrUpdateAPageAreaRequest {
    area: PageAreaModelsWritePageArea;
}

export interface CreateOrUpdatePageAreaFamilyRequest {
    family: PageAreaModelsWritePageAreaFamily;
}

export interface GetPageAreaRequest {
    name: string;
}

export interface GetPageAreaFamilyRequest {
    familyId: number;
}

/**
 * 
 */
export class PageAreaApi extends runtime.BaseAPI {

    /**
     * Create or update a page area
     */
    async createOrUpdateAPageAreaRaw(requestParameters: CreateOrUpdateAPageAreaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopePageAreaModelsReadPageArea>> {
        if (requestParameters.area === null || requestParameters.area === undefined) {
            throw new runtime.RequiredError('area','Required parameter requestParameters.area was null or undefined when calling createOrUpdateAPageArea.');
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
            path: `/API/PageArea`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PageAreaModelsWritePageAreaToJSON(requestParameters.area),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopePageAreaModelsReadPageAreaFromJSON(jsonValue));
    }

    /**
     * Create or update a page area
     */
    async createOrUpdateAPageArea(requestParameters: CreateOrUpdateAPageAreaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopePageAreaModelsReadPageArea> {
        const response = await this.createOrUpdateAPageAreaRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create or update a page area family
     */
    async createOrUpdatePageAreaFamilyRaw(requestParameters: CreateOrUpdatePageAreaFamilyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvelopePageAreaModelsReadPageAreaFamily>> {
        if (requestParameters.family === null || requestParameters.family === undefined) {
            throw new runtime.RequiredError('family','Required parameter requestParameters.family was null or undefined when calling createOrUpdatePageAreaFamily.');
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
            path: `/API/PageAreaFamily`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PageAreaModelsWritePageAreaFamilyToJSON(requestParameters.family),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvelopePageAreaModelsReadPageAreaFamilyFromJSON(jsonValue));
    }

    /**
     * Create or update a page area family
     */
    async createOrUpdatePageAreaFamily(requestParameters: CreateOrUpdatePageAreaFamilyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvelopePageAreaModelsReadPageAreaFamily> {
        const response = await this.createOrUpdatePageAreaFamilyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a specific page area
     */
    async getPageAreaRaw(requestParameters: GetPageAreaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageAreaModelsReadPageArea>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getPageArea.');
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
            path: `/API/PageArea/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PageAreaModelsReadPageAreaFromJSON(jsonValue));
    }

    /**
     * Get a specific page area
     */
    async getPageArea(requestParameters: GetPageAreaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageAreaModelsReadPageArea> {
        const response = await this.getPageAreaRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a specific page area family
     */
    async getPageAreaFamilyRaw(requestParameters: GetPageAreaFamilyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PageAreaModelsReadPageAreaFamily>> {
        if (requestParameters.familyId === null || requestParameters.familyId === undefined) {
            throw new runtime.RequiredError('familyId','Required parameter requestParameters.familyId was null or undefined when calling getPageAreaFamily.');
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
            path: `/API/PageAreaFamily/{familyId}`.replace(`{${"familyId"}}`, encodeURIComponent(String(requestParameters.familyId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PageAreaModelsReadPageAreaFamilyFromJSON(jsonValue));
    }

    /**
     * Get a specific page area family
     */
    async getPageAreaFamily(requestParameters: GetPageAreaFamilyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PageAreaModelsReadPageAreaFamily> {
        const response = await this.getPageAreaFamilyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a list of all page area families, including nested data
     */
    async listPageAreaFamiliesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<PageAreaModelsReadPageAreaFamily>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-apikey"] = this.configuration.apiKey("x-apikey"); // apiKey authentication
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/API/PageAreaFamily/List`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PageAreaModelsReadPageAreaFamilyFromJSON));
    }

    /**
     * Gets a list of all page area families, including nested data
     */
    async listPageAreaFamilies(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<PageAreaModelsReadPageAreaFamily>> {
        const response = await this.listPageAreaFamiliesRaw(initOverrides);
        return await response.value();
    }

}