<template>
  <!-- <div
    class="w-full max-w-[403px] h-[143px] border border-[#015812] rounded-[8px] bg-gray-200"
  >
    <div class="md:shrink-0">
      <img
        class="w-[100px] h-[100px] mb-2 object-cove md:h-full"
        src=""
        alt="Modern building architecture"
      />
    </div>
    <div
      class="font-inter font-semibold text-[26px] leading-[29.05px] ml-[60px] mt-[15px] flex flex-col gap-[5px] max-370:mt-[5px]"
    >
      <div
        class="text-[22px] tracking-wide text-sm text-indigo-500 font-semibold text-[#015812]"
      >
        <span class="text-[#015812] text-[16px]">{{
          data?.branch_name
        }}</span>
      </div>
      <span class="text-[#015812] text-[16px]">{{
        data?.branche_phone
      }}</span>
      <p class="mt-2 text-[17px] text-[#015812]">
        {{ data?.receipt_description }}
      </p>
      <p>{{ data?.receipt_title }}</p>
      <p>{{ data?.service_fee }}</p>
    </div>
  </div>
  <div class="flex">
    <form></form>
  </div> -->

  <form
    class="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg max-520:p-0"
    @submit.prevent="updateSettings"
  >
    <h1 class="text-[20px] text-[#015812] font-semibold mb-4">
      Xizmat ko'rsatish
    </h1>

    <!-- Service Fee -->
    <div class="mb-4">
      <label class="block text-sm font-medium text-[#015812] mb-2">
        {{ data?.service_fee }}</label
      >
      <input
        type="text"
        placeholder="%"
        v-model="data.service_fee"
        class="w-full p-2 border border-[#015812] rounded-md"
        required
      />
      <!-- <p class="text-sm text-red-500 mt-1">Bu maydonni to'ldirish shart</p> -->
    </div>

    <!-- Branch Name -->
    <div class="mb-4">
      <label class="block text-sm font-medium text-[#015812] mb-2">Filial Nomi</label>
      <input
        type="text"
        v-model="data.branch_name"
        class="w-full p-2 border border-[#015812] rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      />
    </div>

    <!-- Branch Phone -->
    <div class="mb-4">
      <label class="block text-sm font-medium text-[#015812] mb-2">Filial Nomeri</label>
      <div class="relative">
        <!-- <span class="absolute left-2 top-2.5 text-gray-400">+998</span> -->
        <input
          type="text"
          v-model="data.branch_phone"
          class="w-full p-2 border border-[#015812] rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
    </div>

    <!-- Receipt Title -->
    <div class="mb-4">
      <label class="block text-sm font-medium text-[#015812] mb-2">
        Chek sarlovhasi
      </label>
      <input
        type="text"
        v-model="data.receipt_title"
        class="w-full p-2 border border-[#015812] rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      />
    </div>

    <!-- Receipt Description -->
    <div class="mb-4">
      <label class="block text-sm font-medium text-[#015812] mb-2">
        Chek izohi</label
      >
      <input
        type="text"
        v-model="data.receipt_description"
        class="w-full p-2 border border-[#015812] rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      />
    </div>

    <!-- Submit Button -->
    <div class="flex items-center justify-center">
      <button
        type="submit"
        class="w-full bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px] hover:bg-[#fff] transition-all duration-300 hover:text-[#015812] hover:opacity-80 max-520:mt-[5px] max-520:mb-[10px]"
      >
        Tahrirlash
      </button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import api from "@/server/api";
import store from "@/store";
export default {
  data() {
    return {
      data: {
        branch_phone: "",
        branch_name: "",
        receipt_title: "",
        receipt_description: "",
        service_fee: 0,
        id: 0,
        data: [],
      },
    };
  },
  props: {
    // data: {
    //   type: Object,
    //   required: true,
    // },
  },
  methods: {
    updateSettings() {
      console.log("asdasd");
      const body = {
        branch_phone: this.data.branch_phone,
        branch_name: this.data.branch_name,
        receipt_title: this.data.receipt_title,
        receipt_description: this.data.receipt_description,
        service_fee: this.data.service_fee,
        id: this.data.id,
      };
      api.updateSettings(body).then((res) => {
        getSettings();
      });
    },
    getSettings() {
      api.getSettings().then((res) => {
        console.log(res.data);
        this.data = res.data;
      });
    },
  },
  mounted() {
    this.getSettings();
  },
};
</script>

<style>
.error {
  color: red;
  /* Xato xabarining rangini belgilash */
}

.success {
  color: green;
  /* Muvaffaqiyatli xabarining rangini belgilash */
}
</style>
