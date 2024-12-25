<template>
  <div
    class="worker-card w-full"
    :class="{ active: menu?.id == $route.query.menu_id }"
  >
    <router-link
      :to="{
        path: 'MenuFoods',
        query: {
          menu_id: menu?.id,
          title: menu.title,
          total_products: menu.total_products,
        },
      }"
      @click="reGet()"
    >
      <div
        class="w-full h-[143px] border border-[#015812] rounded-[8px] bg-gray-200"
      >
        <div class="flex mt-[10px]">
          <div
            class="font-inter font-semibold text-[26px] leading-[29.05px] mt-[15px] flex flex-col w-[100%] items-center justify-center gap-[25px] max-370:mt-[5px]"
          >
            <span
              class="text-[22px] tracking-wide leading-[29.05px] font-semibold text-[#015812] max-1600:text-[18px]"
              >{{ menu?.title }}</span
            >
            <span
              class="text-[22px] tracking-wide leading-[29.05px] font-semibold text-[#015812]"
              >{{ menu?.total_products }} xil</span
            >
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {},
  props: {
    menu: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    reGet() {
      this.$parent.getTaomlar();
    },
  },
};
</script>

<style>
.worker-card.active {
  background-color: rgba(1, 88, 18, 0.3) !important;
  width: 100%;
  height: 100%;
}
</style>
