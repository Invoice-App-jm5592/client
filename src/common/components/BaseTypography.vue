<template>
  <p v-if="props.size === 'sm'" class="text-sm text-white" :class="conditionalClasses">
    <slot />
  </p>
  <p v-if="props.size === 'body'" class="text-body text-white" :class="conditionalClasses">
    <slot />
  </p>
  <h2 v-if="props.size === 'md'" class="text-md text-white" :class="conditionalClasses">
    <slot />
  </h2>
  <h1 v-if="props.size === 'lg'" class="text-lg text-white" :class="conditionalClasses">
    <slot />
  </h1>
</template>

<script lang="ts" setup>
import { defineProps, PropType, computed } from 'vue';

const props = defineProps({
  size: {
    type: String as PropType<"sm" | "body" | "md" | "lg">,
    require: true,
    default: "body"
  },
  isBold: {
    type: Boolean,
    default: false,
  },
  styles: {
    type: String,
    default: "",
  }
});

const conditionalClasses = computed(() => {
  return {
    "font-bold": props.isBold,
    [props.styles]: props.styles
  }
});
</script>