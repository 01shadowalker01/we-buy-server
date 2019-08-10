"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/*
 * SpurtCommerce API
 * version 2.1
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 PICCOSOFT
 * Author piccosoft <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
const dotenv = tslib_1.__importStar(require("dotenv"));
const path = tslib_1.__importStar(require("path"));
const pkg = tslib_1.__importStar(require("../package.json"));
const env_1 = require("./lib/env");
/**
 * Load .env file or for tests the .env.test file.
 */
dotenv.config({ path: path.join(process.cwd(), `.env${((process.env.NODE_ENV === 'test') ? '.test' : '')}`) });
/**
 * Environment variables
 */
exports.env = {
    node: process.env.NODE_ENV || 'development',
    isProduction: process.env.NODE_ENV === 'production',
    isTest: process.env.NODE_ENV === 'test',
    isDevelopment: process.env.NODE_ENV === 'development',
    app: {
        name: env_1.getOsEnv('APP_NAME'),
        version: pkg.version,
        description: pkg.description,
        host: env_1.getOsEnv('APP_HOST'),
        schema: env_1.getOsEnv('APP_SCHEMA'),
        routePrefix: env_1.getOsEnv('APP_ROUTE_PREFIX'),
        port: env_1.normalizePort(process.env.PORT || env_1.getOsEnv('APP_PORT')),
        banner: env_1.toBool(env_1.getOsEnv('APP_BANNER')),
        dirs: {
            migrations: env_1.getOsPaths('TYPEORM_MIGRATIONS'),
            migrationsDir: env_1.getOsPath('TYPEORM_MIGRATIONS_DIR'),
            entities: env_1.getOsPaths('TYPEORM_ENTITIES'),
            entitiesDir: env_1.getOsPath('TYPEORM_ENTITIES_DIR'),
            controllers: env_1.getOsPaths('CONTROLLERS'),
            middlewares: env_1.getOsPaths('MIDDLEWARES'),
            interceptors: env_1.getOsPaths('INTERCEPTORS'),
            subscribers: env_1.getOsPaths('SUBSCRIBERS'),
            resolvers: env_1.getOsPaths('RESOLVERS'),
        },
    },
    log: {
        level: env_1.getOsEnv('LOG_LEVEL'),
        json: env_1.toBool(env_1.getOsEnvOptional('LOG_JSON')),
        output: env_1.getOsEnv('LOG_OUTPUT'),
    },
    db: {
        type: env_1.getOsEnv('TYPEORM_CONNECTION'),
        host: env_1.getOsEnvOptional('TYPEORM_HOST'),
        port: env_1.toNumber(env_1.getOsEnvOptional('TYPEORM_PORT')),
        username: env_1.getOsEnvOptional('TYPEORM_USERNAME'),
        password: env_1.getOsEnvOptional('TYPEORM_PASSWORD'),
        database: env_1.getOsEnv('TYPEORM_DATABASE'),
        synchronize: env_1.toBool(env_1.getOsEnvOptional('TYPEORM_SYNCHRONIZE')),
        logging: env_1.toBool(env_1.getOsEnv('TYPEORM_LOGGING')),
    },
    apidoc: {
        enabled: env_1.toBool(env_1.getOsEnv('APIDOC_ENABLED')),
        route: env_1.getOsEnv('APIDOC_ROUTE'),
    },
    monitor: {
        enabled: env_1.toBool(env_1.getOsEnv('MONITOR_ENABLED')),
        route: env_1.getOsEnv('MONITOR_ROUTE'),
        username: env_1.getOsEnv('MONITOR_USERNAME'),
        password: env_1.getOsEnv('MONITOR_PASSWORD'),
    },
    imageserver: env_1.getOsEnv('IMAGE_SERVER'),
};
exports.mail = {
    SERVICE: env_1.getOsEnv('MAIL_DRIVER'),
    HOST: env_1.getOsEnv('MAIL_HOST'),
    PORT: env_1.getOsEnv('MAIL_PORT'),
    SECURE: env_1.getOsEnv('MAIL_SECURE'),
    FROM: env_1.getOsEnv('MAIL_FROM'),
    AUTH: {
        user: env_1.getOsEnv('MAIL_USERNAME'),
        pass: env_1.getOsEnv('MAIL_PASSWORD'),
    },
};
// AWS S3 Access Key
exports.aws_setup = {
    AWS_ACCESS_KEY_ID: env_1.getOsEnv('AWS_ACCESS_KEY_ID'),
    AWS_SECRET_ACCESS_KEY: env_1.getOsEnv('AWS_SECRET_ACCESS_KEY'),
    AWS_DEFAULT_REGION: env_1.getOsEnv('AWS_DEFAULT_REGION'),
    AWS_BUCKET: env_1.getOsEnv('AWS_BUCKET'),
};
//# sourceMappingURL=env.js.map