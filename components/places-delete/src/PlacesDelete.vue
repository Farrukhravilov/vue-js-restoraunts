<template>
  <div>
    <ModalDelete/>
    <!-- <div
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div
        class="w-[570px] h-[760px] bg-white w-[350px] p-6 rounded-lg shadow-md"
      >
        <div class="text-center">
          <h1
            class="font-inter text-[40px] font-semibold leading-[48.41px] text-center text-[#830303] mb-2"
          >
          Diqqat!!! <br>
           Joylardan olib tashlashni istaysizmi?
          </h1>
        </div>
        <button
          class="relative w-[70px] h-[70px] border border-[#015812] rounded-[8px] flex items-center justify-center top-[-180px] bg-gray-100 right-[-580px] text-gray-500 hover:text-gray-700"
        >
          <img src="/src/assets/images/svg/Vector (15).svg" alt="" />
        </button>
        <div>
          <h5
            class="font-inter text-[40px] font-semibold leading-[48.41px] text-center text-[#015812] mt-[100px]"
          >
          Hovli
          </h5>
        </div>
        <div class="flex justify-around mt-[250px]">
          <button
            class="bg-[#83030380] bg-opacity-50 text-[#fff] w-[160px] h-[70px] py-2 px-4 rounded-lg text-[40px] font-semibold leading-[48.41px] text-center"
          >
            Yo'q
          </button>
          <button
            class="text-[#fff] w-[160px] h-[70px] bg-[#01581280] bg-opacity-50 py-2 px-4 rounded-lg text-[40px] font-semibold leading-[48.41px] text-center"
          >
            Ha
          </button>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>

import { ref } from "vue";
import ModalDelete from "menu-delete/src/ModalDelete.vue";
export default {
  components: {
    ModalDelete,
  }
}
</script>

<style scoped></style>
