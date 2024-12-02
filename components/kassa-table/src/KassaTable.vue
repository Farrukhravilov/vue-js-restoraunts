<template>
  <div class="border border-[#015812] rounded-[10px] h-[80vh]">
    <div class="bg-white w-full max-w-4xl rounded-lg md:p-6 max-w-[740px]:p-3">
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
      <div class="overflow-auto">
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
            <!-- Row Template -->
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
            <!-- <tr class="border-b border-[#015812]">
              <td
                class="py-2 px-4 font-jaldi text-[20px] font-normal leading-[33.8px] tracking-[5px] text-[#015812] text-[18px]"
              >
                Kirim
              </td>
              <td
                class="py-2 px-4 font-jaldi text-[20px] font-normal leading-[33.8px] tracking-[5px] text-[#015812] text-[18px]"
              >
                12.10.2024
              </td>
              <td
                class="py-2 px-4 font-jaldi text-[20px] font-normal leading-[33.8px] tracking-[5px] text-[#015812] text-[18px] flex align-center"
              >
                150 000 so’m
                <button class="ml-[20px]">
                  <img
                    src="/src/assets/images/svg/Vector (19).svg"
                    alt="arrow right btn"
                  />
                </button>
              </td>
            </tr> -->
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
      <!-- <Collapse :id="`collapse${item.id}`">
        <div class="order-collapse">
          <div class="order-collapse-wrapper">
            <nav>
              <ul>
                <li>
                  <span
                    >{{ item?.Order?.Place?.title }}
                    {{ item?.Order?.Table?.title }}- stol</span
                  >
                  <span>hodim: {{ item?.User?.fullname }}</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Collapse> -->

      <!-- Add Button -->
    </div>
  </div>
  <MenuModal ref="postKassa" @end="clear" />
</template>

<script>
// import Button from "";
import api from "@/server/api";
import MenuModal from "modal-modal/src/MenuModal.vue";
export default {
  components: {
    // Button,
    MenuModal,
  },
  props: {
    kassa: {
      type: Object,
      required: true,
    },
  },
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

<style></style>
