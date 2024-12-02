<template>
  <PlacesCard>
    <template #header1 class="tab-content">
      <div class="flex items-center justify-between p-4">
        <h1>Menu</h1>
        <input
          v-model="title"
          @input="getTaomlar"
          placeholder="Qidiruv"
          class="border border-gray-200"
        />
      </div>
    </template>
    <template #body1>
      <div class="tab-content">
        <div class="flex flex-col items-center justify-center gap-[20px]">
          <MenuCard v-for="item in data?.data" :key="item" :menu="item" />
        </div>
      </div>
    </template>
    <template #footer1>
      <div class="tab-content flex items-end justify-center">
        <button
          @click="$refs.menuModal.open()"
          class="w-full max-w-[343px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px] hover:bg-[#fff] transition-all duration-300 hover:text-[#015812] hover:opacity-80"
        >
          Yangi taom qo'shish
        </button>
      </div>
    </template>
    <template #header2 class="tab-content">
      <div class="flex items-center justify-between p-4">
        <h1>Menu</h1>
        <input
          v-model="title"
          @input="getTaomlar"
          placeholder="Qidiruv"
          class="border border-gray-200"
        />
      </div>
    </template>
    <template #body2>
      <div class="tab-content">
        <div class="flex flex-col items-center justify-center gap-[20px]">
          <MenuCard v-for="item in data?.data" :key="item" :menu="item" />
        </div>
      </div>
    </template>
    <template #footer2>
      <div class="tab-content flex items-end justify-center">
        <button
          @click="$refs.menuModal.open()"
          class="w-full max-w-[343px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px] hover:bg-[#fff] transition-all duration-300 hover:text-[#015812] hover:opacity-80"
        >
          Yangi taom qo'shish
        </button>
      </div>
    </template>
  </PlacesCard>
</template>

<script>
import PlacesCard from "places-card/src/PlacesCard.vue";
import MenuCard from "menu-card/src/MenuCard.vue";
import MenuModal from "modal-modal/src/MenuModal.vue";
import api from "@/server/api";
import store from "@/store";
export default {
  components: {
    PlacesCard,
    MenuModal,
    MenuCard,
  },
  data() {
    return {
      title: "",
      isProductOpen: false,
      data: {
        count: 0,
        cursor: 1,
        data: [],
        size: 10,
      },
      products: {
        count: 0,
        cursor: 1,
        data: [],
        size: 10,
      },
      curMenu: {
        title: this.$route.query.title,
        total_products: this.$route.query.total_products,
      },
      isShown: false,
      openFood: false,
      productEdit: null,
      prReq: "createProducts",
      Scrwidth: window.innerWidth,
      store: store,
    };
  },
  methods: {
    getTaomlar() {
      const param = {
        title: this.title,
        cursor: this.data.cursor,
        size: this.data.size,
      };
      api.getTaomlar(param).then((res) => {
        this.data = res.data;
        this.getProducts();
      });
    },
    getProducts() {
      const param = {
        menu_id: this.$route.query?.menu_id,
        cursor: this.products.cursor,
        size: this.products.size,
        title: this.title,
      };
      api.getProducts(param).then((res) => {
        this.products = res.data;
      });
    },
    toggleForm() {
      this.openFood = !this.openFood;
    },
  },
  mounted() {
    this.getTaomlar();
    console.log(this.Scrwidth);
  },
};
</script>

<style></style>
