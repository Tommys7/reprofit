
<template>
    <div class="container">
        <div class="solution-wrap">
            <h4 class="solution-title">Najdeme pro vás to nejúčinnější řešení</h4>
            <span class="solution-subtitle">Na klinice REPROFIT jsme dokázali pomoci většině párů k vytouženému dítěti. Používáme moderní metody léčby neplodnosti včetně léčby darovanými vajíčky. Najdeme pro vás nejsnadnější možnou cestu k otěhotnění.</span>
            <div class="solution-items">
                <SolutionCard v-for="item in items" 
                    :img="item.img" 
                    :alt="item.alt"
                    :title="item.title"
                    :label="item.label"
                />
            </div>
        </div>
    </div>
</template>




<script setup>
import "../../assets/organisms/solution.sass"
import { computed } from 'vue';
import SolutionCard from "../molecules/SolutionCard.vue"


const props = defineProps({
    items: {
        default: []
    }

});


</script>