<script>
// import expenceCard from "@/components/expenceCard.vue";
// import expenceCreate from "@/components/expenceCreate.vue";
import api from "@/server/api";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

import ExpenceCard from "expence-card/src/ExpenceCard.vue";
import ExpenceCreate from "expence-modal/src/ExpenceCreate.vue";
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
    <div class="workers">
      <div class="workers-wrapper">
        <div class="workers-header">
          <h2>Chiqim</h2>
          <div class="workers-headers-search">
            <input
              type="text"
              placeholder="Qidiruv"
              v-model="searchQuery"
              @input="getExpenceGroups"
            />
            <img src="" alt="" />
          </div>
        </div>

        <div class="workers-cards-wrapper">
          <ExpenceCard
            v-for="item in groups?.data?.data"
            :key="item.id"
            :expence="item"
            @click.native="selectExpense(item.id)"
          />
        </div>
        <div class="add-forever">
          <button class="added-worker-btn" @click="$refs.addExp.open()">
            Doimiy harajat qo’shish
          </button>
        </div>
      </div>
    </div>
    <div class="kassa-detail">
      <div class="workers-header">
        <h2>{{ expensee?.title }}</h2>
        <div class="asdasd" style="display: flex; gap: 20px">
          <button
            @click="$refs.addExp.open(expensee)"
            class="yel-edit"
            style="
              width: 50px;
              height: 50px;
              border: 1px solid rgb(211, 176, 2) !important;
              background: rgba(211, 176, 2, 0.1) !important;
              border-radius: 3px;
            "
          >
            <img src="" alt="" />
          </button>
          <button
            @click="$refs.removeModal.open(expensee)"
            class="red-x"
            style="
              width: 50px;
              height: 50px;
              border: 1px solid rgb(211, 176, 2) !important;
              background: rgba(211, 176, 2, 0.1) !important;
              border-radius: 3px;
            "
          >
            <img src="" alt="" />
          </button>
        </div>
      </div>
      <div class="table-items">
        <table>
          <thead>
            <tr>
              <th>Sana</th>
              <th>summa</th>
              <th>izoh</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in groupsIncomes.data" :key="item">
              <td>{{ $util.format_date(item?.created_at) }}</td>
              <td>
                {{ $util.currency(item?.price) }} {{ item?.Currency?.symbol }}
              </td>
              <td>{{ item?.comment }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="add-worker-btn-wrp add-food-btn-wrp">
        <button class="added-worker-btn" @click="toggleExpenceCreate">
          Harajat qo’shish
        </button>
      </div>
      <addTaom ref="addExp" @end="getExpenceGroups" />
      <!-- <expenceCreate ref="menuTaom" @end="getExpenceGroups" :create="item" /> -->
      <addHarajat :show="showExpenceCreate" :create="item" />
    </div>
  </div>
</template>

<style></style>
