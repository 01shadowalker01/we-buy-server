/*
 * spurtcommerce API
 * version 2.1
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import 'reflect-metadata';
export class CreateSettingRequest {

    public url: string;
    public metaTagTitle: string;
    public metaTagDescription: string;
    public metaTagKeywords: string;
    public storeName: string;
    public storeOwner: string;
    public storeAddress: string;
    public zoneId: number;
    public countryId: number;
    public storeEmail: string;
    public storeTelephone: string;
    public storeFax: string;
    public storeLogo: string;
    public maintenanceMode: number;
    public storeLanguageName: number;
    public storeCurrencyId: number;
    public storeImage: string;
    public google: string;
    public twitter: string;
    public instagram: string;
    public facebook: string;
    public status: number;
    public invoicePrefix: string;
    public orderStatus: number;
    public categoryProductCount: number;
    public itemsPerPage: number;
}
