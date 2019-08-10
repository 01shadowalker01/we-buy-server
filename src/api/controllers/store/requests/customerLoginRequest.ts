/*
 * spurtcommerce API
 * version 2.2
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import 'reflect-metadata';
import { IsNotEmpty , MinLength, IsEmail } from 'class-validator';

export class CustomerLogin {
    @IsEmail({}, {
        message: 'Please provide username as emailId',
    })
    @IsNotEmpty({
        message: 'Email Id is required',
    })
    public emailId: string;

    @MinLength(5, {
        message: 'password is minimum 5 character',
    })
    @IsNotEmpty({
        message: 'password is required',
    })
    public password: string;
}
