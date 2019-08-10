import { Connection } from 'typeorm';
import { Factory, Seed } from 'typeorm-seeding';
import { User } from '../../api/models/User';
import { UserGroup } from '../../api/models/UserGroup';
export class CreateUser implements Seed {

    public async seed(factory: Factory, connection: Connection): Promise<User> {
        const em = connection.createEntityManager();
        const user = new User();
        user.userId = 1;
        user.username = 'admin@piccocart.com';
        user.password = await User.hashPassword('cart123@');
        user.email = 'no-reply@spurtcommerce.com';
        const userGroupData = await factory(UserGroup)().seed();
        user.userGroupId = userGroupData.groupId;
        return await em.save(user);
    }
}
