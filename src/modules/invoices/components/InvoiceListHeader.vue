
import BaseTypography from '@/common/components/BaseTypography.vue';

<template>
  <div class="flex justify-between items-center">
    <div>
      <BaseTypography size="lg" styles="mb-2">
        Invoices
      </BaseTypography>
      <BaseTypography>
        There are {{ store.getters.totalInvoices }} total invoices
      </BaseTypography>
    </div>
    <div class="flex items-center">
      <InvoiceFilter />
      <BaseButton label="New Invoice">
        <template #icon>
          <PlusIcon />
        </template>
        <template #label>
          New Invoice
        </template>
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import BaseButton from '@/common/components/BaseButton.vue';
import BaseTypography from '@/common/components/BaseTypography.vue';
import PlusIcon from '@/common/components/icons/PlusIcon.vue';
import InvoiceFilter from './InvoiceFilter.vue';

const store = useStore();
</script>