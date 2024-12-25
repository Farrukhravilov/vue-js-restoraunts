<script>
import PaymentsCard from "payments-card/src/PaymentsCard.vue";
import PaymentsTable from "payments-table/src/PaymentsTable.vue";
import api from "@/server/api";
import store from "@/store";
export default {
  components: {
    PaymentsCard,
    PaymentsTable,
  },
  data() {
    return {
      data: {
        count: 0,
        cursor: 1,
        data: [],
        size: 10,
      },
      data2: {
        count: 0,
        cursor: 1,
        data: [],
        size: 10,
      },
      store: store,
      title: "",
      type: "dine_in",
    };
  },
  methods: {
    getPayments() {
      const param = {
        title: this.title,
        cursor: this.data.cursor,
        size: this.data.size,
        orders_type: this.type,
      };
      api.getPayments(param).then((res) => {
        this.data.count = res.data.count;
        this.data.data = this.data.data.concat(res.data.data);
      });
    },
    getPayments2() {
      const param = {
        title: "",
        cursor: this.data2.cursor,
        size: this.data2.size,
        orders_type: "take_away",
      };
      api.getPayments(param).then((res) => {
        this.data2.count = res.data.count;
        this.data2.data = this.data2.data.concat(res.data.data);
      });
    },
  },
  mounted() {
    this.getPayments();
    this.getPayments2();
  },
};
</script>

<template>
  <div class="w-[97%]">
    <div class="border border-[#015812] rounded-[10px]">
      <div class="p-[30px]">
        <h2 class="text-[24px] text-[#015812]">To’lovlar</h2>
      </div>
      <div class="mb-[20px]" v-for="item in data2.data" :key="item">
        <div class="ml-[25px]">
          <h2 class="text-[30px] text-[#015812] max-460:text-[20px]" >{{ `Olib ketish buyurtmalar` }}</h2>
        </div>
        <div class="w-full">
          <PaymentsCard :items="item.OrdersActive" />
        </div>
      </div>
      <!-- <Pagination
          v-if="data2?.data?.length"
          v-model="data2"
          @get="getPayments2"
        /> -->
      <div v-for="item in data.data" :key="item" class="p-[30px]">
        <h2 class="text-[30px] text-[#015812] mb-[30px]">{{ item.title }}</h2>
        <div class="">
          <PaymentsTable :items="item.OrdersActive" />  
        </div>
      </div>
      <!-- <Pagination
          v-if="data?.data?.length"
          v-model="data"
          @get="getPayments"
        /> -->
    </div>
  </div>
</template>

<style></style>
