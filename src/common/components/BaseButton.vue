<template>
  <button 
    @click="onClick"
    class="rounded-3xl bg-dark-violet hover:bg-light-violet transition-all flex items-center"
  > 
    <span class="my-2 ml-2 rounded-full bg-white w-8 h-8 flex items-center justify-center">
      <PlusIcon />
    </span>
    <BaseTypography is-bold styles="m-4">
      {{ props.label }}
    </BaseTypography>
  </button>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue';
import BaseTypography from './BaseTypography.vue';
import PlusIcon from '../components/icons/PlusIcon.vue';

// eslint-disable-next-line no-unused-vars
type onClickHandler = (payload: MouseEvent) => void;

const props = defineProps({
  label: {
    type: String,
    require: true
  },
  onClick: {
    type: Function as PropType<onClickHandler>,
    require: true
  },
  icon: {
    default: ""
  }
});
</script>