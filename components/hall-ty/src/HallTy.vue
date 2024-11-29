<template>
  <div class="wrp flex flex-wrap gap-[40px] max-780:grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))]  max-380:grid grid-cols-[repeat(auto-fit,minmax(120px,2fr))] ">
    <div class="relative" v-for="item in 10" :key="item">
      <img src="/src/assets/images/png/stol (1).png" alt="" />
      <div
        class="absolute top-[30px] left-0 flex items-center justify-center w-[160px] h-[100px] bg-[#79a684] border border-[#000] text-[32px]"
      >
        <span
          class="text-[#fff] font-jaldi text-2xl font-normal leading-[54.08px] tracking-[5px]"
          >3 - Stol</span
        >
      </div>
    </div>
  </div>
</template>

<script></script>
<style></style>
