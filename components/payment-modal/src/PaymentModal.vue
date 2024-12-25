<script>
import api from "@/server/api";
import ModalAll from "modal-all/src/ModalAll.vue";
export default {
  data() {
    return {
      order: {},
      incomes: [
        {
          price: 0,
          checkout_id: "",
        },
      ],
      kassa: [],
    };
  },
  components: {
    ModalAll,
  },
  methods: {
    open(order) {
      this.order = order;
      this.$refs.paymentModal.openModal();
      this.getKassa();
    },
    getKassa() {
      api.getKassa({ no_pagination: true }).then((res) => {
        this.kassa = res.data;
      });
    },
    kassaEntry() {
      let param = {
        order_id: this.order.id,
        incomes: this.incomes,
      };
      api.kassaEntry(param).then((res) => {
        this.$refs.paymentModal.closeModal();
        if (!this.$route.path == "/placesDetailPrev") {
          window.location.reload();
        } else {
          this.$router.push("/placesDetail");
        }
      });
    },
  },
};
</script>
<template>
  <ModalAll ref="paymentModal">
    <template #body>
      <div class="position-relative" style="height: 80vh">
        <div v-if="!$route.path == '/placesDetailPrev'">
          <h1 class="text-center text-success fw-bold">
            {{ order?.Place?.title }} , {{ order?.Table?.title }} - stol
          </h1>
          <h1 class="text-center text-success fw-bold">
            Jami: {{ $util.currency(order?.final_price) }}
            {{ order?.Currency?.symbol }}
          </h1>
        </div>
        <div>
          <h1 class="text-[40px] font-normal leading-[67.6px] text-[#015812] w-full tracking-[5px] text-center">
            {{ order?.number || 1 }} - buyurtma
          </h1>
        </div>
        <div>
          <div style="max-height: 40vh; overflow: auto">
            <div class="flex mt-[20px] " v-for="(item, index) in incomes" :key="index">
              <label class="inline-flex  flex-col  text-[20px] font-normal text-[#015812] w-full">
                Summa
                <input
                  type="number"
                  v-model="item.price"
                  @focus="item.price == 0 ? (item.price = '') : ''"
                  @focusout="item.price == '' ? (item.price = 0) : ''"
                  class="block w-full px-3 py-1.5 text-base font-normal leading-6 text-current bg-white border border-solid rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-300 h-[60px]"
                />
              </label>
              <label class="inline-flex  flex-col  text-[20px] font-normal text-[#015812] w-full">
                Kassa
                <select v-model="item.checkout_id" class="block w-full px-3 py-1.5 text-base font-normal leading-6 text-current bg-white border border-solid rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-300 h-[60px]">
                  <option value="" selected disabled>Kassalar</option>
                  <option :value="item.id" v-for="item in kassa">
                    {{ item.title }}
                  </option>
                </select>
              </label>
            </div>
          </div>
          <div class="">
            <button
              class=" float-end mt-3 w-[50px] h-[50px] border border-[#000] bg-[#015812] text-[#fff] rounded-[6px]"
              @click="
                incomes.push({
                  price: 0,
                  checkout_id: 0,
                })
              "
            >
              <i class="fas fa-plus fw-bold fs-2"></i>
            </button>
          </div>
        </div>
        <div class="absolute bottom-[5%] right-[30px]">
          <button
            @click="kassaEntry"
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M70.9375 79.375H9.0625C4.40254 79.375 0.625 75.5975 0.625 70.9375V9.0625C0.625 4.40254 4.40254 0.625 9.0625 0.625H70.9375C75.5975 0.625 79.375 4.40254 79.375 9.0625V70.9375C79.375 75.5975 75.5975 79.375 70.9375 79.375ZM34.9575 62.1381L67.3013 29.7943C68.3996 28.696 68.3996 26.9152 67.3013 25.8169L63.3239 21.8395C62.2256 20.7412 60.4448 20.7411 59.3463 21.8395L32.9688 48.2169L20.6537 35.9018C19.5554 34.8036 17.7746 34.8036 16.6761 35.9018L12.6987 39.8792C11.6004 40.9775 11.6004 42.7584 12.6987 43.8566L30.98 62.1379C32.0784 63.2365 33.8591 63.2365 34.9575 62.1381Z"
                fill="#015812"
              />
            </svg>
          </button>
        </div>
      </div>
    </template>
    <template #footer></template>
  </ModalAll>
</template>
