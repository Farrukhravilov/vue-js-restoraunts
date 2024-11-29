<template>
  <div class="border border-[#015812] w-full rounded-[10px] h-[80vh]">
    <div class="bg-white w-full p-6 rounded-lg">
      <!-- Header -->
      <div
        class="text-[24px] font-bold text-[#015812] border-b border-[#015812] flex items-center justify-between pb-2 mb-4"
      >
        <button>
          <img src="/src/assets/images/svg/Vector (18).svg" alt="" />
        </button>
        <div class="flex items-center gap-[12px]">
          <img src="/src/assets/images/svg/image 4.svg" alt="" />
          <span class="md:text-[20px] max-w-[745px]:text-[14px]"> Olimjon Saidov ko’rsatkichlari </span>
        </div>
        <div class="flex gap-[41px] max-w-[745px]:gap-[30px]">
              <button>
                <img src="/src/assets/images/svg/Vector (22).svg" alt="" />
              </button>
              <button>
                <img src="/src/assets/images/svg/Vector (24).svg" alt="" />
              </button>
              <button>
                <img src="/src/assets/images/svg/wpforms.svg" alt="" />
              </button>
        </div>
      </div>

      <!-- Table -->
      <div class="overflow-auto w-full ">
        <table class="w-full border-collapse text-sm">
          <thead class="bg-[#015812]/50 text-[#015812]">
            <tr>
              <th
                class="py-2 px-4 font-inter text-[14px] font-medium leading-[16.94px] text-left"
              >
                Stol
              </th>
              <th
                class="py-2 px-4 font-inter text-[14px] font-medium leading-[16.94px] text-left"
              >
                sana
              </th>
              <th
                class="py-2 px-4 font-inter text-[14px] font-medium leading-[16.94px] text-left"
              >
                summa
              </th>
            </tr>
          </thead>
          <tbody v-for="item in 8" :key="item" class="w-full">
            <tr class="border-b border-[#015812]">
              <td
                class="py-2 px-4 font-jaldi font-normal leading-[33.8px] tracking-[5px] text-[#015812] md:text-[20px] max-w-[740px]:text-[14px] whitespace-nowrap"
              >
                1 - zal, 7- stol
              </td>
              <td
                class="py-2 px-4 font-jaldi font-normal leading-[33.8px] tracking-[5px] text-[#015812] md:text-[20px] max-w-[740px]:text-[14px] whitespace-nowrap"
              >
                12.10.2024
              </td>
              <td
                class="py-2 px-4 font-jaldi font-normal leading-[33.8px] tracking-[5px] text-[#015812] md:text-[20px] max-w-[740px]:text-[14px] whitespace-nowrap"
              >
                150 000 so’m
                <button class="ml-[20px] w-[20px]">
                  <img
                    src="/src/assets/images/svg/Vector (19).svg"
                    alt="arrow right btn"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex items-center justify-end">
          <div class="p-4 space-y-4 w-full max-w-[550px]">
            <!-- Заголовки -->
            <div class="grid grid-cols-4 gap-4 text-left font-medium">
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                Taom:
              </div>
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                Narxi
              </div>
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                Miqdor
              </div>
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                Jami:
              </div>
            </div>

            <!-- Первая строка -->
            <div class="grid grid-cols-4 gap-4 items-center">
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                taom 1
              </div>
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                10 000
              </div>
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                2
              </div>
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                20 000
              </div>
            </div>

            <!-- Вторая строка -->
            <div class="grid grid-cols-4 gap-4 items-center">
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                taom 2
              </div>
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                13 000
              </div>
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                3
              </div>
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                39 000
              </div>
            </div>

            <!-- Третья строка -->
            <div class="grid grid-cols-4 gap-4 items-center">
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                taom 3
              </div>
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                10 000
              </div>
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                5
              </div>
              <div
                class="font-sitara text-[15px] font-normal leading-[24.31px] text-[#015812]"
              >
                50 000
              </div>
            </div>

            <!-- Синяя кнопка -->
          </div>
        </div>
      </div>

      <!-- Add Button -->
      <!-- <div class="mt-[156px] flex justify-end">
        <button
          class="w-full h-[50px] max-w-[393px] bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px]"
        >
          Tasdiqlash
        </button>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rows: [
        {
          title: "1 - zal, 7- stol",
          date: "12.10.2024",
          amount: "150 000 so’m",
          client: "Иван Иванов",
          contact: "+998 90 123 45 67",
          comments: "Предоплата внесена.",
          isShown: false, // Управляет видимостью
        },
        {
          title: "2 - zal, 8- stol",
          date: "15.10.2024",
          amount: "200 000 so’m",
          client: "Мария Смирнова",
          contact: "+998 91 987 65 43",
          comments: "Оплачено полностью.",
          isShown: false,
        },
        {
          title: "3 - zal, 5- stol",
          date: "18.10.2024",
          amount: "180 000 so’m",
          client: "Олег Петров",
          contact: "+998 93 111 22 33",
          comments: "Без предоплаты.",
          isShown: false,
        },
      ],
    };
  },
//   methods: {
//     toggleAccordion(index) {
//       // Сбрасываем все `isShown`, кроме выбранного
//       this.rows = this.rows.map((row, i) => ({
//         ...row,
//         isShown: i === index ? !row.isShown : false,
//       }));
//     },
//   },
};
</script>

<style>
/* Для плавного открытия/закрытия */
tr[style*="display: none"] {
  display: table-row !important;
  opacity: 0;
  height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}
tr[style*="display: block"] {
  display: table-row !important;
  opacity: 1;
  height: auto;
  transition: all 0.3s ease-in-out;
}
</style>
