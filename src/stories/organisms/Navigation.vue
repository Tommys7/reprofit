<template>
    <nav class="nav">
        <div class="container">
            <div class="nav-wrap">
                <img src="../../img/General/Logo/Color-round.svg" alt="" class="nav-logo">
                <div class="nav-items">
                    <NavItem v-for="sdas in items"
                    :label="sdas.label"
                    :options="sdas.options"
                />        
                </div>
                <div class="nav-buttons">
                    <Button icon="user" size="small" />
                    <img src="../../img/chat.PNG" alt="Kontaktujte nás" class="nav-buttons__contact">
                    
                </div>     
            </div>
        </div>
    </nav>
</template>

<script setup>
import "../../assets/organisms/navigation.sass"
import { computed } from 'vue';
import NavItem from '../atoms/NavItem.vue';
import Button from '../atoms/Button.vue'



const props = defineProps({
    items: {
        default: []
    }

});

</script>
