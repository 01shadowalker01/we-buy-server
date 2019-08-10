/*
 * spurtcommerce API
 * version 2.1
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import {BeforeInsert, Column, Entity, BeforeUpdate, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import { Exclude } from 'class-transformer';
import {BaseModel} from './BaseModel';
import moment from 'moment';
import {Product} from './ProductModel';
import {Customer} from './Customer';

@Entity('product_rating')
export class ProductRating extends BaseModel {
    @PrimaryGeneratedColumn({ name: 'rating_id' })
    public ratingId: number;

    @Column({ name: 'product_id' })
    public productId: number;

    @Column({ name: 'order_product_id' })
    public orderProductId: number;

    @Column({ name: 'customer_id' })
    public customerId: string;

    @Column({ name: 'first_name' })
    public firstName: string;

    @Column({ name: 'last_name' })
    public lastName: string;

    @Column({ name: 'email' })
    public email: string;

    @Column({ name: 'image_path' })
    public imagePath: string;

    @Column({ name: 'image' })
    public image: string;

    @Column({ name: 'rating' })
    public rating: number;

    @Column({ name: 'review' })
    public review: string;

    @Exclude()
    @Column({ name: 'is_active' })
    public isActive: number;

    @ManyToOne(type => Product, product => product.productRating)
    @JoinColumn({ name: 'product_id' })
    public product: Product;

    @ManyToOne(type => Customer, customer => customer.productRating)
    @JoinColumn({ name: 'customer_id' })
    public customer: Customer;

    @BeforeInsert()
    public async createDetails(): Promise<void> {
        this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }

    @BeforeUpdate()
    public async updateDetails(): Promise<void> {
        this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }
}
