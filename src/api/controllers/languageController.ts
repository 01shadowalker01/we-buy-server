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
import { Get, Put, Delete, Param, QueryParam, Post, Body, JsonController, Authorized, Req, Res} from 'routing-controllers';
import {Language} from '../models/language';
import {CreateLanguage} from './requests/createLanguageRequest';
import {LanguageService} from '../services/languageService';
import {env} from '../../env';
import {S3Service} from '../services/S3Service';
import {ImageService} from '../services/ImageService';

@JsonController('/language')
export class LanguageController {
    constructor(private languageService: LanguageService, private imageService: ImageService,
                private s3Service: S3Service) {
    }

    // Create Language API
    /**
     * @api {post} /api/language/add-language Add Language API
     * @apiGroup Language
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {String} name Language name
     * @apiParam (Request body) {String} code Language code
     * @apiParam (Request body) {String} image Language image
     * @apiParam (Request body) {Number} sortOrder Language sortOrder
     * @apiParam (Request body) {Number} status Language status
     * @apiParamExample {json} Input
     * {
     *      "name" : "",
     *      "code" : "",
     *      "image" : "",
     *      "sortOrder" : "",
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully created new Language.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/language/add-language
     * @apiErrorExample {json} Language error
     * HTTP/1.1 500 Internal Server Error
     */
    @Post('/add-language')
    @Authorized()
    public async addLanguage(@Body({validate: true}) languageParam: CreateLanguage, @Res() response: any): Promise<any> {
        const image = languageParam.image;
        const newLanguage = new Language();
        if (image) {
            const type = image.split(';')[0].split('/')[1];
            const name = 'Img_' + Date.now() + '.' + type;
            const path = 'language/';
            const base64Data = new Buffer(image.replace(/^data:image\/\w+;base64,/, ''), 'base64');
            if (env.imageserver === 's3') {
                await this.s3Service.imageUpload((path + name), base64Data, type);
            } else {
                await this.imageService.imageUpload((path + name), base64Data);
            }
            newLanguage.image = name;
            newLanguage.imagePath = path;
        }
        newLanguage.name = languageParam.name;
        newLanguage.code = languageParam.code;
        newLanguage.sortOrder = languageParam.sortOrder;
        newLanguage.isActive = languageParam.status;
        const languageSave = await this.languageService.create(newLanguage);
        if (languageSave) {
            const successResponse: any = {
                status: 1,
                message: 'Successfully added a new language.',
                data: languageSave,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'unable to create language',
            };
            return response.status(400).send(errorResponse);
        }
    }
    // Language List API
    /**
     * @api {get} /api/language/languageList Language List API
     * @apiGroup Language
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {String} status inactive-> 0, active-> 1
     * @apiParam (Request body) {Number} count count should be number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get language list",
     *      "data":{
     *      "languageId"
     *      "name"
     *      "code"
     *      "sortOrder"
     *      }
     *      "status": "1"
     * }
     * @apiSampleRequest /api/language/languagelist
     * @apiErrorExample {json} Language error
     * HTTP/1.1 500 Internal Server Error
     */
    @Get('/languagelist')
    @Authorized()
    public async languageList(@QueryParam('limit') limit: number, @QueryParam('offset') offset: number, @QueryParam('keyword') keyword: string,  @QueryParam('status') status: string, @QueryParam('count')count: number|boolean, @Res() response: any): Promise<any> {
        const select = ['languageId', 'name', 'code', 'image', 'imagePath', 'sortOrder', 'isActive'];
        const search = [
            {
                name    : 'name',
                op      : 'like',
                value   : keyword,
            },
            {
                name    : 'isActive',
                op      : 'like',
                value   : status,
            },
        ];
        const WhereConditions = [];
        const languageList = await this.languageService.list(limit, offset , select, search, WhereConditions, count);
        if (languageList) {
            const successResponse: any = {
                status: 1,
                message: 'successfully got the complete language list.',
                data: languageList,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'unable to list language',
            };
            return response.status(400).send(errorResponse);
        }
    }
    // Update Language API
    /**
     * @api {put} /api/language/update-language/:id Update Language API
     * @apiGroup Language
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {String} name Language name
     * @apiParam (Request body) {String} code Language code
     * @apiParam (Request body) {String} image Language image
     * @apiParam (Request body) {Number} sortOrder Language sortOrder
     * @apiParam (Request body) {Number} status Language status
     * @apiParamExample {json} Input
     * {
     *      "name" : "",
     *      "code" : "",
     *      "image" : "",
     *      "sortOrder" : "",
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully updated language.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/language/update-language/:id
     * @apiErrorExample {json} language error
     * HTTP/1.1 500 Internal Server Error
     */
    @Put('/update-language/:id')
    @Authorized()
    public async updateLanguage(@Param('id')id: number, @Body({validate: true}) languageParam: CreateLanguage, @Res() response: any): Promise<any> {
        const language = await this.languageService.findOne({
            where: {
                languageId: id,
            },
        });
        if (!language) {
            const errorResponse: any = {
                status: 0,
                message: 'Invalid languageId',
            };
            return response.status(400).send(errorResponse);
        }
        const image = languageParam.image;
        if (image) {
            const type = image.split(';')[0].split('/')[1];
            const name = 'Img_' + Date.now() + '.' + type;
            const path = 'language/';
            const base64Data = new Buffer(image.replace(/^data:image\/\w+;base64,/, ''), 'base64');
            if (env.imageserver === 's3') {
                await this.s3Service.imageUpload((path + name), base64Data, type);
            } else {
                await this.imageService.imageUpload((path + name), base64Data);
            }
            language.image = name;
            language.imagePath = path;
        }
        language.name = languageParam.name;
        language.code = languageParam.code;
        language.sortOrder = languageParam.sortOrder;
        language.isActive = languageParam.status;
        const languageSave = await this.languageService.create(language);

        if (languageSave) {
            const successResponse: any = {
                status: 1,
                message: 'Sucessfully updated the language.',
                data: languageSave,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'unable to update language',
            };
            return response.status(400).send(errorResponse);
        }
    }

    // Delete Language API
    /**
     * @api {delete} /api/language/delete-language/:id Delete Language API
     * @apiGroup Language
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "languageId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully deleted language.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/language/delete-language/:id
     * @apiErrorExample {json} Language error
     * HTTP/1.1 500 Internal Server Error
     */
    @Delete('/delete-language/:id')
    @Authorized()
    public async deleteLanguage(@Param('id')id: number, @Res() response: any, @Req() request: any): Promise<any> {

        const language = await this.languageService.findOne({
            where: {
                languageId: id,
            },
        });
        if (!language) {
            const errorResponse: any = {
                status: 0,
                message: 'Invalid languageId',
            };
            return response.status(400).send(errorResponse);
        }

        const deleteLanguage = await this.languageService.delete(language);
        console.log('language' + deleteLanguage);
        if (deleteLanguage) {
            const successResponse: any = {
                status: 1,
                message: 'Successfully deleted the language. ',
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'unable to delete language',
            };
            return response.status(400).send(errorResponse);
        }
    }
}
