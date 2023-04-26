<template>
  <div class="clinic-card">
    <div class="clinic-card__imgBox">
      <img :src="src" :alt="alt" class="clinic-card__img">
    </div>
    <div class="clinic-card__info">
      <h4 class="clinic-card__name">{{ label }}</h4>
      <div class="clinic-card__languages">
        <img class="clinic-card__languageImg" 
            v-for="data in flags"
              :src="data.src" 
              :alt="data.alt" 
            > 
      </div>
      <Button class="clinic-card__button" label="Více info" icon="arrow" shadow />
    </div>
  </div>
</template>

<script setup>
import "../../assets/molecules/clinic-card.sass"
import { computed, ref, onMounted } from 'vue';
import Button from '../atoms/Button.vue'

const props = defineProps({
  src: {
    default: "",
  },
  alt: {
    default: "",
  },
  label: {
    default:"",
  },
  flags: {
    default:""
  }
});




</script>