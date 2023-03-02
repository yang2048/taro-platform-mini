<template>
  <view className="container">
        <!-- 顶部自定义导航 -->
      <!-- <view class='custom-nav-bar' @click="goBack">
        <Dongdong class='icon tn-icon-left'/>
        <Dongdong class='icon tn-icon-home-capsule-fill'/>
      </view> -->

          <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed :isBack="false" :bottomShadow="false" backgroundColor="#FFFFFF">
      <view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
        <!-- 图标logo -->
        <view class="custom-nav__back">
          <view class="logo-pic tn-shadow-blur" style="background-image:url('https://tnuiimage.tnkjapp.com/logo/logo2.png')">
            <view class="logo-image">
            </view>
          </view> 
          <!-- <view class="tn-icon-left"></view> -->
        </view>
        <!-- 搜索框 -->
        <view class="custom-nav__search tn-flex tn-flex-col-center tn-flex-row-center ">
          <view class="custom-nav__search__box tn-flex tn-flex-col-center tn-flex-row-left tn-color-gray--dark tn-bg-gray--light">
            <view class="custom-nav__search__icon tn-icon-search"></view>
            <view class="custom-nav__search__text tn-padding-left-xs">搜搜学习资料</view>
          </view>
        </view>
      </view>
    </tn-nav-bar>

    <nut-backtop :bottom="80">
      <template v-slot:content>
        <view class="index">
          <!-- 红色背景 -->
          <!-- <view class="slider-bg"></view> -->

          <!-- banner 轮播图 -->
          <banner-box></banner-box>

          <!-- icons 图标 -->
          <icons></icons>
          <Shop color='red' class='icon tn-icon-left'/>
        <Share color='red' class='icon tn-icon-home-capsule-fill' />
          {{ msg }}
        <Dongdong />
        <view class="btn">
          <nut-button type="primary" @click="handleClick('text', msg2, true)">点我</nut-button>
        </view>
        <nut-toast :msg="msg2" v-model:visible="show" :type="type" :cover="cover" />
        </view>
      </template>
    </nut-backtop>
  </view>
</template>

<script>
definePageConfig({
  navigationBarTitleText: '首页',
  enablePullDownRefresh: true,
  usingComponents: {},
  navigationStyle: 'custom',
});

import { reactive, toRefs, onMounted } from 'vue';
import { Router } from 'tarojs-router-next';

import { Shop, Share, Dongdong } from '@nutui/icons-vue-taro';
import Notice from './components/notice.vue';
import BannerBox from './components/bannerBox.vue';
import Icons from './components/icons.vue';

import './index.scss';

export default {
  name: 'Index',
  components: {
    Dongdong,
    BannerBox,
    Notice,
    Icons,
  },
  setup() {
    const state = reactive({
      msg: '欢迎使用, 小程序开发中。。',
      msg2: '你成功了～',
      type: 'text',
      show: false,
      cover: false,
    });

    const handleClick = (type, msg, cover = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;
      Router.featureB.toIndex()
    };

    return {
      ...toRefs(state),
      handleClick,
    };
  },
};
</script>
