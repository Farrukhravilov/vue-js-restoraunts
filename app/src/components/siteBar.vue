<script>
import store from "@/store";
export default {
  data() {
    return {
      store: store,
    };
  },
};
</script>

<template>
  <div
    class="flex flex-col w-36 h-[80vh] bg-green-50 border border-[#015812] rounded-[8px] ml-[10px]"
    :class="{ 'left-menu-active': store.state.barShow }"
  >
    <div class="p-[30px]">
      <div class="flex flex-col gap-[25px] items-center justify-center">
        <router-link
          to="/workers"
          class="flex flex-col items-center justify-center"
          :class="{
            active:
              $route.path == '/workers' ||
              $route.path == '/workerDetail' ||
              $route.path == '/addWorker' ||
              $route.path == '/editWorker',
          }"
        >
          <div class="flex flex-col gap-[13px] items-center justify-center">
            <img src="@/assets/images/svg/emp.svg" alt="" />
            <span
              class="font-inter text-[16px] text-[#015812] font-medium leading-[12.1px] text-center decoration-none"
              >Hodimlar</span
            >
          </div>
        </router-link>

        <router-link
          to="/statictics"
          class="flex flex-col gap-[13px] items-center justify-center"
          :class="{ active: $route.path == '/statictics' }"
        >
          <img src="@/assets/images/svg/info.svg" alt="" />
          <span
            class="font-inter text-[16px] text-[#015812] font-medium leading-[12.1px] text-center decoration-none"
            >Hisobotlar</span
          >
        </router-link>

        <router-link
          to="/Menu"
          class="flex flex-col gap-[13px] items-center justify-center"
          :class="{
            active:
              $route.path == '/menu' ||
              $route.path == '/MenuFoods' ||
              $route.path == '/editFood' ||
              $route.path == '/product',
          }"
        >
          <div class="flex flex-col gap-[13px] items-center justify-center">
            <img src="@/assets/images/svg/food-menu.svg" alt="" />
            <span
              class="font-inter text-[16px] text-[#015812] font-medium leading-[12.1px] text-center decoration-none"
              >Menu</span
            >
          </div>
        </router-link>

        <router-link
          class="flex flex-col gap-[13px] items-center justify-center"
          to="/places"
          :class="{
            active:
              $route.path == '/places' || $route.path == '/placesAndTables',
          }"
        >
          <div class="left-menu-item">
            <img src="@/assets/images/svg/event.svg" alt="" />
            <span
              class="font-inter text-[16px] text-[#015812] font-medium leading-[12.1px] text-center decoration-none"
              >Joylar</span
            >
          </div>
        </router-link>

        <router-link
          to="/kassa"
          class="flex flex-col gap-[13px] items-center justify-center"
          :class="{
            active: $route.path == '/kassa' || $route.path == '/kassaType',
          }"
        >
          <img src="@/assets/images/svg/kassa.svg" alt="" />
          <span
            class="font-inter text-[16px] text-[#015812] font-medium leading-[12.1px] text-center decoration-none"
            >Kassa</span
          >
        </router-link>

        <router-link
          to="/payments"
          class="flex flex-col gap-[13px] items-center justify-center"
          :class="{ active: $route.path == '/payments' }"
        >
          <img src="@/assets/images/svg/plus.svg" alt="" />
          <span
            class="font-inter text-[16px] text-[#015812] font-medium leading-[12.1px] text-center decoration-none"
            >To’lov</span
          >
        </router-link>
        <!-- expencee -->
        <router-link
          to="/expencee"
          class="flex flex-col gap-[13px] items-center justify-center"
          :class="{
            active: $route.path == '/expencee' || $route.path == '/expence',
          }"
        >
          <img src="@/assets/images/svg/minus.svg" alt="" />
          <span
            class="font-inter text-[16px] font-medium text-[#015812] leading-[12.1px] text-center decoration-none"
            >Chiqim</span
          >
        </router-link>

        <router-link
          to="/settings"
          class="flex flex-col gap-[13px] mt-[5px] items-center justify-center"
          :class="{ active: $route.path == '/settings' }"
        >
          <img src="@/assets/images/svg/settings.svg" alt="" />
          <span
            class="font-inter text-[16px] font-medium text-[#015812] leading-[12.1px] text-center decoration-none"
            >Sozlamalar</span
          >
        </router-link>

        <div
          class="flex flex-col gap-[13px] items-center justify-center"
          @click="exitFunc()"
        >
          <img src="@/assets/images/svg/exit.svg" alt="" />
          <span
            class="font-inter text-[16px] text-[#015812] font-medium leading-[12.1px] text-center decoration-none"
            >Hisobdan chiqish</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
