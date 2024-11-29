<template>
  <div>
    <button
      class="w-full max-w-[380px] bg-[#79a684] py-2 px-4 text-[#fff] rounded-[8px] text-[40px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] font-inter font-normal leading-[48.41px] mt-[20px] hover:bg-[#fff] transition-all duration-300 hover:text-[#015812] hover:opacity-80"
    >
      <slot />
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
