<template>
  <div>
    <div
      class="max-w-sm p-6 border border-[#015812] rounded-[8px] shadow-md bg-gray-50 max-380:p-2"
    >
      <!-- Заголовок и кнопка закрытия -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold text-[#015812]">
          Yangi taom qo'shish
        </h2>
        <button class="text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Поле для загрузки изображения -->
      <form class="border border-[#015812] rounded-[8px] bg-gray-100">
        <div
          class="relative top-[2.5px] left-[14.2857143%] flex flex-col items-center border border-gray-300 h-[193px] w-[227px] rounded-[30px] bg-white mb-[20px]"
        >
          <img src="/src/assets/images/png/Vector (1).png" class="mt-[43px]"  alt="">
          <button
            class="absolute p-2 bottom-[-20px] bg-white rounded-[7px] shadow-md text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <img  src="/src/assets/images/svg/Vector (14).svg" alt="photo detector" />
          </button>
        </div>

        <label class="block text-sm font-medium text-[#015812] mb-1 ml-[10px]">Nomi</label>
        <input
          type="text"
          placeholder="Nomi"
          class="w-full max-w-[316px] ml-1 mb-4 p-2 border border-[#015812] rounded-md text-gray-700 focus:ring focus:ring-indigo-200  max-380:max-w-[97%]"
        />

        <!-- Поле для цены закупки -->
        <label class="block text-sm font-medium text-[#015812] mb-1  ml-[10px]">Kirim narxi</label>
        <input
          type="text"
          placeholder="Kirim narxi"
          class="w-full max-w-[316px] ml-1 mb-4 p-2 border border-[#015812] rounded-md  max-380:max-w-[97%]"
        />

        <!-- Поле для цены продажи -->
        <label class="block text-sm font-medium mb-1 text-[#015812]   ml-[10px] ">Sotuv narxi</label>
        <input
          type="text"
          placeholder="Sotuv narxi"
          class="w-full max-w-[316px] ml-1 mb-4 p-2 rounded-md text-gray-700 focus:ring focus:ring-indigo-200 border border-[#015812]  max-380:max-w-[97%]"
        />

        <!-- Поле для ввода комментария -->
        <label class="block text-sm font-medium text-[#015812] ml-[10px]">Izoh</label>
        <textarea
          placeholder="Izoh"
          class="w-full mb-4 p-2 border border-gray-300 rounded-md text-gray-700 focus:ring focus:ring-indigo-200"
          rows="3"
        ></textarea>

        <!-- Кнопка подтверждения -->
      </form>
        <button
          class="w-full bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px]  mt-[20px]"
        >
          Tasdiqlash
        </button>
      <!-- Поле для названия -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
</script>

<style></style>
