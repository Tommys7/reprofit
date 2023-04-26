
<template>
  <div style="position: relative;" class="slider">
    <div class="container-small">
      <h4 class="slider-title">{{sliderTitle}}</h4>
      <div class="slider-arrows">
        <button class="slider-arrow"><img src="../../img/chevron-left.svg" alt="Šipka"></button>
        <button class="slider-arrow"><img src="../../img/chevron-right.svg" alt="Šipka"></button>
      </div>
      <div class="slider-wrap">
        <div class="slider-item">
          <div class="slider-info">
            <span class="slider-text">{{ sliderText }}</span>
            <Button class="slider-button" secondary label="Další spokojení klienti" icon="arrow" />
          </div>
          <div class="slider-img">
            <img :src="sliderImg" :alt="sliderAlt">
          </div>
        </div>
      </div>
      <div class="slider-selected">
        
      </div>
    </div>
  </div>
</template>

<script setup>
import "../../assets/organisms/slider.sass"
import { computed } from 'vue';
import Button from '../atoms/Button.vue';



const props = defineProps({
  sliderTitle:{
    default:"",
  },
  sliderText:{
    default:""
  },
  sliderImg:{
    default:""
  },
  sliderAlt:{
    default:""
  }
  
});


</script>