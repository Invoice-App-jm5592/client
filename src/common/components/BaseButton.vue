<template>
  <button 
    @click="props.onClick"
    class="rounded-3xl bg-dark-violet hover:bg-light-violet transition-all flex items-center"
    :class="classes"
  > 
    <span v-if="$slots.icon" class="my-2 ml-2 rounded-full bg-white w-8 h-8 flex items-center justify-center">
      <slot name="icon" />
    </span>
    <BaseTypography is-bold styles="m-4">
      <slot name="label" />
    </BaseTypography>
  </button>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue';
import BaseTypography from './BaseTypography.vue';

type onClickHandler = () => void;

const props = defineProps({
  onClick: {
    type: Function as PropType<onClickHandler>,
    require: true
  },
  classes: {
    type: String,
    default: ""
  }
});
</script>