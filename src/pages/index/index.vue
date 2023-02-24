<template>
  <view className="container" class="bg-light">
    <nut-backtop :bottom="80">
      <template v-slot:content>
        <view class="index">
          <!-- 红色背景 -->
          <!-- <view class="slider-bg"></view> -->

          <!-- banner 轮播图 -->
          <banner-box></banner-box>

          <!-- 通知 -->
          <notice></notice>

          <!-- icons 图标 -->
          <icons></icons>

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
import { reactive, toRefs, onMounted } from 'vue';
import { Router } from 'tarojs-router-next';

import { Dongdong } from '@nutui/icons-vue-taro';
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

<style lang="scss">
.index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
