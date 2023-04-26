<template>
  <div class="circle-wrap">
    <div class="circle-img">
        <img :src="img" :alt="alt">
    </div>
    <div class="circle-label">
        {{ label }}
    </div>
  </div>
</template>

<script setup>
import "../../assets/atoms/circle.sass"
import { computed, ref, onMounted } from 'vue';

const props = defineProps({
  label: {
    defaul: "",
  },
  img: {
    default: "",
  },
  alt: {
    default: "",
  }
});


</script>