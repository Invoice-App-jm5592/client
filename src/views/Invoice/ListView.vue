<template>
  <BasePage>
    <template #header>
      <InvoiceListHeader />
    </template>
    <template #content>
      <BaseLoadingSpinner v-if="isLoading" />
      <BaseError v-else-if="error" :message="error" />
      <InvoiceListEmpty v-else-if="store.getters.isInvoicesListEmpty" />
      <InvoiceList v-else :list="store.getters.invoicesList" />
    </template>
  </BasePage>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { onMounted, ref } from 'vue';
import BasePage from '@/common/components/BasePage.vue';
import InvoiceList from '@/modules/invoices/components/InvoiceList.vue';
import InvoiceListHeader from '@/modules/invoices/components/InvoiceListHeader.vue';
import InvoiceListEmpty from '@/modules/invoices/components/InvoiceListEmpty.vue';
import axiosInstance from '@/common/config/axios';
import BaseError from '@/common/components/BaseError.vue';
import BaseLoadingSpinner from '@/common/components/BaseLoadingSpinner.vue';

const store = useStore();
const isLoading = ref(false);
const error = ref('');

onMounted(async () => {
  try {
    isLoading.value = true;
    const response = await axiosInstance.get('/api/invoices');
    store.commit('addInvoicesToList', response.data.invoices);
  } catch (_err) {
    error.value = 'Something went wrong fetching your invoices. Please try again.'
  } finally {
    setTimeout(() => {
      isLoading.value = false;
    }, 500);
  }
});
</script>