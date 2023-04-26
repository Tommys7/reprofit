<template>
    <div :class="{'select-active__option': true, 'select-activated': active}" v-html="label"></div>
</template>

<script setup>

const props = defineProps(['id', 'label', 'active'])
</script>