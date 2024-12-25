<template>
  <!-- <ModalAll ref="postPlaces">
    <template #header>
      <div class="flex items-center justify-between">
        <h2
          class="font-semibold text-[40px] mt-[18px] text-center text-[#015812] max-780:mt-[0px] max-520:text-[30px] max-460:text-[20px]"
        >
          {{
            request == "updateKassa"
              ? "Kassa nomini tahrirlash"
              : "Yangi kassa qo’shish"
          }}
        </h2>
        <button
          class="w-[70px] h-[70px] border hidden border-[#015812] rounded-[8px] flex items-center justify-center bg-gray-100 text-gray-500 hover:text-gray-700 max-780:flex max-780:w-[55px] h-[45px]"
        >
          <img src="/src/assets/images/svg/Vector (15).svg" alt="" />
        </button>
      </div>
    </template>
    <template #body>
      <form @submit.prevent="PostKassa">
        <div class="mb-4 p-[10px] mt-[20px]">
          <label
            for="foodName"
            class="block font-medium text-[20px] text-[#015812]"
            >Nomi</label
          >
          <input
            type="text"
            v-model="kassaData.title"
            class="border mt-[22px] border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
          />
        </div>
        <div class="mb-4 p-[10px] mt-[20px]" v-if="!request == 'updateKassa'">
          <label
            for="foodName"
            class="block font-medium text-[20px] text-[#015812]"
            >Qoldiq</label
          >
          <input
            type="text"
            v-model="kassaData.balance"
            @focus="
              kassaData.balance == 0
                ? (kassaData.balance = '')
                : kassaData.balance
            "
            @focusout="
              kassaData.balance == ''
                ? (kassaData.balance = 0)
                : kassaData.balance
            "
            class="border mt-[22px] border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
          />
        </div>
        <div class="flex items-center justify-center mt-[280px]">
          <button
            class="w-full max-w-[343px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px]"
          >
            Tasdiqlash
          </button>
        </div>
      </form>
    </template>
    <template #footer>
      <button
        @click="openKassa = false"
        class="absolute w-[70px] h-[70px] border border-[#015812] rounded-[8px] flex items-center justify-center top-[-2px] bg-gray-100 right-[-100px] text-gray-500 hover:text-gray-700 max-780:hidden"
      >
        <img src="/src/assets/images/svg/Vector (15).svg" alt="" />
      </button>
    </template>
  </ModalAll> -->
  <div
    class="fixed bg-black bg-opacity-50 z-[99] inset-0 flex items-center justify-center"
    v-if="openKassa"
  >
    <div
      class="w-[570px] h-[760px] bg-gray-100 rounded-lg shadow-lg w-80 p-6 relative"
      v-if="openKassa"
    >
      <button
        class="absolute w-[70px] h-[70px] border border-[#015812] rounded-[8px] flex items-center justify-center top-[-2px] bg-gray-100 right-[-100px] text-gray-500 hover:text-gray-700 max-780:hidden"
        @click="openKassa = false"
      >
        <img src="/src/assets/images/svg/Vector (15).svg" alt="" />
      </button>
      <div class="flex items-center justify-between">
        <h2
          class="font-semibold text-[40px] mt-[18px] text-center text-[#015812] max-780:mt-[0px] max-520:text-[30px] max-460:text-[20px]"
        >
          {{
            request == "updateKassa"
              ? "Kassa nomini tahrirlash"
              : "Yangi kassa qo’shish"
          }}
        </h2>
        <button
          @click="openKassa = false"
          class="w-[70px] h-[70px] border hidden border-[#015812] rounded-[8px] flex items-center justify-center bg-gray-100 text-gray-500 hover:text-gray-700 max-780:flex max-780:w-[55px] h-[45px]"
        >
          <img src="/src/assets/images/svg/Vector (15).svg" alt="" />
        </button>
      </div>
      <form @submit.prevent="PostKassa">
        <div class="mb-4 p-[10px] mt-[20px]">
          <label
            for="foodName"
            class="block font-medium text-[20px] text-[#015812]"
            >Nomi</label
          >
          <input
            type="text"
            v-model="kassaData.title"
            class="border mt-[22px] border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
          />
        </div>
        <div class="mb-4 p-[10px] mt-[20px]" v-if="!request == 'updateKassa'">
          <label
            for="foodName"
            class="block font-medium text-[20px] text-[#015812]"
            >Qoldiq</label
          >
          <input
            type="text"
            v-model="kassaData.balance"
            @focus="
              kassaData.balance == 0
                ? (kassaData.balance = '')
                : kassaData.balance
            "
            @focusout="
              kassaData.balance == ''
                ? (kassaData.balance = 0)
                : kassaData.balance
            "
            class="border mt-[22px] border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
          />
        </div>
        <div class="flex items-center justify-center">
          <button
            class="w-full max-w-[343px] bg-gray-300 absolute bottom-[70px] py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px]"
            type="submit"
          >
            Tasdiqlash
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import api from "@/server/api";
// import ModalAll from "modal-all/src/ModalAll.vue";
export default {
  data() {
    return {
      kassaData: {
        title: "",
        balance: 0,
      },
      openKassa: false,
      request: "createKassa",
    };
  },
  components: {
    // ModalAll,
  },
  methods: {
    resetForm() {
      this.kassaData = {
        title: "",
        balance: 0,
      };
      this.request = "createKassa";
    },
    PostKassa() {
      api[this.request](this.kassaData).then((res) => {
        this.$emit("end");
        this.resetForm();
        this.openKassa = false;
      });
    },
    open(type) {
      if (type == "edit") {
        this.kassaData = {
          id: this.$route.query.kassa_id,
          title: this.$route.query.title,
          balance: this.$route.query.balance,
        };
        this.request = "updateKassa";
      } else {
        this.resetForm();
      }
      this.openKassa = true;
    },
  },
  props: {
    addKassa: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
