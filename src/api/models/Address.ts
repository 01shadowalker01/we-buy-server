/*
 * spurtcommerce API
 * version 2.1
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import { Column, Entity, BeforeInsert, BeforeUpdate , PrimaryGeneratedColumn} from 'typeorm';
import {BaseModel} from './BaseModel';
import moment = require('moment/moment');
@Entity('address')
export class Address extends BaseModel {

    @PrimaryGeneratedColumn({ name: 'address_id' })
    public addressId: number;

    @Column({ name: 'customer_id' })
    public customerId: number;

    @Column({ name: 'country_id' })
    public countryId: number;

    @Column({ name: 'zone_id' })
    public zoneId: number;

    @Column({ name: 'first_name' })
    public firstName: string;

    @Column({ name: 'last_name' })
    public lastName: string;

    @Column({ name: 'company' })
    public company: string;

    @Column({ name: 'address_1' })
    public address1: string;

    @Column({ name: 'address_2' })
    public address2: string;

    @Column({ name: 'postcode' })
    public postcode: number;

    @Column({ name: 'city' })
    public city: string;

    @Column({ name: 'state' })
    public state: string;

    @Column({ name: 'email_id' })
    public emailId: string;

    @Column({ name: 'phone_no' })
    public phoneNo: number;

    @Column({ name: 'address_type' })
    public addressType: number;

    @Column({ name: 'is_active' })
    public isActive: number;

    @BeforeInsert()
    public async createDetails(): Promise<void> {
        this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }
    @BeforeUpdate()
    public async updateDetails(): Promise<void> {
        this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }
}
