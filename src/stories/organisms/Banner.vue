
<template>
  <div class="banner">
    <div class="container">
      <div class="banner-wrap">
        <div class="banner-img">
          <img :src="img" :alt="alt">
        </div>
        <div class="banner-info">
          <span class="banner-title">{{ bannerTitle }}</span>
          <span class="banner-text">{{ bannerText }}</span>
          <div class="banner-button__wrap">
            <Button class="banner-button" secondary label="Chci se objednat" size="large" />
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script setup>
import "../../assets/organisms/banner.sass"
import { computed } from 'vue';
import Button from '../atoms/Button.vue';



const props = defineProps({
  img:{
    default:"",
  },
  alt:{
    default:"",
  },
  bannerTitle:{
    default:"",
  },
  bannerText:{
    default:""
  }
});
</script>