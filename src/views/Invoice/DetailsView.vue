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
      <InvoiceActions status="PENDING" />
    </template>
  </BasePage>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import BasePage from '@/common/components/BasePage.vue';
import BaseTypography from '@/common/components/BaseTypography.vue';
import ArrowLeftIcon from '@/common/components/icons/ArrowLeftIcon.vue';
import InvoiceActions from '@/modules/invoices/components/InvoiceActions.vue';

const router = useRouter();

const goBack = () => {
  router.go(-1);
};
</script>
