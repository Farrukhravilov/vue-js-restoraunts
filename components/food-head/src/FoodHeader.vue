<template>
    <div>
        <div class="grid grid-rows-2 gap-[5px] grid-flow-col overflow-x-auto w-[99%]" style="scrollbar-color: #015812 #fff; scrollbar-width: thin; --webkit-scrollbar-width: 6px;">
            <div class="" v-for="item in 10" :key="item">
                <div class="flex items-center justify-between w-full">
                    <p class="font-sitara text-[20px] font-normal leading-[32.41px] text-[#015812]" >jigar shashlik </p> <span class="font-sitara text-[20px] font-normal leading-[32.41px] text-right text-[#015812] " >25 000 so’m</span>
                </div>
                <div class="relative w-full">
                    <div class="number w-[66px] h-[50px] bg-[#015812] flex items-center justify-center absolute right-[0] ">
                        <span class="font-sitara text-[24px] font-normal leading-[29.05px] text-[#fff]" >2</span>
                    </div>
                    <img src="/src/assets/images/png/image 2 (1).png" alt="" class="w-full h-[220px]" >
                    <div class="flex items-center justify-around gap-[5px] w-[100%] absolute bottom-[10px] justify-center">
                        <button class="w-[35%] h-[37px] bg-[#fff]/60 flex items-center justify-center rounded-[5px]" >
                            <img src="/src/assets/images/svg/Vector (25).svg" alt="">
                        </button>
                        <button class="w-[20%] h-[37px] bg-[#fff]/60 flex items-center justify-center rounded-[5px]" >
                            <img src="/src/assets/images/svg/Vector (26).svg" alt="">
                        </button>
                        <button class="w-[35%] h-[37px] bg-[#fff]/60 flex items-center justify-center rounded-[5px]" >
                            <img src="/src/assets/images/svg/Vector (27).svg" alt="">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

</script>


<style>

</style>
