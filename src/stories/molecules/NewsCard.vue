<template>
  <div class="news-card__wrap">
    <div class="news-card__imgBox">
      <img class="news-card__img" :src="src" :alt="alt">
      <div class="news-card__tag">{{ tag }}</div>
    </div>
    <div class="news-card__info">
      <span class="news-card__title">{{ title }}</span>
      <span class="news-card__date">{{ date }}</span>
    </div>
  </div>
</template>

<script setup>
import "../../assets/molecules/news-card.sass"
import { computed, ref, onMounted } from 'vue';

const props = defineProps({
  src: {
    default: "",
  },
  alt: {
    default: "",
  },
  tag : {
    default:""
  },
  title: {
    defaul: "",
  },
  date: {
    defaul: "",
  },
});


</script>