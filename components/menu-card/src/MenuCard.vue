<template>
  <div
    class="worker-card"
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
        class="w-full max-w-[323px] h-[143px] border border-[#015812] rounded-[8px] bg-gray-200"
      >
        <div class="flex mt-[10px]">
          <div
            class="font-inter font-semibold text-[26px] leading-[29.05px] mt-[15px] flex flex-col w-[100%] items-center justify-center gap-[25px] max-370:mt-[5px]"
          >
            <div
              class="text-[22px] tracking-wide text-sm text-indigo-500 font-semibold text-[#015812]"
            >
              <span class="text-[#015812] text-[16px]">{{ menu?.title }}</span>
            </div>
            <span class="text-[#015812] text-[16px]"
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
  data: {},
};
</script>

<style>
.worker-card.active {
  background-color: rgba(1, 88, 18, 0.3) !important;
}
</style>
