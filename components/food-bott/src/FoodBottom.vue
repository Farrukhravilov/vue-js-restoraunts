<template>
  <div
    class="flex gap-[9px] items-center overflow-x-auto"
    style="
      scrollbar-color: #015812 #fff;
      scrollbar-width: thin;
      --webkit-scrollbar-width: 6px;
    "
  >
    <div class="" v-for="item in 10" :key="item">
      <div class="flex items-center justify-between">
        <p
          class="font-sitara text-[20px] font-normal leading-[32.41px] text-[#015812]"
        >
          Qora joy
        </p>
        <span
          class="font-sitara text-[20px] font-normal leading-[32.41px] text-right text-[#015812]"
          >5 000 so’m</span
        >
      </div>
      <div class="relative w-[292px]">
        <div
          class="number w-[66px] h-[50px] bg-[#015812] flex items-center justify-center absolute right-[0]"
        >
          <span
            class="font-sitara text-[24px] font-normal leading-[29.05px] text-[#fff]"
            >2</span
          >
        </div>
        <img src="/src/assets/images/png/image 3 (1).png" alt="" />
        <div
          class="flex items-center gap-[5px] absolute top-[152px] left-[5px]"
        >
          <button
            class="w-[103px] h-[37px] bg-[#fff]/60 flex items-center justify-center"
          >
            <img src="/src/assets/images/svg/Vector (25).svg" alt="" />
          </button>
          <button
            class="w-[61px] h-[37px] bg-[#fff]/60 flex items-center justify-center"
          >
            <img src="/src/assets/images/svg/Vector (26).svg" alt="" />
          </button>
          <button
            class="w-[103px] h-[37px] bg-[#fff]/60 flex items-center justify-center"
          >
            <img src="/src/assets/images/svg/Vector (27).svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style></style>
