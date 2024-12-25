<script>
import ExpenceCard from "expence-card/src/ExpenceCard.vue";
import api from "@/server/api";
import ExpenceCreate from "expence-modal/src/ExpenceCreate.vue";
import { mapState, mapActions } from "vuex";
import { mapMutations } from "vuex";
import store from "@/store";
export default {
  data() {
    return {
      groups: {},
      searchQuery: "",
      cursor: 1,
      size: 10,
      selectedTitle: "",
      groupsId: this.$route.query.id,
      store: store,
    };
  },
  components: {
    ExpenceCard,
    ExpenceCreate,
    // expenceCreate,
  },
  computed: {
    ...mapState(["showExpenceCreate"]),
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
      });
    },
    handleClick(id) {
      this.selectedId = id;
    },
    ...mapMutations(["setActiveExpense"]),
    selectExpense(id) {
      this.setActiveExpense(id);
    },
    ...mapMutations(["setSelectedTitle"]),
    handleClick(title) {
      this.setSelectedTitle(title);
    },
    ...mapActions(["toggleExpenceCreate"]),
  },
  mounted() {
    this.getExpenceGroups();
  },
};
</script>

<template>
  <div
    class="flex flex-col gap-[20px] w-[97%] border border-[#015812] rounded-[10px] h-[84vh]"
  >
    <div class="">
      <div class="p-[30px] flex items-center gap-[100px] max-520:flex-col max-520:gap-[20px]">
        <h2 class="text-[24px] text-[#015812]">Chiqim</h2>
        <div class="relative">
          <input
            type="text"
            class="border border-[#015812] relative rounded-[6px] h-[40px] py-[7px] pr-[7px] pl-[38px]"
            placeholder="Qidiruv"
            v-model="searchQuery"
            @input="getExpenceGroups"
          />
          <img class="absolute bottom-[9px] left-[11px] w-[20px] h-[20px]"  src="@/assets/images/svg/search.svg" alt="" />
        </div>
      </div>
      <div class="overflow-y-auto max-h-[540px]">
        <div class="grid grid-cols-[repeat(auto-fill,minmax(390px,1fr))] gap-[20px]  pl-[15px] pr-[15px]">
          <ExpenceCard
            v-for="item in groups?.data?.data"
            :key="item.id"
            :expence="item"
            @click.native="selectExpense(item.id)"
          />
          <!-- <Pagination v-if="expence.length" v-model="expence" @get="getExpenceGroups" /> -->
        </div>
      </div>
      <div class="flex items-end justify-end mr-[20px]">
        <button
          class="w-full max-w-[380px] bg-[#79a684] py-1 px-4 text-[#fff] rounded-[8px] text-[20px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] font-inter font-normal leading-[48.41px] mt-[20px] hover:bg-[#fff] transition-all duration-300 hover:text-[#015812] hover:opacity-80"
          @click="$refs.addExp.open()"
        >
          Doimiy harajat qo’shish
        </button>
      </div>
      <ExpenceCreate ref="addExp" @end="getExpenceGroups" />
    </div>
  </div>
</template>

<style></style>
