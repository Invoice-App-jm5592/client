<template>
  <div>
    <InvoiceListItem v-for="invoice in props.list" :key="invoice.id" :invoice="invoice" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import { Invoice } from '../types';
import InvoiceListItem from './InvoiceListItem.vue';

const props = defineProps({
  list: {
    type: Array as PropType<Invoice[]>,
    required: true,
  }
})
</script>