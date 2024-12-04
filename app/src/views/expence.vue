<script>
// import expenceCard from "@/components/expenceCard.vue";
// import expenceCreate from "@/components/expenceCreate.vue";
import api from "@/server/api";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

import ExpenceCard from "expence-card/src/ExpenceCard.vue";
import ExpenceCreate from "expence-modal/src/ExpenceCreate.vue";
import ExpenceHarajat from "expence-harajat/src/ExpenceHarajat.vue";
// import ExpenceTable from "expence-table/src/ExpenceTable.vue";
// import addTaom from "@/components/addTaom.vue";
// import addHarajat from "@/components/addHarajat.vue";
// import deleteGroups from "@/components/deleteGroups.vue";
// import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      groups: {},
      groupsIncomes: {},
      groupsId: this.$route.query.id,
      showAddTaomModal: false,
      searchQuery: "",
      cursor: 1,
      size: 10,
      expensee: null,
      // selectedId: this.$route.query.selectedId,
      // selectedTitle: '',
    };
  },
  components: {
    ExpenceCard,
    ExpenceCreate,
    ExpenceHarajat,
    // ExpenceTable,
    // expenceCard,
    // addTaom,
    // expenceCreate,
    // addHarajat,
    // deleteGroups,
  },
  methods: {
    getExpenceGroups() {
      const param = {
        title: this.searchQuery,
        cursor: this.cursor,
        size: this.size,
      };
      api.getExpenceGroups(param).then((res) => {
        this.groups = res;
        this.expensee = res.data.data.find((e) => e.id == this.$route.query.id);
        this.getGroupIncomes();
      });
    },
    getGroupIncomes() {
      const param = {
        id: this.expensee?.id,
      };
      api.getGroupIncomes(param).then((res) => {
        this.groupsIncomes = res.data;
        // console.log(res);
      });
    },
    ...mapActions(["toggleAddTaomModal"]),
    ...mapMutations(["setActiveExpense"]),
    selectExpense(id) {
      this.setActiveExpense(id); // Сохраняем ID выбранного элемента
    },
    ...mapActions(["toggleExpenceCreate"]),
  },
  computed: {
    ...mapState(["showAddTaomModal"]),
    ...mapGetters(["getSelectedTitle"]),
    selectedTitle() {
      return this.getSelectedTitle; // Получаем значение из Vuex
    },
    ...mapState(["activeExpenseId"]),
    // ...mapState(["showExpenceCreate"]),
    ...mapState(["showExpenceCreate"]),
  },
  mounted() {
    this.getExpenceGroups();
  },
};
</script>

<template>
  <div class="flex gap-[10px] w-full">
    <div
      class="workers-main flex flex-col gap-[20px] w-[40%] border border-[#015812] rounded-[10px] h-[80vh]"
    >
      <div class="flex flex-col">
        <div class="flex justify-between items-center p-[45px]">
          <h2>Chiqim</h2>
          <div class="workers-headers-search">
            <input
              type="text"
              placeholder="Qidiruv"
              v-model="searchQuery"
              @input="getExpenceGroups"
              class="border border-gray-200"
            />
            <img src="" alt="" />
          </div>
        </div>
        <div class="overflow-y-auto max-h-[540px]">
          <div class="flex flex-col gap-[20px] items-center justify-center">
            <ExpenceCard
              v-for="item in groups?.data?.data"
              :key="item.id"
              :expence="item"
              @click.native="selectExpense(item.id)"
            />
          </div>
        </div>
        <div class="flex justify-center">
          <button
            class="w-full max-w-[343px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px] hover:bg-[#fff] transition-all duration-300 hover:text-[#015812] hover:opacity-80"
            @click="$refs.addExp.open()"
          >
            Doimiy harajat qo’shish
          </button>
        </div>
      </div>
    </div>
    <div class="border border-[#015812] w-full rounded-[10px] h-[80vh]">
      <div class="bg-white w-full p-6 rounded-lg">
        <div
          class="text-[24px] font-bold text-[#015812] border-b border-[#015812] pb-2 mb-4"
        >
          <div class="flex items-center justify-between">
            <span class="md:text-[20px] max-w-[745px]:text-[14px]">
              {{ expensee?.title }}
            </span>
            <button
              @click="$refs.addExp.open(expensee)"
              class="border border-[#d3b002] w-[50px] h-[50px] bg-[#d3b002]/10 flex items-center justify-center rounded-[3px]"
            >
              <img src="/src/assets/images/svg/Vector (20).svg" alt="" />
            </button>
          </div>
        </div>

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
            <tbody class="w-full">
              <tr
                v-for="item in groupsIncomes.data"
                :key="item"
                class="border-b border-[#015812]"
              >
                <td
                  class="py-2 px-4 font-jaldi font-normal leading-[33.8px] tracking-[5px] text-[#015812] md:text-[20px] max-w-[740px]:text-[14px] whitespace-nowrap"
                >
                  {{ $util.format_date(item?.created_at) }}
                </td>
                <td
                  class="py-2 px-4 font-jaldi font-normal leading-[33.8px] tracking-[5px] text-[#015812] md:text-[20px] max-w-[740px]:text-[14px] whitespace-nowrap"
                >
                  {{ $util.currency(item?.price) }} {{ item?.Currency?.symbol }}
                </td>
                <td
                  class="py-2 px-4 font-jaldi font-normal leading-[33.8px] tracking-[5px] text-[#015812] md:text-[20px] max-w-[740px]:text-[14px] whitespace-nowrap"
                >
                  {{ item?.comment }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button class="w-full max-w-[343px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px] hover:bg-[#fff] transition-all duration-300 hover:text-[#015812] hover:opacity-80" @click="toggleExpenceCreate" >harajat qoshish</button>
      </div>
    </div>
    <ExpenceCreate ref="addExp" @end="getExpenceGroups" />
    <ExpenceHarajat :show="showExpenceCreate" :create="item" />
  </div>
</template>

<style></style>
