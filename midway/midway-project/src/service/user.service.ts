import { Inject, Provide } from '@midwayjs/decorator';
import { UserLoginDTO } from '../dto/user.dto';
import { IUserOptions } from '../interface';
import { UserModel } from '../model/user.model';

@Provide()
export class UserService {


  @Inject()
  userModel: UserModel;


  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }

  async login(userLoginDTO: UserLoginDTO) {
    //调用userModel中的方法 , 模仿从数据库中查询用户信息
    var userEntity = this.userModel.getUserByUsernameAndPassword(userLoginDTO.username, userLoginDTO.password);

    return userEntity;
  }
}
