/*
 * spurtcommerce API
 * version 2.1
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { IsNotEmpty } from 'class-validator';
import {BeforeInsert, Column, Entity, BeforeUpdate, PrimaryGeneratedColumn , ManyToOne , JoinColumn} from 'typeorm';
import { Exclude } from 'class-transformer';
import {Product} from './ProductModel';
import {BaseModel} from './BaseModel';
import moment from 'moment';

@Entity('customer_wishlist')
export class CustomerWishlist extends BaseModel {
    @PrimaryGeneratedColumn({ name: 'id' })
    public wishlistProductId: number;
    @Exclude()
    @IsNotEmpty()
    @Column({ name: 'customer_id' })
    public customerId: number;

    @Exclude()
    @IsNotEmpty()
    @Column({ name: 'product_id' })
    public productId: string;

    @Exclude()
    @Column({ name: 'is_active' })
    public isActive: number;

    @ManyToOne(type => Product, product => product.wishlist)
    @JoinColumn({ name: 'product_id' })
    public product: Product;

    @BeforeInsert()
    public async createDetails(): Promise<void> {
        this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }

    @BeforeUpdate()
    public async updateDetails(): Promise<void> {
        this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }
}
