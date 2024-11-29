<template>
  <div
    class="flex flex-col w-[70%] items-center p-4 h-screen border border-[#015812] h-[80vh] rounded-[10px] max-780:w-full"
  >
    <!-- Заголовок -->
    <div class="w-full mb-6 flex align-center gap-4 border-b w-full border-[#015812]">
      <button>
        <img src="/src/assets/images/svg/Vector (18).svg" alt="" />
      </button>
      <h1
        class="text-[24px] text-[#015812] font-semibold pb-2"
      >
        Yangi hodim qo'shish
      </h1>
    </div>

    <!-- Контейнер формы -->
    <!-- Аватар -->
    <!-- form -->
    
    <form class="mt-12 w-full flex gap-16 bg-white p-6 rounded-lg max-780:flex-col">
      <div
        class="flex flex-col items-center border border-gray-300 w-full h-[280px] rounded-[30px] bg-white mb-[20px]"
      >
        <img
          src="/src/assets/images/png/Vector (2).png"
          class="mt-[43px]"
          alt=""
        />
        <button
          class="p-2 bottom-[-20px] bg-white rounded-[7px] shadow-md text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <img
            src="/src/assets/images/svg/Vector (14).svg"
            alt="photo detector"
          />
        </button>
      </div>
      <div class="w-full">
        <div class="mb-4">
          <label class="block font-medium text-[15px] text-[#015812] mb-1"
            >Hodim ismi</label
          >
          <input
            type="text"
            class="w-full border border-[#015812] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Hodim ismi"
          />
        </div>
        <!-- Поле ввода: Hodim telefon raqami -->
        <div class="mb-4">
          <label class="block font-medium text-[15px] text-[#015812] mb-1"
            >Hodim telefon raqami</label
          >
          <input
            type="text"
            value="+998"
            class="w-full border border-[#015812] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Поле ввода: Lavozim -->
        <div class="mb-6">
          <label class="block font-medium text-[15px] text-[#015812] mb-1"
            >Lavozim</label
          >
          <select
            class="w-full border border-[#015812] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Xizmat ko'rsatuvchi</option>
            <!-- Добавьте другие варианты при необходимости -->
          </select>
        </div>
        <!-- Кнопка -->
        <!-- <div class="flex justify-center">
          <button
            class="w-full py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px]"
          >
            Tasdiqlash
          </button>
        </div> -->
      </div>
    </form>
    <button
      class="w-full max-w-[343px] text-[36px] py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px]"
    >
      Tasdiqlash
    </button>
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
