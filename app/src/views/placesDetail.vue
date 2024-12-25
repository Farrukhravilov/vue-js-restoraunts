<script>
import placesDetailCard from "@/components/placesDetailCard.vue";
import api from "@/server/api";
import store from "@/store";
import PlacesDetailCard from "../components/placesDetailCard.vue";
export default {
  components: {
    placesDetailCard,
  },
  data() {
    // return {
    //   store: store,
    //   order: {
    //     count: 0,
    //     cursor: 1,
    //     data: [],
    //     size: 10,
    //   },
    //   data2: {
    //     count: 0,
    //     cursor: 1,
    //     data: [],
    //     size: 10,
    //   },
    //   title: "",
    //   type: "dine_in",
    // };
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
  // methods: {
  //   getPayments() {
  //     const param = {
  //       title: this.title,
  //       cursor: this.order.cursor,
  //       size: this.order.size,
  //       orders_type: "take_away",
  //     };
  //     api.getPayments(param).then((res) => {
  //       this.order.count = res.data.count;
  //       this.order.data = this.order.data.concat(res.data.data);
  //     });
  //   },
  //   getPayments2() {
  //     const param = {
  //       title: "",
  //       cursor: this.data2.cursor,
  //       size: this.data2.size,
  //       orders_type: "take_away",
  //     };
  //     api.getPayments(param).then((res) => {
  //       this.data2.count = res.data.count;
  //       this.data2.data = this.data2.data.concat(res.data.data);
  //     });
  //   },
  // },
  mounted() {
    this.getPayments();
    this.getPayments2();
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
        <!-- <div v-for="item in order.data" :key="item?.id">
          <placesDetailCard :places="item" />
        </div> -->
        <div class="mb-[20px]" v-for="item in data2.data" :key="item">
          <PlacesDetailCard :items="item.OrdersActive" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
