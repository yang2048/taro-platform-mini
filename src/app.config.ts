export default defineAppConfig({
  pages: ['pages/index/index', 'pages/my/index'],
  subpackages: [
    {
      name: 'featureB',
      root: 'featureB',
      pages: ['pages/index/index', 'pages/nutui/index', 'pages/request/index'],
    },
  ],
  tabBar: {
    custom: true,
    backgroundColor: '#fafafa',
    borderStyle: 'white',
    selectedColor: '#AB956D',
    color: '#666',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: './static/images/icon18.png',
        selectedIconPath: './static/images/icon18.png',
        text: '首页',
      },
      // {
      //   pagePath: 'pages/my/index',
      //   text: '分类',
      // },
      // {
      //   pagePath: 'pages/my/index',
      //   text: '购物车',
      // },
      {
        pagePath: 'pages/my/index',
        iconPath: './static/images/icon10.png',
        selectedIconPath: './static/images/icon10.png',
        text: '个人中心',
      },
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    backgroundColor: '#e5e5e5',
  },
  networkTimeout: {
    request: 10000,
    downloadFile: 10000,
  },
  debug: true,
});
