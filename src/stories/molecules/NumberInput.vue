<template>
  <div class="input-wrap">
    <div class="input-label__wrap">
      <div class="wrap2">
        <span class="input-label" >{{label }}</span>
        <span class="input-required" v-if="required == true" > *</span>
      </div>
      <img src="../../img/exclamation.svg" alt="Chyba" class="input-error" v-if="error == true">
    </div>
    <div class="input-input">HEllo world</div>
  </div>
</template>

<script setup>


import "../../assets/atoms/input.sass"
import "../../assets/molecules/number-input.sass"

import { computed } from 'vue';
import Button from '../atoms/Button.vue';
import Select from '../atoms/Select.vue';

const countryOptions = [
      {id: 1, label: '<img src="../../../src/img/Czech.svg">'}, 
      {id: 2, label: '<img src="../../../src/img/Englisch.svg">'}, 
      {id: 3, label: '<img src="../../../src/img/France.svg">'}, 
      {id: 4, label: '<img src="../../../src/img/Germany.svg">'}, 
      {id: 5, label: '<img src="../../../src/img/Hungary.svg">'}, 
      {id: 6, label: '<img src="../../../src/img/Romania.svg">'}, 
];

const props = defineProps({

});

const classes = computed(() => ({

}));

</script>