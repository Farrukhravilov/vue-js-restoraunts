<script>
import placesDetailCard from "@/components/placesDetailCard.vue";
import api from "@/server/api";
import store from "@/store";
export default {
  components: {
    placesDetailCard,
  },
  data() {
    return {
      order: {
        count: 0,
        cursor: 1,
        data: [],
        size: 10,
      },
      store: store,
    };
  },
  methods: {
    getPayments() {
      const param = {
        title: "",
        cursor: this.order.cursor,
        size: this.order.size,
        orders_type: "take_away",
      };
      api.getPayments(param).then((res) => {
        this.order.count = res.data.count;
        this.order.data = this.order.data.concat(res.data.data);
      });
    },
  },
  created() {
    this.getPayments();
  },
};
</script>

<template>
  <div class="w-full h-[80vh]">
    <div
      class="flex flex-col h-[80vh] gap-[20px] w-[97%] border border-[#015812] rounded-[10px]"
    >
      <div class="p-[30px]">
        <h2 class="text-[24px] text-[#015812]">Olib ketish buyurtmalari</h2>
      </div>
      <div class="ml-[30px] gap-[20px]">
        <div v-for="item in order.data" :key="item?.id">
          <placesDetailCard
            v-if="order?.data?.length"
            :order="item?.OrdersActive"
          />
        </div>
      </div>
      <div class="flex items-end justify-end">
        <button
          class="w-full max-w-[343px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px] hover:bg-[#fff] transition-all duration-300 hover:text-[#015812] hover:opacity-80"
        >
          Buyurtma qo’shish
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
