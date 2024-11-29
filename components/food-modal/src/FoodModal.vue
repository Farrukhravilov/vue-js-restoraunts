<template>
  <div
    class="fixed bg-black bg-opacity-50 z-[99] inset-0 flex items-center justify-center"
  >
    <div
      class="bg-white w-[610px] fixed h-[884px] p-6 rounded-lg shadow-md relative max-1600:h-[823px]"
    >
      <!-- Header -->
      <div class="text-center mb-4">
        <h1 class="text-[40px] font-bold max-630:text-[30px] max-520:text-[20px]">1 - zal, 7 - stol</h1>
      </div>

      <!-- Divider -->
      <div class="border-t-2 border-gray-300 my-4"></div>

      <!-- Content -->
      <div class="space-y-4">
        <div class="flex justify-between" v-for="item in 4" :key="item">
          <span>Taom:</span>
          <span>Miqdor</span>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t-2 border-gray-300 my-4"></div>

      <!-- Footer -->
      <div class="text-center">
        <p class="text-gray-700">Hodim:</p>
        <h2
          class="font-jaldi text-[40px] font-normal leading-[67.6px] tracking-[5px] text-[#00000] max-630:text-[30px] max-520:text-[23px] max-460:text-[18px] max-370:text-[16px]"
        >
          Nurislombek Baxtiyorov
        </h2>
      </div>
      <div class="items-center flex end justify-end h-[100%]">
        <button class="flex justify-end">
          <img src="/src/assets/images/svg/print.svg" alt="" />
        </button>
      </div>
    </div>
    <button class="absolute right-[550px] text-[40px] top-[73px]  max-1600:hidden">X</button>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
