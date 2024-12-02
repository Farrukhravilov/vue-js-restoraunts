<script>
// import Table from "@/components/Table.vue";
import api from "@/server/api";
import placesCard from "@/components/placesCard.vue";
// import PostPlaces from "@/components/PostPlaces.vue";
// import RemovePlaces from "@/components/Modal/RemovePlaces.vue";
import store from "@/store";
export default {
  components: {
    // Table,
    placesCard,
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
  <div class="worker-detail" :class="{ 'box-active': store.state.barShow }">
    <div class="worker-detail-wrapper">
      <div class="workers-main workers-main-detail tables-wrapper">
        <div class="workers">
          <div class="workers-wrapper">
            <div class="workers-header">
              <h2>Menu</h2>
              <div class="workers-headers-search">
                <input
                  type="text"
                  placeholder="Qidiruv"
                  v-model="search"
                  @input="clear"
                />
                <!-- <img src="@/assets/images/svg/search.svg" alt="" /> -->
              </div>
            </div>

            <div class="workers-cards-wrapper worker-detail-cards-wrapper">
              <placesCard
                v-for="item in data?.data"
                :key="item"
                :places="item"
              />
              <!-- <Pagination
                v-if="data?.data?.length"
                v-model="data"
                @get="getPlaces"
              /> -->
            </div>

            <!-- @click="$refs.postPlaces.open('create')" -->
            <div
              class="add-Places-Btn"
            >
              <div class="btn-wrp">
                <button class="add-emp-btn add-Places-Btn">
                  Joy turini qo’shish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="worker-info tables-info">
        <div class="worker-info-wrapper">
          <div class="worker-info-header">
            <div class="worker-pic-and-back-btn">
              <div class="worker-pic">
                <h2>
                  {{ $route.query.title }} {{ $route?.query.tables }} ta stol
                </h2>
              </div>
            </div>
            <!-- @click="$refs.postPlaces.open('edit')" -->
            <div class="worker-action menu-action">
              <button class="yel-edit" >
                <img src="" alt="" />
              </button>
              <button class="red-x" @click="$refs.removePlaces.open()">
                <img src="" alt="" />
              </button>
              <!-- @click="$refs.removePlaces.open()" -->
            </div>
          </div>
          <span class="linie"></span>
          <div class="menu-cards-wrapper">
            <div class="table-cards">
              <!-- <Table /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <PostPlaces ref="postPlaces" @end="clear" /> -->
    <!-- <RemovePlaces ref="removePlaces" @end="clear" /> -->
  </div>
</template>

<style lang="scss" scoped>

</style>
