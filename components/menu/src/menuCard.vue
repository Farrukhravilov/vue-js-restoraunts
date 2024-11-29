<template>
  <div>
    <div>
      <!-- Menu Card LEFT  -->
      <div
        class="mb-4 p-4 border border-[#015812] rounded-[8px] bg-gray-200 text-center w-full max-w-[363px] h-[133px]"
      >
        <div class="flex flex-col gap-[20px] mt-[15px]">
          <h3 class="text-lg font-semibold text-[#015812] text-[20px]">
            1 - taom
          </h3>
          <p class="text-[#015812]">12 xil</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const newItem = ref("");
const errorMessage = ref("");
const successMessage = ref("");

const addItem = async () => {
  if (newItem.value) {
    try {
      // Masalan, serverga yangi itemni yuborish
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: newItem.value,
          body: "This is a test item",
          userId: 1,
        }
      );
      console.log("Item added:", response.data);
      successMessage.value = "Item successfully added!"; // Muvaffaqiyatli xabar
      errorMessage.value = ""; // Xatolik xabarini tozalash
      newItem.value = ""; // Inputni tozalash
    } catch (error) {
      // Xato haqida xabar berish
      if (error.response) {
        errorMessage.value = `Error: ${
          error.response.data.message || "Something went wrong!"
        }`;
      } else if (error.request) {
        errorMessage.value = "Error: No response from server.";
      } else {
        errorMessage.value = `Error: ${error.message}`;
      }
      successMessage.value = ""; // Muvaffaqiyatli xabarni tozalash
    }
  } else {
    errorMessage.value = "Please enter an item."; // Foydalanuvchi item kiritmasa
    successMessage.value = ""; // Muvaffaqiyatli xabarni tozalash
  }
};
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
