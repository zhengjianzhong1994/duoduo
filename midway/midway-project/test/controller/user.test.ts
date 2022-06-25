import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';

describe('test/controller/user.test.ts', () => {

    //针对src/controller/user.ts的单元测试案例
    it('should POST /user/login', async () => {
        const app = await createApp<Framework>();


        // 发送请求(正常登录)
        let t1 = Date.now();
        const resultSuccess = await createHttpRequest(app).post('/user/login').query({ username: 'jack', password: "redballoon" });
        let t2 = Date.now();

        // 发送请求(异常登录)请求体为空
        const resultError = await createHttpRequest(app).post('/user/login').query({});


        //断言调用时间小于1秒
        expect(t2 - t1).toBeLessThanOrEqual(1000);

        //断言接口返回值格式不正确
        expect(resultSuccess.body).toMatchObject({ code: 200, result: '"success"', message: "登录成功", data: {  } });

        await close(app);
    });
});
