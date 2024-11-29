<template>
  <button
    class="w-full max-w-[343px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px] hover:bg-[#fff] transition-all duration-300 hover:text-[#015812] hover:opacity-80" 
    :disabled="disabled"
    >
    <slot />
  </button>
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

<style scoped>
.my-component {
  text-align: center;
  margin: 20px;
}
</style>
