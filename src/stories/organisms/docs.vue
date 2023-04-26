
<template>
  <div class="docs">
    <div class="container">
      <div class="docs-info">
        <img src="../../img/leadingDocs.png" alt="Vedouví lékaři" class="docs-info__img">
        <span class="docs-info__text">Od samotného počátku se zaměřujeme na odhalení příčiny neplodnosti a ke každému páru přistupujeme individuálně. Vždy postupujeme od jednodušších způsobů léčby k těm složitějším.</span>
      </div>
      <div class="docs-wrap">
        <Signs 
          v-for="signs in items"
            :src="signs.src"
            :alt="signs.alt"
            :doctor="signs.doctor"
            :text="signs.text"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import "../../assets/organisms/docs.sass"
import { computed } from 'vue';
import Button from '../atoms/Button.vue';
import Signs from '../atoms/Signs.vue'



const props = defineProps(['items']);




</script>