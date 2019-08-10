/*
 * spurtcommerce API
 * version 2.2
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { EntityRepository, Repository } from 'typeorm';
import {ProductRating} from '../models/ProductRating';

@EntityRepository(ProductRating)
export class RatingRepository extends Repository<ProductRating>  {

    public async ratingConsolidate(id: number): Promise<any> {

        const consolidate = await this.manager.createQueryBuilder(ProductRating, 'rating')
            .select([   'COUNT(rating.rating) as RatingCount'])
            .addSelect([   'SUM(rating.rating) as RatingSum'])
            .where('rating.productId = :productId', {productId: id})
            .getRawOne();
        return consolidate;
    }
}
