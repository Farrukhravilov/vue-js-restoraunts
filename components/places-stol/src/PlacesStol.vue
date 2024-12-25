<script>
import api from "@/server/api";
import OrderModal from "places-order/src/OrderModal.vue";
export default {
  data() {
    return {
      tables: {
        count: 1,
        cursor: 1,
        size: 10,
        data: [],
      },
    };
  },
  components: {
    OrderModal,
  },
  watch: {
    "$route.query.place_id": function () {
      this.tables.cursor = 1;
      this.tables.data = [];
      this.getTable();
    },
  },
  methods: {
    getTable() {
      let param = {
        count: this.tables.size,
        cursor: this.tables.cursor,
        size: this.tables.size,
        place_id: this.$route.query.place_id,
      };
      api.getPlacesTables(param).then((res) => {
        this.tables.count = res.data.count;
        this.tables.data = this.tables.data.concat(res.data.data);
      });
    },
  },
  created() {
    this.getTable();
  },
};
</script>
<template>
  <div
    class="ml-[25px] flex flex-wrap gap-[40px] w-full max-780:grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-[40px]"
  >
    <div
      class="relative"
      @click="
        item?.OrderActive ? $refs.orderInfo.open(item?.OrderActive?.id) : ''
      "
      v-for="item in tables.data"
      :key="item"
    >
      <img src="/src/assets/images/png/stol (1).png" alt="" />
      <div
        class="absolute top-[30px] left-0 flex items-center justify-center w-[160px] h-[100px] bg-[#79a684] border border-[#000] text-[32px] max-780px:w-[150px]"
      >
        <span
          class="text-[#fff] font-jaldi text-2xl font-normal leading-[54.08px] tracking-[5px]"
          >{{ item.title }} - stol</span
        >
      </div>
    </div>
  </div>
  <OrderModal ref="orderInfo" />
</template>

<style></style>
