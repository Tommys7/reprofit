<template>
  <div class="input-wrap" @click="onClick">
    <div class="input-label__wrap">
      <div class="wrap2">
        <span class="input-label" >{{ label }}</span>
        <span class="input-required" v-if="required == true" > *</span>
      </div>
      <img src="../../img/exclamation.svg" alt="Chyba" class="input-error" v-if="error == true">
    </div>
    <div :class="{'input-input': true, 'number-input': true, 'number-input-focus': isFocused}">
      <div class="number-input-country">
        <Select v-model='countryPrefix' :default="countryOptions[0].id" borderless :options="countryOptions" small></Select>
      </div>
      <div class="number-input-prefix">{{ countryPrefix }}</div>
      <input type="text" ref="realInput" @focusin="isFocused = true" @focusout="isFocused = false">
    </div>
  </div>
</template>

<script setup>


import "../../assets/atoms/input.sass"
import "../../assets/molecules/number-input.sass"

import { computed, ref } from 'vue';
import Button from '../atoms/Button.vue';
import Select from '../atoms/Select.vue';

const countryPrefix = ref('')
const realInput = ref(null);
const isFocused = ref(false)

const onClick = function() {
  realInput.value.focus();
}

const countryOptions = [
      
      {id: '+420', label: '<img src="../../../src/img/Czech.svg">'}, 
      {id: '+44', label: '<img src="../../../src/img/Englisch.svg">'}, 
      {id: '+33', label: '<img src="../../../src/img/France.svg">'}, 
      {id: '+49', label: '<img src="../../../src/img/Germany.svg">'}, 
      {id: '+36', label: '<img src="../../../src/img/Hungary.svg">'}, 
      {id: '+40', label: '<img src="../../../src/img/Romania.svg">'}, 
];

const props = defineProps({
  label: {
    default: ''
  }
});

const classes = computed(() => ({

}));

</script>