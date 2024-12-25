<script>
import api from "@/server/api";
import PaymentModal from "payment-modal/src/paymentModal.vue";
import ModalAll from "modal-all/src/ModalAll.vue";
export default {
  data() {
    return {
      order: {},
    };
  },
  components: {
    PaymentModal,
    ModalAll,
  },
  methods: {
    open(id) {
      this.getOrderInfo(id);
      this.$refs.orderModal.openModal();
    },
    getOrderInfo(id) {
      api.orderInfo({ order_id: id }).then((res) => {
        this.order = res.data;
      });
    },
  },
};
</script>
<template>
  <ModalAll ref="orderModal">
    <template #body>
      <div
        class="mb-4 flex items-center justify-center max-780:justify-between"
      >
        <h1 class="text-[40px] text-center text-[#000000] max-460:text-[30px]">
          {{ order?.Place?.title }} {{ order?.Table?.title }}
        </h1>
        <button
          class="hidden w-[70px] h-[70px] border border-[#015812] rounded-[8px] flex items-center justify-center bg-gray-100 text-gray-500 hover:text-gray-700 max-830:flex max-460:w-[50px] max-460:h-[45px]"
        >
          <img src="/src/assets/images/svg/Vector (15).svg" alt="" />
        </button>
      </div>
      <div class="flex justify-between text-sm mb-2">
        <span>Hodim:</span>
        <span class="font-medium">{{ order?.User?.fullname }}</span>
      </div>
      <div class="flex justify-between text-sm mb-4">
        <span>Sana:</span>
        <span class="font-medium">{{
          $util.format_date(order?.created_at)
        }}</span>
      </div>
      <table class="w-full text-sm mb-4">
        <thead>
          <tr class="">
            <th class="text-left py-1 px-2">Taom</th>
            <th class="text-right py-1 px-2">Narxi</th>
            <th class="text-right py-1 px-2">Miqdor</th>
            <th class="text-right py-1 px-2">Jami</th>
          </tr>
        </thead>
        <tbody>
          <tr class="" v-for="(item, index) in order?.Foods" :key="index">
            <td class="py-1 px-2">{{ item?.Product?.title }}</td>
            <td class="text-right py-1 px-2">
              {{ $util.currency(item?.Product?.sale_price) }}
              {{ item?.Currency?.symbol }}
            </td>
            <td class="text-right py-1 px-2">{{ item?.amount }} dona</td>
            <td class="text-right py-1 px-2">
              {{ $util.currency(item?.Product?.sale_price * item?.amount) }}
              {{ item?.Currency?.symbol }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-between text-sm font-medium mb-2">
        <span>
          {{ $util.currency(order?.total_price) }} {{ order?.Currency?.symbol }}
        </span>
        <span
          >Xizmat ko'rsatish haqqi: {{ order?.service_fee }} %
          {{ $util.currency(order?.final_price - order?.total_price) }}
          {{ order?.Currency?.symbol }}
        </span>
      </div>
      <div class="text-center text-[40px] font-bold pt-2 max-460:text-[30px]">
        Jami :{{ $util.currency(order?.final_price) }}
        {{ order?.Currency?.symbol }}
      </div>
      <!-- <div class="flex justify-end mt-[260px]">
        <button>
          <img src="/src/assets/images/svg/Vector (16).svg" />
        </button>
      </div> -->
      <button
        class="relative w-[70px] h-[70px] border border-[#015812] rounded-[8px] flex items-center justify-center top-[-730px] bg-gray-100 right-[-635px] text-gray-500 hover:text-gray-700 max-830:hidden"
      >
        <img src="/src/assets/images/svg/Vector (15).svg" alt="" />
      </button>
    </template>
    <template #footer>
      <div>
        <button
          class="btn"
          @click="$refs.orderModal.closeModal(), $refs.payment.open(order)"
        >
          <svg
            width="60"
            height="60"
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
    </template>
  </ModalAll>

  <PaymentModal ref="payment" />
</template>
