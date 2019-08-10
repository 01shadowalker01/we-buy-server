"use strict";
/*
 * spurtcommerce API
 * version 2.2
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const page_1 = require("../models/page");
const createPageRequest_1 = require("./requests/createPageRequest");
const pageService_1 = require("../services/pageService");
const updatePageRequest_1 = require("./requests/updatePageRequest");
let PageController = class PageController {
    constructor(pageService) {
        this.pageService = pageService;
    }
    // Create Page API
    /**
     * @api {post} /api/page/add-page Add Page API
     * @apiGroup Page
     * @apiParam (Request body) {String} title title
     * @apiParam (Request body) {String} content content
     * @apiParam (Request body) {String} metaTagTitle metaTagTitle
     * @apiParam (Request body) {String} metaTagContent metaTagContent
     * @apiParam (Request body) {String} metaTagKeyword metaTagKeyword
     * @apiParam (Request body) {Number} active active
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "title" : "",
     *      "content" : "",
     *      "metaTagTitle" : "",
     *      "metaTagContent" : "",
     *      "metaTagKeyword" : "",
     *      "active" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "New page is created successfully",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/page/add-page
     * @apiErrorExample {json} Page error
     * HTTP/1.1 500 Internal Server Error
     */
    createPage(pageParam, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const page = new page_1.Page();
            page.title = pageParam.title;
            page.content = pageParam.content;
            page.isActive = pageParam.active;
            page.metaTagTitle = pageParam.metaTagTitle;
            page.metaTagContent = pageParam.metaTagContent;
            page.metaTagKeyword = pageParam.metaTagKeyword;
            const pageSave = yield this.pageService.create(page);
            if (pageSave !== undefined) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully created a new page.',
                    data: pageSave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to create page',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Page List API
    /**
     * @api {get} /api/page/pagelist Page List API
     * @apiGroup Page
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {Number} count count should be number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get page list",
     *      "data":{
     *      "pageId" : "",
     *      "title" : "",
     *      "content" : "",
     *      "active" : "",
     *      "metaTagTitle" : "",
     *      "metaTagContent" : "",
     *      "metaTagKeyword" : "",
     *      }
     *      "status": "1"
     * }
     * @apiSampleRequest /api/page/pagelist
     * @apiErrorExample {json} Page error
     * HTTP/1.1 500 Internal Server Error
     */
    pageList(limit, offset, keyword, count, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = ['pageId', 'title', 'content', 'isActive', 'metaTagTitle', 'metaTagContent', 'metaTagKeyword'];
            const search = [
                {
                    name: 'title',
                    op: 'like',
                    value: keyword,
                },
            ];
            const WhereConditions = [];
            const pageList = yield this.pageService.list(limit, offset, select, search, WhereConditions, count);
            if (pageList) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully got the complete list of pages. ',
                    data: pageList,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to list pages',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Update Page API
    /**
     * @api {put} /api/page/update-page/:id Update Page API
     * @apiGroup Page
     * @apiParam (Request body) {Number} pageId pageId
     * @apiParam (Request body) {String} title title
     * @apiParam (Request body) {String} content content
     * @apiParam (Request body) {Number} active active
     * @apiParam (Request body) {String} metaTagTitle metaTagTitle
     * @apiParam (Request body) {String} metaTagContent metaTagContent
     * @apiParam (Request body) {String} metaTagKeyword metaTagKeyword
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "pageId" : "",
     *      "title" : "",
     *      "content" : "",
     *      "active" : "",
     *      "metaTagTitle" : "",
     *      "metaTagContent" : "",
     *      "metaTagKeyword" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": " Page is updated successfully",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/page/update-page/:id
     * @apiErrorExample {json} updatePage error
     * HTTP/1.1 500 Internal Server Error
     */
    updatePage(pageParam, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(pageParam);
            const page = yield this.pageService.findOne({
                where: {
                    pageId: pageParam.pageId,
                },
            });
            if (!page) {
                const errorResponse = {
                    status: 0,
                    message: 'invalid page id',
                };
                return response.status(400).send(errorResponse);
            }
            page.title = pageParam.title;
            page.content = pageParam.content;
            page.isActive = pageParam.active;
            page.metaTagTitle = pageParam.metaTagTitle;
            page.metaTagContent = pageParam.metaTagContent;
            page.metaTagKeyword = pageParam.metaTagKeyword;
            const pageSave = yield this.pageService.create(page);
            if (pageSave) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully updated the page.',
                    data: pageSave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to update page',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Delete Page API
    /**
     * @api {delete} /api/page/delete-page/:id Delete Page API
     * @apiGroup Page
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "pageId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully deleted page.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/page/delete-page/:id
     * @apiErrorExample {json} Page error
     * HTTP/1.1 500 Internal Server Error
     */
    deletePage(id, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const page = yield this.pageService.findOne({
                where: {
                    pageId: id,
                },
            });
            if (!page) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid pageId',
                };
                return response.status(400).send(errorResponse);
            }
            const deletePage = yield this.pageService.delete(page);
            if (deletePage) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully deleted the page.',
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to delete page',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Post('/add-page'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [createPageRequest_1.CreatePage, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PageController.prototype, "createPage", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/pagelist'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('count')), tslib_1.__param(4, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PageController.prototype, "pageList", null);
tslib_1.__decorate([
    routing_controllers_1.Put('/update-page/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [updatePageRequest_1.UpdatePage, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PageController.prototype, "updatePage", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/delete-page/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Res()), tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PageController.prototype, "deletePage", null);
PageController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/page'),
    tslib_1.__metadata("design:paramtypes", [pageService_1.PageService])
], PageController);
exports.PageController = PageController;
//# sourceMappingURL=PageController.js.map