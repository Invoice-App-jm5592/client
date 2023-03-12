<template>
  <div class="py-6 px-8 bg-dark-blue-gray rounded-lg">

    <div class="flex justify-between mb-5">
      <div>
        <BaseTypography is-bold styles="mb-2">
          <span class="text-dark-blue">#</span>{{ invoice?.invoice_number }}
        </BaseTypography>
        <BaseTypography size="sm">{{ invoice?.description }}</BaseTypography>
      </div>
      <div>
        <BaseTypography size="sm" styles="text-right">{{ invoice?.bill_from.address }}</BaseTypography>
        <BaseTypography size="sm" styles="text-right">{{ invoice?.bill_from.city }}</BaseTypography>
        <BaseTypography size="sm" styles="text-right">{{ invoice?.bill_from.code }}</BaseTypography>
        <BaseTypography size="sm" styles="text-right">{{ invoice?.bill_from.country }}</BaseTypography>
      </div>
    </div>

    <div class="flex justify-between">
      <div>
        <BaseTypography size="sm" styles="mb-3">Invoice Date</BaseTypography>
        <BaseTypography styles="font-bold mb-8">{{ invoice?.issue_date }}</BaseTypography>
        <BaseTypography size="sm" styles="mb-3">Payment Due</BaseTypography>
        <BaseTypography styles="font-bold">{{ invoice?.payment_terms }}</BaseTypography>
      </div>
      <div>
        <BaseTypography size="sm" styles="mb-3">Bill To</BaseTypography>
        <BaseTypography styles="font-bold mb-2">{{ invoice?.bill_to.name }}</BaseTypography>
        <BaseTypography size="sm">{{ invoice?.bill_to.address }}</BaseTypography>
        <BaseTypography size="sm">{{ invoice?.bill_to.city }}</BaseTypography>
        <BaseTypography size="sm">{{ invoice?.bill_to.code }}</BaseTypography>
        <BaseTypography size="sm">{{ invoice?.bill_to.country }}</BaseTypography>
      </div>
      <div>
        <BaseTypography size="sm" styles="mb-3">Sent To</BaseTypography>
        <BaseTypography styles="font-bold">{{ invoice?.bill_to.email }}</BaseTypography>
      </div>
    </div>

    <div class="mt-11 p-8 bg-light-blue-gray rounded-lg">
      <div class="grid grid-cols-12">
        <div class="col-span-6">
          <BaseTypography size="sm">Item Name</BaseTypography>
        </div>
        <div class="col-span-2">
          <BaseTypography size="sm" styles="text-center">QTY.</BaseTypography>
        </div>
        <div class="col-span-2">
          <BaseTypography size="sm" styles="text-right">Price</BaseTypography>
        </div>
        <div class="col-span-2">
          <BaseTypography size="sm" styles="text-right">Total</BaseTypography>
        </div>
      </div>
      <div v-for="item in invoice?.items" :key="item.name" class="grid grid-cols-12 mt-8">
        <div class="col-span-6">
          <BaseTypography styles="font-bold">{{ item.name }}</BaseTypography>
        </div>
        <div class="col-span-2">
          <BaseTypography styles="font-bold text-center">{{ item.quantity }}</BaseTypography>
        </div>
        <div class="col-span-2">
          <BaseTypography styles="text-right font-bold">{{ item.price }} €</BaseTypography>
        </div>
        <div class="col-span-2">
          <BaseTypography styles="text-right font-bold">{{ item.total }} €</BaseTypography>
        </div>
      </div>
    </div>

    <div class="p-8 bg-black rounded-lg flex justify-between align-baseline">
      <BaseTypography size="md" styles="font-normal">Amount</BaseTypography>
      <BaseTypography size="lg" styles="font-bold">{{ invoice?.total }} €</BaseTypography>
    </div>

  </div>
</template>

<script setup lang="ts">
import BaseTypography from '@/common/components/BaseTypography.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { Invoice } from '../types';

const store = useStore();

const invoice = computed<Invoice | null>(() => {
  return store.getters.selectedInvoice || null;
});
</script>