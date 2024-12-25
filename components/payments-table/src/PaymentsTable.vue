<script>
import api from "@/server/api";
import store from "@/store";
export default {
  props: {
    items: Array,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div
    class="wrp flex flex-wrap gap-[40px] w-full max-780:grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-[40px]"
  >
    <div class="relative" v-for="item in items" :key="item">
      <img src="/src/assets/images/png/stol (1).png" alt="" />
      <div
        class="absolute top-[30px] left-0 flex flex-col items-center justify-center w-[160px] h-[100px] bg-[#79a684] border border-[#000] text-[32px] max-780px:w-[150px]"
      >
        <span
          class="text-[#fff] font-jaldi text-2xl font-normal leading-[54.08px] tracking-[5px]"
          >{{ item.Table.title }} - stol</span
        >
        <span class="text-[20px] text-[#fff] font-normal leading-[54.08px] tracking-[5px]">
          {{ $util.currency(item.total_price) }}
        </span>
      </div>
    </div>
  </div>
</template>

<style></style>
