<template>
    <view class="banner">
        <nut-swiper :pagination-visible="true" pagination-color="#426543" auto-play="3000">
            <nut-swiper-item v-for="(banner, index) in banners" :key="index" @click="handleGo(banner.link)">
                <img :src="banner.img" alt="" />
            </nut-swiper-item>
        </nut-swiper>
    </view>
</template>

<script>
import {reactive, toRefs} from 'vue'
export default {
    name: 'BannerBox',
    setup(){
        const state=reactive({
            banners: [
                {
                    img: 'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
                    link: 'https://www.jd.com'
                },
                {
                    img: 'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
                    link: 'https://www.jd.com'
                },
                {
                    img: 'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
                    link: 'https://www.jd.com'
                },
                {
                    img: 'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
                    link: 'https://www.jd.com'
                }
            ]
        })
        const handleGo = link => {
            location.href = link
        }
        return {
            ...toRefs(state),
            handleGo
        }
    }
}
</script>

<style>
</style>