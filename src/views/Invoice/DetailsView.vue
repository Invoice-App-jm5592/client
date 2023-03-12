<template>
  <BasePage>
    <template #header>
      <div @click="goBack">
        <BaseTypography is-bold styles="flex items-baseline cursor-pointer">
          <ArrowLeftIcon />
          <span class="ml-6">Go back</span>
        </BaseTypography>
      </div>
    </template>
    <template #content>
      <InvoiceActions />
      <InvoiceDetails />
    </template>
  </BasePage>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import BasePage from '@/common/components/BasePage.vue';
import BaseTypography from '@/common/components/BaseTypography.vue';
import ArrowLeftIcon from '@/common/components/icons/ArrowLeftIcon.vue';
import InvoiceActions from '@/modules/invoices/components/InvoiceActions.vue';
import axiosInstance from '@/common/config/axios';
import InvoiceDetails from '@/modules/invoices/components/InvoiceDetails.vue';

const store = useStore();
const router = useRouter();
const route = useRoute();

onMounted(async () => {
  const { id = '' } = route.params;
  try {
    const response = await axiosInstance.get(`/api/invoices/${id}`);
    store.commit('selectInvoice', response.data.invoice);
  } catch (error) {
    console.error(error);
  }
});

const goBack = () => {
  router.go(-1);
};
</script>
