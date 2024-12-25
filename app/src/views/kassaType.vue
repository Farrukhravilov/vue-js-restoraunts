<script>
import KassaCard from "kassa-card/src/KassaCard.vue";
import KassaModal from "kassa-modal/src/KassaModal.vue";
import KassaTable from "kassa-table/src/KassaTable.vue";
import api from "@/server/api";
export default {
  data() {
    return {
      kassa: {
        cursor: 1,
        size: 10,
        count: 1,
        data: [],
      },
      Incomes: {
        cursor: 1,
        size: 10,
        count: 1,
        data: [],
      },
      search: "",
    };
  },
  watch: {
    "$route.query.kassa_id": function () {
      this.Incomes.cursor = 1;
      this.Incomes.data = [];
      this.getIncomes();
    },
  },
  components: {
    KassaModal,
    KassaCard,
    KassaTable,
  },
  methods: {
    getKassa() {
      let param = {
        cursor: this.kassa.cursor,
        size: this.kassa.size,
        search: this.search,
      };
      api.getKassa(param).then((res) => {
        this.kassa.count = res.data.count;
        this.kassa.data = this.kassa.data.concat(res.data.data);
      });
    },
    getIncomes() {
      let param = {
        kassa_id: this.$route.query.kassa_id,
        cursor: this.Incomes.cursor,
        size: this.Incomes.size,
      };
      api.getIncomes(param).then((res) => {
        this.Incomes.count = res.data.count;
        this.Incomes.data = this.Incomes.data.concat(res.data.data);
      });
    },
    clear() {
      this.kassa = {
        cursor: 1,
        size: 10,
        count: 1,
        data: [],
      };
      this.getKassa();
      this.getIncomes();
    },
  },
  created() {
    this.getKassa();
    this.getIncomes();
  },
  mounted() {},
};
</script>

<template>
  <div class="flex gap-[10px] w-[89%]">
    <div
      class="flex flex-col gap-[20px] w-[37%] border border-[#015812] rounded-[10px] h-[84vh]"
    >
      <div class="flex items-center p-[30px] justify-between">
        <h2 class="text-[24px] text-[#015812]">Menu</h2>
        <div class="relative">
          <input
            type="text"
            class="border border-[#015812] relative rounded-[6px] h-[40px] py-[7px] pr-[7px] pl-[38px]"
            placeholder="Qidiruv"
            v-model="search"
            @input="clear"
          />

          <img
            class="absolute bottom-[9px] left-[11px] w-[20px] h-[20px]"
            src="@/assets/images/svg/search.svg"
            alt=""
          />
        </div>
      </div>
      <div class="overflow-y-auto max-h-[560px] gap-[20px]">
        <div class="flex flex-col gap-[25px] items-center justify-center">
          <kassaCard :kassa="kassa" />
        </div>
        <!-- <Pagination
            v-if="kassa.data.length"
            v-model="kassa"
            @get="getKassa"
          /> -->
      </div>
      <div class="flex items-center justify-center">
        <button
          class="w-full max-w-[343px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px] hover:bg-[#fff] transition-all duration-300 hover:text-[#015812] hover:opacity-80"
          @click="$refs.postKassa.open()"
        >
          Kassa qo’shish
        </button>
      </div>
      <KassaModal ref="postKassa" @end="clear" />
    </div>
    <div class="border border-[#015812] w-full rounded-[10px] h-[84vh]">
      <div
        class="bg-white w-full rounded-lg max-w-[740px]:p-3"
      >
        <div
          class="font-bold text-[#015812] pb-2 mb-4 flex align-center items-center p-5 justify-between md:text-[24px] max-w-[740px]:text-[19px]"
        >
          {{ $route.query.title }} -
          {{ $util.currency($route.query.balance) }} so’m
          <button
            class="border border-[#d3b002] w-[50px] h-[50px] bg-[#d3b002]/10 flex items-center justify-center rounded-[3px]"
            @click="$refs.postKassa.open('edit')"
          >
            <img src="/src/assets/images/svg/Vector (20).svg" alt="" />
          </button>
        </div>
        <!-- Table -->
        <div class="overflow-auto md:p-6 ">
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
            <tbody>
              <tr
                v-for="item in Incomes.data"
                :key="item"
                class="border-b border-[#015812] sm:overflow-visible"
              >
                <td
                  class="py-2 px-4 font-jaldi font-normal leading-[33.8px] tracking-[5px] text-[#015812] md:text-[20px] max-w-[740px]:text-[14px] whitespace-nowrap"
                >
                  {{ item?.Order?.Table?.title }}
                </td>
                <td
                  class="py-2 px-4 font-jaldi font-normal leading-[33.8px] tracking-[5px] text-[#015812] md:text-[20px] max-w-[740px]:text-[14px] whitespace-nowrap"
                >
                  {{ $util.format_date(item?.created_at) }}
                </td>
                <td
                  class="py-2 px-4 font-jaldi font-normal leading-[33.8px] tracking-[5px] text-[#015812] flex align-center md:text-[20px] max-w-[740px]:text-[14px] whitespace-nowrap"
                >
                  {{ item?.price }} {{ item?.Currency?.symbol }}
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
          <!-- <h5
          class="text-[#015812] text-right py-2 px-4 font-jaldi font-normal leading-[33.8px] tracking-[5px] text-[#015812] md:text-[24px] max-w-[740px]:text-[16px] leading-[22.8px] tracking-[2px]"
        >
          1 - zal, 
          7- stol, 
        </h5> -->
          <!-- <span></span> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
