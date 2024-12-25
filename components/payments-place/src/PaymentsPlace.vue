<template>
  <div
    class="border border-[#015812] w-[836px] rounded-[10px] h-[80vh] max-830:w-full"
  >
    <div class="header flex align-center justify-between p-[20px]">
      <div class="text-center mb-4">
        <h1 class="text-[24px] text-[#015812]">1 - buyurtma</h1>
      </div>
      <button
        class="w-[50px] border border-[#830303] rounded-[8px] flex items-center justify-center top-[-730px] bg-[#830303]/10 right-[635px] text-gray-500 hover:text-gray-700"
      >
        <img src="src/assets/images/svg/Vector (17).svg" alt="" />
      </button>
    </div>
    <div class="flex justify-center">
      <div class="w-[634px] bg-white p-6 rounded-lg w-96 max-630:w-full">
        <!-- <div class="text-center mb-4">
                  <h1 class="text-[40px] text-[#000000]">Hovli, 7-stol</h1>
              </div> -->
        <div class="flex justify-between text-sm mb-2">
          <span>Hodim:</span>
          <span class="font-medium">Nurislombek Baxtiyorov</span>
        </div>
        <div class="flex justify-between text-sm mb-4">
          <span>Sana:</span>
          <span class="font-medium">12.10.2024 15:30</span>
        </div>
        <div class="flex justify-center align-center">
          <span
            class="border border-[#000] w-[433px] h-[1px] mt-[16px] mb-[16px]"
          ></span>
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
            <tr class="" v-for="item in 3" :key="item">
              <td class="py-1 px-2">taom 1</td>
              <td class="text-right py-1 px-2">10,000</td>
              <td class="text-right py-1 px-2">2</td>
              <td class="text-right py-1 px-2">20,000</td>
            </tr>
          </tbody>
        </table>
        <div class="flex flex-col items-end mb-[17px] mt-4">
          <span class="w-[135px] h-[1px] border border-[#000]"></span>
          <span class="text-center mr-[15px]">109 000 so’m</span>
        </div>
        <div class="flex justify-between text-sm font-medium mb-2">
          <span>Xizmat ko'rsatish haqqi: 0%</span>
          <span>0 so'm</span>
        </div>
        <div
          class="text-center text-[40px] font-bold pt-2 text-[#015812] max-630:text-[30px] max-460:text-[25px]"
        >
          Jami: 109,000 so'm
        </div>
        <!-- <button
                  class="relative w-[70px] h-[70px] border border-[#015812] rounded-[8px] flex items-center justify-center top-[-730px] bg-gray-100 right-[635px] text-gray-500 hover:text-gray-700"
              >
                  <img src="/src/assets/images/svg/Vector (15).svg" alt="" />
              </button> -->
      </div>
    </div>
    <div class="flex justify-end h-[38%] items-end mr-[15px] max-1600:h-[20%]">
      <button>
        <img src="/src/assets/images/svg/Vector (16).svg" />
      </button>
    </div>
  </div>
</template>

<script></script>

<style></style>
