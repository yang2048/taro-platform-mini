import Taro from '@tarojs/taro';

interface IPerson {
  code: number;
  data: any;
  msg: string;
  success: boolean;
  timestamp: string;
}
export const getTest = async () => {
  return await Taro.request<IPerson[]>({
    url: '/api/v1/cms/banner/adPositionList',
  });
};

export const getError = async () => {
  return await Taro.request<IPerson[]>({
    url: '/api/v1/cms/banner/adPositionList',
  });
};

export const getFail = async () => {
  return await Taro.request<IPerson[]>({
    url: 'getFail',
    data: {
      a: 'bb',
      c: 'dd',
    },
    method: 'POST',
  }).catch((err) => {
    console.log(err);
  });
};

export const getEmpty = async () => {
  return await Taro.request<IPerson[]>({
    url: 'getEmpty',
    data: {
      a: 'bb',
      c: 'dd',
    },
    header: {
      auth: 'app', // 默认值
    },
  });
};
