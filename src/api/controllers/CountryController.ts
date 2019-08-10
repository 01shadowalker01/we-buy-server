/*
 * spurtcommerce API
 * version 2.2
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import 'reflect-metadata';
import {
    Get,
    Put,
    Delete,
    Post,
    Body,
    JsonController,
    Authorized,
    Res,
    Req,
    Param,
    QueryParam
} from 'routing-controllers';
import {CreateCountry} from './requests/createCountryRequest';
import {Country} from '../models/country';
import {CountryService} from '../services/countryService';
import {UpdateCountry} from './requests/updateCountryRequest';

@JsonController('/country')
export class CountryController {
    constructor(private countryService: CountryService) {
    }

    // Create Country API
    /**
     * @api {post} /api/country/add-country Add Country API
     * @apiGroup Country
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {String} name Country name
     * @apiParam (Request body) {String} isoCode2 Country isoCode2
     * @apiParam (Request body) {String} isoCode3 Country isoCode3
     * @apiParam (Request body) {Number} postcodeRequired Country postcodeRequired
     * @apiParam (Request body) {Number} status Country status field required
     * @apiParamExample {json} Input
     * {
     *      "name" : "",
     *      "isoCode2" : "",
     *      "isoCode3" : "",
     *      "addressFormat" : "",
     *      "postcodeRequired" : "",
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully created new Country.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/country/add-country
     * @apiErrorExample {json} Country error
     * HTTP/1.1 500 Internal Server Error
     */
    @Post('/add-country')
    @Authorized()
    public async addCountry(@Body({validate: true}) countryParam: CreateCountry, @Res() response: any): Promise<any> {
        const existCountry = await this.countryService.findOne({
            where: {
                name: countryParam.name,
                isoCode2: countryParam.isoCode2,
                isoCode3: countryParam.isoCode3,
            },
        });
        if (existCountry) {
            const errorResponse: any = {
                status: 0,
                message: 'you already added this country.',
            };
            return response.status(200).send(errorResponse);
        }
        const newCountry = new Country();
        newCountry.name = countryParam.name;
        newCountry.isoCode2 = countryParam.isoCode2;
        newCountry.isoCode3 = countryParam.isoCode3;
        newCountry.postcodeRequired = countryParam.postcodeRequired;
        newCountry.isActive = countryParam.status;
        const countrySave = await this.countryService.create(newCountry);
        if (countrySave !== undefined) {
            const successResponse: any = {
                status: 1,
                message: 'Successfully added new country.',
                data: countrySave,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Unable to add the country. ',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Update Country API
    /**
     * @api {put} /api/country/update-country/:id Update Country API
     * @apiGroup Country
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} countryId Country countryId
     * @apiParam (Request body) {String} name Country name
     * @apiParam (Request body) {String} isoCode2 Country isoCode2
     * @apiParam (Request body) {String} isoCode3 Country isoCode3
     * @apiParam (Request body) {Number} postcodeRequired Country postcodeRequired
     * @apiParam (Request body) {Number}  status status
     * @apiParamExample {json} Input
     * {
     *      "countryId" : "",
     *      "name" : "",
     *      "isoCode2" : "",
     *      "isoCode3" : "",
     *      "addressFormat" : "",
     *      "postcodeRequired" : "",
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully updated Country.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/country/update-country/:id
     * @apiErrorExample {json} Country error
     * HTTP/1.1 500 Internal Server Error
     */
    @Put('/update-country/:id')
    @Authorized()
    public async updateCountry(@Body({validate: true}) countryParam: UpdateCountry, @Res() response: any): Promise<any> {
        const country = await this.countryService.findOne({
            where: {
                countryId: countryParam.countryId,
            },
        });
        if (!country) {
            const errorResponse: any = {
                status: 0,
                message: 'Invalid countryId',
            };
            return response.status(400).send(errorResponse);
        }
        country.name = countryParam.name;
        country.isoCode2 = countryParam.isoCode2;
        country.isoCode3 = countryParam.isoCode3;
        country.postcodeRequired = countryParam.postcodeRequired;
        country.isActive = countryParam.status;
        const countrySave = await this.countryService.create(country);
        if (countrySave !== undefined) {
            const successResponse: any = {
                status: 1,
                message: 'Successfully updated country',
                data: countrySave,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'unable to update country',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Country List API
    /**
     * @api {get} /api/country/countrylist Country List API
     * @apiGroup Country
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {Number} count count should be number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully got country list",
     *      "data":{
     *      "countryId"
     *      "name"
     *      "isoCode2"
     *      "isoCode3"
     *      "addressFormat"
     *      "postcodeRequired"
     *      "status"
     *      }
     *      "status": "1"
     * }
     * @apiSampleRequest /api/country/countrylist
     * @apiErrorExample {json} Country error
     * HTTP/1.1 500 Internal Server Error
     */
    @Get('/countrylist')
    @Authorized()
    public async countryList(@QueryParam('limit') limit: number, @QueryParam('offset') offset: number, @QueryParam('keyword') keyword: string, @QueryParam('count')count: number | boolean, @Res() response: any): Promise<any> {
        const select = ['countryId', 'name', 'isoCode2', 'isoCode3', 'postcodeRequired', 'isActive'];
        const search = [
            {
                name: 'name',
                op: 'like',
                value: keyword,
            },

        ];
        const WhereConditions = [];
        const countryList = await this.countryService.list(limit, offset, select, search, WhereConditions, count);
        if (countryList) {
            const successResponse: any = {
                status: 1,
                message: 'Successfully got country List',
                data: countryList,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'unable to get countryList',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Delete Country API
    /**
     * @api {delete} /api/country/delete-country/:id Delete Country API
     * @apiGroup Country
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "countryId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully deleted Country.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/country/delete-country/:id
     * @apiErrorExample {json} Country error
     * HTTP/1.1 500 Internal Server Error
     */
    @Delete('/delete-country/:id')
    @Authorized()
    public async deleteCountry(@Param('id')id: number, @Res() response: any, @Req() request: any): Promise<any> {

        const country = await this.countryService.findOne({
            where: {
                countryId: id,
            },
        });
        if (!country) {
            const errorResponse: any = {
                status: 0,
                message: 'Invalid CountryId',
            };
            return response.status(400).send(errorResponse);
        }
        const deleteCountry = await this.countryService.delete(country);
        if (deleteCountry) {
            const successResponse: any = {
                status: 1,
                message: 'Successfully deleted country.',
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'unable to delete country',
            };
            return response.status(400).send(errorResponse);
        }
    }
}
