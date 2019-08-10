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
import { ProductSpecial } from '../models/ProductSpecial';
import { ProductSpecialRepository } from '../repositories/ProductSpecialRepository';

@Service()
export class ProductSpecialService {
    constructor(
        @OrmRepository() private productSpecialRepository: ProductSpecialRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    // create a data
    public async create(Data: any): Promise<ProductSpecial> {
        this.log.info('create a data');
        return this.productSpecialRepository.save(Data);
    }
    // findone a data
    public findOne(id: any): Promise<ProductSpecial> {
        this.log.info('Find a data');
        return this.productSpecialRepository.findOne(id);
    }
    // find a data
    public findAll(productSpecial: any): Promise<ProductSpecial[]> {
        this.log.info('Find a data');
        return this.productSpecialRepository.find(productSpecial);
    }
     // delete product option
     public async delete(id: any): Promise<any> {
        this.log.info('Delete a product option value');
        const deleteProductOptionValue = await this.productSpecialRepository.delete(id);
        return deleteProductOptionValue;
    }

    // find special price
    public async findSpecialPrice(productId: number, todayDate: string): Promise<any> {
        return await this.productSpecialRepository.findSpecialPrice(productId, todayDate);
    }
}
