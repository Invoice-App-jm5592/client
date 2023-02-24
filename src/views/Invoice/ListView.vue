<template>
  <BasePage>
    <template #header>
      <InvoiceListHeader />
    </template>
    <template #content>
      <InvoiceList :list="invoices" />
    </template>
  </BasePage>
</template>

<script setup lang="ts">
import BasePage from '@/common/components/BasePage.vue';
import InvoiceList from '@/modules/invoices/components/InvoiceList.vue';
import InvoiceListHeader from '@/modules/invoices/components/InvoiceListHeader.vue';
import invoices from '../../modules/invoices/fixtures';
</script>