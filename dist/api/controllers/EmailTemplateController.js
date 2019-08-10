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
const emailTemplate_1 = require("../models/emailTemplate");
const createEmailTemplateRequest_1 = require("./requests/createEmailTemplateRequest");
const emailTemplateService_1 = require("../services/emailTemplateService");
let EmailTemplateController = class EmailTemplateController {
    constructor(emailTemplateService) {
        this.emailTemplateService = emailTemplateService;
    }
    // Create EmailTemplate API
    /**
     * @api {post} /api/email-template/add-email-template Add Email Template API
     * @apiGroup EmailTemplate
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {String} title EmailTemplate title
     * @apiParam (Request body) {String} subject EmailTemplate subject
     * @apiParam (Request body) {String} content EmailTemplate content
     * @apiParam (Request body) {Number} status EmailTemplate status
     * @apiParamExample {json} Input
     * {
     *      "title" : "",
     *      "subject" : "",
     *      "content" : "",
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully created new emailTemplate.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/email-template/add-email-template
     * @apiErrorExample {json} EmailTemplate error
     * HTTP/1.1 500 Internal Server Error
     */
    addEmailTemplate(emailTemplateParam, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const emailTemplate = new emailTemplate_1.EmailTemplate();
            emailTemplate.title = emailTemplateParam.title;
            emailTemplate.subject = emailTemplateParam.subject;
            emailTemplate.content = emailTemplateParam.content;
            emailTemplate.isActive = emailTemplateParam.status;
            const emailTemplateSave = yield this.emailTemplateService.create(emailTemplate);
            if (emailTemplateSave !== undefined) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully created new email template.',
                    data: emailTemplateSave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to create emailTemplate',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // EmailTemplate List API
    /**
     * @api {get} /api/email-template/email-templatelist EmailTemplate List API
     * @apiGroup EmailTemplate
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {Number} count count should be number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get emailTemplate list",
     *      "data":{
     *      "id" : "",
     *      "title" : "",
     *      "subject" : "",
     *      "content" : "",
     *      "status" : "",
     *      }
     *      "status": "1"
     * }
     * @apiSampleRequest /api/email-template/email-templatelist
     * @apiErrorExample {json} EmailTemplate error
     * HTTP/1.1 500 Internal Server Error
     */
    emailTemplateList(limit, offset, keyword, count, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = ['emailTemplateId', 'title', 'subject', 'content', 'isActive'];
            const search = [
                {
                    name: 'title',
                    op: 'like',
                    value: keyword,
                },
            ];
            const WhereConditions = [];
            const emailTemplateList = yield this.emailTemplateService.list(limit, offset, select, search, WhereConditions, count);
            if (emailTemplateList) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully got the complete email template list.',
                    data: emailTemplateList,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to list emailTemplate',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Update EmailTemplate API
    /**
     * @api {put} /api/email-template/update-email-template/:id Update EmailTemplate API
     * @apiGroup EmailTemplate
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {String} title EmailTemplate title
     * @apiParam (Request body) {String} subject EmailTemplate subject
     * @apiParam (Request body) {String} content EmailTemplate content
     * @apiParam (Request body) {Number} status EmailTemplate status
     * @apiParamExample {json} Input
     * {
     *      "title" : "",
     *      "subject" : "",
     *      "content" : "",
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully updated emailTemplate.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/email-template/update-email-template/:id
     * @apiErrorExample {json} emailTemplate error
     * HTTP/1.1 500 Internal Server Error
     */
    updateEmailTemplate(id, emailTemplateParam, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const emailTemplate = yield this.emailTemplateService.findOne({
                where: {
                    emailTemplateId: id,
                },
            });
            if (!emailTemplate) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid emailTemplate Id',
                };
                return response.status(400).send(errorResponse);
            }
            emailTemplate.title = emailTemplateParam.title;
            emailTemplate.subject = emailTemplateParam.subject;
            emailTemplate.content = emailTemplateParam.content;
            emailTemplate.isActive = emailTemplateParam.status;
            const templateSave = yield this.emailTemplateService.create(emailTemplate);
            if (templateSave !== undefined) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully updated the email template.',
                    data: templateSave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to update emailTemplate',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Delete EmailTemplate API
    /**
     * @api {delete} /api/email-template/delete-email-template/:id Delete EmailTemplate API
     * @apiGroup EmailTemplate
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "emailTemplateId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully deleted emailTemplate.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/email-template/delete-email-template/:id
     * @apiErrorExample {json} EmailTemplate error
     * HTTP/1.1 500 Internal Server Error
     */
    deleteEmailTemplate(id, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const emailTemplate = yield this.emailTemplateService.findOne({
                where: {
                    emailTemplateId: id,
                },
            });
            if (!emailTemplate) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid emailTemplate',
                };
                return response.status(400).send(errorResponse);
            }
            const deleteEmailTemplate = yield this.emailTemplateService.delete(emailTemplate);
            if (deleteEmailTemplate) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully deleted the email template.',
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to delete emailTemplate',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Post('/add-email-template'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [createEmailTemplateRequest_1.CreateEmailTemplate, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailTemplateController.prototype, "addEmailTemplate", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/email-templatelist'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('count')), tslib_1.__param(4, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailTemplateController.prototype, "emailTemplateList", null);
tslib_1.__decorate([
    routing_controllers_1.Put('/update-email-template/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Body({ validate: true })), tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, createEmailTemplateRequest_1.CreateEmailTemplate, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailTemplateController.prototype, "updateEmailTemplate", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/delete-email-template/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Res()), tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmailTemplateController.prototype, "deleteEmailTemplate", null);
EmailTemplateController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/email-template'),
    tslib_1.__metadata("design:paramtypes", [emailTemplateService_1.EmailTemplateService])
], EmailTemplateController);
exports.EmailTemplateController = EmailTemplateController;
//# sourceMappingURL=EmailTemplateController.js.map