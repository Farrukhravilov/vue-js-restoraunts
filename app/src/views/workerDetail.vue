<script>
import api from "@/server/api";
import store from "../store";
import PlacesCard from "places-card/src/PlacesCard.vue";
import WorkerCard from "worker-card/src/WorkerCard.vue";
import workerdetailCards from "@/components/workerdetailCards.vue";
import WorkerTable from "worker-table/src/WorkerTable.vue";
// import WorkerAdd from "worker-add/src/WorkerAdd.vue";
export default {
  components: {
    PlacesCard,
    WorkerCard,
    workerdetailCards,
    WorkerTable,
    // WorkerAdd,
  },
  data() {
    return {
      workerInfo: {},
      users: {},
      store: store,
      ordersWorker: {},
      foodInfo: {},
      searchVal: "",
      workerFoodsInfo: {
        cursor: 1,
        size: 10,
        count: 1,
        data: [],
      },
      workers: {
        cursor: 1,
        size: 10,
        count: 1,
        data: [],
      },
    };
  },
  watch: {
    "$route.query.id"(newId, oldId) {
      if (newId !== oldId) {
        this.workerDetail();
      }
    },
  },
  methods: {
    workerDetail() {
      api.workerDetail(this.$route.query.id).then((res) => {
        this.workerInfo = res.data;
      });
    },

    workerOrders() {
      const params = {
        cursor: 1,
        size: 10,
        id: this.$route.query.id,
      };

      api.workerOrders(params).then((res) => {
        this.ordersWorker = res?.data?.data;
        console.log(res);
      });
    },

    workerFoods(item) {
      const params = {
        size: item.foods?.size || 10,
        cursor: item.foods?.cursor || 1,
        id: item.id,
      };
      api.workerFoods(params).then((res) => {
        item.foods = {
          cursor: 1,
          size: 10,
          count: 1,
          data: [],
        };
        item.foods.count = res.data.count;
        item.foods.data = item.foods?.data?.concat(res.data.data);
      });
    },

    allWorkers() {
      const params = {
        size: this.workers?.size,
        cursor: this.workers?.cursor,
        fullname: this.searchVal,
      };
      api.allWorkers(params).then((res) => {
        this.workers.count = res.data.count;
        this.workers.data = this.workers.data.concat(res.data.data);
      });
    },

    clear() {
      this.workers = {
        cursor: 1,
        size: 10,
        count: 1,
        data: [],
      };
      this.allWorkers();
    },
  },
  created() {
    this.allWorkers();
  },
  mounted() {
    this.workerDetail();
    this.workerOrders();
  },
};
</script>

<template>
  <div class="flex gap-[10px] w-full">
    <div
      class="workers-main flex flex-col gap-[20px] w-[30%] border border-[#015812] rounded-[10px] h-[80vh]"
    >
      <div class="flex gap-[20px] w-full">
        <div class="flex justify-between w-full p-[30px]">
          <h2 class="text-[24px] text-[#015812]">Hodimlar</h2>
          <input
            type="text"
            placeholder="qidiruv"
            v-model="searchVal"
            @input="clear"
            class="text-[#015812] rounded-[6px] w-[200px] h-[30px] p-[10px] text-[16px] font-inter border border-gray-500 inline-block"
          />
        </div>
      </div>
      <div
        v-for="item in workers?.data"
        class="flex justify-center"
        :key="item"
      >
        <WorkerCard :info="item" />
      </div>
      <router-link
        to="/addWorker"
        class="flex items-end justify-center h-[40%] mr-[20px]"
      >
        <button
          class="w-full max-w-[343px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px] hover:bg-[#fff] transition-all duration-300 hover:text-[#015812] hover:opacity-80"
        >
          Hodim qo‘shish
        </button>
      </router-link>
    </div>
    <div class="w-[70%]">
      <WorkerTable />
    </div>
    <!-- <WorkerAdd/> -->
  </div>
  <!-- <PlacesCard /> -->
  <workerdetailCards :info="item" />
</template>

<style></style>
