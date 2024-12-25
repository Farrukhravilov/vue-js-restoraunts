<template>
  <div class="flex gap-[10px] w-[89%] max-1100:w-full">
    <div
      class="flex flex-col gap-[20px] w-[37%] border border-[#015812] rounded-[10px] h-[84vh] max-1600:gap-[9px] max-1100:hidden"
    >
      <div class="flex items-center p-[30px] justify-between max-1600:flex-col gap-[20px] max-1600:p-[25px] max-1635:trackn6g-[0px]">
        <h2 class="text-[26px] tracking-wide leading-[29.05px] font-semibold text-[#015812]">Menu</h2>
        <div class="relative">
          <input
            type="text"
            placeholder="Qidiruv"
             class="border border-[#015812] relative rounded-[6px] h-[40px] py-[7px] pr-[7px] pl-[38px]"
            v-model="title"
            @input="getTaomlar"
          />
          <img class="absolute bottom-[9px] left-[11px] w-[20px] h-[20px]" src="@/assets/images/svg/search.svg" alt="" />
        </div>
      </div>
      <div class="overflow-y-auto max-h-[540px] max-1600:max-h-[500px]">
        <div class="flex flex-col gap-[20px] items-center justify-center mr-[15px] ml-[15px]">
          <MenuCard v-for="item in data?.data" :key="item" :menu="item" />
          <!-- <Pagination
                  v-if="data?.data?.length"
                  v-model="data"
                  @get="getPlaces"
                /> -->
        </div>
      </div>

      <!-- @click="$refs.postPlaces.open('create')" -->
      <div class="flex justify-center">
        <button
          class="w-full max-w-[343px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px] hover:bg-[#fff] transition-all duration-300 hover:text-[#015812] hover:opacity-80"
          @click="$refs.menuModal.open()"
        >
          Joy turini qo’shish
        </button>
      </div>
    </div>
    <div class="border border-[#015812] w-full rounded-[10px] h-[84vh]">
      <div class="p-[30px]">
        <div class="flex items-center justify-between">
          <div class="worker-pic">
            <h2 class="text-[26px] tracking-wide leading-[29.05px] font-semibold text-[#015812]">
              {{ $route.query.title }} {{ $route.query.total_products }}
              <!-- {{ curMenu?.title }} - {{ curMenu?.total_products }} xil -->
            </h2>
          </div>
          <div class="flex items-center">
            <button
              @click="$refs.menuModal.open(curMenu)"
              class="border border-[#d3b002] w-[50px] h-[50px] bg-[#d3b002]/10 flex items-center justify-center rounded-[3px]"
            >
              <img src="/src/assets/images/svg/Vector (20).svg" alt="" />
            </button>
            <button>
              <img src="" alt="" />
            </button>
            <!-- @click="$refs.removePlaces.open()" -->
          </div>
        </div>
        <!-- @click="$refs.postPlaces.open('edit')" -->
      </div>
      <div
        class="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-[10px] ml-[25px] max-520:grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] max-520:mr-[15px] max-520:justify-center "
      >
        <MenuDetailCard
          v-for="item in products?.data"
          :key="item"
          :product="item"
          @click="
            $refs.productReq.open(item)
            // store.state.closePage = false;
          "
        />
      </div>
      <button @click="$refs.productReq.open()" class="w-full max-w-[343px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px] hover:bg-[#fff] transition-all duration-300 hover:text-[#015812] hover:opacity-80">Taom qo'shish</button>
    </div>
    <MenuModal ref="menuModal" @end="getTaomlar" />
    <ModalEdit @end="getTaomlar" ref="productReq" />
  </div>
</template>

<script>
import PlacesCard from "places-card/src/PlacesCard.vue";
import ModalEdit from "menu-edit/src/ModalEdit.vue";
import MenuCard from "menu-card/src/MenuCard.vue";
import MenuModal from "modal-modal/src/MenuModal.vue";
import MenuDetailCard from "menu-detail/src/MenuDetailCard.vue";
import api from "@/server/api";
import store from "@/store";
export default {
  components: {
    PlacesCard,
    MenuModal,
    MenuCard,
    MenuDetailCard,
    ModalEdit,
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

<style>
.active-page {
  display: none;
  transition: all 0.3s ease;
}
</style>
