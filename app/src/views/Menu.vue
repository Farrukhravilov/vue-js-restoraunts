<script>
import api from "@/server/api";
import store from "@/store";
import MenuCard from "../../../components/menu-card/src/MenuCard.vue";
import MenuModal from "modal-modal/src/MenuModal.vue";
export default {
  components: {
    MenuCard,
    MenuModal,
  },
  data() {
    return {
      title: "",
      data: {
        count: 0,
        cursor: 1,
        data: [],
        size: 10,
      },
      store: store,
    };
  },
  computed: {
    cr_user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    getTaomlar() {
      const param = {
        title: this.title,
        cursor: this.data.cursor,
        size: this.data.size,
      };
      api.getTaomlar(param).then((res) => {
        console.log(res.data);
        this.data = res.data;
      });
    },
  },
  mounted() {
    this.getTaomlar();
  },
};
</script>

<template>
  <div
    class="flex flex-col gap-[20px] w-[97%] border border-[#015812] rounded-[10px] max-1600:gap-[10px]"
  >
    <div class="flex gap-[20px] w-full">
      <div class="flex w-full p-[30px]">
        <h2 class="text-[24px] text-[#015812]">Menu</h2>
      </div>
    </div>
    <div class="overflow-y-auto max-h-[600px] max-830:max-h-[585px] max-1600:max-h-[500px]">
      <div class="grid grid-cols-[repeat(auto-fill,minmax(390px,1fr))] gap-[20px] pl-[25px] pr-[15px] pt-[20px] max-1600:pt-[0px]">
        <MenuCard v-for="item in data?.data" :key="item" :menu="item" />
      </div>
    </div>

    <div class="flex items-end justify-end mr-[20px] max-830:mb-[20px]">
      <button
        class="w-full max-w-[343px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px] hover:bg-[#fff] transition-all duration-300 hover:text-[#015812] hover:opacity-80"
        @click="$refs.MenuModal.open()"
      >
        Taom turini qo’shish
      </button>
    </div>
  </div>
  <MenuModal ref="MenuModal" @end="getTaomlar" />
</template>
