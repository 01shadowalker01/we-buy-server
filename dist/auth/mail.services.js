"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/*
 * spurtcommerce API
 * version 2.2
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
const ejs_1 = tslib_1.__importDefault(require("ejs"));
const nodemailer_1 = tslib_1.__importDefault(require("nodemailer"));
const nodemailer_smtp_transport_1 = tslib_1.__importDefault(require("nodemailer-smtp-transport"));
const env_1 = require("../env");
class MAILService {
    // for add customer API
    static customerLoginMail(emailContent, email, Subject) {
        const productDetailData = undefined;
        return new Promise((resolve, reject) => {
            const transporter = nodemailer_1.default.createTransport(nodemailer_smtp_transport_1.default({
                host: env_1.mail.HOST,
                port: env_1.mail.PORT,
                secure: env_1.mail.SECURE,
                auth: {
                    user: env_1.mail.AUTH.user,
                    pass: env_1.mail.AUTH.pass,
                },
            }));
            ejs_1.default.renderFile('./views/emailTemplate.ejs', { emailContent, productDetailData }, (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    const mailOptions = {
                        from: env_1.mail.FROM,
                        to: email,
                        subject: Subject,
                        html: data,
                    };
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            reject(error);
                            console.log(error);
                        }
                        else {
                            console.log('Email sent: ' + info.response);
                            resolve(info);
                        }
                    });
                }
            });
        });
    }
    //  customer register
    static registerMail(emailContent, email, Subject) {
        const productDetailData = undefined;
        return new Promise((resolve, reject) => {
            const transporter = nodemailer_1.default.createTransport(nodemailer_smtp_transport_1.default({
                host: env_1.mail.HOST,
                port: env_1.mail.PORT,
                secure: env_1.mail.SECURE,
                auth: {
                    user: env_1.mail.AUTH.user,
                    pass: env_1.mail.AUTH.pass,
                },
            }));
            ejs_1.default.renderFile('./views/emailTemplate.ejs', { emailContent, productDetailData }, (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    const mailOptions = {
                        from: env_1.mail.FROM,
                        to: email,
                        subject: Subject,
                        html: data,
                    };
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            reject(error);
                            console.log(error);
                        }
                        else {
                            console.log('Email sent: ' + info.response);
                            resolve(info);
                        }
                    });
                }
            });
        });
    }
    // forgot password
    static passwordForgotMail(emailContent, email, Subject) {
        const productDetailData = undefined;
        return new Promise((resolve, reject) => {
            const transporter = nodemailer_1.default.createTransport(nodemailer_smtp_transport_1.default({
                host: env_1.mail.HOST,
                port: env_1.mail.PORT,
                secure: env_1.mail.SECURE,
                auth: {
                    user: env_1.mail.AUTH.user,
                    pass: env_1.mail.AUTH.pass,
                },
            }));
            ejs_1.default.renderFile('./views/emailTemplate.ejs', { emailContent, productDetailData }, (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    const mailOptions = {
                        from: env_1.mail.FROM,
                        to: email,
                        subject: Subject,
                        html: data,
                    };
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            reject(error);
                            console.log(error);
                        }
                        else {
                            console.log('Email sent: ' + info.response);
                            resolve(info);
                        }
                    });
                }
            });
        });
    }
    // contact Us
    static contactMail(emailContent, Subject) {
        const productDetailData = undefined;
        return new Promise((resolve, reject) => {
            const transporter = nodemailer_1.default.createTransport(nodemailer_smtp_transport_1.default({
                host: env_1.mail.HOST,
                port: env_1.mail.PORT,
                secure: env_1.mail.SECURE,
                auth: {
                    user: env_1.mail.AUTH.user,
                    pass: env_1.mail.AUTH.pass,
                },
            }));
            ejs_1.default.renderFile('./views/emailTemplate.ejs', { emailContent, productDetailData }, (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    const mailOptions = {
                        to: env_1.mail.FROM,
                        subject: Subject,
                        html: data,
                    };
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            reject(error);
                            console.log(error);
                        }
                        else {
                            console.log('Email sent: ' + info.response);
                            resolve(info);
                        }
                    });
                }
            });
        });
    }
    // admin mail for check out
    static adminOrderMail(emailContent, orderData, Subject, productDetailData, today) {
        return new Promise((resolve, reject) => {
            const transporter = nodemailer_1.default.createTransport(nodemailer_smtp_transport_1.default({
                host: env_1.mail.HOST,
                port: env_1.mail.PORT,
                secure: env_1.mail.SECURE,
                auth: {
                    user: env_1.mail.AUTH.user,
                    pass: env_1.mail.AUTH.pass,
                },
            }));
            ejs_1.default.renderFile('./views/emailTemplate.ejs', { emailContent, orderData, productDetailData, today }, (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    const mailOptions = {
                        from: orderData.email,
                        to: env_1.mail.FROM,
                        subject: Subject + ' ' + orderData.orderPrefixId,
                        html: data,
                    };
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            reject(error);
                            console.log(error);
                        }
                        else {
                            console.log('Email sent: ' + info.response);
                            resolve(info);
                        }
                    });
                }
            });
        });
    }
    // customer mail for check out
    static customerOrderMail(emailContent, orderData, Subject, productDetailData, today) {
        return new Promise((resolve, reject) => {
            const transporter = nodemailer_1.default.createTransport(nodemailer_smtp_transport_1.default({
                host: env_1.mail.HOST,
                port: env_1.mail.PORT,
                secure: env_1.mail.SECURE,
                auth: {
                    user: env_1.mail.AUTH.user,
                    pass: env_1.mail.AUTH.pass,
                },
            }));
            ejs_1.default.renderFile('./views/emailTemplate.ejs', { emailContent, orderData, productDetailData, today }, (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    const mailOptions = {
                        from: env_1.mail.FROM,
                        to: orderData.email,
                        subject: Subject + ' ' + orderData.orderPrefixId,
                        html: data,
                    };
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            reject(error);
                            console.log(error);
                        }
                        else {
                            console.log('Email sent: ' + info.response);
                            resolve(info);
                        }
                    });
                }
            });
        });
    }
}
exports.MAILService = MAILService;
//# sourceMappingURL=mail.services.js.map