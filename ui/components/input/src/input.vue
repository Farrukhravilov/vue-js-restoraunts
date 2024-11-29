<template>
  <!-- <label :for="id" class="my-component">
        {{ label }}
        <input  class="w-[329px] h-[46px] border border-[#015812] rounded-[8px]" :placeholder="placeholder" :required="required" :maxlength="maxlength" :minlength="minlength" 
        :step="step" :autofocus="autofocus" :id="id"  :model="modelValue" :input="$emit('update:modelValue')" :type="type">
    </label> -->
  <label :for="id" class="my-component">
    {{ label }}
    <input
      class="w-full max-w-[343px] h-[60px] border border-[#015812] rounded-[8px] px-4"
      :placeholder="placeholder"
      :required="required"
      :maxlength="maxlength"
      :minlength="minlength"
      :step="step"
      :autofocus="autofocus"
      :id="id"
      :disabled="disabled"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>

<script>
import { ref } from "vue";
export default {
  // props:{
  //     type: {
  //         type: String,
  //         default: "text",
  //     },
  //     label: String,
  //     placeholder: String,
  //     disabled:{
  //         type:Boolean,
  //         default: false,
  //     },
  //     autofocus: {
  //         type: Boolean,
  //         default: false,
  //     },
  //     required: {
  //         type: Boolean,
  //         default: false,
  //     },
  //     modelValue: [String, Number],
  //     maxlength: Number,
  //     minlength: Number,
  //     step: [Number, String],
  //     id: String,
  // },
  // emits: ['update:modelValue'],
  props: {
    type: {
      type: String,
      default: "text",
    },
    label: String,
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    modelValue: [String, Number],
    maxlength: Number,
    minlength: Number,
    step: [Number, String],
    id: String,
  },
  emits: ["update:modelValue"],
};
// const title = ref("My First Component");
// const description = ref("This is a simple example component from the components package.");
</script>

<style scoped>
.my-component {
  text-align: center;
  margin: 20px;
}
</style>
