<template>
  <div 
    v-if="props.isVisible"
    class="h-[100vh] w-[35vw] flex flex-col overflow-x-hidden overflow-y-auto bg-light-black absolute top-0 left-[100px] rounded-tr-2xl rounded-br-2xl z-[200] p-6"
  >
    <div class="mb-14">
      <slot name="header" />
    </div>
    <div>
      <slot name="content" />
    </div>
    <div class="mt-auto">
      <slot name="footer" />
    </div>
  </div>
  <div 
    @click="clickAwayListener" 
    v-if="props.isVisible"
    class="z-[199] bg-black h-[100vh] w-[100vw] absolute top-0 opacity-80" 
  />
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    require: true,
    default: false
  }
});

const emits = defineEmits(['clickAway']);
const clickAwayListener = () => {
  emits('clickAway');
}
</script>
