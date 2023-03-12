<template>
  <div
    v-if="statusLabel" 
    class="w-[110px] h-[40px] flex justify-center items-center bg-opacity-10 p-4 rounded-md"
    :class="conditionalContainerStyles"
  >
    <div class="w-2 h-2 rounded-full mr-2 -translate-y-px" :class="conditionalContainerStyles" />
    <p :class="conditionalTextStyles" class="text-body font-bold">
      {{ statusLabel }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType, computed } from 'vue';
import { InvoiceStatus } from '../types';
import { transformStringToTitleCase } from '../../../common/helpers';

const props = defineProps({
  status: {
    type: String as PropType<InvoiceStatus>,
    require: true,
  }
});

const conditionalContainerStyles = computed(() => {
  return {
    "bg-orange": props.status === "PENDING",
    "bg-green": props.status === "PAID",
    "bg-white": props.status === "DRAFT",
  }
});

const conditionalTextStyles = computed(() => {
  switch (props.status) {
    case "DRAFT":
      return "text-white";
    case "PENDING":
      return "text-orange";
    case "PAID":
      return "text-green";
    default: 
      return "";
  }
});

const statusLabel = computed(() => {
  return transformStringToTitleCase(props?.status as string);
});
</script>