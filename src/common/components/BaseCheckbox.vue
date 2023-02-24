<template>
  <div class="flex mb-4 last:mb-0">
    <div
      class="mr-4 cursor-pointer rounded-sm w-4 h-4 bg-light-black border-transparent border-[1px] hover:border-dark-violet transition-all" />
    <BaseTypography is-bold>
      {{ props.label }}
    </BaseTypography>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue';
import { InvoiceStatus } from '@/modules/invoices/types';
import BaseTypography from './BaseTypography.vue';

const props = defineProps({
  label: {
    type: String as PropType<InvoiceStatus>,
    require: true,
  }
});
</script>