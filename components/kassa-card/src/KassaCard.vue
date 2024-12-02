<script>
export default {
  data() {
    return {};
  },
  props: {
    kassa: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div
    class="worker-card w-full max-w-[323px] h-[143px] border border-[#015812] rounded-[8px] bg-gray-200"
    :class="{ active: $route.query.kassa_id == item.id }"
    v-for="item in kassa?.data"
    :key="item"
  >
    <router-link
      :to="{
        path: '/kassaType',
        query: {
          kassa_id: item?.id,
          title: item?.title,
          balance: item?.balance,
        },
      }"
    >
      <div class="flex mt-[10px]">
        <div
          class="font-inter font-semibold text-[26px] leading-[29.05px] mt-[15px] flex flex-col w-[100%] items-center justify-center gap-[25px] max-370:mt-[5px]"
        >
          <div
            class="text-[22px] tracking-wide text-sm text-indigo-500 font-semibold text-[#015812]"
          >
            <span class="text-[#015812] text-[16px]">{{ item?.title }}</span>
          </div>
          <span class="text-[#015812] text-[16px]">
            {{ $util.currency(item?.balance) }}
            {{ item?.currency_symbol }}</span
          >
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
