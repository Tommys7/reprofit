<template>

<div class="checkbox-wrapper">
  <label class="checkbox-container">{{ label }}
    <input type="checkbox">
    <span class="checkmark"></span>
  </label>
</div>

</template>

<script setup>
import "../../assets/atoms/checkbox.sass"
import { computed, ref, onMounted } from 'vue';


const props = defineProps({
  id: {
    default: 'checkbox'
  },
  label:{
    default:'sss'
  },
});


</script>