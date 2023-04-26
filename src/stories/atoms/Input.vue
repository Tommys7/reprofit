<template>
<div class="input-wrap">
  <div class="input-label__wrap">
    <div class="wrap2">
      <span class="input-label" >{{label }}</span>
      <span class="input-required" v-if="required == true" > *</span>
    </div>
    <img src="../../img/exclamation.svg" alt="Chyba" class="input-error" v-if="error == true">
  </div>
  <input type="text" class="input-input" :class="{'error-border' : error}">
</div>

</template>

<script setup>
import "../../assets/atoms/input.sass"
import { computed, ref, onMounted } from 'vue';


const props = defineProps({
  label:{
    default:'sss'
  },
  input: {
    default: "",
  },
  required: {
    type: Boolean
  },
  error: {
    type: Boolean
  }
});


</script>