<script>
import api from "@/server/api";
export default {
  data() {
    return {};
  },
  props: {
    expence: {
      type: Object,
      required: true,
    },
  },
  methods: {
    reGet() {
      this.$parent.getExpenceGroups();
    },
  },
};
</script>

<template>
  <div
    class="worker-card w-full max-w-[400px]  h-[143px] border border-[#015812] flex items-center justify-center rounded-[8px] bg-gray-200"
    :class="{ active: expence?.id == $route.query.id }"
  >
    <router-link
      :to="{
        path: '/expence',
        query: {
          id: expence.id,
          // selectedId: item.id,
        },
      }"
      @click="reGet()"
    >
      <div class="flex ">
        <div
          class="font-inter font-semibold text-[26px] leading-[29.05px] flex flex-col w-[100%] items-center justify-center gap-[25px] max-370:mt-[5px]"
        >
          <h2 class="text-[22px] tracking-wide text-[#015812] text-center ">
            {{ expence?.title }}
          </h2>
          <!-- <span class="text-[#015812] text-[16px]">
            {{ $util.currency(item?.balance) }}
            {{ item?.currency_symbol }}</span
          > -->
        </div>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss">
.worker-card.active {
  background-color: rgba(1, 88, 18, 0.2);
}
</style>
