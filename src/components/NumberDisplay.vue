<template>
  <view class="test">
    <text class="title">{{ getNumbers }}</text>
  </view>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useCounter, useSystem } from '@src/store'
const count = useCounter()
const system = useSystem()
console.log(system.options)
const getNumbers = computed(() => count.number)
</script>

<style>
.title {
  font-size: 40px;
}
</style>
