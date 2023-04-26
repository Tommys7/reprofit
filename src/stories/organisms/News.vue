
<template>
    <div class="container">
        <div class="news">
            <h4 class="news-title">Novinky</h4>
            <div class="news-card">
                <NewsCard v-for="item in items"
                :src="item.src"
                :alt="item.alt"
                :tag="item.tag"
                :title="item.title"
                :date="item.date"
                />
            </div>
            <div class="news-buttonBox">
                <Button class="news-button" secondary label="Další novinky" size="large" />
            </div>
        </div>
    </div>
</template>

<script setup>
import "../../assets/organisms/news.sass"
import { computed } from 'vue';
import NewsCard from '../molecules/NewsCard.vue'
import Button from '../atoms/Button.vue'

const props = defineProps(['items']);


</script>