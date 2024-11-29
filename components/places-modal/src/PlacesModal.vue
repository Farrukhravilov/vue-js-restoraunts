<template>
  <div
    class="fixed bg-black bg-opacity-50 z-[99] inset-0 flex items-center justify-center"
  >
    <!-- Модальное окно -->
    <div
      class="w-[570px] h-[760px] bg-gray-100 rounded-lg shadow-lg w-80 p-6 relative"
    >
      <!-- Кнопка закрытия -->
      <button
        class="absolute w-[70px] h-[70px] border border-[#015812] rounded-[8px] flex items-center justify-center top-[-2px] bg-gray-100 right-[-100px] text-gray-500 hover:text-gray-700 max-780:hidden"
      >
        <img src="/src/assets/images/svg/Vector (15).svg" alt="" />
      </button>
      <!-- Заголовок модального окна -->
      <div class="flex items-center justify-between">
        <h2
          class="font-semibold text-[40px] mt-[18px] text-center text-[#015812] max-780:mt-[0px] max-520:text-[30px] max-460:text-[20px]"
        >
          Yangi joy turi qo’shish
        </h2>
        <button
          class="w-[70px] h-[70px] border border-[#015812] rounded-[8px] flex items-center justify-center bg-gray-100 text-gray-500 hover:text-gray-700 max-780:flex max-780:w-[55px] h-[45px]"
        >
          <img src="/src/assets/images/svg/Vector (15).svg" alt="" />
        </button>
      </div>
      <!-- Текстовое поле -->
      <div class="mb-4 p-[10px] mt-[20px]">
        <label
          for="foodName"
          class="block font-medium text-[20px] text-[#015812]"
          >Nomi</label
        >
        <input
          type="text"
          id="foodName"
          placeholder=""
          class="border mt-[22px] border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
        />
      </div>
      <div class="mb-4 p-[10px] mt-[20px]">
        <label
          for="foodName"
          class="block font-medium text-[20px] text-[#015812]"
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
      <div class="flex items-center justify-center mt-[280px]">
        <button
          class="w-full max-w-[343px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px]"
        >
          Tasdiqlash
        </button>
        <!-- <Button>
          asdasdsad
        </Button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import api from "@/server/api";
// import Button from "../../ui/components/button/src/button.vue";
export default {
  name: "menuModal",
  emits: {
    end: null,
  },
  data() {
    return {
      menu: {
        title: "",
      },
      request: "addMenu",
    };
  },
  computed: {
    
  },
  methods: {
    open(item) {
      if (item) {
        this.request = "putMenu";
        this.menu = {
          id: item.id,
          title: item.title,
        };
      } else {
        this.request = "addMenu";
        this.menu = {
          id: 0,
          title: "",
        };
      }
      this.$refs.menuModal.openModal();
    },
    Request() {
      api[this.request](this.menu).then(() => {
        this.$refs.menuModal.closeModal();
        this.$emit("end");
      });
    },
  },
};
</script>

<style scoped></style>
