"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class CreateUserRelationToUserGroupTable1546521833384 {
    constructor() {
        this.tableForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_users_usergroup',
            columnNames: ['user_group_id'],
            referencedColumnNames: ['group_id'],
            referencedTableName: 'user_group',
            onDelete: 'CASCADE',
        });
    }
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createForeignKey('users', this.tableForeignKey);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropForeignKey('users', this.tableForeignKey);
        });
    }
}
exports.CreateUserRelationToUserGroupTable1546521833384 = CreateUserRelationToUserGroupTable1546521833384;
//# sourceMappingURL=1546521833384-CreateUserRelationToUserGroupTable.js.map