<script>
// import loader from "@/components/loader.vue";
// import { toast } from "vue3-toastify";
// import "vue3-toastify/dist/index.css";
// import loaderBtn from "@/components/loaderBtn.vue";
// import TurnClock from "vue-turn-clock";
// import DigitialClock from "@/components/DigitialClock.vue";
import TurnClocks from "turn-clock/src/TurnClocks.vue";
import api from "@/server/api";
export default {
  components: {
    // loader,
    TurnClocks,
    // loaderBtn,
    // DigitialClock,
  },
  data() {
    return {
      userName: "",
      password: "",
      startTime: new Date(),
      loadingBtn: false,
      btn: true,
    };
  },
  methods: {
    successNoti() {
      toast("Hush Kelibsiz!", {
        theme: "auto",
        type: "success",
        dangerouslyHTMLString: true,
      });
    },
    errorNoti() {
      toast("Lo'gin yoki parol xato", {
        theme: "auto",
        type: "error",
        dangerouslyHTMLString: true,
      });
    },
    login() {
      api
        .login({
          username: this.userName,
          password: this.password,
        })
        .then((res) => {
          this.preper(res.data);
          this.$store.dispatch("setUser", res.data);
          this.successNoti();
        })
        .catch((err) => {
          // if (err.response.status == 401) {
          //   this.$util.toastError(
          //     "error",
          //     "Telefon raqam yoki parolda xatolik"
          //   );
          // }
          // if (err.response.status == 500) {
          //   this.$util.toastError("error", "Serverda xatolik!");
          // }
          console.log(err);
        });
    },
    calculateEndTime() {
      const endDate = new Date();
      endDate.setUTCHours(12);
      endDate.setUTCMinutes(0);
      endDate.setUTCSeconds(0);
      endDate.setUTCHours(endDate.getUTCHours() + 5);
      return endDate;
    },
    preper(user) {
      this.$router.push("/workers");
    },
  },
};
</script>

<template>
  <div class="w-full h-screen flex items-center justify-center flex-col gap-2">
    <TurnClocks v-if="true" />
    <div class="text-[#015812] font-inter text-[96px] font-semibold leading-[116.18px] tracking-[12px] text-center decoration-none decoration-slice">LOGO</div>
    <div class="w-full max-w-[1068px]">
      <form @submit.prevent="login()" class="w-full max-w-[1068px]  flex flex-col items-center justify-center">
        <div class="w-full flex flex-col gap-[7px] max-w-[1068px]">
          <div class="w-full flex flex-col gap-5">
            <label
              class="font-jaldi text-[32px] text-[#015812] font-normal leading-[54.08px] tracking-[5px] text-left decoration-none decoration-slice"
              >Login</label
            >
            <input
              class="w-full max-w-[1068px] h-[73px] border border-[#015812] rounded-[8px] px-4 text-[30px]"
              v-model="userName"
              type="text"
            />
          </div>

          <div class="w-full flex flex-col gap-5">
            <label
              class="font-jaldi text-[32px] text-[#015812] font-normal leading-[54.08px] tracking-[5px] text-left decoration-none decoration-slice"
              >Parol</label
            >
            <input
              class="w-full max-w-[1068px] h-[73px] border border-[#015812] rounded-[8px] px-4 text-[30px]"
              v-model="password"
              type="text"
            />
          </div>
        </div>
        <button
          v-if="btn"
          class="w-full max-w-[1068px] mt-[20px] p-1 font-sans font-normal text-2xl leading-[54.08px] bg-[#015812] text-white tracking-[5px] rounded cursor-pointer transition-all duration-300 ease-in-out"
        >
          Kirish
        </button>
        <button v-if="loadingBtn" type="button">
          <!-- <loaderBtn /> -->
        </button>
      </form>
    </div>
  </div>
</template>

<style></style>
