<template>

  <div class="list-wrap">
    <span class="list-title">{{ title }}</span>
    <div class="list-links">
      <a class="list-link"
          v-for="item in links" 
          :href="item.href">{{ item.label }}
      </a>
    </div>
  </div>

</template>

<script setup>
import "../../assets/atoms/list.sass"
import { computed, ref, onMounted } from 'vue';


const props = defineProps({
  title: {
    default:""
  },
  links: {
    default: ""
  },
});


</script>