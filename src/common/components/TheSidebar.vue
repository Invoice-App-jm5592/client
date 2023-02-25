<template>
  <div class="hidden bg-dark-blue-gray w-[110px] md:flex flex-col">
    <div class="flex justify-center items-center w-[100px] h-[100px] bg-dark-violet rounded-tr-2xl rounded-br-2xl">
      <LogoIcon />
    </div>
    <div class="w-[100px] h-[100px] mt-auto border-t-[1px] border-gray flex items-center justify-center">
      <div class="bg-dark-blue flex items-center justify-center p-6 rounded-[100%] h-8 w-8">
        <BaseTypography is-bold>JM</BaseTypography>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseTypography from './BaseTypography.vue';
import LogoIcon from './icons/LogoIcon.vue';
</script>