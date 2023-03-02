<template>
  <view class="icons">
    <view>
      <nut-grid :border="false" :gutter="20" :column-num="4">
        <nut-grid-item v-for="(item, index) in [...list].splice(0, 10)" :key="index" :text="item.name" @click="handleClick(item.path)">
          <nut-avatar size="large">
            <img :src="item.img" />
          </nut-avatar>
        </nut-grid-item>
      </nut-grid>
    </view>
    <nut-swiper :pagination-visible="true" pagination-color="#426543">
      <!-- <nut-swiper-item>
        <nut-grid :column-num="5">
          <nut-grid-item v-for="(item, index) in [...list].splice(0, 10)" :key="index" :text="item.name" @click="handleClick(item.path)">
            <img :src="item.img" />
          </nut-grid-item>
        </nut-grid>
      </nut-swiper-item>
      <nut-swiper-item>
        <nut-grid :column-num="5">
          <nut-grid-item v-for="(item, index) in [...list].splice(10, 18)" :key="index" :text="item.name">
            <img :src="item.img" />
          </nut-grid-item>
        </nut-grid>
      </nut-swiper-item> -->
    </nut-swiper>
  </view>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { Router } from 'tarojs-router-next';

export default {
  name: 'Icons',
  setup() {
    const state = reactive({
      list: [
        // {
        //   code: '01',
        //   path: '/featureA/pages/index/index',
        //   img: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/icons/icon1.png',
        //   name: 'store体验',
        // },
        {
          code: '02',
          path: '/featureB/pages/nutui/index',
          img: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/icons/icon2.png',
          name: 'ui测试',
        },
        {
          code: '03',
          path: '/featureB/pages/request/index',
          img: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/icons/icon3.png',
          name: '请求测试',
        },
        {
          code: '01',
          path: '/featureB/pages/index/index',
          img: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/icons/icon4.png',
          name: 'store体验',
        },
        {
          code: '01',
          path: '/featureB/pages/index/index',
          img: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/icons/icon5.png',
          name: '京东到家',
        },
        // {
        //   code: '01',
        //   path: '',
        //   img: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/icons/icon6.png',
        //   name: '充值缴费',
        // },
        // {
        //   img: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/icons/icon7.png',
        //   name: '附近好店',
        // },
        // {
        //   img: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/icons/icon8.png',
        //   name: '领券',
        // },
        // {
        //   img: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/icons/icon9.png',
        //   name: '领金贴',
        // },
        // {
        //   img: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/icons/icon10.png',
        //   name: 'PLUS会员',
        // },
        // {
        //   img: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/icons/icon11.png',
        //   name: '京东国际',
        // },
        // {
        //   img: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/icons/icon12.png',
        //   name: '京东拍卖',
        // },
        // {
        //   img: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/icons/icon13.png',
        //   name: '玩3C',
        // },
        // {
        //   img: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/icons/icon14.png',
        //   name: '沃尔玛',
        // },
        // {
        //   img: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/icons/icon15.png',
        //   name: '美妆馆',
        // },
        // {
        //   img: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/icons/icon16.png',
        //   name: '京东旅行',
        // },
        // {
        //   img: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/icons/icon17.png',
        //   name: '拍拍二手',
        // },
        // {
        //   img: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/icons/icon18.png',
        //   name: '潮燃青年',
        // },
      ],
    });
    const handleClick = (path) => {
      Router.navigate({ url: path });
    };
    return {
      ...toRefs(state),
      handleClick,
    };
  },
};
</script>
