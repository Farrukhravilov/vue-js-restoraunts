<script>
import api from "@/server/api";
import placesCard from "@/components/placesCard.vue";
import PlacesStol from "places-stol/src/PlacesStol.vue";
import PlacesModal from "places-modal/src/PlacesModal.vue";
import store from "@/store";
export default {
  components: {
    // Table,
    placesCard,
    PlacesStol,
    PlacesModal,
    // PostPlaces,
    // RemovePlaces,
  },
  data() {
    return {
      data: {
        count: 1,
        size: 10,
        cursor: 1,
        data: [],
      },
      search: "",
      store: store,
    };
  },
  methods: {
    getPlaces() {
      let param = {
        size: this.data.size,
        cursor: this.data.cursor,
        search: this.search,
      };
      api.places(param).then((res) => {
        this.data.count = res.data.count;
        this.data.data = this.data.data.concat(res.data.data);
      });
    },
    clear() {
      this.data = {
        count: 1,
        size: 10,
        cursor: 1,
        data: [],
      };
      this.getPlaces();
    },
  },
  mounted() {
    this.getPlaces();
  },
};
</script>

<template>
  <div class="flex gap-[10px] w-[89%]">
    <div
      class="flex flex-col gap-[20px] w-[37%] border border-[#015812] rounded-[10px] h-[84vh]"
    >
      <div class="flex items-center p-[30px] justify-between">
        <h2 class="text-[24px] text-[#015812]">Menu</h2>
        <div class="relative">
          <input
            type="text"
            class="border border-[#015812] relative rounded-[6px] h-[40px] py-[7px] pr-[7px] pl-[38px]"
            placeholder="Qidiruv"
            v-model="search"
            @input="clear"
          />

          <img
            class="absolute bottom-[9px] left-[11px] w-[20px] h-[20px]"
            src="@/assets/images/svg/search.svg"
            alt=""
          />
        </div>
      </div>
      <div class="overflow-y-auto max-h-[540px]">
        <div class="flex flex-col gap-[20px] items-center justify-center">
          <placesCard v-for="item in data?.data" :key="item" :places="item" />
          <!-- <Pagination
                  v-if="data?.data?.length"
                  v-model="data"
                  @get="getPlaces"
                /> -->
        </div>
      </div>

      <!-- @click="$refs.postPlaces.open('create')" -->
      <div class="flex justify-center">
        <button
          @click="$refs.postPlaces.open()"
          class="w-full max-w-[343px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px] hover:bg-[#fff] transition-all duration-300 hover:text-[#015812] hover:opacity-80"
        >
          Joy turini qo’shish
        </button>
      </div>
    </div>
    <div class="border border-[#015812] w-full rounded-[10px] h-[84vh]">
      <div class="p-[30px]">
        <div class="flex items-center justify-between">
          <div class="worker-pic">
            <h2 class="text-[24px] text-[#015812]">
              {{ $route.query.title }} {{ $route?.query.tables }} ta stol
            </h2>
          </div>
          <div class="flex items-center">
            <button
              class="border border-[#d3b002] w-[50px] h-[50px] bg-[#d3b002]/10 flex items-center justify-center rounded-[3px]"
              @click="$refs.postPlaces.open('edit')"
            >
              <img src="/src/assets/images/svg/Vector (20).svg" alt="" />
            </button>
            <button>
              <img src="" alt="" />
            </button>
            <!-- @click="$refs.removePlaces.open()" -->
          </div>
        </div>
        <!-- @click="$refs.postPlaces.open('edit')" -->
      </div>
      <div class="menu-cards-wrapper">
        <div class="table-cards">
          <PlacesStol />
        </div>
      </div>
    </div>
  </div>
  <PlacesModal ref="postPlaces" @end="getPlaces" />
  <!-- <PostPlaces ref="postPlaces" @end="clear" /> -->
  <!-- <RemovePlaces ref="removePlaces" @end="clear" /> -->
</template>

<style lang="scss" scoped></style>
