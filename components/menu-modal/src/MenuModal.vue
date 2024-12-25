<template>
  <ModalAll ref="MenuModal">
    <template #header>
      <div class="max-780:flex justify-between items-center">
        <h2
          class="font-semibold text-[40px] mt-[20px] text-center text-[#015812] max-780:mt-[0] max-780:text-[30px] max-460:text-[25px] max-370:text-[20px]"
        >
          {{
            request == "addMenu"
              ? "Yangi taom turi qo'shish"
              : "Taom turini tahrirlash"
          }}
        </h2>
        <button
          class="w-[70px] h-[70px] border border-[#015812] rounded-[8px] hidden flex items-center justify-center bg-gray-100 text-gray-500 hover:text-gray-700 max-780:flex max-460:w-[40px] h-[33px]"
        >
          <img
            class="max-460: h-[25px] w-full"
            src="/src/assets/images/svg/Vector (15).svg"
            alt=""
          />
        </button>
      </div>
    </template>
    <template #body>
      <form
        id="menuForm"
        @submit.prevent="Request()"
        class="mb-4 p-[10px] mt-[20px]"
      >
        <label
          for="foodName"
          class="flex flex-col gap-[20px] font-medium text-[24px] text-[#015812] max-370:text-[20px]"
        >
          Nomi
          <input
            type="text"
            v-model="menu.title"
            class="border border-[#015812] rounded-[6px]"
            required
          />
        </label>
      </form>
    </template>
    <template #footer>
      <div class="flex items-center justify-center mt-[420px]">
        <button
          class="w-full max-w-[343px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px] hover:bg-[#fff] transition-all duration-300 hover:text-[#015812] hover:opacity-80"
          form="menuForm"
        >
          Tasdiqlash
        </button>
      </div>
    </template>
  </ModalAll>
</template>

<script>
import api from "@/server/api";
import ModalAll from "modal-all/src/ModalAll.vue";
export default {
  name: "menuModal",
  emits: {
    end: null,
  },
  components: { ModalAll },
  data() {
    return {
      menu: {
        title: "",
      },
      request: "addMenu",
    };
  },
  computed: {},
  methods: {
    open(item) {
      if (item) {
        this.request = "putMenu";
        this.menu = {
          id: this.$route.query.menu_id,
          title: item.title,
        };
      } else {
        this.request = "addMenu";
        this.menu = {
          id: this.$route.query.menu_id,
          title: "",
        };
      }
      // console.log(this.$refs.menuModal);
      this.$refs.MenuModal.openModal();
    },
    Request() {
      api[this.request](this.menu).then(() => {
        this.$refs.MenuModal.closeModal();
        this.$emit("end");
      });
    },
  },
};
</script>

<style></style>
