<template>
  <div class="flex mb-4 last:mb-0">
    <div @click="selectFilter"
      class="mr-4 cursor-pointer rounded-sm w-4 h-4 border-transparent border-[1px] hover:border-dark-violet transition-all flex items-center justify-center"
      :class="conditionalClasses">
      <CheckIcon v-if="isSelected" />
    </div>
    <BaseTypography is-bold>
      {{ checkboxLabel }}
    </BaseTypography>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType, computed } from 'vue';
import { useStore } from 'vuex';
import { InvoiceStatus } from '@/modules/invoices/types';
import BaseTypography from './BaseTypography.vue';
import CheckIcon from '../components/icons/CheckIcon.vue';
import { transformStringToTitleCase } from '../helpers';


const store = useStore();

const props = defineProps({
  label: {
    type: String as PropType<InvoiceStatus>,
    require: true,
  }
});

const isSelected = computed(() => {
  return store.getters.statusFilters.includes(props.label);
});

const conditionalClasses = computed(() => {
  return {
    "bg-light-black": !isSelected.value,
    "bg-dark-violet": isSelected.value
  }
});

const checkboxLabel = transformStringToTitleCase(props.label);

const selectFilter = () => {
  store.commit('toggleStatusFilter', props.label);
};
</script>