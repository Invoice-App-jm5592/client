<template>
  <div>
    <InvoiceListItem v-for="invoice in invoicesList" :key="invoice.id" :invoice="invoice" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import InvoiceListItem from './InvoiceListItem.vue';

const store = useStore();

const invoicesList = computed(() => {
  return store.getters.invoicesList;
});
</script>