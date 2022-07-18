<script setup>
import { ref } from "vue";
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
    require: true,
  },
  id: {
    type: String,
    default: "",
    requier: true,
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="form-floating my-4 py-2">
    <input
      :id="id"
      :value="modelValue"
      v-bind="$attrs"
      class="form-control"
      :placeholder="label"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <label :for="id" v-if="label">{{ label }}</label>
  </div>
</template>
