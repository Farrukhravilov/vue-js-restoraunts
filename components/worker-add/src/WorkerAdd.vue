<template>
  <div
    class="flex flex-col w-[70%] items-center p-4 border border-[#015812] h-[80vh] rounded-[10px] max-780:w-full"
  >
    <!-- Заголовок -->
    <div
      class="w-full mb-6 flex align-center gap-4 border-b w-full border-[#015812]"
    >
      <button>
        <img src="/src/assets/images/svg/Vector (18).svg" alt="" />
      </button>
      <h1 class="text-[24px] text-[#015812] font-semibold pb-2">
        Yangi hodim qo'shish
      </h1>
    </div>

    <form
      class="mt-12 w-full flex gap-16 bg-white p-6 rounded-lg max-780:flex-col"
      @submit.prevent="createWorker"
    >
      <div
        class="flex flex-col items-center border border-gray-300 w-full h-[280px] rounded-[30px] bg-white mb-[20px]"
      >
        <img
          src="/src/assets/images/png/Vector (2).png"
          class="mt-[43px]"
          alt=""
          :class="{ 'add-style-def-img': profileImageUrl == null }"
          :src="profileImageUrl || defImg"
        />
        <div
          class="p-2 bottom-[-20px] bg-white rounded-[7px] shadow-md text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <img
            src="/src/assets/images/svg/Vector (14).svg"
            alt="photo detector "
          />
          <input
            class="file-inp"
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
            v-model="name"
          />
        </div>
        <!-- Поле ввода: Hodim telefon raqami -->
        <div class="mb-4">
          <label class="block font-medium text-[15px] text-[#015812] mb-1"
            >Hodim telefon raqami</label
          >
          <input
            type="text"
            v-model="phone"
            @input="mask"
            @focus="mask"
            @blur="mask"
            placeholder="+998 (__) ___-__-__"
            class="w-full border border-[#015812] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Поле ввода: Lavozim -->
        <div class="mb-6">
          <label
            for="role"
            class="block font-medium text-[15px] text-[#015812] mb-1"
            >Lavozim</label
          >
          <select
            v-model="role"
            class="w-full border border-[#015812] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option
              v-for="option in roles"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
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
      <button
        class="w-full max-w-[343px] text-[36px] py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px]"
      >
        Tasdiqlash
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import api from "@/server/api";
import defImg from "@/assets/images/svg/add-worker-big-icon.svg";
export default {
  props: {
    add: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      name: "",
      telNumber: "",
      username: "",
      password: "",
      profileImage: "",
      profileImageUrl: "",
      branch: 1,
      role: "ofitsiant",
      users: {},
      roles: [
        { label: "ofitsiant", value: "ofitsiant" },
        { label: "kassir", value: "kassir" },
      ],
      defImg,
      befBtn: true,
      aftBtn: false,
      phone: "",
      error: "",
      borderRed: false,
      borderPhone: false,
      validtext: "Ismingizni kiriting!",
      phoneValid: "Telefon raqamini kiriting",
      searchVal: "",
      workers: {
        cursor: 1,
        size: 10,
        count: 1,
        data: [],
      },
    };
  },
  methods: {
    successNoti() {
      toast("Hodim muvaffaqiyatli qo'shildi", {
        theme: "auto",
        type: "success",
        dangerouslyHTMLString: true,
      });
    },

    allWorkers() {
      const params = {
        size: this.workers?.size,
        cursor: this.workers?.cursor,
        fullname: this.searchVal,
      };
      api.allWorkers(params).then((res) => {
        this.workers.count = res.data.count;
        this.workers.data = this.workers.data.concat(res.data.data);
      });
    },

    clear() {
      this.workers = {
        cursor: 1,
        size: 10,
        count: 1,
        data: [],
      };
      this.allWorkers();
    },

    photoFormatNoti() {
      toast("Rasimda xatolk. Boshqa rasim yuklang!", {
        theme: "auto",
        type: "error",
        dangerouslyHTMLString: true,
      });
    },

    errorNoti() {
      toast("Xatolik yuz berdi", {
        theme: "auto",
        type: "error",
        dangerouslyHTMLString: true,
      });
    },

    stopLoadingBtn() {
      this.befBtn = true;
      this.aftBtn = false;
    },

    beforeBtn() {
      this.befBtn = false;
      this.aftBtn = true;
    },

    createWorker() {
      const phone = this.phone.replace(/\D/g, "");

      const body = {
        fullname: this.name,
        phone: phone,
        role: this.role,
        branch: this.branch,
        image: this.profileImage,
      };

      this.borderRed = this.name.length < 1;
      this.borderPhone = phone.length < 12;
      if (this.borderRed || this.borderPhone) return;

      this.beforeBtn();

      api.createWorker(body).then((res) => {
        this.successNoti();
        this.resetForm();
        this.stopLoadingBtn();
      });
    },

    resetForm() {
      this.name = "";
      this.phone = "";
      this.username = "";
      this.password = "";
      this.profileImage = null;
      this.profileImageUrl = null;
      this.role = "ofitsiant";
    },

    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.profileImage = file;
        this.profileImageUrl = URL.createObjectURL(file);
      }
    },

    mask(event) {
      let keyCode = event.keyCode || event.which;
      let pos = event.target.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = "+998 (__) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.phone.replace(/\D/g, ""),
        newValue = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });

      i = newValue.indexOf("_");
      if (i !== -1) {
        i < 5 && (i = 3);
        newValue = newValue.slice(0, i);
      }

      let reg = matrix
        .substr(0, this.phone.length)
        .replace(/_+/g, function (a) {
          return "\\d{1," + a.length + "}";
        })
        .replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");

      if (
        !reg.test(this.phone) ||
        this.phone.length < 5 ||
        (keyCode > 47 && keyCode < 58)
      ) {
        this.phone = newValue;
      }

      if (event.type === "blur" && this.phone.length < 5) {
        this.phone = "";
      }
    },
  },
  created() {
    this.allWorkers();
  },
};
</script>

<style scoped></style>
