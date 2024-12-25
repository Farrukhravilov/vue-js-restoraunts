<template>
  <div
    class="menu-card-detail w-full max-w-[403px] h-[143px] border border-[#015812] rounded-[8px] bg-gray-200"
    :class="{ active: product?.id == $route.query.product_id }"
  >
    <router-link
      :to="{
        path: 'MenuFoods',
        query: { menu_id: $route.query?.menu_id, product_id: product?.id },
      }"
      class="flex ml-[45px] mt-[30px] max-460:ml-[15px]"
    >
      <div class="md:shrink-0">
        <img
          class="w-[100px] mb-2 object-cove md:h-full"
          :src="product?.img"
          alt="Modern building architecture"
        />
      </div>
      <div
        class="font-inter font-semibold text-[26px] leading-[29.05px] ml-[60px] mt-[5px] flex flex-col gap-[5px] max-370:mt-[5px] max-460:ml-[11px] max-460:text-[20px]"
      >
        <div
          class="text-[22px] tracking-wide text-sm text-indigo-500 font-semibold text-[#015812]"
        >
          <span class="text-[#015812] text-[20px] leading-[29.05px] tracking-wide font-semibold">{{ product?.title }}</span>
        </div>
        <div class="flex items-center gap-[10px]">
        <span class="text-[#015812] text-[16px]  font-semibold ">{{ product?.price }}</span>
        <p class="text-[17px] text-[#015812]">
          {{ product?.Currency?.symbol }}
        </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      // selectedProductId: null,
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    // Этот метод срабатывает при клике на карточку и устанавливает выбранный продукт
    // selectProduct() {
    //   this.selectedProductId = this.product.id;
    // },
  },
};
</script>

<style>
.menu-card-detail.active {
  background-color: rgba(1, 88, 18, 0.3) !important;
  width: 100%;
  max-width: 403px;
  height: 143px;
}
.error {
  color: red;
  /* Xato xabarining rangini belgilash */
}

.success {
  color: green;
  /* Muvaffaqiyatli xabarining rangini belgilash */
}
</style>
