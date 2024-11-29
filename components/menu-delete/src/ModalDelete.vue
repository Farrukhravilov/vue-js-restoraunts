<template>
  <div>
    <div
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <!-- фывыфвфывфывыфвыфвыфвыфвыфвыфв -->
      <div
        class="w-[570px] h-[760px] bg-white w-[350px] p-6 rounded-lg shadow-md max-780:p-4 max-460:p-3"
      >
        <div class="text-center flex items-center justify-between">
          <h1
            class="font-inter text-[40px] font-semibold leading-[48.41px] text-center text-[#830303] mb-2 max-780:text-[30px] max-780:text-left  max-520:text-[20px]"
          >
            Diqqat!!! <br class="max-780:hidden" />
            Taomnomadan olib tashlashni istaysizmi?
          </h1>
          <button
            class="w-[80px] h-[70px] border border-[#015812] rounded-[8px] flex items-center justify-center bg-gray-100 text-gray-500 hover:text-gray-700 hidden max-780:flex "
          >
            <img src="/src/assets/images/svg/Vector (15).svg" alt="" />
          </button>
        </div>
        <button
          class="relative w-[70px] h-[70px] border border-[#015812] rounded-[8px] flex items-center justify-center top-[-180px] bg-gray-100 right-[-580px] text-gray-500 hover:text-gray-700 max-780:hidden"
        >
          <img src="/src/assets/images/svg/Vector (15).svg" alt="" />
        </button>
        <div class="">
          <h5
            class="font-inter text-[40px] font-semibold leading-[48.41px] text-center text-[#015812] mt-[160px] max-360:text-[30px] max-630:mt-[200px] max-380:text-[30px]"
          >
            Shashliklar
          </h5>
        </div>
        <div class="flex justify-around mt-[180px] max-780:mt-[280px]">
          <button
            class="bg-[#83030380] bg-opacity-50 text-[#fff] w-[160px] h-[70px] py-2 px-4 rounded-lg text-[40px] font-semibold leading-[48.41px] text-center max-380:text-[20px] w-[120px]"
          >
            Yo'q
          </button>
          <button
            class="text-[#fff] w-[160px] h-[70px] bg-[#01581280] bg-opacity-50 py-2 px-4 rounded-lg text-[40px] font-semibold leading-[48.41px] text-center max-380:text-[20px] w-[120px]"
          >
            Ha
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const title = ref("My First Component");
const description = ref(
  "This is a simple example component from the components package."
);
</script>

<style scoped></style>
