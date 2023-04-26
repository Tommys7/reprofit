
<template>
  <header class="header">
    <div class="container-large">
      <div class="header-wrap" >
        <img src="../../../src/img/General/Logo/Color.svg" alt="Logo" class="header-logo">
        <div class="header-interactive">
          <a href="#" class="header-link">Novinky</a>
          <a href="#" class="header-link">FAQ</a>
          <button class="header-search"><img src="../../img/search.svg" alt="Hledat"></button>
          <div class="header-buttons">
            <Button class="header-button" icon="user" shadow size="small" />
            <Button class="header-button" primary label="Kontaktujte nás" shadow />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import "../../assets/organisms/header.sass"
import { computed } from 'vue';
import Button from '../atoms/Button.vue';




const props = defineProps({

});


</script>