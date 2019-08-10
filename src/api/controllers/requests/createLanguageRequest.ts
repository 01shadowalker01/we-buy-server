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
import { IsNotEmpty , MaxLength } from 'class-validator';
export class CreateLanguage {

    @MaxLength(32, {
        message: 'name is maximum 32 character',
    })
    @IsNotEmpty()
    public name: string;

    @MaxLength(5, {
        message: 'code is maximum 5 character',
    })
    public code: string;

    public image: string;

    public sortOrder: number;

    @IsNotEmpty()
    public status: number;
}
