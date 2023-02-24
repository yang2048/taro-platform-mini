<template>
  <cover-view class="tab-bar">
    <cover-view class="tab-bar-border"></cover-view>
    <cover-view v-for="(item, index) in list" :key="index" class="tab-bar-item" @tap="switchTab(index, item.pagePath)">
      <cover-image :src="tabbar.selected === index ? item.selectedIconPath : item.iconPath" />
      <cover-view :style="{ color: tabbar.selected === index ? selectedColor : color }">{{ item.text }}</cover-view>
    </cover-view>
  </cover-view>
</template>

<script setup>
import Taro from '@tarojs/taro';
import { useTabbar } from '@src/store';
const tabbar = useTabbar();
const color = '#000000';
const selectedColor = '#DC143C';
const list = [
  {
    pagePath: '/pages/index/index',
    selectedIconPath: 'https://ghproxy.net/https://raw.githubusercontent.com/NervJS/taro/next/examples/custom-tabbar-vue3/src/images/tabbar_cate_on.png',
    iconPath: 'https://ghproxy.net/https://raw.githubusercontent.com/NervJS/taro/next/examples/custom-tabbar-vue3/src/images/tabbar_cate.png',
    text: '首页',
  },
  // {
  //   pagePath: '/pages/my/index',
  //   selectedIconPath: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/icons/icon10.png',
  //   iconPath: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/icons/icon18.png',
  //   text: '分类',
  // },
  // {
  //   pagePath: '/pages/my/index',
  //   selectedIconPath: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/icons/icon10.png',
  //   iconPath: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/icons/icon18.png',
  //   text: '购物车'
  // },
  {
    pagePath: '/pages/my/index',
    selectedIconPath: '../static/images/icon18.png',
    iconPath: '../static/images/icon10.png',
    text: '个人中心',
  },
];
function switchTab(index, url) {
  setSelected(index);
  Taro.switchTab({ url });
}
function setSelected(index) {
  tabbar.setSelected(index);
}
</script>

<style lang="scss">
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: white;
  display: flex;
  padding-bottom: env(safe-area-inset-bottom);
}
.tab-bar-border {
  background-color: rgba(190, 190, 190, 0.3);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 2px;
  transform: scaleY(0.5);
  box-shadow: 0px 0px 20px 0px rgba(190, 190, 190, 0.3) inset,
}
.tab-bar-item {
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.tab-bar-item cover-image {
  width: 54px;
  height: 54px;
}
.tab-bar-item cover-view {
  font-size: 30px;
}
</style>
