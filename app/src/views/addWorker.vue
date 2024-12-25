<script>
import WorkerCard from "worker-card/src/WorkerCard.vue";
import api from "@/server/api";
import store from "@/store";
import WorkerAdd from "worker-add/src/WorkerAdd.vue";
import defImg from "@/assets/images/svg/add-worker-big-icon.svg";
export default {
  data() {
    return {
      users: {},
      searchVal: "",
      workers: {
        cursor: 1,
        size: 10,
        count: 1,
        data: [],
      },
      store: store,
    };
  },
  components: {
    WorkerCard,
    WorkerAdd,
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

<template>
  <div class="flex gap-[10px] w-[97%] h-[80vh]">
    <div
      class="workers-main flex flex-col gap-[20px] w-[30%] border border-[#015812] rounded-[10px] h-[80vh]"
    >
      <div class="flex gap-[20px] w-full">
        <div class="flex justify-between w-full p-[30px]">
          <h2 class="text-[24px] text-[#015812]">Hodimlar</h2>
          <div class="relative">
            <input
              type="text"
              placeholder="Qidiruv"
              v-model="searchVal"
              @input="clear"
              class="border border-[#015812] relative rounded-[6px] h-[40px] py-[7px] pr-[7px] pl-[38px]"
            />
            <img
              class="absolute bottom-[9px] left-[11px] w-[20px] h-[20px]"
              src="@/assets/images/svg/search.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="overflow-y-auto max-h-[540px]">
        <div class="flex flex-col items-center gap-[25px] justify-center">
          <WorkerCard :info="item" v-for="item in workers?.data" :key="item" />
        </div>
      </div>
      <div to="/addWorker" class="flex items-end justify-center mr-[20px]">
        <button
          class="w-full max-w-[343px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px] hover:bg-[#fff] transition-all duration-300 hover:text-[#015812] hover:opacity-80"
        >
          Hodim qo‘shish
        </button>
      </div>
    </div>
    <WorkerAdd :add="item" />
  </div>
</template>

<style></style>
