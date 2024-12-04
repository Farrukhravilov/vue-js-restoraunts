<template>
  <div class="border border-[#015812] w-full rounded-[10px] h-[80vh]">
    <div class="bg-white w-full p-6 rounded-lg">
      <!-- Header -->
      <div
        class="text-[24px] font-bold text-[#015812] border-b border-[#015812] flex items-center justify-between pb-2 mb-4"
      >
        <button>
          <img src="/src/assets/images/svg/Vector (18).svg" alt="" />
        </button>
        <div class="flex items-center gap-[12px]">
          <img class="w-[50px] h-[50px]" :src="workerInfo?.img" alt="" />
          <span class="md:text-[20px] max-w-[745px]:text-[14px]">
            {{ workerInfo?.fullname }}
          </span>
        </div>
        <div class="flex items-center gap-[41px] max-w-[745px]:gap-[30px]">
          <button @click="store.state.deleteUserModal = true">
            <img src="/src/assets/images/svg/Vector (22).svg" alt="" />
          </button>
          <router-link class="flex items-center" :to="{ path: '/editWorker', query: { id: workerInfo?.id } }">
            <button>
              <img src="/src/assets/images/svg/Vector (24).svg" alt="" />
            </button>
          </router-link>
          <button @click="store.state.userInfoModal = true">
            <img src="/src/assets/images/svg/wpforms.svg" alt="" />
          </button>
        </div>
      </div>
      <!-- Table -->
      <div class="overflow-auto w-full">
        <table class="w-full border-collapse text-sm">
          <thead class="bg-[#015812]/50 text-[#015812]">
            <tr>
              <th
                class="py-2 px-4 font-inter text-[14px] font-medium leading-[16.94px] text-left"
              >
                Stol
              </th>
              <th
                class="py-2 px-4 font-inter text-[14px] font-medium leading-[16.94px] text-left"
              >
                sana
              </th>
              <th
                class="py-2 px-4 font-inter text-[14px] font-medium leading-[16.94px] text-left"
              >
                summa
              </th>
            </tr>
          </thead>
          <tbody v-for="item in ordersWorker" :key="item" class="w-full">
            <tr
              :toggle-collapse="`collapse${item.id}`"
              @click="workerFoods(item)"
              class="border-b border-[#015812]"
            >
              <td
                class="py-2 px-4 font-jaldi font-normal leading-[33.8px] tracking-[5px] text-[#015812] md:text-[20px] max-w-[740px]:text-[14px] whitespace-nowrap"
              >
                {{ item?.Place?.title }}, {{ item?.Table?.title }}
              </td>
              <td
                class="py-2 px-4 font-jaldi font-normal leading-[33.8px] tracking-[5px] text-[#015812] md:text-[20px] max-w-[740px]:text-[14px] whitespace-nowrap"
              >
                {{ item?.created_at }}
              </td>
              <td
                class="py-2 px-4 font-jaldi font-normal leading-[33.8px] tracking-[5px] text-[#015812] md:text-[20px] max-w-[740px]:text-[14px] whitespace-nowrap"
              >
                {{ item?.total_price }} {{ item?.Currency?.symbol }}
                <button class="ml-[20px] w-[20px]">
                  <img
                    src="/src/assets/images/svg/Vector (19).svg"
                    alt="arrow right btn"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex items-center justify-end">
          <div class="p-4 space-y-4 w-full max-w-[550px]">
            <!-- Заголовки -->
            <div class="grid grid-cols-4 gap-4 text-left font-medium">
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                Taom:
              </div>
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                Narxi
              </div>
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                Miqdor
              </div>
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                Jami:
              </div>
            </div>

            <!-- Первая строка -->
            <div class="grid grid-cols-4 gap-4 items-center">
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                taom 1
              </div>
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                10 000
              </div>
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                2
              </div>
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                20 000
              </div>
            </div>

            <!-- Вторая строка -->
            <div class="grid grid-cols-4 gap-4 items-center">
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                taom 2
              </div>
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                13 000
              </div>
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                3
              </div>
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                39 000
              </div>
            </div>

            <!-- Третья строка -->
            <div class="grid grid-cols-4 gap-4 items-center">
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                taom 3
              </div>
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                10 000
              </div>
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                5
              </div>
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                50 000
              </div>
            </div>

            <!-- Синяя кнопка -->
          </div>
        </div>
      </div>
      <WorkerDelete
        v-if="store.state.deleteUserModal"
        :workerInfDel="workerInfo"
      />
      <WorkerCode v-if="store.state.userInfoModal" :workerInf="workerInfo" />
    </div>
  </div>
</template>

<script>
import store from "@/store";
import api from "@/server/api";

import WorkerDelete from "worker-delete/src/WorkerDelete.vue";
import WorkerCode from "worker-qr-code/src/WorkerCode.vue";
import html2pdf from 'html2pdf.js';
export default {
  components: {
    WorkerDelete,
    WorkerCode,
  },
  props: {
    table: {
      type: Object,
      required: true,
    },
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

<style>
/* Для плавного открытия/закрытия */
/* tr[style*="display: none"] {
  display: table-row !important;
  opacity: 0;
  height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}
tr[style*="display: block"] {
  display: table-row !important;
  opacity: 1;
  height: auto;
  transition: all 0.3s ease-in-out;
} */
</style>
