<template>
  <div>
    <!-- <input v-model="newItem" placeholder="Enter item" />
    <button @click="addItem">Add Item</button>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p v-if="successMessage" class="success">{{ successMessage }}</p> -->
    <div
      class="w-full max-w-[363px] h-[143px] border border-[#015812] rounded-[8px] bg-gray-200"
    >
      <div class="md:flex ml-[10px] mt-[10px]">
        <div class="md:shrink-0">
          <img
            class="w-[100px] h-[100px] mb-2 object-cove md:h-full"
            src="/src/assets/images/png/image 2.png"
            alt="Modern building architecture"
          />
        </div>
        <div
          class="font-inter font-semibold text-[24px] leading-[29.05px] ml-[60px] mt-[15px] flex flex-col gap-[35px]"
        >
          <div
            class="text-[22px] tracking-wide text-sm text-indigo-500 font-semibold text-[#015812]"
          >
            <span class="text-[#015812]">{{ title }} Jigar Shashlik </span>
          </div>
          <!-- <span>asdsadasd</span> -->
          <!-- <a
            href="#"
            class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >Jigar shashlik</a
          > -->
          <p class="mt-2 text-[17px] text-[#015812]">{{ description }} 25 000 s'om </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  name: "CardInfo",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    users: {
      type: Array,
      default: () => [],
    },
  },
};
const newItem = ref("");
const errorMessage = ref("");
const successMessage = ref("");

// const addItem = async () => {
//   if (newItem.value) {
//     try {
//       // Masalan, serverga yangi itemni yuborish
//       const response = await axios.post(
//         "https://jsonplaceholder.typicode.com/posts",
//         {
//           title: newItem.value,
//           body: "This is a test item",
//           userId: 1,
//         }
//       );
//       console.log("Item added:", response.data);
//       successMessage.value = "Item successfully added!"; // Muvaffaqiyatli xabar
//       errorMessage.value = ""; // Xatolik xabarini tozalash
//       newItem.value = ""; // Inputni tozalash
//     } catch (error) {
//       // Xato haqida xabar berish
//       if (error.response) {
//         errorMessage.value = `Error: ${
//           error.response.data.message || "Something went wrong!"
//         }`;
//       } else if (error.request) {
//         errorMessage.value = "Error: No response from server.";
//       } else {
//         errorMessage.value = `Error: ${error.message}`;
//       }
//       successMessage.value = ""; // Muvaffaqiyatli xabarni tozalash
//     }
//   } else {
//     errorMessage.value = "Please enter an item."; // Foydalanuvchi item kiritmasa
//     successMessage.value = ""; // Muvaffaqiyatli xabarni tozalash
//   }
// };
</script>

<style>
.error {
  color: red;
  /* Xato xabarining rangini belgilash */
}

.success {
  color: green;
  /* Muvaffaqiyatli xabarining rangini belgilash */
}
</style>
