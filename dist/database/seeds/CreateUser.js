"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const User_1 = require("../../api/models/User");
const UserGroup_1 = require("../../api/models/UserGroup");
class CreateUser {
    seed(factory, connection) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const em = connection.createEntityManager();
            const user = new User_1.User();
            user.userId = 1;
            user.username = 'admin@piccocart.com';
            user.password = yield User_1.User.hashPassword('cart123@');
            user.email = 'no-reply@spurtcommerce.com';
            const userGroupData = yield factory(UserGroup_1.UserGroup)().seed();
            user.userGroupId = userGroupData.groupId;
            return yield em.save(user);
        });
    }
}
exports.CreateUser = CreateUser;
//# sourceMappingURL=CreateUser.js.map