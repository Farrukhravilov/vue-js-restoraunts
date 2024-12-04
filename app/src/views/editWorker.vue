<script>
// import defImg from '@/assets/images/svg/add-worker-big-icon.svg';
// import loaderBtn from '@/components/loaderBtn.vue';
// import { toast } from 'vue3-toastify';
// import 'vue3-toastify/dist/index.css';
import WorkerCard from "worker-card/src/WorkerCard.vue";
// import api from "@/server/api";
import store from "@/store";
import WorkerAdd from "worker-add/src/WorkerAdd.vue";
import defImg from "@/assets/images/svg/add-worker-big-icon.svg";
// import workerdetailCards from '@/components/workerdetailCards.vue'
import api from "@/server/api";

export default {
  components: {
    // loaderBtn,
    WorkerCard,
    WorkerAdd,
  },

  data() {
    return {
      name: "",
      telNumber: "",
      username: "",
      userInfo: {},
      password: "",
      profileImage: "",
      profileImageUrl: "",
      branch: 1,
      role: "ofitsiant",
      users: {},
      searchVal: "",
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
      workers: {
        cursor: 1,
        size: 10,
        count: 1,
        data: [],
      },
    };
  },

  computed: {
    filteredWorkers() {
      return this.workers.data.filter((worker) =>
        worker.fullname.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },

  methods: {
    successNoti() {
      toast("Hodim muvaffaqiyatli yangilandi", {
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

    userInfoEdit() {
      api.workerDetail(this.$route.query.id).then((res) => {
        this.profileImageUrl = res?.data?.img;
        this.phone = res?.data?.phone;
        this.name = res?.data?.fullname;
        this.roles = [
          { label: `${res?.data?.role}`, value: "ofitsiant" },
          {
            label: `${res?.data?.role == "ofitsiant" ? "kassir" : "ofitsiant"}`,
            value: `${res?.data?.role == "ofitsiant" ? "kassir" : "ofitsiant"}`,
          },
        ];
        console.log(res.data);
      });
    },

    editWorker() {
      const phone = this.phone.replace(/\D/g, "");

      const body = {
        fullname: this.name,
        phone: phone,
        role: this.role,
        branch: this.branch,
        ...(this.profileImage && { image: this.profileImage }),
      };

      this.borderRed = this.name.length < 1;
      this.borderPhone = phone.length < 12;
      if (this.borderRed || this.borderPhone) return;

      this.beforeBtn();

      api.editWorker(body, this.$route.query.id).then((res) => {
        this.successNoti();
        this.stopLoadingBtn();

        this.userInfoEdit();
      });
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

  mounted() {
    this.allWorkers();
    this.userInfoEdit();
  },
};
</script>

<template>
  <div class="flex gap-[10px] w-full h-[80vh]">
    <div
      class="workers-main flex flex-col gap-[20px] w-[30%] border border-[#015812] rounded-[10px] h-[80vh]"
    >
      <div class="flex gap-[20px] w-full">
        <div class="flex justify-between w-full p-[30px]">
          <h2 class="text-[24px] text-[#015812]">Hodimlar</h2>
          <input
            type="text"
            placeholder="qidiruv"
            v-model="searchVal"
            @input="clear"
            class="text-[#015812] rounded-[6px] w-[200px] h-[30px] p-[10px] text-[16px] font-inter border border-gray-500 inline-block"
          />
        </div>
      </div>
      <div class="overflow-y-auto max-h-[540px]">
        <div class="flex flex-col gap-[20px] ml-[20px] justify-center">
          <WorkerCard :info="item" v-for="item in workers?.data" :key="item" />
        </div>
      </div>
      <router-link to="/addWorker">
        <div class="flex items-end justify-center h-[65%] mr-[20px]">
          <button
            class="w-full max-w-[343px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px] hover:bg-[#fff] transition-all duration-300 hover:text-[#015812] hover:opacity-80"
          >
            Hodim qo‘shish
          </button>
        </div>
      </router-link>
    </div>
    <!-- <WorkerAdd :add="item" /> -->
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
          {{ name }} ma’lumotlarini o’zgatrish
        </h1>
      </div>

      <form
        class="mt-12 w-full flex flex-col gap-16 bg-white p-6 rounded-lg max-780:flex-col"
        @submit.prevent="editWorker"
      >
        <div class="flex gap-[25px]">
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
  </div>
</template>

<style></style>
