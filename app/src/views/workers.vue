<script>
import api from "@/server/api";
import store from "@/store";
import PlacesCard from "places-card/src/PlacesCard.vue";
import WorkerCard from "worker-card/src/WorkerCard.vue";
export default {
  data() {
    return {
      users: {},
      searchVal: "",
      workers: {
        cursor: 1,
        size: 10,
        count: 1,
        data: [],
      },
      store: store,
    };
  },
  components: {
    PlacesCard,
    WorkerCard,
  },

  methods: {
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
};
</script>

<template>
  <div
    class="flex flex-col gap-[20px] w-full border border-[#015812] rounded-[10px] h-[80vh]"
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
    <div class="flex flex-wrap gap-[20px] ml-[20px]">
      <div v-for="item in workers?.data" :key="item">
        <workerCard :info="item" />
      </div>
    </div>
    <div class="flex items-end justify-end h-[50%] mr-[20px]">
      <button
        class="w-full max-w-[343px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px] hover:bg-[#fff] transition-all duration-300 hover:text-[#015812] hover:opacity-80"
      >
        Hodim qo‘shish
      </button>
    </div>

    <!-- <Pagination
            v-if="workers?.data?.length"
            v-model="workers"
            @get="allWorkers"
          /> -->
  </div>
</template>

<style lang="scss">
.search-info {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    color: rgba(1, 88, 18, 1);
  }
}
</style>
