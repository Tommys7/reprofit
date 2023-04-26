<template>
  <div class="card">
    <img src="../../../src/img/Data Display/Images/Card News/Image01.png" alt="" class="card-img">
    <div class="card-info">
      <div class="card-text">Reprofit online se zkušenou doktorkou Patrícií Nižníkovou</div>
      <Button class="card-button" label="Více info" icon="arrow"></Button>
    </div>
  </div>
</template>

<script setup>

import "../../assets/molecules/card.sass"

import { computed } from 'vue';
import Button from '../atoms/Button.vue';

const props = defineProps({

});

const classes = computed(() => ({

}));

</script>