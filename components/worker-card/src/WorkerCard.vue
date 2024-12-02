<template>
  <div
    class="w-full max-w-[363px] h-[143px] border border-[#015812] rounded-[8px] bg-gray-200"
  >
    <router-link
      :to="{ path: '/workerDetail', query: { id: info?.id } }"
      class="flex ml-[10px] mt-[10px]"
    >
      <div class="md:shrink-0">
        <img
          class="w-[100px] h-[100px] mb-2 object-cove md:h-full"
          :src="info?.img"
          alt="Modern building architecture"
        />
      </div>
      <div
        class="font-inter font-semibold text-[26px] leading-[29.05px] ml-[60px] mt-[15px] flex flex-col gap-[5px] max-370:mt-[5px]"
      >
        <div
          class="text-[22px] tracking-wide text-sm text-indigo-500 font-semibold text-[#015812]"
        >
          <span class="text-[#015812] text-[16px]">{{ info?.fullname }} </span>
        </div>
        <span class="text-[#015812] text-[16px]">{{ info?.role }}</span>
        <!-- <a
              href="#"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >Jigar shashlik</a
            > -->
        <p class="mt-2 text-[17px] text-[#015812]">{{ info?.phone }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.error {
  color: red;
  /* Xato xabarining rangini belgilash */
}

.success {
  color: green;
  /* Muvaffaqiyatli xabarining rangini belgilash */
}
</style>
