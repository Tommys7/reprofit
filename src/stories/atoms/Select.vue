<template>
  <div class="select">
    <div class="select-labels">
      <span class="select-label">{{ label }}</span>
      <span class="select-required" v-if="required == true"> *</span>
    </div>
    <button class="select-window" :class="{'borderless' : borderless}" @click="isOpen = !isOpen">

      <span class="select-option" v-if="selectedValueLabel.length > 0" v-html="selectedValueLabel"></span>
      <span class="select-option select-option-placeholder" v-if="selectedValueLabel.length == 0">{{ placeholder }}</span>
      
      <img src="../../../src/img/chevron-down.svg" alt="" class="select-img">
    </button>
    <div class="select-active-wrapper">
      <div class="select-active" v-if="isOpen">
        <SelectOption 
          v-for="option in options" 
          :id="option.id" 
          :label="option.label" 
          :active="selectedValue && option.id == selectedValue"
          @click="selectOption(option.id)"
        ></SelectOption>
      </div>
    </div>
  </div>  
</template>

<script setup>

import "../../assets/atoms/select.sass"
import SelectOption from './SelectOption.vue';

import { computed, ref, onMounted } from 'vue';

const props = defineProps({
  required: {
    type: Boolean
  },
  label: {
    default:''
  },
  options: {
    type: Object
  },
  placeholder: {
    type: String
  },
  default: {},
  borderless: {
    type: Boolean
  },
});
const selectedValue = ref(null);
const isOpen = ref(false)

onMounted(() => {
  if(props.default) {
    selectedValue.value = props.default
  }
})

const selectedValueLabel = computed(() => {
  for(let option of props.options) {
    if(option.id == selectedValue.value) {
      return option.label;
    }
  }

  return '';
});

const selectOption = function(id) {
  selectedValue.value = id
  isOpen.value = false
}

</script>