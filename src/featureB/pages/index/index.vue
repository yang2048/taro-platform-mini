<template>
  <NumberDisplay />
  <number-submit />
  {{ option }} 

  <view class="c">
    <text>c component</text>
  </view>
</template>
<script lang="ts" setup>

import NumberDisplay from '@components/NumberDisplay.vue';
import NumberSubmit from '@components/NumberSubmit.vue';
import { useSystem } from '@src/store';
const system = useSystem();
const option = system.options;

const handleMessage = (e) => {
  console.info(e);
};
</script>
