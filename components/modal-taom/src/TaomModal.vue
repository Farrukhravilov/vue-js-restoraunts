<template>
  <div
    class="fixed bg-black bg-opacity-50 z-[99] inset-0 flex items-center justify-center"
  >
    <!-- Модальное окно -->
    <div class=" w-[570px] h-[760px] bg-gray-100 rounded-lg shadow-lg w-80 p-6 relative max-780:p-6 w-full">
      <!-- Кнопка закрытия -->
      <button class="absolute w-[70px] h-[70px] border border-[#015812] rounded-[8px] flex items-center justify-center top-[-2px] bg-gray-100 right-[-100px] text-gray-500 hover:text-gray-700  max-780:hidden">
        <img src="/src/assets/images/svg/Vector (15).svg" alt="">
      </button>
      <!-- Заголовок модального окна -->
      <div class="max-780:flex justify-between items-center">
        <h2 class="font-semibold text-[40px] mt-[20px]  text-center text-[#015812] max-780:mt-[0]  max-780:text-[30px]  max-460:text-[25px]  max-370:text-[20px]">
          Yangi taom turi qo’shish
        </h2>
        <button class="w-[70px] h-[70px] border border-[#015812] rounded-[8px] hidden flex items-center justify-center bg-gray-100 text-gray-500 hover:text-gray-700 max-780:flex  max-460:w-[40px] h-[33px]">
        <img class="max-460: h-[25px] w-full "  src="/src/assets/images/svg/Vector (15).svg" alt="">
      </button>
      </div>
      <!-- Текстовое поле -->
      <div class="mb-4  p-[10px] mt-[20px]">
        <label
          for="foodName"
          class="block font-medium text-[24px] text-[#015812]  max-370:text-[20px]"
          >Nomi</label
        >
        <input
          type="text"
          id="foodName"
          placeholder=""
          class="border mt-[22px] border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
        />
      </div>
      <!-- Кнопка подтверждения -->
       <div class="flex items-center justify-center mt-[420px]">
           <button
               class="w-full  max-w-[343px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px]  mt-[20px] "
             >
               Tasdiqlash
             </button >
       </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped></style>
