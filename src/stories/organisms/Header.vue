
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
            <Select class="header-languages" :default="languages[0].id" :options="languages" borderless small></Select>
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
import Select from '../atoms/Select.vue'

const languages = [
    {id: 1, label: '<img src="../../../src/img/Czech.svg">'}, 
    {id: 2, label: '<img src="../../../src/img/Englisch.svg">'}, 
    {id: 3, label: '<img src="../../../src/img/France.svg">'}, 
    {id: 4, label: '<img src="../../../src/img/Germany.svg">'}, 
    {id: 5, label: '<img src="../../../src/img/Hungary.svg">'}, 
    {id: 6, label: '<img src="../../../src/img/Romania.svg">'}, 
]



const props = defineProps({

});


</script>