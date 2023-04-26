
<template>
<div class="form-wrap">
    <span class="form-title">Kontaktní formulář</span>
    <div class="inputs-wrap">
        <Input class="input" label="Jméno" required />
        <Input class="input" label="Příjmení" required />

        <Input class="input" label="E-mail" required error />
        <Select class="input"
            label="V jakém jazyce chcete komunikovat?"
            required
            placeholder="Vyberte možnost..."
            :options='[{"id":1,"label":"Čeština"},{"id":2,"label":"Angličtina"},{"id":3,"label":"Němčina"},{"id":4,"label":"Francouzština"},{"id":5,"label":"Italština"},{"id":6,"label":"Maďarština"},{"id":7,"label":"Rumunština"},{"id":8,"label":"Polština"},{"id":9,"label":"Slovenština"}]'
        />
        <Select class="input"
            label="Preferovaná linka"
            required
            placeholder="Vyberte možnost..."
            :options='[{"id":1,"label":"Brno"},{"id":2,"label":"Ostrava"},{"id":3,"label":"Bratislava"},{"id":4,"label":"Martin"}]'
        />
        <Select class="input"
            label="O jakou léčbu máte prosím zájem?"
            required
            placeholder="Vyberte možnost..."
            :options='[{"id":1,"label":"Léčba neplodnosti"},{"id":2,"label":"Lorem"},{"id":3,"label":"Ipsum"},]'
        />

    </div>
</div>
</template>

<script setup>
import "../../assets/organisms/contact-form.sass"
import { computed } from 'vue';
import Button from '../atoms/Button.vue'
import Input from '../atoms/Input.vue'
import Select from '../atoms/Select.vue'

const props = defineProps(['items']);


</script>