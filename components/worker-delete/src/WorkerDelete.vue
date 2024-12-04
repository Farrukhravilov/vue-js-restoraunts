<template>
  <div>
    <div
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 "
      @click="store.state.deleteUserModal = false"
    >
      <div
        class="w-[570px] h-[760px] bg-white w-[350px] p-6 rounded-lg shadow-md"
      >
        <div class="text-center max-830:flex items-center justify-between">
          <h1
            class="font-inter text-[40px] font-semibold leading-[48.41px] text-center text-[#830303] mb-2 max-830:text-left max-830:text-[30px] max-520:text-[20px] max-460:text-[15px]"
          >
            Diqqat!!! <br class="max-830:hidden" />
            hodimni lavoziminidan bo’shatishni istaysizmi?
          </h1>
          <button
            class="w-[70px] h-[70px] hidden border border-[#015812] rounded-[8px] flex items-center justify-center bg-gray-100 text-gray-500 hover:text-gray-700 max-830:flex max-830:w-[60px] max-830:h-[50px]"
          >
            <img src="/src/assets/images/svg/Vector (15).svg" alt="" />
          </button>
        </div>
        <button
          class="relative w-[70px] h-[70px] border border-[#015812] rounded-[8px] flex items-center justify-center top-[-180px] bg-gray-100 right-[-580px] text-gray-500 hover:text-gray-700 max-830:hidden"
        >
          <img src="/src/assets/images/svg/Vector (15).svg" alt="" />
        </button>
        <div class="flex align-center justify-center max-830:mt-[60px]">
          <img :src="workerInfDel.img" class="h-[230px]" alt="" />
        </div>
        <div>
          <h5
            class="font-inter text-[40px] font-semibold leading-[48.41px] text-center text-[#015812] mt-[20px] max-520:text-[30px]"
          >
            {{ workerInfDel.fullname }}
          </h5>
        </div>
        <div
          class="flex justify-around mt-[100px] max-830:mt-[0] max-830:h-[30%] max-830:items-end"
        >
          <ButtonNo @click="store.state.deleteUserModal = false" />
          <ButtonYes @click="deleteWorker()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonNo from "button-no/src/ButtonNo.vue";
import ButtonYes from "button-yes/src/ButtonYes.vue";
// import { toast } from 'vue3-toastify';
// import 'vue3-toastify/dist/index.css';

import store from "@/store";

import api from "@/server/api";
import { ref } from "vue";
export default {
  components: {
    ButtonNo,
    ButtonYes,
  },
  data() {
    return {
      store: store,
    };
  },
  methods: {
    successNoti() {
      toast("Hodim lavozimdan bo'shadi!", {
        theme: "auto",
        type: "success",
        dangerouslyHTMLString: true,
      });
    },

    deleteWorker() {
      api.deleteWorker(this.$route.query.id).then((res) => {
        console.log(res);
        store.state.deleteUserModal = false;
        window.location.href = "/workers";
      });
    },

    reloadFunc() {
      this.$router
        .push("/workers")
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  props: {
    workerInfDel: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
