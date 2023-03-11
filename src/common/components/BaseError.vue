<template>
  <div>
    <BaseTypography size="md" styles="font-bold text-red">{{ props.message }}</BaseTypography>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import BaseTypography from '@/common/components/BaseTypography.vue';

const props = defineProps({
  message: {
    type: String,
    require: true
  }
});
</script>