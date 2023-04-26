
<template>
  <main class="main">
    <img class="main-image" :style="mainImageStyle" ref="mainImgRef" src="../../img/Data Display/Images/Hero/Image@2x.png" />
    <div class="container">
      <div class="main-wrap">
        <div class="main-info">
          <h1 class="main-title">Vaše úspěšná <br> cesta k miminku <br> začíná u nás.</h1>
          <span class="main-text">Děti našich spokojených pacientů jsou <br> důkazem kvality naší péče. Pomohli jsme <br> na svět již více než 16 000 dětí.</span>
          <Button class="main-button" secondary label="Chci se objednat" shadow size="large" />
        </div>
        <div class="main-card">
          <Card />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import "../../assets/organisms/main.sass"
import { computed, onMounted, onUnmounted, ref } from 'vue';
import Main from '../organisms/Main.vue';
import Card from '../molecules/Card.vue'
import Button from '../atoms/Button.vue'

const mainImgRef = ref(null)
const maskXOffset = ref(0);
const loadedAt = ref(0);
const loadOffset = ref(0)

const handleScroll = () => {
  const imgWidth = mainImgRef.value.offsetWidth - loadOffset.value
  const yOffset = window.pageYOffset
  maskXOffset.value = imgWidth - yOffset * 3
}

function easeOutCubic(x) {
  return 1 - Math.pow(1 - x, 3);
}

const handleOnLoadAnimation = () => {
  const t = Date.now() - loadedAt.value

  const offset = mainImgRef.value.offsetWidth / 2

  const tStart = 1000
  const tEnd = 2500
  if(t <= tEnd) {
    if(t >= tStart) {
      const off = Math.floor(offset * easeOutCubic((t-tStart)/(tEnd-tStart)))
      loadOffset.value = off
      handleScroll()
    }
    setTimeout(handleOnLoadAnimation, 16);
  }
}

onMounted(() => {
  maskXOffset.value = mainImgRef.value.offsetWidth
  window.addEventListener('scroll', handleScroll);
  loadedAt.value = Date.now()
  handleOnLoadAnimation()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
})

const mainImageStyle = computed(() => {
  return {
    '-webkit-mask-position-x': maskXOffset.value + 'px'
  }
});

</script>