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
const deleteRoleRequest_1 = require("./requests/deleteRoleRequest");
const createRoleRequest_1 = require("./requests/createRoleRequest");
const UserGroupService_1 = require("../services/UserGroupService");
const UserGroup_1 = require("../models/UserGroup");
let RoleController = class RoleController {
    constructor(userGroupService) {
        this.userGroupService = userGroupService;
    }
    // Create Role API
    /**
     * @api {post} /api/role/create-role Create Role API
     * @apiGroup Role
     * @apiParam (Request body) {String} name roleName
     * @apiParam (Request body) {Number} status status
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "name" : "",
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "New Role is created successfully",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/role/create-role
     * @apiErrorExample {json} createRole error
     * HTTP/1.1 500 Internal Server Error
     */
    createRole(createRoleParam, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(createRoleParam);
            const role = yield this.userGroupService.findOne({
                where: {
                    name: createRoleParam.name,
                },
            });
            console.log(role);
            if (role) {
                const errorResponse = {
                    status: 0,
                    message: 'this role already exist',
                };
                return response.status(400).send(errorResponse);
            }
            const newRoleParams = new UserGroup_1.UserGroup();
            newRoleParams.name = createRoleParam.name;
            newRoleParams.isActive = createRoleParam.status;
            const userGroupSaveResponse = yield this.userGroupService.create(newRoleParams);
            if (userGroupSaveResponse) {
                const successResponse = {
                    status: 1,
                    message: 'Role saved successfully',
                    data: userGroupSaveResponse,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to save Role',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Update Role API
    /**
     * @api {put} /api/role/update-role/:id Update Role API
     * @apiGroup Role
     * @apiParam (Request body) {String} name roleName
     * @apiParam (Request body) {Number} status status
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "name" : "",
     *      "slug" : "",
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": " Role is updated successfully",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/role/update-role/:id
     * @apiErrorExample {json} updateRole error
     * HTTP/1.1 500 Internal Server Error
     */
    updateRole(id, createRoleParam, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(createRoleParam);
            const role = yield this.userGroupService.findOne({
                where: {
                    groupId: id,
                },
            });
            console.log(role);
            if (!role) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid roleId',
                };
                return response.status(400).send(errorResponse);
            }
            const newRoleParams = new UserGroup_1.UserGroup();
            newRoleParams.name = createRoleParam.name;
            newRoleParams.isActive = createRoleParam.status;
            const userGroupSaveResponse = yield this.userGroupService.update(id, newRoleParams);
            if (userGroupSaveResponse) {
                const successResponse = {
                    status: 1,
                    message: 'Role updated successfully',
                    data: userGroupSaveResponse,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to update Role',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Role List API
    /**
     * @api {get} /api/role/rolelist Role List API
     * @apiGroup Role
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {String} count count in number or boolean
     * @apiHeader {String} Authorization
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *    "message": "Successfully get role list",
     *    "data":"{}"
     *    "status": "1"
     *  }
     * @apiSampleRequest /api/role/rolelist
     * @apiErrorExample {json} role error
     * HTTP/1.1 500 Internal Server Error
     */
    roleList(limit, offset, keyword, count, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(keyword);
            const select = ['groupId', 'name', 'isActive'];
            const whereConditions = [
                {
                    name: 'name',
                    op: 'like',
                    value: keyword,
                },
            ];
            const roleList = yield this.userGroupService.list(limit, offset, select, whereConditions, count);
            const successResponse = {
                status: 1,
                message: 'Successfully get all role List',
                data: roleList,
            };
            return response.status(200).send(successResponse);
        });
    }
    // delete Role API
    /**
     * @api {delete} /api/role/delete-role/:id Delete Role API
     * @apiGroup Role
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {number} groupId  groupId
     * @apiParamExample {json} Input
     * {
     *      "roleId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully deleted Role.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/role/delete-role/:id
     * @apiErrorExample {json} Role error
     * HTTP/1.1 500 Internal Server Error
     */
    deleteRole(role, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const roleId = yield this.userGroupService.findOne({
                where: {
                    groupId: role.groupId,
                },
            });
            if (!roleId) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid roleId',
                };
                return response.status(400).send(errorResponse);
            }
            const deleteRole = yield this.userGroupService.delete(role.groupId);
            console.log('role' + deleteRole);
            if (deleteRole) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully deleted role',
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to delete role',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Post('/create-role'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [createRoleRequest_1.CreateRole, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "createRole", null);
tslib_1.__decorate([
    routing_controllers_1.Put('/update-role/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Body({ validate: true })), tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, createRoleRequest_1.CreateRole, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "updateRole", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/rolelist'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('count')), tslib_1.__param(4, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "roleList", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/delete-role/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()), tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [deleteRoleRequest_1.DeleteRoleRequest, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleController.prototype, "deleteRole", null);
RoleController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/role'),
    tslib_1.__metadata("design:paramtypes", [UserGroupService_1.UserGroupService])
], RoleController);
exports.RoleController = RoleController;
//# sourceMappingURL=RoleController.js.map