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
const routing_controllers_1 = require("routing-controllers");
const createFolderNameRequest_1 = require("./requests/createFolderNameRequest");
const createFileNameRequest_1 = require("./requests/createFileNameRequest");
const S3Service_1 = require("../services/S3Service");
const ImageService_1 = require("../services/ImageService");
const env_1 = require("../../env");
AWS.config.update({
    accessKeyId: env_1.aws_setup.AWS_ACCESS_KEY_ID,
    secretAccessKey: env_1.aws_setup.AWS_SECRET_ACCESS_KEY,
    region: env_1.aws_setup.AWS_DEFAULT_REGION,
});
// const s3 = new AWS.S3();
let MediaController = class MediaController {
    constructor(s3Service, imageService) {
        this.s3Service = s3Service;
        this.imageService = imageService;
    }
    // Get Bucket Object List API
    /**
     * @api {get} /api/media/bucket-object-list bucket-object-list
     * @apiGroup media
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit list limit
     * @apiParam (Request body) {String} folderName Specific Folder Name
     * @apiParamExample {json} Input
     * {
     *      "limit" : "",
     *      "folderName" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get bucket object list!",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/media/bucket-object-list
     * @apiErrorExample {json} media error
     * HTTP/1.1 500 Internal Server Error
     */
    ObjectList(folderName, limit, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('working');
            console.log('S3 folderName:- ' + folderName);
            console.log('S3 Limit:- ' + limit);
            let val;
            if (env_1.env.imageserver === 's3') {
                val = yield this.s3Service.listBucker(limit, folderName);
            }
            else {
                val = yield this.imageService.listFolders(limit, folderName);
            }
            console.log(val);
            if (val) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully get bucket object list',
                    data: val,
                };
                return response.status(200).send(successResponse);
            }
        });
    }
    // Create Bucket Object --- Like Folder
    /**
     * @api {post} /api/media/create-folder Create Folder
     * @apiGroup media
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {String} folderName Specific Folder Name
     * @apiParamExample {json} Input
     * {
     *      "folderName" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully Created folder!",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/media/create-folder
     * @apiErrorExample {json} media error
     * HTTP/1.1 500 Internal Server Error
     */
    CreateFolder(folderNameValidation, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('working');
            console.log('S3 folderName:- ' + folderNameValidation.folderName);
            let val;
            if (env_1.env.imageserver === 's3') {
                val = yield this.s3Service.createFolder(folderNameValidation.folderName);
            }
            else {
                val = yield this.imageService.createFolder(folderNameValidation.folderName);
            }
            if (val) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully created folder',
                    data: val,
                };
                return response.status(200).send(successResponse);
            }
        });
    }
    // Delete Bucket Object --- Like Folder
    /**
     * @api {post} /api/media/delete-folder delete folder API
     * @apiGroup media
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {String} folderName Specific Folder Name
     * @apiParamExample {json} Input
     * {
     *      "folderName" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully Deleted folder!",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/media/delete-folder
     * @apiErrorExample {json} media error
     * HTTP/1.1 500 Internal Server Error
     */
    DeleteFolder(folderNameValidation, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('working');
            console.log('S3 folderName:- ' + folderNameValidation.folderName);
            const val = yield this.s3Service.deleteFolder(folderNameValidation.folderName);
            console.log(val);
            if (val) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully deleted folder',
                };
                return response.status(200).send(successResponse);
            }
        });
    }
    // Delete file API
    /**
     * @api {get} /api/media/delete-file delete file API
     * @apiGroup media
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {String} fileName  File Name
     * @apiParamExample {json} Input
     * {
     *      "fileName" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully Deleted file!",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/media/delete-file
     * @apiErrorExample {json} media error
     * HTTP/1.1 500 Internal Server Error
     */
    DeleteFile(fileName, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('working');
            console.log('S3 fileName:- ' + fileName);
            let val;
            if (env_1.env.imageserver === 's3') {
                val = yield this.s3Service.deleteFile(fileName);
            }
            else {
                val = yield this.imageService.deleteFile(fileName);
            }
            console.log(val);
            if (val) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully deleted file',
                };
                return response.status(200).send(successResponse);
            }
        });
    }
    //  Upload Image File
    /**
     * @api {post} /api/media/upload-file  Upload File
     * @apiGroup media
     * @apiParam (Request body) {String} image image
     * @apiParam (Request body) {String} path Directory Name
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     *    {
     *      "file":"",
     *      "path" : "",
     *    }
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    {
     *      "message": "Successfully upload file",
     *      "status": "1"
     *    }
     * @apiSampleRequest /api/media/upload-file
     * @apiErrorExample {json} media error
     *    HTTP/1.1 500 Internal Server Error
     *    {
     *        "message": "Unable to upload file",
     *        "status": 0,
     *    }
     */
    uploadFile(fileNameRequest, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const base64 = fileNameRequest.image;
            const path = fileNameRequest.path;
            AWS.config.update({ accessKeyId: env_1.aws_setup.AWS_ACCESS_KEY_ID, secretAccessKey: env_1.aws_setup.AWS_SECRET_ACCESS_KEY });
            const base64Data = new Buffer(base64.replace(/^data:image\/\w+;base64,/, ''), 'base64');
            const type = base64.split(';')[0].split('/')[1];
            const name = 'Img_' + Date.now() + '.' + type;
            let val;
            if (env_1.env.imageserver === 's3') {
                val = yield this.s3Service.imageUpload((path === '' ? name : path + name), base64Data, type);
            }
            else {
                val = yield this.imageService.imageUpload((path === '' ? name : path + name), base64Data);
            }
            console.log(val);
            const successResponse = {
                status: 1,
                message: 'Image successfully uploaded',
                data: {
                    image: name,
                    path: val.path,
                },
            };
            return response.status(200).send(successResponse);
        });
    }
    // image resize API
    /**
     * @api {get} /api/media/image-resize  Resize Image On The Fly
     * @apiGroup Resize-Image
     * @apiParam (Request body) {String} width width
     * @apiParam (Request body) {String} height height
     * @apiParam (Request body) {String} name name
     * @apiParam (Request body) {String} path path
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    {
     *      "message": "Successfully resize image",
     *      "status": "1"
     *    }
     *    @apiSampleRequest /api/media/image-resize
     * @apiErrorExample {json} media error
     *    HTTP/1.1 500 Internal Server Error
     *    {
     *        "message": "Unable to resize the image",
     *        "status": 0,
     *    }
     */
    image_resize(width, height, name, path, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('Dim' + width + height);
            const widthString = width;
            const heightString = height;
            const imgPath = path;
            const imgName = name;
            console.log('Dim' + width + height);
            console.log('Path' + imgPath);
            console.log('filename' + imgName);
            const ext = imgName.split('.');
            console.log('ext ' + ext[1]);
            if (ext[1] === 'jpg' || ext[1] === 'jpeg' || ext[1] === 'png') {
                let val;
                if (env_1.env.imageserver === 's3') {
                    val = yield this.s3Service.resizeImage(imgName, imgPath, widthString, heightString);
                }
                else {
                    val = yield this.imageService.resizeImage(imgName, imgPath, widthString, heightString);
                }
                if (val) {
                    return new Promise(() => {
                        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
                        response.write(val, 'binary');
                        response.end(undefined, 'binary');
                    });
                }
            }
            else {
                return response.status(400).send({ status: 0, message: 'Only allow jpg/jpeg/png format image!' });
            }
        });
    }
    // Get folder API
    /**
     * @api {get} /api/media/search-folder search Folder API
     * @apiGroup media
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {String} folderName  folderName
     * @apiParamExample {json} Input
     * {
     *      "FolderName" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get Folder!",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/media/search-folder
     * @apiErrorExample {json} media error
     * HTTP/1.1 500 Internal Server Error
     */
    getFolder(folderName, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('working');
            console.log('S3 folderName:- ' + folderName);
            let val;
            if (env_1.env.imageserver === 's3') {
                val = yield this.s3Service.getFolder(folderName);
            }
            else {
                val = yield this.imageService.getFolder(folderName);
            }
            console.log(val);
            if (val) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully got folder details',
                    data: val,
                };
                return response.status(200).send(successResponse);
            }
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get('/bucket-object-list'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('folderName')), tslib_1.__param(1, routing_controllers_1.QueryParam('limit')), tslib_1.__param(2, routing_controllers_1.Req()), tslib_1.__param(3, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MediaController.prototype, "ObjectList", null);
tslib_1.__decorate([
    routing_controllers_1.Post('/create-folder'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Req()), tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [createFolderNameRequest_1.FolderNameRequest, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MediaController.prototype, "CreateFolder", null);
tslib_1.__decorate([
    routing_controllers_1.Post('/delete-folder'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Req()), tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [createFolderNameRequest_1.FolderNameRequest, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MediaController.prototype, "DeleteFolder", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/delete-file'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('fileName')), tslib_1.__param(1, routing_controllers_1.Req()), tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MediaController.prototype, "DeleteFile", null);
tslib_1.__decorate([
    routing_controllers_1.Post('/upload-file'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Req()), tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [createFileNameRequest_1.FileNameRequest, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MediaController.prototype, "uploadFile", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/image-resize'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('width')), tslib_1.__param(1, routing_controllers_1.QueryParam('height')), tslib_1.__param(2, routing_controllers_1.QueryParam('name')), tslib_1.__param(3, routing_controllers_1.QueryParam('path')), tslib_1.__param(4, routing_controllers_1.Req()), tslib_1.__param(5, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, String, String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MediaController.prototype, "image_resize", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/search-folder'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('folderName')), tslib_1.__param(1, routing_controllers_1.Req()), tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MediaController.prototype, "getFolder", null);
MediaController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/media'),
    tslib_1.__metadata("design:paramtypes", [S3Service_1.S3Service,
        ImageService_1.ImageService])
], MediaController);
exports.MediaController = MediaController;
//# sourceMappingURL=MediaController.js.map