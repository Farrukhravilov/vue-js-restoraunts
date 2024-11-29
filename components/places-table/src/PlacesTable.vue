<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="w-[634px] h-[760px] bg-white p-6 rounded-lg shadow-md w-96">
      <div class="text-center mb-4 flex items-center justify-between">
        <h1 class="text-[40px] text-[#000000] max-460:text-[30px]">
          Hovli, 7-stol
        </h1>
        <button
          class="hidden w-[70px] h-[70px] border border-[#015812] rounded-[8px] flex items-center justify-center bg-gray-100 text-gray-500 hover:text-gray-700 max-830:flex max-460:w-[50px] max-460:h-[45px]"
        >
          <img src="/src/assets/images/svg/Vector (15).svg" alt="" />
        </button>
      </div>
      <div class="flex justify-between text-sm mb-2">
        <span>Hodim:</span>
        <span class="font-medium">Nurislombek Baxtiyorov</span>
      </div>
      <div class="flex justify-between text-sm mb-4">
        <span>Sana:</span>
        <span class="font-medium">12.10.2024 15:30</span>
      </div>
      <table class="w-full text-sm mb-4">
        <thead>
          <tr class="">
            <th class="text-left py-1 px-2">Taom</th>
            <th class="text-right py-1 px-2">Narxi</th>
            <th class="text-right py-1 px-2">Miqdor</th>
            <th class="text-right py-1 px-2">Jami</th>
          </tr>
        </thead>
        <tbody>
          <tr class="" v-for="item in 3" :key="item">
            <td class="py-1 px-2">taom 1</td>
            <td class="text-right py-1 px-2">10,000</td>
            <td class="text-right py-1 px-2">2</td>
            <td class="text-right py-1 px-2">20,000</td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-between text-sm font-medium mb-2">
        <span>Xizmat ko'rsatish haqqi: 0%</span>
        <span>0 so'm</span>
      </div>
      <div class="text-center text-[40px] font-bold pt-2 max-460:text-[30px]">
        Jami: 109,000 so'm
      </div>
      <div class="flex justify-end mt-[260px]">
        <button>
          <img src="/src/assets/images/svg/Vector (16).svg" />
        </button>
      </div>
      <button
        class="relative w-[70px] h-[70px] border border-[#015812] rounded-[8px] flex items-center justify-center top-[-730px] bg-gray-100 right-[-635px] text-gray-500 hover:text-gray-700 max-830:hidden"
      >
        <img src="/src/assets/images/svg/Vector (15).svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ModalAll from "modal-all/src/ModalAll.vue";
</script>

<style scoped></style>
