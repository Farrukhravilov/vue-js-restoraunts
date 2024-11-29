<script>
// import Button from "../../ui/components/button/src/button.vue";
import HallBtn from "hall-btn/src/HallBtn.vue";
import HallTy from "hall-ty/src/HallTy.vue";
import HallOne from "hall-one/src/HallOne.vue";
export default {
  components: {
    HallBtn,
    HallTy,
    HallOne,
    // Button,
  },
  methods: {},
};
</script>

<template>
  <div class="p-6 space-y-6 bg-gray-100 max-780:p-2">
  <Button :disabled="disabled" v-if="true"></Button>
  <button class="w-full max-w-[380px] bg-[#79a684] py-2 px-4 text-[#fff] rounded-[8px] text-[40px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] font-inter font-normal leading-[48.41px]  mt-[20px] hover:bg-[#fff] transition-all duration-300 hover:text-[#015812] hover:opacity-80 " >Olib ketish</button>
  <h1 class="font-jaldi font-normal leading-[54.08px] tracking-[5px] text-[32px] text-[#015812] " >1 - zal</h1>
  <HallOne/>
  <!-- <div class="wrp flex flex-wrap gap-[40px] ">
      <div class="relative">
        <img src="/src/assets/images/png/stol (1).png" alt="">
        <div class="absolute top-[30px] left-0 flex items-center justify-center  w-[160px] h-[100px] bg-[#79a684] border border-[#000] text-[32px]  ">
            <span class="text-[#fff] font-jaldi text-2xl font-normal leading-[54.08px] tracking-[5px]" >3 - Stol</span>
        </div>
      </div>
      <div class="relative">
        <img src="/src/assets/images/png/stol (1).png" alt="">
        <div class="absolute top-[30px] left-0 flex items-center justify-center  w-[160px] h-[100px] bg-[#79a684] border border-[#000] text-[32px]  ">
            <span class="text-[#fff] font-jaldi text-2xl font-normal leading-[54.08px] tracking-[5px]" >3 - Stol</span>
        </div>
      </div>
      <div class="relative">
        <img src="/src/assets/images/png/stol (1).png" alt="">
        <div class="absolute top-[30px] left-0 flex items-center justify-center  w-[160px] h-[100px] bg-[#79a684] border border-[#000] text-[32px]  ">
            <span class="text-[#fff] font-jaldi text-2xl font-normal leading-[54.08px] tracking-[5px]" >3 - Stol</span>
        </div>
      </div>
      <div class="relative">
        <img src="/src/assets/images/png/stol (1).png" alt="">
        <div class="absolute top-[30px] left-0 flex items-center justify-center  w-[160px] h-[100px] bg-[#79a684] border border-[#000] text-[32px]  ">
            <span class="text-[#fff] font-jaldi text-2xl font-normal leading-[54.08px] tracking-[5px]" >3 - Stol</span>
        </div>
      </div>
      <div class="relative">
        <img src="/src/assets/images/png/stol (1).png" alt="">
        <div class="absolute top-[30px] left-0 flex items-center justify-center  w-[160px] h-[100px] bg-[#79a684] border border-[#000] text-[32px]  ">
            <span class="text-[#fff] font-jaldi text-2xl font-normal leading-[54.08px] tracking-[5px]" >3 - Stol</span>
        </div>
      </div>
      <div class="relative">
        <img src="/src/assets/images/png/stol (1).png" alt="">
        <div class="absolute top-[30px] left-0 flex items-center justify-center  w-[160px] h-[100px] bg-[#79a684] border border-[#000] text-[32px]  ">
            <span class="text-[#fff] font-jaldi text-2xl font-normal leading-[54.08px] tracking-[5px]" >3 - Stol</span>
        </div>
      </div>
      <div class="relative">
        <img src="/src/assets/images/png/stol (1).png" alt="">
        <div class="absolute top-[30px] left-0 flex items-center justify-center  w-[160px] h-[100px] bg-[#79a684] border border-[#000] text-[32px]  ">
            <span class="text-[#fff] font-jaldi text-2xl font-normal leading-[54.08px] tracking-[5px]" >3 - Stol</span>
        </div>
      </div>
      <div class="relative">
        <img src="/src/assets/images/png/stol (1).png" alt="">
        <div class="absolute top-[30px] left-0 flex items-center justify-center  w-[160px] h-[100px] bg-[#79a684] border border-[#000] text-[32px]  ">
            <span class="text-[#fff] font-jaldi text-2xl font-normal leading-[54.08px] tracking-[5px]" >3 - Stol</span>
        </div>
      </div>
      <div class="relative">
        <img src="/src/assets/images/png/stol (1).png" alt="">
        <div class="absolute top-[30px] left-0 flex items-center justify-center  w-[160px] h-[100px] bg-[#79a684] border border-[#000] text-[32px]  ">
            <span class="text-[#fff] font-jaldi text-2xl font-normal leading-[54.08px] tracking-[5px]" >3 - Stol</span>
        </div>
      </div>
      <div class="relative">
        <img src="/src/assets/images/png/stol (1).png" alt="">
        <div class="absolute top-[30px] left-0 flex items-center justify-center  w-[160px] h-[100px] bg-[#79a684] border border-[#000] text-[32px]  ">
            <span class="text-[#fff] font-jaldi text-2xl font-normal leading-[54.08px] tracking-[5px]" >3 - Stol</span>
        </div>
      </div>
      <div class="relative">
        <img src="/src/assets/images/png/stol (1).png" alt="">
        <div class="absolute top-[30px] left-0 flex items-center justify-center  w-[160px] h-[100px] bg-[#79a684] border border-[#000] text-[32px]  ">
            <span class="text-[#fff] font-jaldi text-2xl font-normal leading-[54.08px] tracking-[5px]" >3 - Stol</span>
        </div>
      </div>
  </div> -->
  <h1 class="font-jaldi font-normal leading-[54.08px] tracking-[5px] text-[32px] text-[#015812] " >2 - zal</h1>
  <HallTy/>
  
</div>
</template>

<style></style>
