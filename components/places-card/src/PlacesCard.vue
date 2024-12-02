<template>
  <!-- <div
    class="w-full max-w-[363px] h-[143px] border border-[#015812] rounded-[8px] bg-gray-200 "
    v-for="item in 3" :key="item">
    <div class="flex mt-[10px]">
      <div
        class="font-inter font-semibold text-[26px] leading-[29.05px] mt-[15px] flex flex-col w-[100%] items-center justify-center gap-[25px] max-370:mt-[5px]"
      >
        <div
          class="text-[22px] tracking-wide text-sm text-indigo-500 font-semibold text-[#015812]"
        >
          <span class="text-[#015812] text-[16px]"> 1 - zall </span>
        </div>
        <span class="text-[#015812] text-[16px]">17 ta stoll</span>
      </div>
    </div>
  </div> -->
  <div class="container">
    <div
      class="slot-wrapper"
      v-for="(tab, index) in tabs"
      :key="index"
      :style="getWidthStyle(tabs.length)"
    >
      <slot :name="'header' + tab"></slot>
      <slot :name="'body' + tab" />
      <slot :name="'footer' + tab" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tabs: {
      type: Array,
      Required: true,
      default: () => ["Tab 1"],
    },
    borderWidth: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    getWidthStyle(slotsCount) {
      if (slotsCount === 1) {
        return {
          width: `calc(100% - ${this.borderWidth * 2}px)`,
          border: `${this.borderWidth}px solid #015812`,
        };
      } else if (slotsCount === 2) {
        return {
          width: `calc(50% - ${this.borderWidth * 2}px)`,
          border: `${this.borderWidth}px solid ##015812`,
        };
      } else if (slotsCount === 3) {
        return {
          width: `calc(33.33% - ${this.borderWidth * 2}px)`,
          border: `${this.borderWidth}px solid ##015812`,
        };
      }
      return {
        width: `calc(${100 / slotsCount}% - ${this.borderWidth * 2}px)`,
        border: `${this.borderWidth}px solid #015812`,
      };
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
.slot-wrapper {
  /* display: flex; */
  justify-content: center;
  align-items: center;
  padding: 10px;
}
</style>
