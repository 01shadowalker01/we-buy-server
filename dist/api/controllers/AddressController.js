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
const AddressService_1 = require("../services/AddressService");
const Address_1 = require("../models/Address");
const CreateAddressRequest_1 = require("./requests/CreateAddressRequest");
const CustomerService_1 = require("../services/CustomerService");
let AddressController = class AddressController {
    constructor(addressService, customerService) {
        this.addressService = addressService;
        this.customerService = customerService;
    }
    // Create Address
    /**
     * @api {post} /api/address/add-address Add Customer Address API
     * @apiGroup Address
     * @apiParam (Request body) {Number} customerId customerId
     * @apiParam (Request body) {String} address1 address1
     * @apiParam (Request body) {String} address2 address2
     * @apiParam (Request body) {String} city city
     * @apiParam (Request body) {String} state state
     * @apiParam (Request body) {Number} postcode postcode
     * @apiParam (Request body) {Number} addressType addressType
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "customerId" : "",
     *      "address1" : "",
     *      "address2" : "",
     *      "city" : "",
     *      "state" : "",
     *      "postcode" : "",
     *      "addressType" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "New Address is created successfully",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/address/add-address
     * @apiErrorExample {json} addAddress error
     * HTTP/1.1 500 Internal Server Error
     */
    createAddress(addressParam, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const customer = yield this.customerService.findOne({
                where: {
                    id: addressParam.customerId,
                },
            });
            if (!customer) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid customerId',
                };
                return response.status(400).send(errorResponse);
            }
            const newAddress = new Address_1.Address();
            newAddress.customerId = addressParam.customerId;
            newAddress.firstName = customer.firstName;
            newAddress.lastName = customer.lastName;
            newAddress.address1 = addressParam.address1;
            newAddress.address2 = addressParam.address2;
            newAddress.city = addressParam.city;
            newAddress.state = addressParam.state;
            newAddress.postcode = addressParam.postcode;
            newAddress.addressType = addressParam.addressType;
            const addressSave = yield this.addressService.create(newAddress);
            if (addressSave) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully created address',
                    data: addressSave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'Unable to create address. ',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Update Address
    /**
     * @api {put} /api/address/update-address/:id Update Address API
     * @apiGroup Address
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {String} customerId customerId
     * @apiParam (Request body) {String} address1 address1
     * @apiParam (Request body) {String} address2 address2
     * @apiParam (Request body) {String} city city
     * @apiParam (Request body) {String} state state
     * @apiParam (Request body) {Number} postcode postcode
     * @apiParam (Request body) {Number} addressType addressType
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "customerId" : "",
     *      "address1" : "",
     *      "address2" : "",
     *      "city" : "",
     *      "state" : "",
     *      "postcode" : "",
     *      "addressType" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully updated address.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/address/update-address/:id
     * @apiErrorExample {json} Address error
     * HTTP/1.1 500 Internal Server Error
     */
    updateAddress(addressParam, id, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const address = yield this.addressService.findOne({
                where: {
                    addressId: id,
                },
            });
            if (!address) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid addressId',
                };
                return response.status(400).send(errorResponse);
            }
            address.customerId = addressParam.customerId;
            address.address1 = addressParam.address1;
            address.address2 = addressParam.address2;
            address.city = addressParam.city;
            address.state = addressParam.state;
            address.postcode = addressParam.postcode;
            address.addressType = addressParam.addressType;
            const addressSave = yield this.addressService.create(address);
            console.log('addressSave' + addressSave);
            if (addressSave) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully updated address',
                    data: addressSave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 1,
                    message: 'Unable to update the address. ',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Address List
    /**
     * @api {get} /api/address/addresslist Address List API
     * @apiGroup Address
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} count count
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get address list",
     *      "data":"{}"
     *      "status": "1"
     * }
     * @apiSampleRequest /api/address/addresslist
     * @apiErrorExample {json} Address error
     * HTTP/1.1 500 Internal Server Error
     */
    addressList(limit, offset, count, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const WhereConditions = [];
            const addressList = yield this.addressService.list(limit, offset, WhereConditions, count);
            if (addressList) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully got complete address list.',
                    data: addressList,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 1,
                    message: 'Unable to get the address list. ',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Delete Address
    /**
     * @api {delete} /api/address/delete-address/:id Delete Address API
     * @apiGroup Address
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "addressId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully deleted address.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/address/delete-address/:id
     * @apiErrorExample {json} address error
     * HTTP/1.1 500 Internal Server Error
     */
    deleteAddress(id, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const address = yield this.addressService.findOne({
                where: {
                    addressId: id,
                },
            });
            if (!address) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid addressId',
                };
                return response.status(400).send(errorResponse);
            }
            const deleteAddress = yield this.addressService.delete(address);
            if (deleteAddress === 1) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully deleted address',
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'Unable to delete the  address. ',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    //   Get Customer Address API
    /**
     * @api {get} /api/address/get-address-list/:id Get Customer Address  API
     * @apiGroup Address
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} count count
     * @apiParamExample {json} Input
     * {
     *      "customerId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get customer address list",
     *      "data":"{}"
     *      "status": "1"
     * }
     * @apiSampleRequest /api/address/get-address-list/:id
     * @apiErrorExample {json} Address error
     * HTTP/1.1 500 Internal Server Error
     */
    getAddress(limit, offset, count, id, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(id);
            const customer = yield this.customerService.findOne({ where: { id } });
            console.log(customer);
            if (customer.length === 0) {
                const errorResponse = {
                    status: 0,
                    message: ' invalid customer Id',
                };
                return response.status(400).send(errorResponse);
            }
            const WhereConditions = [
                {
                    name: 'customerId',
                    value: id,
                },
            ];
            const customerAddress = yield this.addressService.list(limit, offset, WhereConditions, count);
            const successResponse = {
                status: 1,
                message: 'Successfully Get the customer Address',
                data: customerAddress,
            };
            return response.status(200).send(successResponse);
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Post('/add-address'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateAddressRequest_1.CreateAddress, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AddressController.prototype, "createAddress", null);
tslib_1.__decorate([
    routing_controllers_1.Put('/update-address/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Param('id')), tslib_1.__param(2, routing_controllers_1.Res()), tslib_1.__param(3, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CreateAddressRequest_1.CreateAddress, Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AddressController.prototype, "updateAddress", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/addresslist'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('count')), tslib_1.__param(3, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AddressController.prototype, "addressList", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/delete-address/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Res()), tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AddressController.prototype, "deleteAddress", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/get-address-list/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('count')), tslib_1.__param(3, routing_controllers_1.Param('id')), tslib_1.__param(4, routing_controllers_1.Req()), tslib_1.__param(5, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, Object, Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AddressController.prototype, "getAddress", null);
AddressController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/address'),
    tslib_1.__metadata("design:paramtypes", [AddressService_1.AddressService,
        CustomerService_1.CustomerService])
], AddressController);
exports.AddressController = AddressController;
//# sourceMappingURL=AddressController.js.map