/*
 * spurtcommerce API
 * version 2.2
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import {Service} from 'typedi';
import {OrmRepository} from 'typeorm-typedi-extensions';
import {Logger, LoggerInterface} from '../../decorators/Logger';
import {ProductRating} from '../models/ProductRating';
import {RatingRepository} from '../repositories/ratingRepository';
import {Like} from 'typeorm';

@Service()
export class ProductRatingService {

    constructor(@OrmRepository() private ratingRepository: RatingRepository,
                @Logger(__filename) private log: LoggerInterface) {
    }

    // find one condition
    public findOne(rating: any): Promise<any> {
        return this.ratingRepository.findOne(rating);
    }

    // find all rating
    public findAll(rating: any): Promise<any> {
        this.log.info('Find all rating');
        return this.ratingRepository.find(rating);
    }

    // rating list
    public list(limit: number, offset: number, select: any = [], relation: any = [], whereConditions: any = [], count: number | boolean): Promise<any> {
        const condition: any = {};

        if (select && select.length > 0) {
            condition.select = select;
        }

        if (relation && relation.length > 0) {
            condition.relations = relation;
        }

        condition.where = {};

        if (whereConditions && whereConditions.length > 0) {
            whereConditions.forEach((item: any) => {
                const operator: string = item.op;
                if (operator === 'where' && item.value !== '') {
                    condition.where[item.name] = item.value;
                } else if (operator === 'like' && item.value !== '') {
                    condition.where[item.name] = Like('%' + item.value + '%');
                }
            });
        }

        if (limit && limit > 0) {
            condition.take = limit;
            condition.skip = offset;

        }
        console.log(condition);
        if (count) {
            return this.ratingRepository.count(condition);
        } else {
            return this.ratingRepository.find(condition);
        }
    }

    // create rating
    public async create(productRating: ProductRating): Promise<ProductRating> {
        const newRating = await this.ratingRepository.save(productRating);
        return newRating;
    }

    // update rating
    public update(id: any, productRating: ProductRating): Promise<ProductRating> {
        this.log.info('Update a rating');
        productRating.ratingId = id;
        return this.ratingRepository.save(productRating);
    }

    // delete rating
    public async delete(id: any): Promise<any> {
        this.log.info('Delete a rating');
        const newRating = await this.ratingRepository.delete(id);
        return newRating;
    }

    // getting consolidated rating
    public async consolidateRating(id: number): Promise<any> {
        return await this.ratingRepository.ratingConsolidate(id);
    }
}
