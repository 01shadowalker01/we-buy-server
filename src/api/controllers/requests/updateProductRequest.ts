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

export class UpdateProductRequest {

    @IsNotEmpty()
    public productId: number;

    @IsNotEmpty()
    public productName: string;

    // @IsNotEmpty()
    public productDescription: string;

    @IsNotEmpty()
    public sku: string;

    // @IsNotEmpty()
    public upc: string;

    // @IsNotEmpty()
    public metaTagTitle: string;

    @IsNotEmpty()
    public categoryId: string;

    @IsNotEmpty()
    public image: string;

    @IsNotEmpty()
    public model: number;

    @IsNotEmpty()
    public price: string;

    // @IsNotEmpty()
    public location: string;

    // @IsNotEmpty()
    public minimumQuantity: string;

    @IsNotEmpty()
    public quantity: string;

    // @IsNotEmpty()
    public subtractStock: number;

    public outOfStockStatus: number;

    public requiredShipping: number;

    public dateAvailable: string;

    @IsNotEmpty()
    public condition: number;

    @IsNotEmpty()
    public status: number;

    public sortOrder: number;

    public defaultImage: number;

    public relatedProductId: string;

    public productOptions: [];

    public productDiscount: [];

    public productSpecial: [];
}
