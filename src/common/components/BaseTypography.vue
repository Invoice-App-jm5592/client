<template>
  <p v-if="props.size === 'sm'" class="text-sm text-white">
    <slot />
  </p>
  <p v-if="props.size === 'body'" class="text-body text-white">
    <slot />
  </p>
  <h2 v-if="props.size === 'md'" class="text-md text-white">
    <slot />
  </h2>
  <h1 v-if="props.size === 'lg'" class="text-lg text-white">
    <slot />
  </h1>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue';

const props = defineProps({
  size: {
    type: String as PropType<"sm" | "body" | "md" | "lg">,
    require: true,
    default: "body"
  },
});
</script>