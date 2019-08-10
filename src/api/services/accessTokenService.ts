/*
 * spurtcommerce API
 * version 2.2
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import {AccessTokenRepository} from '../repositories/accessTokenRepository';
import {AccessToken} from '../models/accessTokenModel';

@Service()
export class AccessTokenService {

    constructor(@OrmRepository() private accessTokenRepository: AccessTokenRepository,
                @Logger(__filename) private log: LoggerInterface) {
    }

    public findOne(accessToken: any): Promise<any> {
        return this.accessTokenRepository.findOne(accessToken);
    }
    // delete token
    public async delete(id: number): Promise<any> {
        this.log.info('Delete a token');
        await this.accessTokenRepository.delete(id);
        return;
    }
    // create token
    public async create(accessToken: any): Promise <AccessToken> {
        return this.accessTokenRepository.save(accessToken);
    }
}
