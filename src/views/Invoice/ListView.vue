<template>
  <BasePage>
    <template #header>
      <InvoiceListHeader />
    </template>
    <template #content>
      <InvoiceList :list="store.getters.invoicesList" />
    </template>
  </BasePage>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import BasePage from '@/common/components/BasePage.vue';
import InvoiceList from '@/modules/invoices/components/InvoiceList.vue';
import InvoiceListHeader from '@/modules/invoices/components/InvoiceListHeader.vue';

const store = useStore();
</script>