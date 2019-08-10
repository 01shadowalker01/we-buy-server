"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const UserGroup_1 = require("../../api/models/UserGroup");
class UserGroupData {
    seed(factory, connection) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const em = connection.createEntityManager();
            const user = new UserGroup_1.UserGroup();
            user.groupId = 1;
            user.name = 'admin';
            return yield em.save(user);
        });
    }
}
exports.UserGroupData = UserGroupData;
//# sourceMappingURL=UserGroupData.js.map