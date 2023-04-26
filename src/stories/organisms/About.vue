
<template>
    <div class="container">
        <div class="about-wrap">
            <h3 class="about-title">Proč Reprofit</h3>
            <div class="about-subtitle__wrap">
                <a class="about-subtitle">Díky naší profesionální péči jsme pomohli klientkám z více než 90 zemí světa. Zároveň provádíme nejvíce výkonů asistované reprodukce v ČR.</a>
            </div>
            <div class="about-items">
                
                    <Circle v-for="item in items" 
                    :label="item.label" 
                    :img="item.img" 
                    :alt="item.alt"
                />
                
            </div>
        </div>
    </div>
</template>




<script setup>
import "../../assets/organisms/about.sass"
import { computed } from 'vue';
import Circle from "../atoms/Circle.vue"


const props = defineProps({
    items: {
        default: []
    }

});

const classes = computed(() => ({

}));

</script>