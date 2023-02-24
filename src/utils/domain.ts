import Taro, { getAccountInfoSync } from '@tarojs/taro';

// xuanen、lingyuan、dev
const dictionary: { [key: string]: string } = {
  develop: `http://192.168.8.229:8089`, // 开发环境
  trial: `https://www.yyovo.com/trial`, // 体验环境
  release: `https://www.yyovo.com/pro`, // 正式环境
};

console.log(Taro.getEnv(), '00000');
console.log('编译环境：', process.env.NODE_ENV);

const domain = () => {
  if (Taro.getEnv() === 'WEB') {
    return dictionary.develop;
  }
  const env = getAccountInfoSync();
  return dictionary[env.miniProgram.envVersion];
};

export default domain;
