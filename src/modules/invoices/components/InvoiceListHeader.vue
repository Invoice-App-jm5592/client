
import BaseTypography from '@/common/components/BaseTypography.vue';

<template>
  <div class="flex justify-between items-center">
    <div>
      <BaseTypography size="lg" styles="mb-2">
        Invoices
      </BaseTypography>
      <BaseTypography>
        {{ invoicesOverviewTitle }}
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
import { computed } from 'vue';
import { useStore } from 'vuex';
import BaseButton from '@/common/components/BaseButton.vue';
import BaseTypography from '@/common/components/BaseTypography.vue';
import PlusIcon from '@/common/components/icons/PlusIcon.vue';
import InvoiceFilter from './InvoiceFilter.vue';

const store = useStore();

const invoicesOverviewTitle = computed(() => {
  if (store.getters.isInvoicesListEmpty) {
    return 'No invoices';
  }
  return `There are ${ store.getters.totalInvoices } total invoices`;
});
</script>