<template>
  <ModalAll ref="postPlaces">
    <!-- class="fixed bg-black bg-opacity-50 z-[99] inset-0 flex items-center justify-center" -->

    <template #header>
      <div class="flex items-center justify-between">
        <h2
          class="font-semibold text-[40px] mt-[18px] text-center text-[#015812] max-780:mt-[0px] max-520:text-[30px] max-460:text-[20px]"
        >
          {{
            request == "updatePlaces"
              ? "Joy turini tahrirlash"
              : "Yangi joy turi qo'shish"
          }}
        </h2>
        <button
          class="w-[70px] h-[70px] border hidden border-[#015812] rounded-[8px] flex items-center justify-center bg-gray-100 text-gray-500 hover:text-gray-700 max-780:flex max-780:w-[55px] h-[45px]"
        >
          <img src="/src/assets/images/svg/Vector (15).svg" alt="" />
        </button>
      </div>
    </template>
    <template #body>
      <form @submit.prevent="Submit">
        <!-- Текстовое поле -->
        <div class="mb-4 p-[10px] mt-[20px]">
          <label
            for="foodName"
            class="block font-medium text-[20px] text-[#015812]"
            >Nomi</label
          >
          <input
            type="text"
            v-model="placesData.title"
            class="border mt-[22px] border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
          />
        </div>
        <div class="mb-4 p-[10px] mt-[20px]">
          <label
            for="foodName"
            class="block font-medium text-[20px] text-[#015812]"
            >Stoll soni</label
          >
          <input
            type="number"
            v-model="placesData.tables"
            class="border mt-[22px] border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
          />
        </div>
        <!-- Кнопка подтверждения -->
        <div class="flex items-center justify-center mt-[280px]">
          <button
            class="w-full max-w-[343px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px]"
          >
            Tasdiqlash
          </button>
          <!-- <Button>
          asdasdsad
        </Button> -->
        </div>
      </form>
    </template>
    <template #footer>
      <button
        class="absolute w-[70px] h-[70px] border border-[#015812] rounded-[8px] flex items-center justify-center top-[-2px] bg-gray-100 right-[-100px] text-gray-500 hover:text-gray-700 max-780:hidden"
      >
        <img src="/src/assets/images/svg/Vector (15).svg" alt="" />
      </button>
    </template>
  </ModalAll>
  <!-- <div
    class="fixed bg-black bg-opacity-50 z-[99] inset-0 flex items-center justify-center"
  >
    <div
      class="w-[570px] h-[760px] bg-gray-100 rounded-lg shadow-lg w-80 p-6 relative"
    >
      <button
        class="absolute w-[70px] h-[70px] border border-[#015812] rounded-[8px] flex items-center justify-center top-[-2px] bg-gray-100 right-[-100px] text-gray-500 hover:text-gray-700 max-780:hidden"
      >
        <img src="/src/assets/images/svg/Vector (15).svg" alt="" />
      </button>
      <div class="flex items-center justify-between">
        <h2
          class="font-semibold text-[40px] mt-[18px] text-center text-[#015812] max-780:mt-[0px] max-520:text-[30px] max-460:text-[20px]"
        >
          {{
            request == "updatePlaces"
              ? "Joy turini tahrirlash"
              : "Yangi joy turi qo'shish"
          }}
        </h2>
        <button
          class="w-[70px] h-[70px] border hidden border-[#015812] rounded-[8px] flex items-center justify-center bg-gray-100 text-gray-500 hover:text-gray-700 max-780:flex max-780:w-[55px] h-[45px]"
        >
          <img src="/src/assets/images/svg/Vector (15).svg" alt="" />
        </button>
      </div>
      <form @submit.prevent="Submit">
        <div class="mb-4 p-[10px] mt-[20px]">
          <label
            for="foodName"
            class="block font-medium text-[20px] text-[#015812]"
            >Nomi</label
          >
          <input
            type="text"
            v-model="placesData.title"
            class="border mt-[22px] border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
          />
        </div>
        <div class="mb-4 p-[10px] mt-[20px]">
          <label
            for="foodName"
            class="block font-medium text-[20px] text-[#015812]"
            >Stoll soni</label
          >
          <input
            type="number"
            v-model="placesData.tables"
            class="border mt-[22px] border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
          />
        </div>
        <div class="flex items-center justify-center mt-[280px]">
          <button
            class="w-full max-w-[343px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px]"
          >
            Tasdiqlash
          </button>
        </div>
      </form>
    </div>
  </div> -->
</template>

<script>
import api from "@/server/api";
import ModalAll from "modal-all/src/ModalAll.vue";
export default {
  data() {
    return {
      placesData: {
        title: "",
        tables: "",
      },
      request: "createPlaces",
    };
  },
  components: {
    ModalAll,
  },
  methods: {
    open(type) {
      if (type == "edit") {
        this.placesData = {
          id: this.$route.query.place_id,
          title: this.$route.query.title,
          tables: this.$route.query.tables,
        };
        this.request = "updatePlaces";
      } else {
        this.placesData = {
          title: "",
          tables: "",
        };
        this.request = "createPlaces";
      }
      this.$refs.postPlaces.openModal();
    },
    Submit() {
      api[this.request](this.placesData).then((res) => {
        this.$emit("end");
        this.$refs.postPlaces.closeModal();
        this.$router.replace({
          path: "/placesAndTables",
          query: {
            place_id: this.placesData.id,
            title: this.placesData.title,
            tables: this.placesData.tables,
          },
        });
      });
    },
  },
};
</script>

<style scoped></style>
