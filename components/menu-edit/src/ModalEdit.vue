<script>
import api from "@/server/api";
import store from "@/store";
import defImg from "@/assets/images/svg/add-worker-big-icon.svg";
export default {
  name: "productModal",
  data() {
    return {
      form: {
        image: "",
        profileImageUrl: "",
        price: 0,
        sale_price: 0,
        title: "",
        comment: "",
      },
      store: store,
      defImg,
      req: "",
    };
  },
  components: {},
  methods: {
    open(item) {
      if (item) {
        this.req = "updateProducts";
        this.form = {
          menu_id: this.$route.query.menu_id,
          price: item.price,
          comment: item.comment,
          sale_price: item.sale_price,
          title: item.title,
          image: item.image,
          id: item.id,
        };
      } else {
        this.req = "createProducts";
        this.form = {
          menu_id: this.$route.query.menu_id,
          price: null,
          comment: null,
          sale_price: null,
          title: null,
          image: null,
        };
      }
      // Добавляем класс show для анимации
      // this.$refs.productModal.classList.add("show");
      // Проверяем, существует ли ссылка на модальное окно
      const modal = this.$refs.productModal;
      if (modal) {
        modal.classList.add("show");
      } else {
        console.warn("Модальное окно не найдено");
      }
    },
    Request() {
      this.form.image = document.getElementById("urlimg").value
        ? this.form.image
        : "";
      api[this.req](this.form).then(() => {
        this.$emit("end");
        this.form = {
          menu_id: this.$route.query.menu_id,
          price: null,
          comment: null,
          sale_price: null,
          title: null,
          image: null,
        };
        this.req = "";
      });
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.form.image = file;
        this.profileImageUrl = URL.createObjectURL(file);
      }
    },
    resetForm() {
      this.$route.query.id, this.form.price, this.form.comment;
      this.form.sale_price, this.form.title, this.form.image;
    },
    handleFocus() {
      if (this.form.sale_price === 0) {
        this.form.sale_price = "";
      }
    },
    handleBlur() {
      if (this.form.sale_price === "") {
        this.form.sale_price = 0;
      }
    },
    priceFocus() {
      if (this.form.price === 0) {
        this.form.price = "";
      }
    },
    priceBlur() {
      if (this.form.price === 0) {
        this.form.price = 0;
      }
    },
  },
  created() {},
  props: {
    productAdd: {
      type: Object,
    },
  },
};
</script>

<template>
  <div id="product-modal">
    <div
      class="w-[30%] max-w-sm p-6 border border-[#015812] rounded-[8px] shadow-md bg-gray-50 max-380:p-2 max-1100:w-[50%] max-780:w-[67%] max-630:w-[75%] max-520:w-[80%] max-460:w-[100%]"
      v-if="req"
      ref="productModal"
      :class="['active-product']"
    >
      <!-- Заголовок и кнопка закрытия -->
      <div class="flex justify-between items-center mb-4">
        <div class="flex items-center">
          <router-link to="/menu" class="hidden max-780:flex">
            <button>prev</button>
          </router-link>
          <h2 class="text-xl font-semibold text-[#015812]">
            {{
              req == "createProducts"
                ? "Yangi taom qo’shish"
                : "Taom turini tahrirlash"
            }}
          </h2>
        </div>
        <!-- <button class="text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button> -->
        <button
          v-if="req == 'updateProducts'"
          class="w-[50px] h-[50px]"
          @click="$refs.taomModal.open(productAdd)"
        >
          <img src="@/assets/images/svg/red-x.svg" alt="" />
        </button>
      </div>

      <!-- Поле для загрузки изображения -->
      <form
        class="border border-[#015812] rounded-[8px] bg-gray-100"
        @submit.prevent="Request()"
      >
        <div
          class="relative top-[2.5px] left-[14.2857143%] flex flex-col items-center border border-gray-300 h-[193px] w-[227px] rounded-[30px] bg-white mb-[20px]"
        >
          <img
            src="/src/assets/images/png/Vector (1).png"
            class="mt-[43px]"
            alt=""
          />
          <button
            class="absolute p-2 bottom-[-20px] bg-white rounded-[7px] shadow-md text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <img
              src="/src/assets/images/svg/Vector (14).svg"
              alt="photo detector"
            />
          </button>
        </div>
        <label class="block text-sm font-medium text-[#015812] mb-1 ml-[10px]"
          >Nomi</label
        >
        <input
          type="text"
          placeholder="Nomi"
          v-model="form.title"
          required
          class="w-full max-w-[316px] ml-1 mb-4 p-2 border border-[#015812] rounded-md text-gray-700 focus:ring focus:ring-indigo-200 max-380:max-w-[97%]"
        />
        <!-- Поле для цены закупки -->
        <label class="block text-sm font-medium text-[#015812] mb-1 ml-[10px]"
          >Kirim narxi</label
        >
        <input
          type="text"
          placeholder="Kirim narxi"
          v-model="form.price"
          @focus="priceFocus()"
          @blur="priceBlur()"
          required
          step="any"
          class="w-full max-w-[316px] ml-1 mb-4 p-2 border border-[#015812] rounded-md max-380:max-w-[97%]"
        />
        <!-- Поле для цены продажи -->
        <label class="block text-sm font-medium mb-1 text-[#015812] ml-[10px]"
          >Sotuv narxi</label
        >
        <input
          v-model="form.sale_price"
          required
          @focus="handleFocus"
          @blur="handleBlur"
          step="any"
          type="text"
          placeholder="Sotuv narxi"
          class="w-full max-w-[316px] ml-1 mb-4 p-2 rounded-md text-gray-700 focus:ring focus:ring-indigo-200 border border-[#015812] max-380:max-w-[97%]"
        />
        <!-- Поле для ввода комментария -->
        <label class="block text-sm font-medium text-[#015812] ml-[10px]"
          >Izoh</label
        >
        <textarea
          v-model="form.comment"
          required
          placeholder="Izoh"
          class="w-full mb-4 p-2 border border-gray-300 rounded-md text-gray-700 focus:ring focus:ring-indigo-200"
          rows="3"
        ></textarea>
        <!-- Кнопка подтверждения -->
      </form>
      <button
        class="w-full bg-gray-300 py-2 px-4 text-[#015812] rounded-[8px] font-semibold rounded-md focus:outline-none border border-[#015812] rounded-[8px] mt-[20px]"
      >
        Tasdiqlash
      </button>
      <!-- Поле для названия -->
    </div>
  </div>
</template>

<style>
.active-product {
  right: 0;
  transition: all 0.3s ease;
}
.active-product {
  position: fixed;
  top: 50;
  right: -100%;
  height: 84%;
  background-color: white;
  /* box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3); */
  transition: right 0.3s ease;
  z-index: 1000;
}

.active-product.show {
  right: 0;
}
</style>
