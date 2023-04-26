<template>
  <div class="solution-card__wrap">
    <div class="solution-card__imgBox">
      <img class="solution-card__img" :src="img" :alt="alt">
    </div>
    <h4 class="solution-card__title">{{ title }}</h4>
    <span class="solution-card__label">{{ label }}</span>
  </div>
</template>

<script setup>
import "../../assets/molecules/solution-card.sass"
import { computed, ref, onMounted } from 'vue';

const props = defineProps({
  
  img: {
    default: "",
  },
  alt: {
    default: "",
  },
  title: {
    defaul: "",
  },
  label: {
    defaul: "",
  },
});


</script>