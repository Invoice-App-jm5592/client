<template>
  <div class="flex">
    <TheSidebar />
    <div class="w-full bg-light-black min-h-screen">
      <div class="max-w-3xl mx-auto">
        <div class="py-16 px-8">
          <slot name="header" />
        </div>
        <div class="pb-16 px-8">
          <slot name="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheSidebar from './TheSidebar.vue';
</script>