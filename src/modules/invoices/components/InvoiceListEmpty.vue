<template>
  <div class="flex flex-col items-center mt-14">
    <NoInvoicesIllustration />
    <BaseTypography size="md" styles="mt-12 mb-6">There is nothing here</BaseTypography>
    <BaseTypography size="sm">Create an invoice by clicking the</BaseTypography>
    <BaseTypography size="sm"><span class="font-bold">New Invoice</span> button and get started</BaseTypography>
  </div>
</template>

<script setup>
import NoInvoicesIllustration from '@/common/components/illustrations/NoInvoicesIllustration.vue';
import BaseTypography from '@/common/components/BaseTypography.vue';
</script>