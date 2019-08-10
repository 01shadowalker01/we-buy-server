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
    Post,
    Delete,
    Put,
    Body,
    QueryParam,
    Param,
    JsonController,
    Authorized,
    Req,
    Res
} from 'routing-controllers';
import * as AWS from 'aws-sdk';
import {classToPlain} from 'class-transformer';
import {aws_setup} from '../../env';
import {CustomerService} from '../services/CustomerService';
import {Customer} from '../models/Customer';
import {CreateCustomer} from './requests/createCustomerRequest';
import {User} from '../models/User';
import {MAILService} from '../../auth/mail.services';
import {UpdateCustomer} from './requests/updateCustomerRequest';
import {OrderService} from '../services/OrderService';
import {ProductImageService} from '../services/ProductImageService';
import {ProductService} from '../services/ProductService';
import {OrderProductService} from '../services/OrderProductService';
import {EmailTemplateService} from '../services/emailTemplateService';

@JsonController('/customer')
export class CustomerController {
    constructor(private customerService: CustomerService, private orderProductService: OrderProductService,
                private productService: ProductService,
                private productImageService: ProductImageService,
                private orderService: OrderService,
                private emailTemplateService: EmailTemplateService) {
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
    @Post('/add-customer')
    @Authorized()
    public async addCustomer(@Body({validate: true}) customerParam: CreateCustomer, @Res() response: any): Promise<any> {

        const avatar = customerParam.avatar;
        const newCustomer: any = new Customer();
        const resultUser = await this.customerService.findOne({where: {email: customerParam.email, deleteFlag: 0}});
        if (resultUser) {
            const successResponse: any = {
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
                Bucket: aws_setup.AWS_BUCKET,
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
                } else {
                    console.log('error while uploading image');
                }
            });
        }
        if (customerParam.password === customerParam.confirmPassword) {
            const password = await User.hashPassword(customerParam.password);
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

            const customerSave = await this.customerService.create(newCustomer);

            if (customerSave) {
                if (customerParam.mailStatus === 1) {
                    const emailContent = await this.emailTemplateService.findOne(4);
                    const message = emailContent.content.replace('{name}', customerParam.username).replace('{email}', customerParam.email).replace('{xxxxxx}', customerParam.password);
                    MAILService.customerLoginMail(message, customerParam.email, emailContent.subject);
                    const successResponse: any = {
                        status: 1,
                        message: 'Successfully created new Customer with user name and password and send an email. ',
                        data: customerSave,
                    };
                    return response.status(200).send(successResponse);
                } else {
                    const successResponse: any = {
                        status: 1,
                        message: 'Customer Created Successfully',
                        data: customerSave,
                    };
                    return response.status(200).send(successResponse);
                }
            }
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Password does not match.',
            };
            return response.status(400).send(errorResponse);
        }
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
    @Get('/customerlist')
    @Authorized()
    public async customerList(@QueryParam('limit') limit: number, @QueryParam('offset') offset: number, @QueryParam('name') name: string, @QueryParam('status') status: string, @QueryParam('email') email: string, @QueryParam('customerGroup') customerGroup: string, @QueryParam('date') date: string, @QueryParam('count')count: number | boolean, @Res() response: any): Promise<any> {
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
        const customerList = await this.customerService.list(limit, offset, search, WhereConditions, 0, count);

        const successResponse: any = {
            status: 1,
            message: 'Successfully got Customer list.',
            data: customerList,
        };
        return response.status(200).send(successResponse);

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
    @Delete('/delete-customer/:id')
    @Authorized()
    public async deleteCustomer(@Param('id')id: number, @Res() response: any, @Req() request: any): Promise<any> {

        const customer = await this.customerService.findOne({
            where: {
                id,
            },
        });
        if (!customer) {
            const errorResponse: any = {
                status: 0,
                message: 'Invalid customerId',
            };
            return response.status(400).send(errorResponse);
        }
        customer.deleteFlag = 1;
        const deleteCustomer = await this.customerService.create(customer);
        if (deleteCustomer) {
            const successResponse: any = {
                status: 1,
                message: 'Customer Deleted Successfully',
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'unable to change delete flag status',
            };
            return response.status(400).send(errorResponse);
        }
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
    @Put('/update-customer/:id')
    @Authorized()
    public async updateCustomer(@Param('id')id: number, @Body({validate: true}) customerParam: UpdateCustomer, @Res() response: any): Promise<any> {
        console.log(customerParam);
        const customer = await this.customerService.findOne({
            where: {
                id,
            },
        });
        if (!customer) {
            const errorResponse: any = {
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
                    Bucket: aws_setup.AWS_BUCKET,
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
                    } else {
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
                const password = await User.hashPassword(customerParam.password);
                customer.password = password;
            }
            customer.newsletter = customerParam.newsletter;
            customer.mailStatus = customerParam.mailStatus;
            customer.isActive = customerParam.status;
            const customerSave = await this.customerService.create(customer);
            if (customerSave) {
                const successResponse: any = {
                        status: 1,
                        message: 'Customer Updated Successfully',
                        data: customerSave,
                };
                return response.status(200).send(successResponse);

            }
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'Password does not match.',
            };
            return response.status(400).send(errorResponse);
        }
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
    @Get('/customer-details/:id')
    @Authorized()
    public async customerDetails(@Param('id')Id: number, @Res() response: any): Promise<any> {
        const customer = await this.customerService.findOne({
            where: {id: Id},
        });
        if (!customer) {
            const errorResponse: any = {
                status: 0,
                message: 'invalid CustomerId',
            };
            return response.status(400).send(errorResponse);
        }

        const order = await this.orderService.find({where: {customerId: Id}});
        const productLists = await order.map(async (result: any) => {
            const product = await this.orderProductService.find({
                where: {orderId: result.orderId},
                select: ['productId', 'orderId', 'name', 'model', 'total', 'createdDate'],
            });
            const productPromises = await product.map(async (value: any) => {
                const productsDetails: any = value;
                const products = await this.productService.find({where: {productId: value.productId}});

                const productImages = await products.map(async (values: any) => {
                    const productImagesResult: any = values;
                    const Image = await this.productImageService.findOne({
                        select: ['productId', 'productImageId', 'image', 'containerName', 'defaultImage'],
                        where: {productId: values.productId, defaultImage: 1},
                    });
                    productImagesResult.productImages = Image;
                    return productImagesResult;
                });
                const images = await Promise.all(productImages);
                productsDetails.productDetails = images;
                return productsDetails;
            });
            const productsListWithImages = await Promise.all(productPromises);
            const temp: any = await productsListWithImages;
            return temp;
        });

        const finalResult = await Promise.all(productLists);
        customer.productList = finalResult;
        // customer.productCount = finalResult.length;
        if (finalResult) {
            const successResponse: any = {
                status: 1,
                message: 'successfully got Customer details. ',
                data: customer,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'unable to get customer Details',
            };
            return response.status(400).send(errorResponse);
        }
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
    @Get('/recent-customerlist')
    @Authorized()
    public async recentCustomerList(@Res() response: any): Promise<any> {
        const order = 1;
        const WhereConditions = [
            {
                name: 'deleteFlag',
                value: 0,
            },
        ];
        const customerList = await this.customerService.list(0, 0, 0, WhereConditions, order, 0);
        const successResponse: any = {
            status: 1,
            message: 'Successfully got Customer list.',
            data: classToPlain(customerList),
        };

        return response.status(200).send(successResponse);
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
    @Get('/today-customercount')
    @Authorized()
    public async customerCount(@Res() response: any): Promise<any> {

        const nowDate = new Date();
        const todaydate = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate();
        const customerCount = await this.customerService.todayCustomerCount(todaydate);
        const successResponse: any = {
            status: 1,
            message: 'Successfully get customerCount',
            data: customerCount,
        };
        return response.status(200).send(successResponse);

    }
}
