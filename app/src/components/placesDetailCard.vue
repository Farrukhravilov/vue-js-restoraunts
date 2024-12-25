<script>
export default {
  data() {
    return {};
  },
  props: {
    items: Array,
  },
  methods: {},
};
</script>
// props: { // places: { // type: Object, // required: true, // }, // },
<template>
  <!-- <div
    class="w-full max-w-[323px] h-[143px] border border-[#015812] rounded-[8px] bg-gray-200"
  >
    <router-link
      :to="{
        path: '/placesAndTables',
        query: {
          place_id: places?.id,
          title: places?.title,
          tables: places?.total_tables,
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
            <span class="text-[#015812] text-[16px]"> {{ places?.title }}</span>
          </div>
          <span class="text-[#015812] text-[16px]">
            {{ places?.created_at }}</span
          >
        </div>
      </div>
    </router-link>
  </div> -->
  <!-- @click="$refs.OrderModal.open(item.id)" -->
  <!-- {{ items }} -->
  <div class="flex flex-col gap-[20px] ml-[25px]">
    <div
      v-for="(item, index) in items"
      :key="item"
      class="w-full max-w-[270px] h-[143px] border border-[#015812] rounded-[8px] bg-gray-200"
    >
      <div class="flex mt-[10px]">
        <div
          class="font-inter font-semibold text-[26px] leading-[29.05px] mt-[15px] flex flex-col w-[100%] items-center justify-center gap-[25px] max-370:mt-[5px]"
        >
          <div class="tracking-wide">
            <span
              class="text-[21px] tracking-wide font-semibold text-[#015812]"
            >
              {{ item?.nomer }} - buyurtma</span
            >
          </div>
          <span class="text-[21px] tracking-wide font-semibold text-[#015812]">
            {{ item?.created_at }}
            {{ item?.Currency?.symbol }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
