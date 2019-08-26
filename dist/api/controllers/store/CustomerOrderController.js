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
const class_transformer_1 = require("class-transformer");
const customerCheckoutRequest_1 = require("./requests/customerCheckoutRequest");
const OrderService_1 = require("../../services/OrderService");
const OrderProductService_1 = require("../../services/OrderProductService");
const OrderTotalService_1 = require("../../services/OrderTotalService");
const Order_1 = require("../../models/Order");
const OrderProduct_1 = require("../../models/OrderProduct");
const OrderTotal_1 = require("../../models/OrderTotal");
const CustomerService_1 = require("../../services/CustomerService");
const mail_services_1 = require("../../../auth/mail.services");
const ProductService_1 = require("../../services/ProductService");
const ProductImageService_1 = require("../../services/ProductImageService");
const SettingService_1 = require("../../services/SettingService");
const emailTemplateService_1 = require("../../services/emailTemplateService");
const ProductDiscountService_1 = require("../../services/ProductDiscountService");
const ProductSpecialService_1 = require("../../services/ProductSpecialService");
const orderStatusService_1 = require("../../services/orderStatusService");
const countryService_1 = require("../../services/countryService");
let CustomerOrderController = class CustomerOrderController {
    constructor(orderService, orderProductService, orderTotalService, customerService, productService, productImageService, settingService, emailTemplateService, productDiscountService, productSpecialService, orderStatusService, countryService) {
        this.orderService = orderService;
        this.orderProductService = orderProductService;
        this.orderTotalService = orderTotalService;
        this.customerService = customerService;
        this.productService = productService;
        this.productImageService = productImageService;
        this.settingService = settingService;
        this.emailTemplateService = emailTemplateService;
        this.productDiscountService = productDiscountService;
        this.productSpecialService = productSpecialService;
        this.orderStatusService = orderStatusService;
        this.countryService = countryService;
    }
    // customer checkout
    /**
     * @api {post} /api/orders/customer-checkout Checkout
     * @apiGroup Store order
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {String} productDetail Product Details
     * @apiParam (Request body) {String} shippingFirstName Shipping First name
     * @apiParam (Request body) {String} shippingLastName Shipping Last Name
     * @apiParam (Request body) {String} shippingCompany Shipping Company
     * @apiParam (Request body) {String} shippingAddress_1 Shipping Address 1
     * @apiParam (Request body) {String} shippingAddress_2 Shipping Address 2
     * @apiParam (Request body) {String} shippingCity Shipping City
     * @apiParam (Request body) {Number} shippingPostCode Shipping PostCode
     * @apiParam (Request body) {String} shippingCountry Shipping Country
     * @apiParam (Request body) {String} shippingZone Shipping Zone
     * @apiParam (Request body) {String} shippingAddressFormat Shipping Address Format
     * @apiparam (Request body) {Number} phoneNumber Customer Phone Number
     * @apiparam (Request body) {String} emailId Customer Email Id
     * @apiParamExample {json} Input
     * {
     *      "productDetail" :[
     *      {
     *      "productId" : "",
     *      "quantity" : "",
     *      "price" : "",
     *      "model" : "",
     *      "name" : "",
     *      "shippingFirstName" : "",
     *      "shippingLastName" : "",
     *      "shippingCompany" : "",
     *      "shippingAddress_1" : "",
     *      "shippingAddress_2" : "",
     *      "shippingCity" : "",
     *      "shippingPostCode" : "",
     *      "shippingCountry" : "",
     *      "shippingZone" : "",
     *      "shippingAddressFormat" : "",
     *      "phoneNumber" : "",
     *      "emailId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Check Out the product successfully And Send order detail in your mail ..!!",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/orders/customer-checkout
     * @apiErrorExample {json} Checkout error
     * HTTP/1.1 500 Internal Server Error
     */
    // Customer Checkout Function
    customerCheckout(checkoutParam, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newOrder = new Order_1.Order();
            const newOrderTotal = new OrderTotal_1.OrderTotal();
            let orderProduct = [];
            let i;
            let n;
            let totalProductAmount;
            let totalAmount = 0;
            const productDetailData = [];
            newOrder.customerId = request.user.id;
            newOrder.email = checkoutParam.emailId;
            newOrder.telephone = checkoutParam.phoneNumber;
            newOrder.shippingFirstname = checkoutParam.shippingFirstName;
            newOrder.shippingLastname = checkoutParam.shippingLastName;
            newOrder.shippingAddress1 = checkoutParam.shippingAddress_1;
            newOrder.shippingAddress2 = checkoutParam.shippingAddress_2;
            newOrder.shippingCompany = checkoutParam.shippingCompany;
            newOrder.shippingCity = checkoutParam.shippingCity;
            newOrder.shippingCountry = checkoutParam.shippingCountry;
            newOrder.shippingZone = checkoutParam.shippingZone;
            newOrder.shippingPostcode = checkoutParam.shippingPostCode;
            newOrder.shippingAddressFormat = checkoutParam.shippingAddressFormat;
            newOrder.paymentFirstname = checkoutParam.shippingFirstName;
            newOrder.paymentLastname = checkoutParam.shippingLastName;
            newOrder.paymentAddress1 = checkoutParam.shippingAddress_1;
            newOrder.paymentAddress2 = checkoutParam.shippingAddress_2;
            newOrder.paymentCompany = checkoutParam.shippingCompany;
            newOrder.paymentCity = checkoutParam.shippingCity;
            newOrder.paymentCountry = checkoutParam.shippingCountry;
            newOrder.paymentZone = checkoutParam.shippingZone;
            newOrder.paymentPostcode = checkoutParam.shippingPostCode;
            newOrder.isActive = 1;
            const setting = yield this.settingService.findOne();
            newOrder.orderStatusId = setting.orderStatus;
            newOrder.invoicePrefix = setting.invoicePrefix;
            newOrder.paymentAddressFormat = checkoutParam.shippingAddressFormat;
            const orderData = yield this.orderService.create(newOrder);
            const countryName = yield this.countryService.findOne(orderData.shippingCountry);
            orderData.shippingCountry = countryName.name;
            orderProduct = checkoutParam.productDetails;
            for (i = 0; i < orderProduct.length; i++) {
                const productDetails = new OrderProduct_1.OrderProduct();
                productDetails.productId = orderProduct[i].productId;
                productDetails.name = orderProduct[i].name;
                productDetails.orderId = orderData.orderId;
                productDetails.productPrice = orderProduct[i].price;
                productDetails.quantity = orderProduct[i].quantity;
                productDetails.total = +orderProduct[i].quantity * +orderProduct[i].price;
                productDetails.model = orderProduct[i].model;
                const productInformatiom = yield this.orderProductService.createData(productDetails);
                const productImageData = yield this.productService.findOne(productInformatiom.productId);
                const productImageDetail = yield this.productImageService.findOne({ where: { productId: productInformatiom.productId } });
                productImageData.productInformatiomData = productInformatiom;
                productImageData.productImage = productImageDetail;
                totalProductAmount = yield this.orderProductService.findData(orderProduct[i].productId, orderData.orderId, productInformatiom.orderProductId);
                for (n = 0; n < totalProductAmount.length; n++) {
                    totalAmount += +totalProductAmount[n].total;
                }
                productImageData.productOption = [];
                productDetailData.push(productImageData);
            }
            newOrder.total = totalAmount;
            newOrder.invoiceNo = orderData.orderId;
            const nowDate = new Date();
            const orderDate = nowDate.getFullYear() + ('0' + (nowDate.getMonth() + 1)).slice(-2) + ('0' + nowDate.getDate()).slice(-2);
            newOrder.orderPrefixId = setting.invoicePrefix.concat('-' + orderDate + orderData.orderId);
            const resultData = yield this.orderService.update(orderData.orderId, newOrder);
            newOrderTotal.orderId = orderData.orderId;
            newOrderTotal.value = totalAmount;
            yield this.orderTotalService.createOrderTotalData(newOrderTotal);
            const emailContent = yield this.emailTemplateService.findOne(5);
            const adminEmailContent = yield this.emailTemplateService.findOne(6);
            const today = ('0' + nowDate.getDate()).slice(-2) + '.' + ('0' + (nowDate.getMonth() + 1)).slice(-2) + '.' + nowDate.getFullYear();
            const customerFirstName = orderData.shippingFirstname;
            const customerLastName = orderData.shippingLastname;
            const customerName = customerFirstName + ' ' + customerLastName;
            const adminMessage = adminEmailContent.content.replace('{name}', customerName).replace('{orderId}', orderData.orderId);
            const customerMessage = emailContent.content.replace('{name}', customerName);
            mail_services_1.MAILService.adminOrderMail(adminMessage, orderData, adminEmailContent.subject, productDetailData, today);
            const sendMailRes = mail_services_1.MAILService.customerOrderMail(customerMessage, orderData, emailContent.subject, productDetailData, today);
            if (sendMailRes) {
                const successResponse = {
                    status: 1,
                    message: 'سفارش و مشخصات ارسال شما با موفقیت ثبت شد',
                    data: resultData,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'Customer Mail does not send but Order Successfully',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Customer Order List API
    /**
     * @api {get} /api/orders/order-list My Order List
     * @apiGroup Store order
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {Number} count count in number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully show the Order List..!!",
     *      "status": "1",
     *      "data": {},
     * }
     * @apiSampleRequest /api/orders/order-list
     * @apiErrorExample {json} Order List error
     * HTTP/1.1 500 Internal Server Error
     */
    // Order List Function
    orderList(limit, offset, count, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const search = [
                {
                    name: 'customerId',
                    op: 'where',
                    value: request.user.id,
                },
            ];
            const whereConditions = 0;
            const select = ['orderId', 'customerId', 'currencyId', 'orderStatus', 'total', 'createdDate', 'orderPrefixId'];
            const relation = ['orderStatus'];
            const OrderData = yield this.orderService.list(limit, offset, select, search, whereConditions, relation, count);
            if (count) {
                const Response = {
                    status: 1,
                    message: 'Successfully get Count. ',
                    data: OrderData,
                };
                return response.status(200).send(Response);
            }
            const promises = OrderData.map((results) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const Id = results.orderId;
                const countValue = yield this.orderProductService.findAndCount({ where: { orderId: Id } });
                results.items = countValue[1];
                return results;
            }));
            const result = yield Promise.all(promises);
            const successResponse = {
                status: 1,
                message: 'Successfully shown the order list. ',
                data: class_transformer_1.classToPlain(result),
            };
            return response.status(200).send(successResponse);
        });
    }
    // Customer Order Detail API
    /**
     * @api {get} /api/orders/order-detail My OrderDetail
     * @apiGroup Store order
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} orderId Order Id
     * @apiParamExample {json} Input
     * {
     *      "orderId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully show the Order Detail..!!",
     *      "status": "1",
     *      "data": {},
     * }
     * @apiSampleRequest /api/orders/order-detail
     * @apiErrorExample {json} Order Detail error
     * HTTP/1.1 500 Internal Server Error
     */
    // Order Detail Function
    orderDetail(orderid, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const orderData = yield this.orderService.find({
                where: { orderId: orderid, customerId: request.user.id },
                select: ['orderId', 'orderStatusId', 'orderPrefixId', 'telephone', 'shippingFirstname', 'shippingLastname', 'shippingCompany', 'shippingAddress1',
                    'shippingAddress2', 'shippingCity', 'shippingZone', 'shippingPostcode', 'shippingCountry', 'shippingAddressFormat',
                    'paymentFirstname', 'paymentLastname', 'paymentCompany', 'paymentAddress1', 'paymentAddress2', 'paymentCity',
                    'paymentPostcode', 'paymentCountry', 'paymentZone', 'paymentAddressFormat', 'total', 'createdDate'],
            });
            const promises = orderData.map((result) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const product = yield this.orderProductService.find({
                    where: { orderId: orderid },
                    select: ['orderProductId', 'orderId', 'productId', 'name', 'model', 'quantity', 'total', 'productPrice'],
                }).then((val) => {
                    console.log(val);
                    const productVal = val.map((value) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        const productDetail = yield this.productService.findOne({
                            where: { productId: value.productId },
                            select: ['name', 'quantity', 'minimumQuantity', 'image',
                                'imagePath', 'shipping', 'price', 'dateAvailable', 'amount', 'rating', 'discount', 'isActive'],
                        });
                        const image = yield this.productImageService.findOne({
                            select: ['image', 'containerName'],
                            where: { productId: value.productId, defaultImage: 1 },
                        });
                        const tempVal = value;
                        const nowDate = new Date();
                        const todaydate = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate();
                        const productSpecial = yield this.productSpecialService.findSpecialPrice(value.productId, todaydate);
                        const productDiscount = yield this.productDiscountService.findDiscountPrice(value.productId, todaydate);
                        if (productSpecial !== undefined) {
                            tempVal.pricerefer = productSpecial.price;
                            tempVal.flag = 1;
                        }
                        else if (productDiscount !== undefined) {
                            tempVal.pricerefer = productDiscount.price;
                            tempVal.flag = 0;
                        }
                        else {
                            tempVal.pricerefer = '';
                            tempVal.flag = '';
                        }
                        tempVal.productDetail = productDetail;
                        tempVal.productDetail.productImage = image;
                        return tempVal;
                    }));
                    const results = Promise.all(productVal);
                    return results;
                });
                const orderStatusData = yield this.orderStatusService.findOne({
                    where: { orderStatusId: result.orderStatusId },
                    select: ['name', 'colorCode'],
                });
                let str = JSON.stringify(orderStatusData);
                str = str.replace(/name/g, 'orderStatusName');
                str = str.replace(/colorCode/g, 'statusColorCode');
                const orderStatus = JSON.parse(str);
                const data = result;
                const temp = Object.assign({}, data, orderStatus);
                temp.productList = product;
                const customer = yield this.customerService.findOne({
                    where: { id: request.user.id },
                    select: ['firstName', 'lastName', 'username', 'mobileNumber', 'email', 'city', 'address', 'pincode', 'countryId', 'zoneId'],
                });
                temp.customerDetail = customer;
                return temp;
            }));
            const resultData = yield Promise.all(promises);
            const successResponse = {
                status: 1,
                message: 'Successfully shown the order Detail. ',
                data: resultData,
            };
            return response.status(200).send(successResponse);
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Post('/customer-checkout'),
    routing_controllers_1.Authorized('customer'),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()), tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [customerCheckoutRequest_1.CustomerCheckoutRequest, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerOrderController.prototype, "customerCheckout", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/order-list'),
    routing_controllers_1.Authorized('customer'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('count')), tslib_1.__param(3, routing_controllers_1.Req()), tslib_1.__param(4, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerOrderController.prototype, "orderList", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/order-detail'),
    routing_controllers_1.Authorized('customer'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('orderId')), tslib_1.__param(1, routing_controllers_1.Req()), tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CustomerOrderController.prototype, "orderDetail", null);
CustomerOrderController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/orders'),
    tslib_1.__metadata("design:paramtypes", [OrderService_1.OrderService, OrderProductService_1.OrderProductService, OrderTotalService_1.OrderTotalService,
        CustomerService_1.CustomerService, ProductService_1.ProductService, ProductImageService_1.ProductImageService, SettingService_1.SettingService,
        emailTemplateService_1.EmailTemplateService, ProductDiscountService_1.ProductDiscountService,
        ProductSpecialService_1.ProductSpecialService, orderStatusService_1.OrderStatusService, countryService_1.CountryService])
], CustomerOrderController);
exports.CustomerOrderController = CustomerOrderController;
//# sourceMappingURL=CustomerOrderController.js.map