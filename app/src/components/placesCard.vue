<script>
export default {
  props: {
    places: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div
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
            {{ places?.total_tables }} ta stol</span
          >
        </div>
      </div>
    </router-link>
  </div>
</template>

<style></style>
