<template>
  <div
    class="fixed bg-black bg-opacity-50 z-[99] inset-0 flex items-center justify-center"
  >
    <!-- Модальное окно -->
    <div
      class="w-[570px] h-[760px] bg-gray-100 rounded-lg shadow-lg w-80 p-6 relative"
    >
      <!-- Кнопка закрытия -->
      <button
        class="absolute w-[70px] h-[70px] hidden border border-[#015812] rounded-[8px] flex items-center justify-center top-[60px] bg-gray-100 left-[5px] text-gray-500 hover:text-gray-700 max-780:flex  max-480:w-[50px] max-480:h-[50px]"
      >
        <img src="/src/assets/images/svg/Vector (15).svg" alt="" />
      </button>
      <button
        class="flex items-center justify-center h-[70px] w-[70px] rounded-[3px] border border-[#015812] bg-gray-100 absolute right-[5px] top-[60px] hidden max-780:flex max-480:w-[50px] max-480:h-[50px]"
      >
        <img src="/src/assets/images/svg/Vector (28).svg" class="h-[40px]"  alt="" />
      </button>
      <!-- media -->
      <ButtonDownload />
      <button
        class="absolute w-[70px] h-[70px] border border-[#015812] rounded-[8px] flex items-center justify-center top-[-2px] bg-gray-100 right-[-90px] text-gray-500 hover:text-gray-700 max-780:hidden"
      >
        <img src="/src/assets/images/svg/Vector (15).svg" alt="" />
      </button>
      <img
        src="/src/assets/images/png/worker-info-top-desig.png"
        class="w-full absolute top-[0] left-[0]"
        alt="asdasd"
      />
      <div class="flex align-center justify-center mt-[110px]">
        <img
          src="/src/assets/images/png/image 4 (2).png"
          class="h-[230px]"
          alt=""
        />
      </div>
      <div>
        <h5
          class="font-inter text-[40px] font-semibold leading-[48.41px] text-center text-[#015812] mt-[20px] max-480:text-[30px]"
        >
          Olimjon Saidov
        </h5>
        <div
          class="qr-code-generator flex items-center justify-center h-[200px] mt-[20px]"
        >
          <QRCodeVue3
            class="bg-transparent w-[250px] h-[250px] max-480:w-[150px] max-480:h-[150px]"
            value="33"
            :width="250"
            :height="250"
            :dotsOptions="{
              type: 'square',
              // color: 'transparent',
              gradient: {
                type: 'square',
                rotation: 0,
                colorStops: [
                  { offset: 0, color: '#000000' },
                  { offset: 1, color: '#000000' },
                ],
              },
            }"
          />
        </div>
      </div>
      <img
        src="/src/assets/images/png/worker-info-bottom-desig.png"
        class="w-full absolute bottom-[0] left-[0]"
        alt="asdasd"
      />
    </div>
  </div>
</template>

<script>
import QRCodeVue3 from "qrcode-vue3";
import ButtonDownload from "button-download/src/ButtonDownload.vue";
export default {
  name: "QRCodeVue3Example",
  components: {
    QRCodeVue3,
    ButtonDownload,
  },
};
</script>

<style scoped></style>
