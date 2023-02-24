// // 创建用于进行错误处理的函数
// const errorHandler = (error) => {
//   // 如果是请求抛出的错误，如：链接错误、网络错误等，则会被此捕获
//   if (error instanceof Error) {
//     throw error;
//   } else {
//     const { code, msg } = error;
//     if (noPermissionCode.includes(code)) {
//       console.error('无权限访问');
//     } else {
//       console.error('其他错误');
//     }
//     throw new Error(msg);
//   }
// };

// // 请求的中间件函数内容
// /** @type {typeof import('tarojs-request').networkCheckMiddleware} */
// const responseMiddleware = async (ctx, next) => {
//   await next();

//   const {
//     res: { data },
//   } = ctx;
//   if (successCode.includes(data.code)) {
//     ctx.res = data.data;
//   } else {
//     throw data;
//   }
// };

// /** @type {typeof import('tarojs-request').networkCheckMiddleware} */
// const tokenCheckMiddleware = async (ctx, next) => {
//   const {
//     req: { header: requestHeader },
//   } = ctx;
// //   // 如果 Header 中没有传入 token 参数，则进行此处理
//   if (!requestHeader.token) {
//     const storageToken = token.get();
//     ctx.req.header.token = storageToken;
//   }
//   await next();
//   const {
//     res: { header: responseHeader },
//   } = ctx;
//   // 如果返回的响应中包含 token，则将其应用到 storage
//   if (responseHeader.token) {
//     token.set(responseHeader.token);
//   }
// };

import Taro from '@tarojs/taro';

import domain from './domain';
// import { token } from '@src/utils/storage';
// import { baseURL, successCode, noPermissionCode } from '@src/config';
// import { token } from '@src/utils/storage';
import { token } from './storage';

const customInterceptor = (chain) => {
  const requestParams = chain.requestParams;
  const { method, data, url } = requestParams;

  if (!/http[s]{0,1}:\/\//.test(url)) {
    const path = url.slice(0, 1) === '/' ? url : `/${url}`;
    const baseUrl = domain().slice(-1) === '/' ? domain().slice(0, -1) : domain();
    requestParams.url = baseUrl + path;
  }

  // 如果 Header 中没有传入 token 参数，则进行此处理
  const requestHeader = requestParams.header || { token: '' };
  if (!requestHeader.token) {
    const storageToken = token.get();
    requestParams.header = {
      ...requestParams.header,
      Authorization: 'Bearer ' + storageToken,
    };
    // requestHeader.token = storageToken || '';
    // requestParams.header = requestHeader;
  }

  console.log(`--> 请求` + chain.requestParams);
  // return chain.proceed(requestParams);
  return chain
    .proceed(requestParams)
    .then((res) => {
      console.log(`<-- 响应`, res);
      // 如果返回的响应中包含 token，则将其应用到 storage
      if (res.header.token) {
        token.set(res.header.token);
      }
      if (res.statusCode === 200 && res.data.code != 0) {
        console.log('api', '请求接口处理', res.data.msg);
      }
      return res;
      // 对返回的信息做处理
    })
    .catch((error) => {
      console.log('api', '请求接口出现问题', error);
    });
};

Taro.addInterceptor(Taro.interceptors.logInterceptor);
Taro.addInterceptor(Taro.interceptors.timeoutInterceptor);
Taro.addInterceptor(customInterceptor);
export default Taro.request;
