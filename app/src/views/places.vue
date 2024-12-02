<script>
import placesCard from "@/components/placesCard.vue";
import PlacesModal from "places-modal/src/PlacesModal.vue";
import api from "@/server/api";
import store from "@/store";
export default {
  components: {
    placesCard,
    PlacesModal,
    // PostPlaces,
    // editPlaces,
  },
  data() {
    return {
      data: {
        cursor: 1,
        size: 10,
        count: 1,
        data: [],
      },
      store: store,
    };
  },
  methods: {
    getPlaces() {
      api.places().then((res) => {
        this.data.count = res.data.count;
        this.data.data = this.data.data.concat(res.data.data);
      });
    },
  },
  mounted() {
    this.getPlaces();
  },
};
</script>

<template>
  <div class="w-full h-[80vh]">
    <!-- <editPlaces /> -->
    <div
      class="flex flex-col h-[80vh] gap-[20px] w-[97%] border border-[#015812] rounded-[10px]"
    >
      <div class="">
        <div class="p-[30px]">
          <h2 class="text-[24px] text-[#015812]">Joylar</h2>
          <router-link to="/placesDetail">
            <button
              class="w-full max-w-[380px] bg-[#79a684] py-2 px-4 text-[#fff] rounded-[8px] text-[40px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] font-inter font-normal leading-[48.41px] mt-[20px] hover:bg-[#fff] transition-all duration-300 hover:text-[#015812] hover:opacity-80"
            >
              Olib ketish
            </button>
          </router-link>
        </div>
        <div class="ml-[30px] flex flex-wrap gap-[20px]">
          <placesCard v-for="item in data?.data" :places="item" :key="item" />
          <!-- <Pagination
            v-if="data?.data?.length"
            v-model="data"
            @get="getPlaces"
          /> -->
        </div>
        <PlacesModal ref="postPlaces" @end="getPlaces" />
        <div class="">
          <button
            class="w-full max-w-[343px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px] hover:bg-[#fff] transition-all duration-300 hover:text-[#015812] hover:opacity-80"
            @click="$refs.postPlaces.open()"
          >
            Buyurtma qo’shish
          </button>
          <!-- @click="$refs.postPlaces.open()" -->
        </div>
      </div>
    </div>
    <!-- <PostPlaces ref="postPlaces" @end="getPlaces" /> -->
  </div>
</template>

<style lang="scss">
// .places-info {
//   width: fit-content;
//   background: rgba(1, 88, 18, 0.5);
//   padding: 12px 15px;
//   border-radius: 8px;
//   cursor: pointer;
//   border: none;
//   margin-top: 50px;

//   &:hover {
//     opacity: 0.9;
//   }

//   &:active {
//     opacity: 0.8;
//   }

//   h2 {
//     font-weight: 600;
//     font-size: 40px;
//     letter-spacing: 12px;
//     color: #fff;
//   }
// }
</style>
