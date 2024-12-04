<script>
import api from "@/server/api";
import ModalAll from "modal-all/src/ModalAll.vue";
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
      request: "createGroups",
    };
  },
  components: {
    ModalAll,
  },
  computed: {},
  methods: {
    open(item) {
      if (item) {
        this.request = "updateExpense";
        this.menu = {
          id: item.id,
          title: item.title,
        };
      } else {
        this.request = "createGroups";
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

<template>
  <ModalAll ref="menuModal">
    <template #header>
      <div class="max-780:flex justify-between items-center">
        <h2 class="font-semibold text-[40px] mt-[20px] text-center text-[#015812] max-780:mt-[0] max-780:text-[30px] max-460:text-[25px] max-370:text-[20px]" id="title-add">
          {{
            request == "createGroups"
              ? "Doimiy harajat qo'shish"
              : "harajat turini tahrirlash"
          }}
        </h2>
      </div>
    </template>
    <template #body>
      <form class="mb-4 p-[10px] mt-[20px]" id="menuForm" @submit.prevent="Request()">
        <label class="flex flex-col gap-[20px] font-medium text-[24px] text-[#015812] max-370:text-[20px]">
          Nomi
          <input
            type="text"
            class="border border-[#015812] rounded-[6px]"
            id="lorem-control2"
            required
            v-model="menu.title"
          />
        </label>
      </form>
    </template>
    <template #footer>
      <button class="w-full max-w-[343px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px] hover:bg-[#fff] transition-all duration-300 hover:text-[#015812] hover:opacity-80" form="menuForm">Tasdiqlash</button>
    </template>
  </ModalAll>
</template>
