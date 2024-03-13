import { Users } from '../DB/models/Users';
import { Op } from 'sequelize';

export class UserService {
  static async getUserByEmail(emailOrName: string) {
    const user = await Users.findOne({
      where: {
        [Op.or]: [{ name: emailOrName }, { email: emailOrName }],
      },
    });
    if (!user) return null;
    return user;
  }
}
