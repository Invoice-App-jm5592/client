<template>
  <div class="flex justify-between items-center">
    <div>
      <BaseTypography size="lg" styles="mb-2">
        Invoices
      </BaseTypography>
      <BaseTypography>
        {{ invoicesOverviewTitle }}
      </BaseTypography>
    </div>
    <div class="flex items-center">
      <InvoiceFilter />
      <BaseButton classes="bg-dark-violet hover:bg-light-violet" @click="toggleDrawer">
        <template #icon>
          <PlusIcon />
        </template>
        <template #label>
          New Invoice
        </template>
      </BaseButton>
    </div>
  </div>
  <TheLeftDrawer :is-visible="isDrawerOpen" @click-away="toggleDrawer">
    <template #header>
      <BaseTypography size="md">New Invoice</BaseTypography>
    </template>
    <template #content>
      <!-- TODO: Implement InvoiceForm with type "add"-->
    </template>
    <template #footer>
      <div class="flex justify-between">
        <div class="flex ml-auto">
          <BaseButton class="mr-4 bg-light-blue-gray hover:bg-gray transition-all" @click="toggleDrawer">
            <template #label>
              Cancel
            </template>
          </BaseButton>
          <!-- TODO: Implement click handler to save invoice -->
          <BaseButton @click="() => {}">
            <template #label>
              Save Invoice
            </template>
          </BaseButton>
        </div>
      </div>
    </template>
  </TheLeftDrawer>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import BaseButton from '@/common/components/BaseButton.vue';
import BaseTypography from '@/common/components/BaseTypography.vue';
import PlusIcon from '@/common/components/icons/PlusIcon.vue';
import TheLeftDrawer from '@/common/components/TheLeftDrawer.vue';
import InvoiceFilter from './InvoiceFilter.vue';

const store = useStore();

const isDrawerOpen = ref(false);

const invoicesOverviewTitle = computed(() => {
  if (store.getters.isInvoicesListEmpty) {
    return 'No invoices';
  }
  return `There are ${store.getters.totalInvoices} total invoices`;
});

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
}
</script>