<template>
  <div 
    @click="handleNavigation"
    class="bg-dark-blue-gray mb-4 py-4 px-6 rounded-lg flex items-center border-[1px] border-transparent cursor-pointer hover:border-dark-violet transition-all"
  >
    <div class="w-[100px]">
      <BaseTypography is-bold>
        <span class="text-dark-blue">#</span>{{ props.invoice.invoice_number }}
      </BaseTypography>
    </div>
    <div class="w-[100px] mr-4">
      <BaseTypography>
        {{ props.invoice.issue_date }}
      </BaseTypography>
    </div>
    <div class="w-[150px]">
      <BaseTypography>
        {{ billToNameTruncated }}
      </BaseTypography>
    </div>
    <div class="w-[100px] text-end mr-8">
      <BaseTypography is-bold>
        {{ props.invoice.total }} €
      </BaseTypography>
    </div>
    <div class="mr-auto">
      <InvoiceStatus :status="props.invoice.status" />
    </div>
    <div class="flex items-center justify-end">
      <ArrowLeftIcon />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType, computed } from 'vue';
import BaseTypography from '@/common/components/BaseTypography.vue';
import { Invoice } from '../types';
import ArrowLeftIcon from '@/common/components/icons/ArrowLeftIcon.vue';
import InvoiceStatus from './InvoiceStatus.vue';
import { truncateString } from '../../../common/helpers';
import { useRouter } from 'vue-router';
import constants from '@/common/constants';

const router = useRouter();

const props = defineProps({
  invoice: {
    type: Object as PropType<Invoice>,
    required: true
  }
});

const billToNameTruncated = computed(() => {
  return truncateString(props.invoice.bill_to.name, 15);
});

const handleNavigation = () => {
  router.push({ name: constants.routes.invoiceDetails.name, params: { id: props.invoice.id }});
};
</script>