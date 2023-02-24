<template>
  <div class="mr-10">
    <div class="relative inline-block">
      <div @click="toggleDropdown">
        <BaseTypography is-bold styles="flex items-center cursor-pointer">
          <span class="mr-2">Filter by Status</span>
          <ArrowDownIcon v-if="isDropdownOpen" class="rotate-180" />
          <ArrowDownIcon v-else />
        </BaseTypography>
      </div>
      <div v-if="isDropdownOpen" class="absolute bg-dark-blue-gray rounded-lg mt-4 p-6 shadow-2xl w-[150px]">
        <BaseCheckbox label="Draft" />
        <BaseCheckbox label="Pending" />
        <BaseCheckbox label="Paid" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseCheckbox from '@/common/components/BaseCheckbox.vue';
import BaseTypography from '@/common/components/BaseTypography.vue';
import ArrowDownIcon from '@/common/components/icons/ArrowDownIcon.vue';

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>