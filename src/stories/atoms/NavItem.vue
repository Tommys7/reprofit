<template>
  <div class="nav-item">
    <div class="nav-item__label" @click="onClick()">
      {{ label }}
      <img src="../../../src/img/chevron-down-grey.svg" alt="" class="nav-item__arrow">
    </div>
    <div class="options-wrap" v-if="isOpen">
      <a :href="option.link" class="nav-option" v-for="option in options">{{ option.label }}</a>
    </div>
  </div>
</template>

<script setup>
import "../../assets/atoms/nav-item.sass"
import { computed, ref} from 'vue';

const props = defineProps({
  label: {
    default: "Asdf",
  },
  options: {
    default: null
  },

});


const isOpen = ref(false)

const onClick = function () {
  if(isOpen.value == true) {
    isOpen.value = false
  } else {
    isOpen.value = true
  }
}


const classes = computed(function() {
  
});

</script>