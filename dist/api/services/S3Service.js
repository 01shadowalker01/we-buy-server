"use strict";
/*
 * SpurtCommerce API
 * version 2.2
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const AWS = tslib_1.__importStar(require("aws-sdk")); // Load the SDK for JavaScript
const typedi_1 = require("typedi");
const env_1 = require("../../env");
const s3 = new AWS.S3();
let S3Service = class S3Service {
    // Bucket list
    listBucker(limit = 0, folderName = '') {
        AWS.config.update({ accessKeyId: env_1.aws_setup.AWS_ACCESS_KEY_ID, secretAccessKey: env_1.aws_setup.AWS_SECRET_ACCESS_KEY });
        // Create the parameters for calling createBucket
        const bucketParams = {
            Bucket: env_1.aws_setup.AWS_BUCKET,
            MaxKeys: limit,
            Delimiter: '/',
            Prefix: folderName,
        };
        return new Promise((resolve, reject) => {
            return s3.listObjects(bucketParams, (err, data) => {
                if (err) {
                    reject(err);
                }
                console.log(data);
                resolve(data);
            });
        });
    }
    // create folder
    createFolder(folderName = '') {
        AWS.config.update({ accessKeyId: env_1.aws_setup.AWS_ACCESS_KEY_ID, secretAccessKey: env_1.aws_setup.AWS_SECRET_ACCESS_KEY });
        // Create the parameters for calling createBucket
        const bucketParams = {
            Bucket: env_1.aws_setup.AWS_BUCKET,
            Key: folderName,
        };
        return new Promise((resolve, reject) => {
            return s3.putObject(bucketParams, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }
    // delete folder
    deleteFolder(folderName = '') {
        console.log(folderName);
        AWS.config.update({ accessKeyId: env_1.aws_setup.AWS_ACCESS_KEY_ID, secretAccessKey: env_1.aws_setup.AWS_SECRET_ACCESS_KEY });
        // Create the parameters for calling createBucket
        const bucketParams = {
            Bucket: env_1.aws_setup.AWS_BUCKET,
            Prefix: folderName,
        };
        return new Promise((resolve, reject) => {
            s3.listObjects(bucketParams, (err, data) => {
                if (err) {
                    reject(err);
                }
                console.log(data);
                const objects = data.Contents.map(object => ({ Key: object.Key }));
                return s3.deleteObjects({
                    Bucket: env_1.aws_setup.AWS_BUCKET,
                    Delete: {
                        Objects: objects,
                        Quiet: true,
                    },
                }, (error, val) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(val);
                });
            });
        });
    }
    // delete file
    deleteFile(fileName = '') {
        AWS.config.update({ accessKeyId: env_1.aws_setup.AWS_ACCESS_KEY_ID, secretAccessKey: env_1.aws_setup.AWS_SECRET_ACCESS_KEY });
        // Create the parameters for calling createBucket
        const bucketParams = {
            Bucket: env_1.aws_setup.AWS_BUCKET,
            Key: fileName,
        };
        return new Promise((resolve, reject) => {
            return s3.deleteObject(bucketParams, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
                console.log(data);
            });
        });
    }
    // Image resize
    resizeImage(imgName = '', imgPath = '', widthString = '', heightString = '') {
        AWS.config.update({ accessKeyId: env_1.aws_setup.AWS_ACCESS_KEY_ID, secretAccessKey: env_1.aws_setup.AWS_SECRET_ACCESS_KEY });
        // Create the parameters for calling createBucket
        const getParams = {
            Bucket: env_1.aws_setup.AWS_BUCKET,
            Key: imgPath + imgName,
        };
        console.log(getParams);
        return new Promise((resolve, reject) => {
            s3.getObject(getParams, (err, data) => {
                if (err) {
                    reject(err);
                }
                console.log(data);
                const gm = require('gm').subClass({ imageMagick: true });
                return gm(data.Body)
                    .resize(widthString, heightString)
                    .toBuffer((error, buffer) => {
                    if (error) {
                        throw error;
                    }
                    else {
                        console.log('Buffer' + Buffer.isBuffer(buffer));
                        resolve(buffer);
                    }
                });
            });
        });
    }
    // delete file
    imageUpload(folderName = '', base64Image, imageType) {
        AWS.config.update({ accessKeyId: env_1.aws_setup.AWS_ACCESS_KEY_ID, secretAccessKey: env_1.aws_setup.AWS_SECRET_ACCESS_KEY });
        const params = {
            Bucket: env_1.aws_setup.AWS_BUCKET,
            Key: folderName,
            Body: base64Image,
            ACL: 'public-read',
            ContentEncoding: 'base64',
            ContentType: `image/${imageType}`,
        };
        return new Promise((resolve, reject) => {
            return s3.upload(params, (err, data) => {
                if (err) {
                    return reject(err);
                }
                const locationArray = data.Location.split('/');
                locationArray.pop();
                const locationPath = locationArray.join('/');
                return resolve({ path: locationPath });
            });
        });
    }
    // search folder
    getFolder(folderName = '') {
        AWS.config.update({ accessKeyId: env_1.aws_setup.AWS_ACCESS_KEY_ID, secretAccessKey: env_1.aws_setup.AWS_SECRET_ACCESS_KEY });
        // Create the parameters for calling createBucket
        const bucketParams = {
            Bucket: env_1.aws_setup.AWS_BUCKET,
            Prefix: folderName,
            Delimiter: '/',
        };
        return new Promise((resolve, reject) => {
            return s3.listObjects(bucketParams, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
                console.log(data);
            });
        });
    }
};
S3Service = tslib_1.__decorate([
    typedi_1.Service()
], S3Service);
exports.S3Service = S3Service;
//# sourceMappingURL=S3Service.js.map