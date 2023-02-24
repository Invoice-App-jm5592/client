<template>
  <BasePage>
    <template #header>
      <BaseTypography size="lg">
        This is the header
      </BaseTypography>
    </template>
    <template #content>
      <InvoiceList :list="invoices" />
    </template>
  </BasePage>
</template>

<script setup lang="ts">
import BasePage from '@/common/components/BasePage.vue';
import BaseTypography from '@/common/components/BaseTypography.vue';
import InvoiceList from '@/modules/invoices/components/InvoiceList.vue';
import invoices from '../../modules/invoices/fixtures';
</script>