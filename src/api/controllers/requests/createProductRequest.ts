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
import {IsNotEmpty} from 'class-validator';

export class AddProductRequest {

    @IsNotEmpty()
    public productName: string;

    // @IsNotEmpty()
    public productDescription: string;

    @IsNotEmpty()
    public sku: string;

    public upc: string;

    public metaTagTitle: string;

    @IsNotEmpty()
    public categoryId: string;

    @IsNotEmpty()
    public image: string;

    @IsNotEmpty()
    public model: number;

    @IsNotEmpty()
    public price: string;

    public location: string;

    public minimumQuantity: string;

    @IsNotEmpty()
    public quantity: string;

    // @IsNotEmpty()
    public subtractStock: number;

    @IsNotEmpty()
    public outOfStockStatus: number;

    // @IsNotEmpty()
    public requiredShipping: number;

    // @IsNotEmpty()
    public dateAvailable: string;

    @IsNotEmpty()
    public condition: number;

    @IsNotEmpty()
    public status: number;

    // @IsNotEmpty()
    public sortOrder: number;

    public defaultImage: number;

    public relatedProductId: string;

    public productOptions: [];

    public productDiscount: [];

    public productSpecial: [];
}
