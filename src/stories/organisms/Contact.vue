
<template>
    <div class="contact">
        <div class="container">
            <h4 class="contact-title">Kontaktujte nás</h4>
            <div class="contact-wrap">
                <div class="contact-form">
                    <ContactForm></ContactForm>
                </div>
                <div class="contact-clinics">
                    <h4 class="contact-clinics__title">Naše kliniky</h4>
                    <div class="contact-clinics__cards">
                        <ClinicCard
                        v-for="data in items"
                        :src="data.src"
                        :alt="data.alt"
                        :label="data.label"
                        :flags="data.flags"
                    />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>




<script setup>
import "../../assets/organisms/contact.sass"
import { computed } from 'vue';
import Circle from "../atoms/Circle.vue"
import ClinicCard from '../molecules/ClinicCard.vue'
import ContactForm from '../organisms/ContactForm.vue' 

const props = defineProps({
    items: {
        default: ""
    },
});

</script>