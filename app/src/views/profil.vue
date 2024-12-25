<script>
import store from "@/store";
import defImg from "@/assets/images/svg/add-worker-big-icon.svg";
import api from "@/server/api";
export default {
  data() {
    return {
      data: {
        id: 0,
        username: "",
        fullname: "",
        phone: 0,
        filial_id: 0,
        img: "",
        created_at: "",
        password: "",
      },
    };
  },
  methods: {
    me() {
      api.me().then((res) => {
        console.log(res.data);
        this.data = res.data;
      });
    },
    editWorker() {
      const body = {
        fullname: this.data.fullname,
        phone: this.data.phone,
        created_at: this.data.created_at,
        username: this.data.username,
        id: this.data.id,
        filial_id: this.data.filial_id,
        img: this.data.img,
        password: this.data.password,
        ...(this.profileImage && { image: this.profileImage }),
      };

      this.borderRed = this.data.username.length < 1;
      this.borderPhone = this.data.phone.length < 12;
      if (this.borderRed || this.borderPhone) return;
      api.editWorker(body, this.data.id).then((res) => {});
    },
  },
  created() {
    this.me();
  },
};
</script>

<template>
  <div class="border border-[#015812] rounded-[10px] w-[95%]">
    <h2 class="text-[25px] text-[#015812] p-[25px]">
      Shaxsiy ma'lumotlarni o'zgartirish
    </h2>
    <form
      class="mt-12 w-full flex flex-col gap-16 bg-white p-6 rounded-lg max-780:mt-0"
      @submit.prevent="editWorker"
    >
      <div class="flex gap-[20px] max-780:flex-col max-780:gap-[20px]">
        <div
          class="relative flex flex-col items-center w-[70%] border border-gray-300 w-full h-[280px] rounded-[30px] bg-white mb-[20px]"
        >
          <img
            src="/src/assets/images/png/Vector (2).png"
            class="mt-[43px]"
            alt=""
            :class="{ 'add-style-def-img': profileImageUrl == null }"
            :src="profileImageUrl || defImg"
          />
          <div
            class="w-[70%] pointer rounded-[7px] text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <img
              src="/src/assets/images/svg/Vector (14).svg"
              alt="photo detector "
              class="absolute left-[46%] top-[92%]"
            />
            <input
              class="w-[50px] absolute left-[46%] top-[95%] opacity-[0%]"
              type="file"
              @change="onFileChange"
              id="urlimg"
              accept="image/*"
            />
            <label class="img-url-leb" for="urlimg"></label>
          </div>
        </div>
        <div class="w-full">
          <div class="mb-4">
            <label class="block font-medium text-[15px] text-[#015812] mb-1"
              >Hodim ismi</label
            >
            <input
              type="text"
              class="w-full border border-[#015812] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              v-model="data.fullname"
            />
          </div>
          <!-- Поле ввода: Hodim telefon raqami -->
          <div class="mb-4">
            <label class="block font-medium text-[15px] text-[#015812] mb-1"
              >Hodim telefon raqami</label
            >
            <input
              type="text"
              v-model="data.phone"
              @input="mask"
              @focus="mask"
              @blur="mask"
              placeholder="+998 (__) ___-__-__"
              class="w-full border border-[#015812] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div class="mb-4">
            <label class="block font-medium text-[15px] text-[#015812] mb-1">
              Login
            </label>
            <input
              type="text"
              v-model="data.username"
              placeholder="login"
              class="w-full border border-[#015812] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div class="mb-4">
            <label class="block font-medium text-[15px] text-[#015812] mb-1">
              Parol
            </label>
            <input
              type="text"
              v-model="data.password"
              placeholder="Parol"
              class="w-full border border-[#015812] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <button
          class="w-full max-w-[343px] text-[36px] py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px]"
        >
          Tasdiqlash
        </button>
      </div>
    </form>
  </div>
</template>

<style></style>
