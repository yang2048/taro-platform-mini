import { createApp } from 'vue';
import 'uno.css';

import { setupStore } from '@src/store';
import '@src/utils/router';
import './app.scss';
import '@src/utils/request';

const App = createApp({
  onLaunch(options) {
    // 程序入口 onLaunch 时调用
  },
  onShow(options) {
    // 程序显示 / 隐藏时调用
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

setupStore(App);

export default App;
