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
const AWS = tslib_1.__importStar(require("aws-sdk"));
const class_transformer_1 = require("class-transformer");
const env_1 = require("../../env");
const CustomerService_1 = require("../services/CustomerService");
const Customer_1 = require("../models/Customer");
const createCustomerRequest_1 = require("./requests/createCustomerRequest");
const User_1 = require("../models/User");
const mail_services_1 = require("../../auth/mail.services");
const updateCustomerRequest_1 = require("./requests/updateCustomerRequest");
const OrderService_1 = require("../services/OrderService");
const ProductImageService_1 = require("../services/ProductImageService");
const ProductService_1 = require("../services/ProductService");
const OrderProductService_1 = require("../services/OrderProductService");
const emailTemplateService_1 = require("../services/emailTemplateService");
let CustomerController = class CustomerController {
    constructor(customerService, orderProductService, productService, productImageService, orderService, emailTemplateService) {
        this.customerService = customerService;
        this.orderProductService = orderProductService;
        this.productService = productService;
        this.productImageService = productImageService;
        this.orderService = orderService;
        this.emailTemplateService = emailTemplateService;
    }
    // Create Customer API
    /**
     * @api {post} /api/customer/add-customer Add Customer API
     * @apiGroup Customer
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} customerGroupId Customer customerGroupId
     * @apiParam (Request body) {String} username Customer username
     * @apiParam (Request body) {String} email Customer email
     * @apiParam (Request body) {Number} mobileNumber Customer mobileNumber
     * @apiParam (Request body) {String} password Customer password
     * @apiParam (Request body) {String} confirmPassword Customer confirmPassword
     * @apiParam (Request body) {String} avatar Customer avatar
     * @apiParam (Request body) {Number} newsletter Customer newsletter
     * @apiParam (Request body) {Number} mailStatus Customer mailStatus should be 1 or 0
     * @apiParam (Request body) {Number} status Customer status
     * @apiParamExample {json} Input
     * {
     *      "customerGroupId" : "",
     *      "userName" : "",
     *      "email" : "",
     *      "mobileNumber" : "",
     *      "password" : "",
     *      "confirmPassword" : "",
     *      "avatar" : "",
     *      "newsletter" : "",
     *      "mailStatus" : "",
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Customer Created successfully",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/customer/add-customer
     * @apiErrorExample {json} Customer error
     * HTTP/1.1 500 Internal Server Error
     */
    addCustomer(customerParam, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const avatar = customerParam.avatar;
            const newCustomer = new Customer_1.Customer();
            const resultUser = yield this.customerService.findOne({ where: { email: customerParam.email, deleteFlag: 0 } });
            if (resultUser) {
                const successResponse = {
                    status: 1,
                    message: 'Already registered with this emailId.',
                };
                return response.status(400).send(successResponse);
            }
            if (avatar) {
                const type = avatar.split(';')[0].split('/')[1];
                const name = 'Img_' + Date.now() + '.' + type;
                const s3 = new AWS.S3();
                const path = 'customer/';
                const base64Data = new Buffer(avatar.replace(/^data:image\/\w+;base64,/, ''), 'base64');
                const params = {
                    Bucket: env_1.aws_setup.AWS_BUCKET,
                    Key: 'customer/' + name,
                    Body: base64Data,
                    ACL: 'public-read',
                    ContentEncoding: 'base64',
                    ContentType: `image/${type}`,
                };
                newCustomer.avatar = name;
                newCustomer.avatarPath = path;
                s3.upload(params, (err, data) => {
                    if (data) {
                        console.log('image upload successfully');
                        console.log(data);
                    }
                    else {
                        console.log('error while uploading image');
                    }
                });
            }
            if (customerParam.password === customerParam.confirmPassword) {
                const password = yield User_1.User.hashPassword(customerParam.password);
                newCustomer.customerGroupId = customerParam.customerGroupId;
                newCustomer.firstName = customerParam.username;
                newCustomer.username = customerParam.email;
                newCustomer.email = customerParam.email;
                newCustomer.mobileNumber = customerParam.mobileNumber;
                newCustomer.password = password;
                newCustomer.mailStatus = customerParam.mailStatus;
                newCustomer.deleteFlag = 0;
                newCustomer.newsletter = customerParam.newsletter;
                newCustomer.isActive = customerParam.status;
                const customerSave = yield this.customerService.create(newCustomer);
                if (customerSave) {
                    if (customerParam.mailStatus === 1) {
                        const emailContent = yield this.emailTemplateService.findOne(4);
                        const message = emailContent.content.replace('{name}', customerParam.username).replace('{email}', customerParam.email).replace('{xxxxxx}', customerParam.password);
                        mail_services_1.MAILService.customerLoginMail(message, customerParam.email, emailContent.subject);
                        const successResponse = {
                            status: 1,
                            message: 'Successfully created new Customer with user name and password and send an email. ',
                            data: customerSave,
                        };
                        return response.status(200).send(successResponse);
                    }
                    else {
                        const successResponse = {
                            status: 1,
                            message: 'Customer Created Successfully',
                            data: customerSave,
                        };
                        return response.status(200).send(successResponse);
                    }
                }
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'Password does not match.',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Customer List API
    /**
     * @api {get} /api/customer/customerlist Customer List API
     * @apiGroup Customer
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} name search by name
     * @apiParam (Request body) {String} email search bu email
     * @apiParam (Request body) {Number} status 0->inactive 1-> active
     * @apiParam (Request body) {String} customerGroup search by customerGroup
     * @apiParam (Request body) {String} date search by date
     * @apiParam (Request body) {Number} count count should be number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get customer list",
     *      "data":{
     *      "customerGroupId" : "",
     *      "username" : "",
     *      "email" : "",
     *      "mobileNUmber" : "",
     *      "password" : "",
     *      "avatar" : "",
     *      "avatarPath" : "",
     *      "newsletter" : "",
     *      "status" : "",
     *      "safe" : "",
     *      }
     *      "status": "1"
     * }
     * @apiSampleRequest /api/customer/customerlist
     * @apiErrorExample {json} customer error
     * HTTP/1.1 500 Internal Server Error
     */
    customerList(limit, offset, name, status, email, customerGroup, date, count, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const search = [
                {
                    name: 'firstName',
                    op: 'like',
                    value: name,
                },
                {
                    name: 'email',
                    op: 'like',
                    value: email,
                },
                {
                    name: 'createdDate',
                    op: 'like',
                    value: date,
                },
                {
                    name: 'customerGroupId',
                    op: 'like',
                    value: customerGroup,
                },
                {
                    name: 'isActive',
                    op: 'like',
                    value: status,
                },
            ];
            const WhereConditions = [
                {
                    name: 'deleteFlag',
                    value: 0,
                },
            ];
            const customerList = yield this.customerService.list(limit, offset, search, WhereConditions, 0, count);
            const successResponse = {
                status: 1,
                message: 'Successfully got Customer list.',
                data: customerList,
            };
            return response.status(200).send(successResponse);
        });
    }
    // Delete Customer API
    /**
     * @api {delete} /api/customer/delete-customer/:id Delete Customer API
     * @apiGroup Customer
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "customerId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully deleted customer.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/customer/delete-customer/:id
     * @apiErrorExample {json} Customer error
     * HTTP/1.1 500 Internal Server Error
     */
    deleteCustomer(id, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const customer = yield this.customerService.findOne({
                where: {
                    id,
                },
            });
            if (!customer) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid customerId',
                };
                return response.status(400).send(errorResponse);
            }
            customer.deleteFlag = 1;
            const deleteCustomer = yield this.customerService.create(customer);
            if (deleteCustomer) {
                const successResponse = {
                    status: 1,
                    message: 'Customer Deleted Successfully',
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to change delete flag status',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Update Customer API
    /**
     * @api {put} /api/customer/update-customer/:id Update Customer API
     * @apiGroup Customer
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} customerGroupId Customer customerGroupId
     * @apiParam (Request body) {String} username Customer username
     * @apiParam (Request body) {String} email Customer email
     * @apiParam (Request body) {Number} mobileNumber Customer mobileNumber
     * @apiParam (Request body) {String} password Customer password
     * @apiParam (Request body) {String} confirmPassword Customer confirmPassword
     * @apiParam (Request body) {String} avatar Customer avatar
     * @apiParam (Request body) {Number} newsletter Customer newsletter
     * @apiParam (Request body) {Number} mailStatus Customer mailStatus should be 1 or 0
     * @apiParam (Request body) {Number} status Customer status
     * @apiParamExample {json} Input
     * {
     *      "customerGroupId" : "",
     *      "userName" : "",
     *      "email" : "",
     *      "mobileNumber" : "",
     *      "password" : "",
     *      "confirmPassword" : "",
     *      "avatar" : "",
     *      "newsletter" : "",
     *      "mailStatus" : "",
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": " Customer is updated successfully",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/customer/update-customer/:id
     * @apiErrorExample {json} updateCustomer error
     * HTTP/1.1 500 Internal Server Error
     */
    updateCustomer(id, customerParam, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(customerParam);
            const customer = yield this.customerService.findOne({
                where: {
                    id,
                },
            });
            if (!customer) {
                const errorResponse = {
                    status: 0,
                    message: 'invalid customer id',
                };
                return response.status(400).send(errorResponse);
            }
            if (customerParam.password === customerParam.confirmPassword) {
                const avatar = customerParam.avatar;
                if (avatar) {
                    const type = avatar.split(';')[0].split('/')[1];
                    const name = 'Img_' + Date.now() + '.' + type;
                    const s3 = new AWS.S3();
                    const path = 'customer/';
                    const base64Data = new Buffer(avatar.replace(/^data:image\/\w+;base64,/, ''), 'base64');
                    const params = {
                        Bucket: env_1.aws_setup.AWS_BUCKET,
                        Key: 'customer/' + name,
                        Body: base64Data,
                        ACL: 'public-read',
                        ContentEncoding: 'base64',
                        ContentType: `image/${type}`,
                    };
                    s3.upload(params, (err, data) => {
                        if (data) {
                            console.log('image upload successfully');
                            console.log(data);
                        }
                        else {
                            console.log('error while uploading image');
                        }
                    });
                    customer.avatar = name;
                    customer.avatarPath = path;
                }
                // const password = await User.hashPassword(customerParam.password);
                customer.customerGroupId = customerParam.customerGroupId;
                customer.firstName = customerParam.username;
                customer.username = customerParam.email;
                customer.email = customerParam.email;
                customer.mobileNumber = customerParam.mobileNumber;
                if (customerParam.password) {
                    const password = yield User_1.User.hashPassword(customerParam.password);
                    customer.password = password;
                }
                customer.newsletter = customerParam.newsletter;
                customer.mailStatus = customerParam.mailStatus;
                customer.isActive = customerParam.status;
                const customerSave = yield this.customerService.create(customer);
                if (customerSave) {
                    const successResponse = {
                        status: 1,
                        // message: 'Customer Updated Successfully',
                        message: 'اطلاعات مشتری با موفقیت ویرایش شد',
                        data: customerSave,
                    };
                    return response.status(200).send(successResponse);
                }
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'Password does not match.',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Get Customer Detail API
    /**
     * @api {get} /api/customer/customer-details/:id Customer Details API
     * @apiGroup Customer
     * @apiHeader {String} Authorization
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     * "message": "Successfully get customer Details",
     * "data":{
     * "customerGroupId" : "",
     * "username" : "",
     * "email" : "",
     * "mobileNumber" : "",
     * "password" : "",
     * "avatar" : "",
     * "avatarPath" : "",
     * "newsletter" : "",
     * "status" : "",
     * "safe" : "",
     * }
     * "status": "1"
     * }
     * @apiSampleRequest /api/customer/customer-details/:id
     * @apiErrorExample {json} customer error
     * HTTP/1.1 500 Internal Server Error
     */
    customerDetails(Id, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const customer = yield this.customerService.findOne({
                where: { id: Id },
            });
            if (!customer) {
                const errorResponse = {
                    status: 0,
                    message: 'invalid CustomerId',
                };
                return response.status(400).send(errorResponse);
            }
            const order = yield this.orderService.find({ where: { customerId: Id } });
            const productLists = yield order.map((result) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const product = yield this.orderProductService.find({
                    where: { orderId: result.orderId },
                    select: ['productId', 'orderId', 'name', 'model', 'total', 'createdDate'],
                });
                const productPromises = yield product.map((value) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    const productsDetails = value;
                    const products = yield this.productService.find({ where: { productId: value.productId } });
                    const productImages = yield products.map((values) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        const productImagesResult = values;
                        const Image = yield this.productImageService.findOne({
                            select: ['productId', 'productImageId', 'image', 'containerName', 'defaultImage'],
                            where: { productId: values.productId, defaultImage: 1 },
                        });
                        productImagesResult.productImages = Image;
                        return productImagesResult;
                    }));
                    const images = yield Promise.all(productImages);
                    productsDetails.productDetails = images;
                    return productsDetails;
                }));
                const productsListWithImages = yield Promise.all(productPromises);
                const temp = yield productsListWithImages;
                return temp;
            }));
            const finalResult = yield Promise.all(productLists);
            customer.productList = finalResult;
            // customer.productCount = finalResult.length;
            if (finalResult) {
                const successResponse = {
                    status: 1,
                    message: 'successfully got Customer details. ',
                    data: customer,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to get customer Details',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Recently Added Customer List API
    /**
     * @api {get} /api/customer/recent-customerlist Recent Customer List API
     * @apiGroup Customer
     * @apiHeader {String} Authorization
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "status": "1"
     *      "message": "Successfully get customer list",
     *      "data":{
     *      "location" : "",
     *      "name" : "",
     *      "created date" : "",
     *      "isActive" : "",
     *      }
     * }
     * @apiSampleRequest /api/customer/recent-customerlist
     * @apiErrorExample {json} customer error
     * HTTP/1.1 500 Internal Server Error
     */
    recentCustomerList(response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const order = 1;
            const WhereConditions = [
                {
                    name: 'deleteFlag',
                    value: 0,
                },
            ];
            const customerList = yield this.customerService.list(0, 0, 0, WhereConditions, order, 0);
            const successResponse = {
                status: 1,
                message: 'Successfully got Customer list.',
                data: class_transformer_1.classToPlain(customerList),
            };
            return response.status(200).send(successResponse);
        });
    }
    //  Today Customer Count API
    /**
     * @api {get} /api/customer/today-customercount Today Customer Count API
     * @apiGroup Customer
     * @apiHeader {String} Authorization
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get Today customer count",
     *      "data":{
     *      }
     *      "status": "1"
     * }
     * @apiSampleRequest /api/customer/today-customercount
     * @apiErrorExample {json} order error
     * HTTP/1.1 500 Internal Server Error
     */
    customerCount(response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const nowDate = new Date();
            const todaydate = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate();
            const customerCount = yield this.customerService.todayCustomerCount(todaydate);
            const successResponse = {
                status: 1,
                message: 'Successfully get customerCount',
                data: customerCount,
            };
            return response.status(200).send(successResponse);
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Post('/add-customer'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [createCustomerRequest_1.CreateCustomer, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "addCustomer", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/customerlist'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('name')), tslib_1.__param(3, routing_controllers_1.QueryParam('status')), tslib_1.__param(4, routing_controllers_1.QueryParam('email')), tslib_1.__param(5, routing_controllers_1.QueryParam('customerGroup')), tslib_1.__param(6, routing_controllers_1.QueryParam('date')), tslib_1.__param(7, routing_controllers_1.QueryParam('count')), tslib_1.__param(8, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, String, String, String, String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "customerList", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/delete-customer/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Res()), tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "deleteCustomer", null);
tslib_1.__decorate([
    routing_controllers_1.Put('/update-customer/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Body({ validate: true })), tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, updateCustomerRequest_1.UpdateCustomer, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "updateCustomer", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/customer-details/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "customerDetails", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/recent-customerlist'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "recentCustomerList", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/today-customercount'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerController.prototype, "customerCount", null);
CustomerController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/customer'),
    tslib_1.__metadata("design:paramtypes", [CustomerService_1.CustomerService, OrderProductService_1.OrderProductService,
        ProductService_1.ProductService,
        ProductImageService_1.ProductImageService,
        OrderService_1.OrderService,
        emailTemplateService_1.EmailTemplateService])
], CustomerController);
exports.CustomerController = CustomerController;
//# sourceMappingURL=CustomerController.js.map