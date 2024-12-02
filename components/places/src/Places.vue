<template>
  <div class="flex gap-[20px] w-full border border-[#015812] rounded-[8px]">
    <PlacesCard :tabs="tabs" :borderWidth="2">
      <template #header1 class="tab-content">
        <div class="flex items-center justify-between p-4">
          <h1>Menu</h1>
          <input
            v-model="title"
            @input="getTaomlar"
            placeholder="Qidiruv"
            class="border border-gray-200"
          />
        </div>
      </template>
      <template #body1>
        <div class="tab-content">
          <div class="flex flex-col items-center justify-center gap-[20px]">
            <MenuCard v-for="item in data?.data" :key="item" :menu="item" />
          </div>
        </div>
      </template>
      <template #footer1>
        <div class="tab-content flex items-end justify-center">
          <button
            @click="$refs.menuModal.open()"
            class="w-full max-w-[343px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px] hover:bg-[#fff] transition-all duration-300 hover:text-[#015812] hover:opacity-80"
          >
            Yangi taom qo'shish
          </button>
        </div>
      </template>
    </PlacesCard>
    <menuModal ref="menuModal" @end="getTaomlar" />
  </div>
</template>

<script>
import PlacesCard from "places-card/src/PlacesCard.vue";
import menuCard from "menu-card/src/MenuCard.vue";
import api from "@/server/api";
import store from "@/store";
// import menuModal from "modal-modal/src/menuModal.vue";
export default {
  components: {
    PlacesCard,
    // menuModal,
    menuCard,
  },
  data() {
    return {
      tabs: [1, 2, 3],
      data: {
        count: 0,
        cursor: 1,
        data: [],
        size: 10,
      },
      store: store,
    };
  },
  computed: {
    cr_user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    getTaomlar() {
      const param = {
        title: this.title,
        cursor: this.data.cursor,
        size: this.data.size,
      };
      api.getTaomlar(param).then((res) => {
        this.data = res.data;
        console.log(res.data);
      });
    },
  },
  mounted() {
    this.getTaomlar();
  },
};
</script>

<style></style>
