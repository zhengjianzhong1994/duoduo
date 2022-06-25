import { Inject, Controller, Get, Query, Post } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';
import { UserModel } from '../model/user.model';
import { UserLoginDTO } from '../dto/user.dto';
import jwt from 'jsonwebtoken';


@Controller('/api')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Inject()
  userLoginDTO: UserLoginDTO;

  @Inject()
  userModel: UserModel;

  @Post('/user/login')
  async login(userLoginDTO: UserLoginDTO) {
    const userEntity = await this.userService.login(userLoginDTO);
    //通过判断对象中是否有值, 数据库中是否存在登录用户
    if (userEntity.username) {
      //生成token
      const token = jwt.sign(userEntity, 'my_token', { expiresIn: '100h' });
      return { code: 200, result: '"success"', message: "登录成功", data: { token: token } };
    }
    //账号或密码不正确
    return { code: 400, result: '"error"', message: "账号或密码不正确", data: null };
  }
}