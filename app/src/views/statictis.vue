<template>
  <div class="w-full h-[84vh] flex flex-col items-center p-4 bg-gray-100">
    <!-- Кнопки управления -->
    <div class="flex justify-between items-center w-full mb-6">
      <button @click="prevMonth" class="px-4 py-2 border rounded-lg font-inter text-[16px] text-[#015812] font-medium leading-[12.1px] hover:bg-gray-300 transition">Prev</button>
      <div class="text-center font-bold text-xl">
        <span class="font-inter text-[30px] text-[#015812] font-medium leading-[12.1px]">
          {{ currentMonthName }} {{ currentYear }}
        </span>
      </div>
      <button @click="nextMonth" class="px-4 py-2 border rounded-lg font-inter text-[16px] text-[#015812] font-medium leading-[12.1px] hover:bg-gray-300 transition">Next</button>
    </div>

    <!-- Кнопка "Сегодня" -->
    <button @click="goToToday" class="px-4 py-2 border rounded-lg font-inter text-[16px] text-[#015812] font-medium leading-[12.1px] hover:bg-blue-300 transition mb-4">Bugun</button>

    <!-- Кнопки выбора вида отображения -->
    <div class="mb-4 flex justify-center space-x-4">
      <button @click="setView('month')" class="px-4 py-2 border rounded-lg  font-inter text-[16px] text-[#015812] font-medium leading-[12.1px] hover:bg-gray-300 transition">oy</button>
      <button @click="setView('week')" class="px-4 py-2 border rounded-lg  font-inter text-[16px] text-[#015812] font-medium leading-[12.1px] hover:bg-gray-300 transition">hafta</button>
      <button @click="setView('day')" class="px-4 py-2 border rounded-lg  font-inter text-[16px] text-[#015812] font-medium leading-[12.1px] hover:bg-gray-300 transition">Kun</button>
    </div>

    <!-- Календарь -->
    <div v-if="currentView === 'month'" class="w-full h-full overflow-auto border border-[#015812] rounded-lg shadow-lg bg-white">
      <table class="w-full h-full border-collapse">
        <thead class="bg-gray-200">
          <tr>
            <th v-for="day in days" :key="day" class="py-2 border border-gray-300 text-center font-inter text-[16px] text-[#015812] font-medium leading-[12.1px] font-medium text-gray-700">
              {{ day }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(week, index) in monthGrid" :key="index">
            <td v-for="(day, idx) in week" :key="idx"
                :class="{'bg-[rgba(1,88,18,0.2)]': isToday(day), 'hover:bg-gray-100': day !== null, 'font-bold': isToday(day), 'cursor-pointer': day !== null}"
                class="py-4 border border-[#015812] text-center transition font-inter text-[16px] text-[#015812] font-medium leading-[12.1px]"
                @click="handleDayClick(day)">
              {{ day }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Логика для отображения недели и дня -->
    <div v-else-if="currentView === 'week'">
      <p>Week view content goes here</p>
    </div>
    <div v-else-if="currentView === 'day'">
      <p>Day view content goes here</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      currentView: 'month', // current view: 'month', 'week', or 'day'
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      monthGrid: [],
    };
  },
  computed: {
    currentYear() {
      return this.currentDate.getFullYear();
    },
    currentMonthName() {
      const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      return monthNames[this.currentDate.getMonth()];
    },
  },
  methods: {
    generateMonthGrid() {
      let daysInMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
      let firstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1).getDay();
      let grid = [];
      let week = new Array(7).fill(null);

      for (let day = 1; day <= daysInMonth; day++) {
        let currentDay = (firstDay + day - 1) % 7;
        week[currentDay] = day;
        if (currentDay === 6 || day === daysInMonth) {
          grid.push(week);
          week = new Array(7).fill(null);
        }
      }

      this.monthGrid = grid;
    },
    nextMonth() {
      this.currentDate.setMonth(this.currentDate.getMonth() + 1);
      this.generateMonthGrid();
    },
    prevMonth() {
      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
      this.generateMonthGrid();
    },
    goToToday() {
      this.currentDate = new Date();
      this.generateMonthGrid();
    },
    setView(view) {
      this.currentView = view;
    },
    isToday(day) {
      if (day === null) return false;
      const today = new Date();
      return today.getDate() === day &&
             today.getMonth() === this.currentDate.getMonth() &&
             today.getFullYear() === this.currentDate.getFullYear();
    },
    handleDayClick(day) {
      if (day !== null) {
        alert(`Вы выбрали ${day} ${this.currentMonthName} ${this.currentYear}`);
      }
    }
  },
  watch: {
    currentDate: "generateMonthGrid"
  },
  mounted() {
    this.generateMonthGrid();
  }
};
</script>

<style scoped>
/* Стили для календаря */
.table th,
.table td {
  transition: background-color 0.2s ease;
}
</style>
