<template>
  <BasePage>
    <template #header>
      <InvoiceListHeader />
    </template>
    <template #content>
      <InvoiceListEmpty v-if="store.getters.isInvoicesListEmpty" />
      <InvoiceList v-else :list="store.getters.invoicesList" />
    </template>
  </BasePage>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { onMounted } from 'vue';
import BasePage from '@/common/components/BasePage.vue';
import InvoiceList from '@/modules/invoices/components/InvoiceList.vue';
import InvoiceListHeader from '@/modules/invoices/components/InvoiceListHeader.vue';
import InvoiceListEmpty from '@/modules/invoices/components/InvoiceListEmpty.vue';
import axiosInstance from '@/common/config/axios';

const store = useStore();

onMounted(async () => {
  try {
    const response = await axiosInstance.get('/api/invoices');
    store.commit('addInvoicesToList', response.data.invoices);
  } catch (error) {
    console.error(error);
  }
});
</script>