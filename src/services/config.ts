/**
 * @description：后端接口配置文件
 */
let config;
switch (process.env.NODE_ENV) {
    // 生产环境接口配置
    case 'production':
        config = {
            apiGateway: '/api',
            imgFilePath: 'https://ks3-cn-beijing.ksyun.com/mall-static/images/',
            cmsConfig: 'https://ks3-cn-beijing.ksyun.com/mall-static/images/data/',
            host: '',
        };
        break;
    // 测试环境接口配置
    case 'test':
        config = {
            apiGateway: '/api',
            imgFilePath: 'https://ks3-cn-beijing.ksyun.com/mall-uat/images/',
            cmsConfig: 'https://ks3-cn-beijing.ksyun.com/mall-static/images/data/',
            host: '',
        };
        break;
    // 开发环境接口配置
    default:
        config = {
            apiGateway: '/api',
            imgFilePath: 'https://ks3-cn-beijing.ksyun.com/mall-uat/images/',
            cmsConfig: 'https://ks3-cn-beijing.ksyun.com/mall-static/images/data/',
            host: '',
        };
        break;
}

export default config;
