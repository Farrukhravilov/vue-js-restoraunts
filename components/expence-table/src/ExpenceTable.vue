<template>
  <div class="border border-[#015812] w-full rounded-[10px] h-[80vh]">
    <div class="bg-white w-full p-6 rounded-lg">
      <div
        class="text-[24px] font-bold text-[#015812] border-b border-[#015812] flex items-center justify-between pb-2 mb-4"
      >
        <div class="flex items-center gap-[12px]">
          <span class="md:text-[20px] max-w-[745px]:text-[14px]">
            {{ expensee?.title }}
          </span>
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
    </div>
  </div>
</template>
<script>
import api from "@/server/api";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
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
  props: {
    expences: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
