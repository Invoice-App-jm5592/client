<template>
  <div class="py-6 px-8 bg-dark-blue-gray rounded-lg flex justify-between align-center">
    <div class="flex items-center">
      <BaseTypography styles="mr-5">Status</BaseTypography>
      <InvoiceStatus :status="props.status ?? 'PENDING'" />
    </div>
    <div class="flex items-center">
      <BaseButton classes="mr-2 bg-light-blue-gray hover:bg-gray">
        <template #label>
          Edit
        </template>
      </BaseButton>
      <BaseButton classes="mr-2 bg-red hover:bg-rose">
        <template #label>
          Delete
        </template>
      </BaseButton>
      <BaseButton classes="bg-dark-violet hover:bg-light-violet">
        <template #label>
          Mark as Paid
        </template>
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import BaseTypography from '@/common/components/BaseTypography.vue';
import InvoiceStatus from './InvoiceStatus.vue';
import { InvoiceStatus as TInvoiceStatus } from '../types';
import BaseButton from '@/common/components/BaseButton.vue';

const props = defineProps({
  status: {
    type: String as PropType<TInvoiceStatus>,
    required: true
  }
});
</script>