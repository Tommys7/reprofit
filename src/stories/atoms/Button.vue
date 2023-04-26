<template>
  <button type="button" :class="classes">
    {{ label }}
    <img src="../../../src/img/arrow-right.svg" v-if="icon == 'arrow'" alt="" :class="{'button-icon' : true, 'button-icon-padding' : label && label.length > 0}" >
    <img src="../../../src/img/user.svg" v-if="icon == 'user'" alt="" :class="{'button-icon' : true, 'button-icon-padding' : label && label.length > 0}" >
    <img src="../../../src/img/send.svg" v-if="icon == 'send'" alt="" :class="{'button-icon' : true, 'button-icon-padding' : label && label.length > 0}" >
  </button>
</template>

<script setup>

import "../../assets/atoms/button.sass"

import { computed } from 'vue';

const props = defineProps({
  label: {
    default: "",
  },
  primary: {
    type: Boolean
  },
  secondary: {
    type: Boolean
  },
  shadow: {
    type: Boolean
  },
  icon: {
    type: String,
    validator(value) {
      return ['arrow', 'user', 'send'].includes(value)
    }
  },
  size: {
    type: String,
    validator(value) {
      return ['small', 'large', 'huge'].includes(value)
    }
  }
});

const classes = computed(function() {
  const c = {
    button: true,
    primary: props.primary,
    secondary: props.secondary,
    large: props.size == 'large',
    small: props.size == 'small',
    huge: props.size == 'huge',
    shadow: props.shadow,
  };

  return c;
});

</script>