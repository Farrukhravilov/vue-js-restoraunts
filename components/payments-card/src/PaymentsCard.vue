<script>
import PaymentStolModal from "payment-stol-modal/src/PaymentStolModal.vue";
export default {
  components: {
    PaymentStolModal,
  },
  props: {
    items: Array,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="flex flex-col gap-[20px] ml-[25px]">
    <div
      v-for="(item, index) in items"
      :key="item"
      @click="$refs.OrderModal.open(item.id)"
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
            {{ $util.currency(item.total_price) }}
            {{ item?.Currency?.symbol }}</span
          >
        </div>
      </div>
    </div>
  </div>
  <PaymentStolModal ref="OrderModal" />
</template>

<style></style>
