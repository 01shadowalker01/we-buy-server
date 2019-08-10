"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const orderStatus_1 = require("../../api/models/orderStatus");
class CreateOrderStatus {
    seed(factory, connection) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const em = connection.createEntityManager();
            const statusData = [
                {
                    orderStatusId: 1,
                    name: 'In Progress',
                    isActive: 1,
                },
                {
                    orderStatusId: 2,
                    name: 'Shipped',
                    isActive: 1,
                },
                {
                    orderStatusId: 3,
                    name: 'Delivered',
                    isActive: 1,
                },
                {
                    orderStatusId: 4,
                    name: 'completed',
                    isActive: 1,
                },
            ];
            let i = 0;
            for (i; i < statusData.length; i++) {
                const orderStatus = new orderStatus_1.OrderStatus();
                orderStatus.orderStatusId = statusData[i].orderStatusId;
                orderStatus.name = statusData[i].name;
                orderStatus.isActive = statusData[i].isActive;
                yield em.save(orderStatus);
            }
            return statusData;
        });
    }
}
exports.CreateOrderStatus = CreateOrderStatus;
//# sourceMappingURL=CreateOrderStatus.js.map