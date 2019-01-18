import Mock from 'mockjs';
import loginAPI from './login';
import userAPI from './user'


// 登录相关
// Mock.mock(/\/login\/loginbyemail/, 'post', loginAPI.loginByEmail);
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout);
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getInfo);
// Mock.mock(/\/user\/userlist/, 'get', userAPI.getUserList);



export default Mock;
