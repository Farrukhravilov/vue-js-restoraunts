<template>
  <div>
    <h2 class="text-[#015812] text-[32px] font-jaldi">Shashliklar - 15 xil</h2>
    <div class="cards">
        <FoodHeader/>
    </div>
    <h2 class="text-[#015812] text-[32px] font-jaldi ">Ichimliklar - 12 xil</h2>
    <div class="cards">
        <FoodBottom/>
    </div>
    <div class="flex  justify-end mt-[35px] mr-[20px]">
        <button class="w-[78px] h-[79px] bg-[#015812] rounded-[3px] flex items-center justify-center ">
            <svg baseProfile="tiny" height="100%" id="Layer_1" version="1.2" viewBox="0 0 24 24" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="#fff" d="M16.972,6.251c-0.967-0.538-2.185-0.188-2.72,0.777l-3.713,6.682l-2.125-2.125c-0.781-0.781-2.047-0.781-2.828,0  c-0.781,0.781-0.781,2.047,0,2.828l4,4C9.964,18.792,10.474,19,11,19c0.092,0,0.185-0.006,0.277-0.02  c0.621-0.087,1.166-0.46,1.471-1.009l5-9C18.285,8.005,17.937,6.788,16.972,6.251z"/></svg>
        </button>
    </div>
  </div>
</template>

<script>
import FoodBottom from "food-bott/src/FoodBottom.vue";
import FoodHeader from "food-head/src/FoodHeader.vue";
export default {
  components: {
    FoodBottom,
    FoodHeader,
  },
};
</script>

<style></style>
