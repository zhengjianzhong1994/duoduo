import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { UserEntity } from "../entity/user.entity"


export class UserModel {

    @InjectEntityModel(UserEntity)
    userRepo: Repository<UserEntity>;

    /**
     * 根据用户名和密码获取用户信息
     * @param username {String} 用户名
     * @param password {String} 用户密码
     */
    async getUserByUsernameAndPassword(username, password): Promise<UserEntity> {

        //题目要求连接sqllite数据库, 但是电脑有问题, 这里没用连接数据库, 这里使用数组对象模仿数据库
        const DB = [
            {
                id: 1,
                username: "jack",
                password: "redballoon"
            }
        ]

        //模仿数据库查询
        for (var i = 0; i < DB.length; i++) {
            //判断姓名和密码是否与数据库匹配
            if (DB[i].username == username && DB[i].password == password) {
                return DB[i];
            }
        }
        //返回的是空的对象, 即为没有从数据库中查询匹配的数据
        return new UserEntity;
    }
}