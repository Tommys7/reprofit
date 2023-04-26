<template>
    <div v-if="isFixed" :style="blockerDivStyle"></div>
    <nav class="nav" :class="{fixed: isFixed}" ref="navElement">
        <div class="">
            <div class="nav-wrap">
                <img src="../../img/General/Logo/Color-round.svg" alt="" class="nav-logo" :class="{'hidden': !isFixed}">
                <div class="nav-items">
                    <NavItem v-for="sdas in items"
                    :label="sdas.label"
                    :options="sdas.options"
                />        
                </div>
                <div class="nav-buttons">
                    <Button icon="user" size="small" :class="{'hidden': !isFixed}"></Button>
                    <img src="../../img/chat.PNG" alt="Kontaktujte nás" class="nav-buttons__contact" :class="{'hidden': !isFixed}">
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import "../../assets/organisms/navigation.sass"
import { computed, ref, onMounted, onUnmounted } from 'vue';
import NavItem from '../atoms/NavItem.vue';
import Button from '../atoms/Button.vue'

const isFixed = ref(false)
const navElement = ref(null)
const blockerDivHeight = ref(0)

const props = defineProps({
    items: {
        default: []
    },
});

const blockerDivStyle = computed(() => ({
    width: '1px',
    height: blockerDivHeight.value + 'px'
}))

const handleScroll = () => {
    const yOffset = window.pageYOffset
    if(yOffset >= 77) {
        blockerDivHeight.value = navElement.value.offsetHeight
        isFixed.value = true
    } else {
        isFixed.value = false
    }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
})

</script>
