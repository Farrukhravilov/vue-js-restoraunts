<script>
// import PostKassa from "@/components/PostKassa.vue";
// import kassaCard from "@/components/kassaCard.vue";
import KassaCard from "kassa-card/src/KassaCard.vue";
import KassaModal from "kassa-modal/src/KassaModal.vue";
import api from "@/server/api";
import store from "@/store";
export default {
  data() {
    return {
      loading: false,
      observer: null,
      kassa: {
        cursor: 1,
        size: 10,
        count: 1,
        data: [],
      },
      store: store,
    };
  },
  components: {
    // PostKassa,
    KassaModal,
    KassaCard,
  },
  methods: {
    getKassa() {
      let param = {
        cursor: this.kassa.cursor,
        size: this.kassa.size,
      };
      api.getKassa(param).then((res) => {
        this.kassa.count = res.data.count;
        this.kassa.data = this.kassa.data.concat(res.data.data);
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
    },
  },
  created() {
    this.getKassa();
  },
};
</script>

<template>
  <div
    class="flex flex-col gap-[20px] w-full border border-[#015812] rounded-[10px] h-[84vh]"
    :class="{ 'box-active': store.state.barShow }"
  >
    <div class="p-[30px]">
      <div class="text-[24px] text-[#015812]">
        <h2>Kassa</h2>
      </div>
      <div class="overflow-y-auto max-h-[600px]">
        <div class="grid grid-cols-[repeat(auto-fill,minmax(390px,1fr))] gap-[20px] pr-[15px] pt-[20px]">
          <kassaCard :kassa="kassa" />
          <!-- <Pagination
              v-if="kassa.data.length"
              v-model="kassa"
              @get="getKassa"
            /> -->
        </div>
      </div>
      <div class="flex items-end justify-end">
        <button
          class="w-full max-w-[380px] bg-[#79a684] py-1 px-4 text-[#fff] rounded-[8px] text-[20px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] font-inter font-normal leading-[48.41px] mt-[20px] hover:bg-[#fff] transition-all duration-300 hover:text-[#015812] hover:opacity-80"
          @click="$refs.addCashier.open()"
        >
          Kassa qo’shish
        </button>
      </div>
      <KassaModal ref="addCashier" @end="clear" />
    </div>
  </div>
</template>

<style></style>
