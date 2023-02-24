<template>
    <view>
        <nut-tabbar
            :bottom="true"
            unactive-color="#333"
            active-color="#f00"
        >
            <nut-tabbar-item
                v-for="(item, index) in items"
                :key="index"
                :tab-title="item.title"
                :img="item.img"
                :activeImg="item.activeImg"
            ></nut-tabbar-item>
        </nut-tabbar>
    </view>
</template>

<script>
import { Tabbar, TabbarItem } from '@nutui/nutui-taro'
export default {
    setup() {
        const items = [
            {
                title: '首页',
                img: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/footer/home.png',
                activeImg: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/footer/home_hover.png'
            },
            {
                title: '分类',
                img: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/footer/category.png',
                activeImg: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/footer/category_hover.png'
            },
            {
                title: '附近生活圈',
                img: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/footer/life.png',
                activeImg: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/footer/life_hover.png'
            },
            {
                title: '我的',
                img: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/footer/my.png',
                activeImg: 'https://jsd.eagleyao.com/gh/jdf2e/nutui-demo@master/jdApp/src/asset/images/footer/my_hover.png'
            }
        ]
        return {
            items
        }
    },
}
</script>