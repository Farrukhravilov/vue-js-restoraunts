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
    class="flex flex-col gap-[20px] w-[97%] border border-[#015812] rounded-[10px] h-[80vh]"
    :class="{ 'box-active': store.state.barShow }"
  >
    <div class="">
      <div class="p-[30px] flex items-center gap-[100px]">
        <h2 class="text-[24px] text-[#015812]">Chiqim</h2>
        <div class="">
          <input
            type="text"
            placeholder="Qidiruv"
            v-model="searchQuery"
            @input="getExpenceGroups"
          />
          <!-- {{ searchQuery }} -->
          <img src="" alt="" />
        </div>
      </div>
      <div class="flex flex-wrap gap-[20px] pt-[20px] ml-[30px]">
        <ExpenceCard
          v-for="item in groups?.data?.data"
          :key="item.id"
          :expence="item"
          @click.native="selectExpense(item.id)"
        />
        <!-- <Pagination v-if="expence.length" v-model="expence" @get="getExpenceGroups" /> -->
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
