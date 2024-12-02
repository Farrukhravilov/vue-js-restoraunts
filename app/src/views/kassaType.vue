<script>
import KassaCard from "kassa-card/src/KassaCard.vue";
import KassaModal from "kassa-modal/src/KassaModal.vue";
import KassaTable from "kassa-table/src/KassaTable.vue";
import api from "@/server/api";
export default {
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
  components: {
    KassaModal,
    KassaCard,
    KassaTable,
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

<template>
  <div class="flex w-full gap-[20px] h-[80vh]">
    <div class="w-[33%]">
      <div
        class="gap-[20px] w-full border border-[#015812] rounded-[10px]"
      >
        <div class="flex w-full items-center justify-between p-[30px]">
          <h2>Kassa</h2>
          <div class="">
            <input
              type="text"
              placeholder="Qidiruv"
              v-model="search"
              @input="clear"
            />
            <img src="" alt="" />
          </div>
        </div>

        <div class="h-[64vh] overflow-y-auto flex flex-col items-center justify-center gap-[20px]">
          <kassaCard :kassa="kassa" />
          <!-- <Pagination
              v-if="kassa.data.length"
              v-model="kassa"
              @get="getKassa"
            /> -->
        </div>
        <div class="flex items-center justify-center">
          <button
            class="w-full max-w-[343px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px] hover:bg-[#fff] transition-all duration-300 hover:text-[#015812] hover:opacity-80"
            @click="$refs.postKassa.open()"
          >
            Kassa qo’shish
          </button>
        </div>
        <KassaModal ref="postKassa" @end="clear" />
        <!-- <PostKassa ref="postKassa" @end="clear" /> -->
      </div>
    </div>
    <div class="w-full">
      <router-link to="/kassa">
        <button class="back-btnn">
          <img src="" alt="" />
        </button>
      </router-link>
      <!-- <KassaTable :kassa="kassa"   /> -->
      <div class="border border-[#015812] rounded-[10px] h-[80vh]">
        <div
          class="bg-white w-full max-w-4xl rounded-lg md:p-6 max-w-[740px]:p-3"
        >
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
        </div>
      </div>
      <!-- <div class="table-items" v-if="true">
        <table>
          <thead>
            <tr>
              <th>Stol</th>
              <th>Sana</th>
              <th>Summa</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in Incomes.data" :key="item">
              <td>{{ item?.Order?.Table?.title }}</td>
              <td>{{ $util.format_date(item?.created_at) }}</td>
              <td>{{ item?.price }} {{ item?.Currency?.symbol }}</td>
              <td class="open-worker-inf">
                <button>
                  <img src="" alt="" />
                  asdasd
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="table-items">
        <div class="user-orders">
          <div class="user-orders-top">
            <ul>
              <li>Stol</li>
              <li>Sana</li>
              <li>Summa</li>
            </ul>
          </div>

          <div class="users-orders-items">
            <div
              class="order-item-wrp"
              v-for="item in Incomes.data"
              :key="item"
            >
              <div
                class="user-order-item"
                :toggle-collapse="`collapse${item.id}`"
              >
                <h3>Kirim</h3>
                <h3>{{ $util.format_date(item?.created_at) }}</h3>
                <h3>{{ item?.price }} {{ item?.Currency?.symbol }}</h3>
                <button>
                  <img src="" alt="" />
                  asdasd
                </button>
              </div>
              <Collapse :id="`collapse${item.id}`">
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
              </Collapse>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style lang="scss">
.yel-edit {
  border-radius: 5px;
  padding: 2px;
  border-color: yellow;
}

.order-item-wrp {
  border-bottom: 1px solid rgba(1, 88, 18, 1);
  padding-bottom: 10px;

  * {
    &::after {
      display: none;
    }
  }
}

.order-collapse {
  margin-top: 10px;
}

.order-collapse-wrapper {
  nav {
    display: flex;
    align-items: center;
    gap: 100px;
    justify-content: center;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      padding-left: 10px;

      li {
        font-weight: 400;
        font-size: 15px;
        color: rgba(1, 88, 18, 1);
        display: flex;
        align-items: flex-end;
        gap: 10px;

        span {
          width: 180px;
        }
      }
    }
  }
}

.users-orders-items {
  width: 100%;
  max-width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .user-order-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    h3 {
      font-weight: 400;
      font-size: 20px;
      color: rgba(1, 88, 18, 1);
      font-family: "Jaldi", serif;
      letter-spacing: 5px;
    }

    button {
      border: none;
      background: none;

      img {
        width: 16px;
      }
    }
  }
}

.user-orders-top {
  background: rgba(1, 88, 18, 0.5);
  padding: 10px 25px;

  ul {
    width: 100%;
    max-width: 75%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0 !important;

    li {
      font-weight: 500;
      font-size: 16px;
      color: rgba(1, 88, 18, 1);
      font-family: Inter;
    }
  }
}

.workerInfo-img {
  width: 60px;
  height: 62px;
  border-radius: 6px;
}
//
</style>
