<script>
import api from "@/server/api";
import store from "@/store";
import SettingsCard from "settings-card/src/SettingsCard.vue";
export default {
  data() {
    return {
      data: {},
      store: store,
      data: {
        branch_phone: "",
        branch_name: "",
        receipt_title: "",
        receipt_description: "",
        service_fee: 0,
        id: 0,
        data: [],
      },
    };
  },
  components: {
    SettingsCard,
  },
  methods: {
    getSettings() {
      const param = {
        branch_phone: this.data.branch_phone,
        branch_phone: this.data.branch_name,
        service_fee: this.data.service_fee,
        receipt_title: this.data.receipt_title,
        id: this.data.id,
        receipt_description: this.data.receipt_description,
      };
      api.getSettings(param).then((res) => {
        console.log(res.data);
        this.data = res.data;
      });
    },
  },
  mounted() {
    this.getSettings();
  },
};
</script>

<template>
  <div class="w-[97%] border border-[#015812] rounded-[10px]">
    <div class="flex">
      <div class="flex flex-col gap-[20px] w-full max-780:gap-[10px]">
        <div class="flex w-full p-[30px] max-520:p-[5px]">
          <h2 class="text-[24px] text-[#015812]">Sozlamalar</h2>
        </div>

        <div class="ml-[30px] max-520:ml-[5px] max-520:mr-[5px]">
          <SettingsCard   />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
