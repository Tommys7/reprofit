
<template>
  <main class="main">
    <img class="main-image" :style="mainImageStyle" ref="mainImgRef" src="../../img/Data Display/Images/Hero/Image@2x.png" />
    <div class="container">
      <div class="main-wrap">
        <div class="main-info">
          <h1 class="main-title" :style="mainTitleStyle">Vaše úspěšná <br> cesta k miminku <br> začíná u nás.</h1>
          <span class="main-text" :style="mainTextStyle">Děti našich spokojených pacientů jsou <br> důkazem kvality naší péče. Pomohli jsme <br> na svět již více než 16 000 dětí.</span>
          <Button class="main-button" :style="mainButtonStyle" secondary label="Chci se objednat" shadow size="large" />
        </div>
        <div class="main-card" :style="mainCardStyle">
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
const yOffset = ref(0)

const handleScroll = () => {
  if(window.innerWidth > 1340) {
    yOffset.value = window.pageYOffset
  } else {
    yOffset.value = 0
  }
  
  const imgWidth = mainImgRef.value.offsetWidth - loadOffset.value
  maskXOffset.value = imgWidth - yOffset.value * 3
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

const mainTitleStyle = computed(() => {
  const opacity = 1-Math.max(1.0, Math.min(50.0, yOffset.value)) / 50;

  return {
    opacity
  };
})

const mainTextStyle = computed(() => {
  const opacity = 1-((Math.min(80, yOffset.value)-35) / (80-35));
  return {
    opacity
  };
})

const mainButtonStyle = computed(() => {
  const opacity = 1-((Math.min(110, yOffset.value)-65) / (110-65));

  return {
    opacity
  };
})

const mainCardStyle = computed(() => {
  let top = 0

  if(yOffset.value > 80) {
    const relOffset = yOffset.value - 80
    top = relOffset * 2
  }
  return {
    position: 'relative',
    top: -top + 'px'
  };
})


const mainImageStyle = computed(() => {
  return {
    '-webkit-mask-position-x': maskXOffset.value + 'px'
  }
});

</script>