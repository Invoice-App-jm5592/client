<template>
  <div class="bg-dark-blue-gray mb-4 py-4 px-6 rounded-lg flex justify-between items-center">
    <BaseTypography is-bold>
      <span class="text-dark-blue">#</span>{{ props.invoice.invoice_number }}
    </BaseTypography>
    <BaseTypography>
      {{ props.invoice.issue_date }}
    </BaseTypography>
    <BaseTypography>
      {{ props.invoice.bill_to.name }}
    </BaseTypography>
    <div class="flex items-center justify-end">
      <BaseTypography is-bold>
        {{ props.invoice.total }} €
      </BaseTypography>
    </div>
    <InvoiceStatus :status="props.invoice.status" />
    <div class="flex align-center justify-end">
      <ArrowLeftIcon />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import BaseTypography from '@/common/components/BaseTypography.vue';
import { Invoice } from '../types';
import ArrowLeftIcon from '@/common/components/icons/ArrowLeftIcon.vue';
import InvoiceStatus from './InvoiceStatus.vue';

const props = defineProps({
  invoice: {
    type: Object as PropType<Invoice>,
    required: true
  }
});
</script>