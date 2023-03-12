<template>
  <div class="py-6 px-8 mb-6 bg-dark-blue-gray rounded-lg flex justify-between align-center">
    <div class="flex items-center">
      <BaseTypography styles="mr-5">Status</BaseTypography>
      <InvoiceStatus :status="currentStatus" />
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
import { computed } from 'vue';
import { useStore } from 'vuex';
import BaseTypography from '@/common/components/BaseTypography.vue';
import InvoiceStatus from './InvoiceStatus.vue';
import BaseButton from '@/common/components/BaseButton.vue';
import { InvoiceStatus as TInvoiceStatus } from '../types';

const store = useStore();

const currentStatus = computed<TInvoiceStatus>(() => {
    return store.getters.selectedInvoice?.status || null;
});
</script>