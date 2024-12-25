<script>
// import HelloWorld from "./components/HelloWorld.vue";
import AddItem from "add-items/src/AddItem.vue";
import CardInfo from "modal/src/CardInfo.vue";
import menuCard from "menu/src/menuCard.vue";
import ModalEdit from "menu-edit/src/ModalEdit.vue";
import TaomModal from "modal-taom/src/TaomModal.vue";
import ModalDelete from "menu-delete/src/ModalDelete.vue";
import PlacesDelete from "places-delete/src/PlacesDelete.vue";
import PlacesModal from "places-modal/src/PlacesModal.vue";
import PlacesTable from "places-table/src/PlacesTable.vue";
import ExpenceTable from "expence-table/src/ExpenceTable.vue";
import PlacesAllPrice from "places-all/src/PlacesAllPrice.vue";
import PlaceTablePage from "places-place/src/PlaceTablePage.vue";
import WorkerCard from "worker-card/src/WorkerCard.vue";
import WorkerDelete from "worker-delete/src/WorkerDelete.vue";
import WorkerAdd from "../../components/worker-add/src/WorkerAdd.vue";
import WorkerCode from "worker-qr-code/src/WorkerCode.vue";
import Input from "../../ui/components/input/src/input.vue";
import Button from "../../ui/components/button/src/button.vue";
// import PlacesCard from "places-card/src/PlacesCard.vue";
import WorkerTable from "worker-table/src/WorkerTable.vue";
import KassaTable from "kassa-table/src/KassaTable.vue";
import Hall from "hall/src/Hall.vue";
import FoodBottom from "food-bott/src/FoodBottom.vue";
import FoodHeader from "food-head/src/FoodHeader.vue";
import Foods from "foods/src/Foods.vue";
import FoodModal from "food-modal/src/FoodModal.vue";
import TurnClocks from "turn-clock/src/TurnClocks.vue";
import Places from "places/src/Places.vue";
import siteBar from "./components/siteBar.vue";

import siteHeader from "./components/siteHeader.vue";
// import TurnClock from "vue-turn-clock";
// import
// import HallBtn from "hall-btn/src/HallBtn.vue";
// import HallTy from "hall-ty/src/HallTy.vue";
// import HallOne from "hall-one/src/HallOne.vue";

export default {
  components: {
    siteHeader,
    siteBar,
    CardInfo,
    menuCard,
    ModalEdit,
    TaomModal,
    ModalDelete,
    PlacesDelete,
    PlacesModal,
    PlacesTable,
    PlacesAllPrice,
    ExpenceTable,
    WorkerDelete,
    WorkerCard,
    PlaceTablePage,
    WorkerAdd,
    WorkerCode,
    Input,
    Button,
    // PlacesCard,
    WorkerTable,
    KassaTable,
    Hall,
    Foods,
    FoodModal,
    TurnClocks,
    Places,
    // HallBtn,
    // HallTy,
    // HallOne,
  },
  data() {
    return {
      username: "",
    };
  },
  computed: {
    showHeaderAndFooter() {
      return this.$route.name !== "login";
    },
  },
};
</script>

<template>
  <div>
    <header>
      <!-- готовая медия  -->
      <TaomModal v-if="false" />
      <!-- готовая медия -->
      <ModalEdit v-if="false" />
      <!-- готовая медия -->
      <ModalDelete v-if="false" />
      <!-- готовая медия -->
      <ExpenceTable v-if="false" />
      <!-- готовая медия -->
      <PlacesDelete v-if="false" />
      <!-- Готовая медия -->
      <PlacesModal v-if="false" />
      <!-- готовая медия -->
      <PlacesTable v-if="false" />
      <!-- готовая медия -->
      <PlacesAllPrice v-if="false" />
      <!-- Готовая медия -->
      <PlaceTablePage v-if="false" />
      <!-- Готовая медия -->
      <WorkerDelete v-if="false" />
      <!--Готовая Медия  -->
      <WorkerCard v-if="false" />
      <!-- Готовая Медия -->
      <FoodModal v-if="false" />
      <siteHeader v-if="showHeaderAndFooter" />
      <div class="flex gap-[20px] w-full">
        <siteBar v-if="showHeaderAndFooter" />
        <router-view />
      </div>
      <!-- <Input
        v-if="true"
        label="имя"
        v-model="username"
        id="username"
        placeholder="USERNAME"
      />
      {{ username }} -->
      <div class="flex flex-col gap-[20px]">
        <!-- menu-ni detailCard
        <CardInfo />
        menu-ni Left card
        <menuCard />
        menu-ni Edit && Add -->
        <!-- <PlaceTablePage/> -->
      </div>
    </header>
    <TurnClocks v-if="false" />
    <!-- <TurnClock
      theme="separate"
      background="green"
      bgColor="rgba(1, 88, 18, 1)"
    /> -->

    <Button :disabled="disabled" v-if="false"> lorem </Button>
    <!-- медия готова woker-add -->
    <WorkerAdd v-if="false" />
    <!-- <PlacesCard v-if="true" /> -->
    <!-- медия почти готовая workerTable -->
    <WorkerTable v-if="false" />
    <!-- медия готова kassaTable -->
    <KassaTable v-if="false" />
    <!-- Готовая медия -->
    <Hall v-if="false" />

    <WorkerCode v-if="false" />
    <!-- <HallOne/> -->
    <!-- <HallTy/> -->
    <!-- <Places /> -->
    <!-- <router-view /> -->
  </div>

  <Foods v-if="false" />
</template>
<style></style>
