<template>

<div class="signs-wrap">
  <div class="signs-item">
        <div class="signs-imgBox">
          <img class="signs-img" :src="src" :alt="alt">
        </div>
        <span class="signs-name">{{ doctor }}</span>
        <span class="signs-text">{{ text }}</span>
  </div>
</div>
  
</template>

<script setup>
import "../../assets/atoms/signs.sass"
import { computed, ref, onMounted } from 'vue';

const props = defineProps({
  src: {
    default: "",
  },
  alt: {
    default: "",
  },
  doctor: {
    default:"",
  },
  text: {
    default:""
  },
});


</script>