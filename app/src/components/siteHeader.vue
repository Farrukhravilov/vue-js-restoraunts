<script>
import store from "@/store/index";
// import UiClock from "@/components/UiClock.vue";
// import _imports_0 from "@/assets/images/svg/menu-burger.svg";
export default {
  components: {},
  data() {
    return {
      store: store,
    };
  },
};
</script>

<template>
  <header>
    <div class="pb-[10px] pl-[20px] pt-[10px]">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-[20px]">
          <button
            class="hidden max-830:flex"
            @click="store.state.barShow = !store.state.barShow"
          >
            <!-- Menu -->
            <img class="w-[50px] h-[50px]" src="@/assets/images/svg/menu-burger.svg" alt="" />
          </button>
          <h2 class="border border-[#015812] text-[#015812] text-[24px]">
            logo
          </h2>
        </div>
        <div class="flex items-center gap-[20px] mr-[20px]">
          <router-link to="/profil">
            <button
              class="border border-[#015812] flex items-center justify-center w-[50px] h-[50px] rounded-[5px] bg-gray-200"
            >
              <img src="@/assets/images/svg/emp.svg" alt="" />
            </button>
          </router-link>
          <router-link to="/login">
            <button
              class="border border-[#015812] flex items-center justify-center w-[50px] h-[50px] rounded-[5px] bg-gray-200"
            >
              <img src="@/assets/images/svg/exit.svg" alt="" />
            </button>
          </router-link>
        </div>
      </div>
      <div class="logo logo-media">
        <!-- <img src="/Logo2.png" alt="" /> -->
      </div>
      <!-- <TurnClock :startTime="startTime" theme="combine" bgColor="rgba(1, 88, 18, 1)" /> -->
    </div>
  </header>
</template>
