<template>
  <div class="border border-[#015812] rounded-[10px] h-[80vh]">
    <div class="bg-white w-full max-w-4xl rounded-lg md:p-6 max-w-[740px]:p-3">
      <!-- Header -->
      <div
        class="font-bold text-[#015812] pb-2 mb-4 flex align-center items-center p-5 justify-between md:text-[24px] max-w-[740px]:text-[19px]"
      >
        Svet harajatlari
        <button
          class="border border-[#d3b002] w-[50px] h-[50px] bg-[#d3b002]/10 flex items-center justify-center rounded-[3px]"
        >
          <img src="/src/assets/images/svg/Vector (20).svg" alt="" />
        </button>
      </div>

      <!-- Table -->
      <div class="overflow-auto">
        <table class="w-full border-collapse text-sm">
          <thead class="bg-[#015812]/50 text-[#015812]">
            <tr>
              <th class="py-2 px-4 font-inter text-[14px] font-medium leading-[16.94px] text-left">Stol</th>
              <th class="py-2 px-4 font-inter text-[14px] font-medium leading-[16.94px] text-left">sana</th>
              <th class="py-2 px-4 font-inter text-[14px] font-medium leading-[16.94px] text-left">summa</th>
            </tr>
          </thead>
          <tbody>
            <!-- Row Template -->
            <tr
              v-for="(item, index) in transactions"
              :key="index"
              class="border-b border-[#015812] sm:overflow-visible"
            >
              <td
              class="py-2 px-4 font-jaldi font-normal leading-[33.8px] tracking-[5px] text-[#015812]  md:text-[20px] max-w-[740px]:text-[14px] whitespace-nowrap "
              >
                {{ item.kirim }}
              </td>
              <td
                class="py-2 px-4 font-jaldi font-normal leading-[33.8px] tracking-[5px] text-[#015812] md:text-[20px] max-w-[740px]:text-[14px] whitespace-nowrap "
              >
                {{ item.date }}
              </td>
              <td
                class="py-2 px-4 font-jaldi font-normal leading-[33.8px] tracking-[5px] text-[#015812] flex align-center md:text-[20px] max-w-[740px]:text-[14px] whitespace-nowrap "
              >
                {{ item.amount }}
                <button class="ml-[20px] w-[20px]">
                  <img
                    src="/src/assets/images/svg/Vector (19).svg"
                    alt="arrow right btn"
                  />
                </button>
              </td>
            </tr>
            <!-- <tr class="border-b border-[#015812]">
              <td
                class="py-2 px-4 font-jaldi text-[20px] font-normal leading-[33.8px] tracking-[5px] text-[#015812] text-[18px]"
              >
                Kirim
              </td>
              <td
                class="py-2 px-4 font-jaldi text-[20px] font-normal leading-[33.8px] tracking-[5px] text-[#015812] text-[18px]"
              >
                12.10.2024
              </td>
              <td
                class="py-2 px-4 font-jaldi text-[20px] font-normal leading-[33.8px] tracking-[5px] text-[#015812] text-[18px] flex align-center"
              >
                150 000 so’m
                <button class="ml-[20px]">
                  <img
                    src="/src/assets/images/svg/Vector (19).svg"
                    alt="arrow right btn"
                  />
                </button>
              </td>
            </tr> -->
          </tbody>
        </table>
        <h5 class="text-[#015812] text-right py-2 px-4 font-jaldi font-normal leading-[33.8px] tracking-[5px] text-[#015812] md:text-[24px] max-w-[740px]:text-[16px] leading-[22.8px] tracking-[2px]">
          1 - zal, 7- stol, hodim: Nurislombek Baxtiyorov
        </h5>
      </div>

      <!-- Add Button -->
      <div class="flex justify-end">
        <button
          class="w-full h-[50px] max-w-[393px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px]"
        >
          Tasdiqlash
        </button>
        <!-- <Button/> -->
      </div>
    </div>
  </div>
</template>

<script>
// import Button from "";

export default {
  components: {
    // Button,
  },
  data() {
    return {
      transactions: [
        { kirim: "Kirim", date: "12.10.2024", amount: "150 000 so’m" },
        { kirim: "Kirim", date: "13.10.2024", amount: "200 000 so’m" },
        { kirim: "Kirim", date: "14.10.2024", amount: "250 000 so’m" },
        { kirim: "Kirim", date: "15.10.2024", amount: "300 000 so’m" },
        { kirim: "Kirim", date: "16.10.2024", amount: "350 000 so’m" },
        { kirim: "Kirim", date: "17.10.2024", amount: "400 000 so’m" },
        { kirim: "Kirim", date: "17.10.2024", amount: "400 000 so’m" },
        { kirim: "Kirim", date: "17.10.2024", amount: "400 000 so’m" },
      ],
    };
  },
};
</script>

<style></style>
