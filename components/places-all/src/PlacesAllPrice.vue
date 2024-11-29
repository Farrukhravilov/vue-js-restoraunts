<template>
  <div
    class="fixed bg-black bg-opacity-50 z-[99] inset-0 flex items-center justify-center"
  >
    <div class="bg-white w-[614px] h-[760px] p-6 rounded-lg">
      <!-- Header -->
      <div class="text-center mb-4">
        <h1 class="text-[40px] text-[#015812] font-bold max-630:text-[30px]">Hovli, 7-stol</h1>
        <p class="text-[40px] text-[#015812] font-bold mt-2 max-630:text-[30px]">
          Jami: 109 000 so'm
        </p>
        <div class="flex items-center justify-end">
          <button
          class="w-[70px] hidden h-[70px] border border-[#015812] rounded-[8px] flex items-center justify-center  bg-gray-100 text-gray-500 hover:text-gray-700 max-830:flex  max-630:top-[-100px]"
        >
          <img src="/src/assets/images/svg/Vector (15).svg" alt="" />
        </button>
        </div>
      </div>
      <!-- Payment Inputs -->
      <div class="space-y-4">
        <!-- First Row -->
        <div class="grid grid-cols-2 gap-4 items-center max-630:grid-template-columns: repeat(1, minmax(0, 1fr))">
          <div>
            <label
              class="block font-semibold font-medium text-[20px] text-[#015812] mb-1"
              >Summa</label
            >
            <input
              type="text"
              value="100 000"
              class="w-full border border-[#015812] rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label class="block font-medium text-[20px] text-[#015812] mb-1"
              >Kassa</label
            >
            <select
              class="w-full border border-[#015812] rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Naxd pul</option>
            </select>
          </div>
        </div>

        <!-- Second Row -->
        <div class="grid grid-cols-2 gap-4 items-center">
          <div>
            <label class="block font-medium text-[20px] text-[#015812] mb-1"
              >Summa</label
            >
            <input
              type="text"
              value="9 000"
              class="w-full border border-[#015812] rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label class="block font-medium text-[20px] text-[#015812] mb-1"
              >Kassa</label
            >
            <select
              class="w-full border border-[#015812] rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option>click karta</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Add Button -->
      <div class="flex justify-end mt-4">
        <button
          class="w-[43px] h-[40px] bg-[#015812]/50 rounded-[8px] text-xl font-bold flex items-center justify-center"
        >
          <span class="text-[#fff] text-[30px]">+</span>
        </button>
      </div>

      <!-- Confirm Button -->
      <div class="flex justify-end mt-[260px] max-830:mt-[0px] max-830:h-[20%] max-830:items-end max-830:h-[40%] max-630:h-[40%]">
        <button>
          <img src="/src/assets/images/svg/Vector (16).svg" />
        </button>
      </div>
      <button
        class="relative w-[70px] h-[70px] border border-[#015812] rounded-[8px] flex items-center justify-center top-[-727px] bg-gray-100 right-[-625px] text-gray-500 hover:text-gray-700 max-830:hidden"
      >
        <img src="/src/assets/images/svg/Vector (15).svg" alt="" />
      </button>
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
<style></style>
