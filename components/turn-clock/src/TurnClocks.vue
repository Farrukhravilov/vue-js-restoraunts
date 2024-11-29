<template>
  <div class="">
    <TurnClock
      theme="separate"
      background="green"
      bgColor="rgba(1, 88, 18, 1)"
    />
  </div>
  <template />
</template>
<script>
import TurnClock from "vue-turn-clock";
export default {
  components: {
    TurnClock,
  },
  data() {
    return {
      username: "",
      time: new Date(), // Передавайте текущую дату или нужное время
    };
  },
  computed: {
    filteredTime() {
      const now = new Date();
      const isToday =
        this.time.getDate() === now.getDate() &&
        this.time.getMonth() === now.getMonth() &&
        this.time.getFullYear() === now.getFullYear();

      // Если текущая дата — сегодня, вернем null (или другое значение)
      return isToday ? null : this.time;
    },
  },
};
</script>

<style lang="scss">




.count-item-view .single {
    // width: 200px !important;
    // height: 300px !important;
  }
  
  .count-item-view::after {
    content: "";
    // display: none !important;
  }
  
  .count-item-view.single {
    &:nth-child(1) {
      display: none;
    }
  
    &:nth-child(2) {
      display: none;
    }
  
    &:nth-child(5) {
      margin-right: 50px;
    }
  
    &:nth-child(10) {
      margin-left: 50px;
    }
  }
  
  .count-clock-time-unit {
    display: none;
  }
  
  .count-item-view {
    width: 130px !important;
    height: 220px !important;
    background-color: green !important;
    border-radius: 20px !important;
  
    * {
      font-size: 100px !important;
  
      &::after {
        display: none;
      }
  
      font-weight: 600;
      font-family: "Inter", sans-serif;
    }
  }
  
  .count-item-view .count-clock-halving-line {
    display: none;
  }
  
  .count-item-view .count-clock-next .count-clock-down {
    font-size: 100px !important;
    color: #fff;
    padding: 0 !important;
    // @apply bg-primary;
  }
  .animation {
    // @apply bg-primary;
  }
  .count-item-view .count-clock-up,
  .count-item-view .count-clock-down {
    padding: 20px 10px 0 !important;
    // @apply bg-primary;
  }
  
  .count-down-view {
    height: 150px;
    // @apply bg-primary;
  
    .count-clock-current {
    //   @apply bg-primary;
    }
  }
  
  .count-item-view::before {
    content: "";
    display: none;
  }
  
  .count-item-view .count-clock-current .count-clock-up {
    font-size: 100px !important;
    // color: blue !important;
    margin-top: 65px;
    height: 120px !important;
    // @apply bg-primary  !important;
  //   @media screen and (max-width: 450px) {
  //     .count-item-view {
  //       .count-clock-current {
  //         .count-clock-up {
  //           font-size: 55px !important;
  //           height: 100%;
  //         }
  //       }
  //     }
  //   }
  }
  
  .count-item-view .count-clock-up {
    margin-top: 65px;
  }
  
  .count-item-view .count-clock-up {
    font-size: 100px !important;
  }
  
  .count-down-view {
    gap: 10px;
  }
</style>
