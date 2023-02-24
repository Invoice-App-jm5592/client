<template>
  <div 
    class="w-[110px] h-[40px] flex justify-center items-center bg-opacity-10 p-4 rounded-md"
    :class="conditionalContainerStyles"
  >
    <div class="w-2 h-2 rounded-full mr-2 -translate-y-px" :class="conditionalContainerStyles" />
    <BaseTypography is-bold :styles="conditionalTextStyles">
      {{ props.status }}
    </BaseTypography>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType, computed } from 'vue';
import BaseTypography from '@/common/components/BaseTypography.vue';
import { InvoiceStatus } from '../types';

const props = defineProps({
  status: {
    type: String as PropType<InvoiceStatus>,
    require: true,
  }
});

const conditionalContainerStyles = computed(() => {
  return {
    "bg-orange": props.status === "Pending",
    "bg-green": props.status === "Paid",
    "bg-white": props.status === "Draft",
  }
});

const conditionalTextStyles = computed(() => {
  switch (props.status) {
    case "Draft":
      return "text-white";
    case "Pending":
      return "text-orange";
    case "Paid":
      return "text-green";
    default: 
      return "";
  }
});
</script>