<template>
  <button 
    @click="props.onClick"
    :class="classes"
    class="rounded-3xl transition-all flex items-center"
  > 
    <span v-if="$slots.icon" class="my-2 ml-2 rounded-full bg-white w-8 h-8 flex items-center justify-center">
      <slot name="icon" />
    </span>
    <div :class="conditionalLabelClasses($slots.icon)">
      <BaseTypography is-bold>
        <slot name="label" />
      </BaseTypography>
    </div>
  </button>
</template>

<script lang="ts" setup>
import { defineProps, PropType, computed, Slot } from 'vue';
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

const conditionalLabelClasses = computed(() => {
  return (hasIcon: Slot|undefined) => {
    return {
      "my-4 mx-6": !hasIcon,
      "m-4": hasIcon,
    }
  }
});
</script>