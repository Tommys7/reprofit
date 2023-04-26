
<template>
    <div class="footer">
        <div class="container-large">
            <div class="footer-box">
                <div class="footer-wrap">
                    <div class="footer-logo">
                        <img src="../../img/General/Logo/White.svg" alt="" class="footer-logo__img">
                    </div>
                    <div class="footer-links__wrap">
                        <List 
                            v-for="item in items"
                            :title="item.title"
                            :links="item.links"
                        />
                        <div class="footer-presentation__wrap">
                            <span class="footer-presentation__title">Člen skupiny</span>
                            <a href="/#" class="footer-presentation__logo">
                                <p class="footer-presentation__logoLeft">Future</p>
                                <p class="footer-presentation__logoRight">Life</p>
                            </a>
                            <div class="footer-presentation__socials">
                                <a href="https://www.facebook.com/ReprofitCZ/?locale=cs_CZ" class="footer-presentation__icon"><img src="../../img/Facebook.svg" alt="Facebook"></a>
                                <a href="https://www.instagram.com/reprofit_cz/?hl=cs" class="footer-presentation__icon"><img src="../../img/Instagram.svg" alt="Instagram"></a>
                                <a href="https://www.youtube.com/channel/UC_iJdSCjn-HcNTJlkoErY5w" class="footer-presentation__icon"><img src="../../img/Youtube.svg" alt="Youtube"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-wrap__down">
                    <span class="footer-wrap__downLabel">© Reprofit 2023. Všechna práva vyhrazena.</span>
                    <a href="https://www.wdf.cz/" class="footer-wrap__downLabel">Vytvořeno ve WDF</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import "../../assets/organisms/footer.sass"
import { computed } from 'vue';
import NewsCard from '../molecules/NewsCard.vue'
import List from '../atoms/List.vue'



const props = defineProps(['items']);


</script>
