<template>
    <div>
        <input v-model="newItem" placeholder="Enter item" />
        <button @click="addItem">Add Item</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <p v-if="successMessage" class="success">{{ successMessage }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
    // asdad
const newItem = ref('');
const errorMessage = ref('');
const successMessage = ref('');

const addItem = async () => {
    if (newItem.value) {
        try {
            // Masalan, serverga yangi itemni yuborish
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                title: newItem.value,
                body: 'This is a test item',
                userId: 1
            });
            console.log('Item added:', response.data);
            successMessage.value = 'Item successfully added!'; // Muvaffaqiyatli xabar
            errorMessage.value = ''; // Xatolik xabarini tozalash
            newItem.value = ''; // Inputni tozalash
        } catch (error) {
            // Xato haqida xabar berish
            if (error.response) {
                errorMessage.value = `Error: ${error.response.data.message || 'Something went wrong!'}`;
            } else if (error.request) {
                errorMessage.value = 'Error: No response from server.';
            } else {
                errorMessage.value = `Error: ${error.message}`;
            }
            successMessage.value = ''; // Muvaffaqiyatli xabarni tozalash
        }
    } else {
        errorMessage.value = 'Please enter an item.'; // Foydalanuvchi item kiritmasa
        successMessage.value = ''; // Muvaffaqiyatli xabarni tozalash
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
