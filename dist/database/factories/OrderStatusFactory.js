"use strict";
/*
 * spurtcommerce API
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const orderStatus_1 = require("../../api/models/orderStatus");
typeorm_seeding_1.define(orderStatus_1.OrderStatus, (faker, settings) => {
    const orderStatus = new orderStatus_1.OrderStatus();
    return orderStatus;
});
//# sourceMappingURL=OrderStatusFactory.js.map