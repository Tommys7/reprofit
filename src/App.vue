
<template>
    <Header style="margin-top: 20px; margin-bottom: 20px;" />
    <Navigation :items='navItems' />
    <Main></Main>
    <About :items="aboutItems"/>
    <Solution :items="solutionItems" />
    <Banner style="margin-top: 132px; margin-bottom: 120px ;" :img="bannerItem.img" :title="bannerItem.img" :bannerTitle="bannerItem.bannerTitle" :bannerText="bannerItem.bannerText"/>
    <Slider style="margin-bottom: 80px;" v-for="slider in sliderItems"
            :sliderTitle="slider.sliderTitle"
            :sliderText="slider.sliderText"
            :sliderImg="slider.sliderImg"
            :slider-alt="slider.sliderAlt"
    />
    <Docs :items="docsItems" style="margin-bottom: 120px;" />
    <News :items="newsItems" style="margin-bottom: 138px;"/>
    <Contact :items="contactItems" style="margin-bottom: 120px;"/>
    <Footer :items="footerItems"/>
</template>


<script setup>
  import "../src/assets/main.sass"

  import Header from './stories/organisms/Header.vue'
  import Navigation from './stories/organisms/Navigation.vue'
  import Main from './stories/organisms/Main.vue'
  import About from './stories/organisms/About.vue'
  import Solution from './stories/organisms/Solution.vue'
  import Banner from './stories/organisms/Banner.vue'
  import Slider from './stories/organisms/Slider.vue'
  import Docs from './stories/organisms/docs.vue'
  import News from './stories/organisms/News.vue'
  import Contact from './stories/organisms/Contact.vue'
  import Footer from './stories/organisms/Footer.vue'



  const footerItems = [
    {
        title:"Léčba neplodnosti",
        links:[
            {label: "IUI (Inseminace)", href: "/#"},
            {label: "IVF s vlastními vajíčky", href: "/#"},
            {label: "IVF s darovanými vajíčky", href: "/#"},
            {label: "IVF s darovanými embryi", href: "/#"},
        ]
    },
    {
        title:"Užitečné informace",
        links:[
            {label: "Legislativa a GDPR", href: "/#"},
            {label: "Kontrola a bezpečnost", href: "/#"},
            {label: "Splopracující instituce", href: "/#"},
            {label: "Informace pro média", href: "/#"},
            {label: "Kariéra", href: "/#"},
        ]
    },
    {
        title:"Kliniky",
        links:[
            {label: "REPROFIT Brno", href: "/#"},
            {label: "REPROFIT Ostrava", href: "/#"},
            {label: "REPROFIT Bratislava", href: "/#"},
            {label: "REPROFIT Martin", href: "/#"},
        ]
    },
    
]   


  const contactItems= [
    {
        src: '../../../src/img/Data Display/Images/Clinic/brno.png',
        alt: 'alt',
        label: 'Klinika Brno',
        flags:[
            {src:"../../../src/img/czech.svg",alt:"Česká vlajka"},
            {src:"../../../src/img/englisch.svg",alt:"Anglická vlajka"},
            {src:"../../../src/img/germany.svg",alt:"Německá vlajka"},
            {src:"../../../src/img/france.svg",alt:"Francouzská vlajka"},
            {src:"../../../src/img/italy.svg",alt:"Italská vlajka"},
            {src:"../../../src/img/hungary.svg",alt:"Maďarská vlajka"},
            {src:"../../../src/img/romania.svg",alt:"Rumunská vlajka"},
            {src:"../../../src/img/germany.svg",alt:"Polská vlajka"},
            {src:"../../../src/img/slovakia.svg",alt:"Slovenská vlajka"},
        ]
    },
    {
        src: '../../../src/img/Data Display/Images/Clinic/ostrava.png',
        alt: 'alt',
        label: 'Klinika Ostrava',
        flags:[
            {src:"../../../src/img/czech.svg",alt:"Česká vlajka"},
            {src:"../../../src/img/englisch.svg",alt:"Anglická vlajka"},
            {src:"../../../src/img/germany.svg",alt:"Polská vlajka"},
        ]
    },
    {
        src: '../../../src/img/Data Display/Images/Clinic/bratislava.png',
        alt: 'alt',
        label: 'Klinika Bratislava',
        flags:[
            {src:"../../../src/img/hungary.svg",alt:"Maďarská vlajka"},
            {src:"../../../src/img/slovakia.svg",alt:"Slovenská vlajka"},
        ]
    },
    {
        src: '../../../src/img/Data Display/Images/Clinic/martin.png',
        alt: 'alt',
        label: 'Klinika Martin',
        flags:[
            {src:"../../../src/img/hungary.svg",alt:"Maďarská vlajka"},
            {src:"../../../src/img/slovakia.svg",alt:"Slovenská vlajka"},
        ]
    },
    



]

  const newsItems = [
    {src:"../../../src/img/Data Display/Images/Card News/Image01.png",alt:'Doktor',tag: 'Brno', title: 'Reprofit online se zkoušenou doktorou Patrícií Nižníkovou',date: '08. 08. 2022'},
    {src:"../../../src/img/Data Display/Images/Card News/Image 02.png",alt:'Doktor',tag: 'Bratislava', title: 'Chat podpory před IVF léčbou s MUDr Tomášem Bagócsi',date: '08. 08. 2022'},
    {src:"../../../src/img/Data Display/Images/Card News/Image 03.png",alt:'Doktor',tag: 'Ostrava', title: 'Připojte se na náš WEBINÁŘ!',date: '08. 08. 2022'}
]




  const docsItems = [
    {src:"../../../src/img/sign.png",alt:'Podpis',doctor:"MUDr. Tomáš Bagócsi", text:"Vedoucího lékař Reprofit Bratislava"},
    {src:"../../../src/img/sign.png",alt:'Podpis',doctor:"MUDr. Pavel Otevřel", text:"Vedoucího lékař Reprofit Brno"},
    {src:"../../../src/img/sign.png",alt:'Podpis',doctor:"MUDr. Andrea R. Kagánková", text:"Vedoucího lékař Reprofit Ostrava"},
]




  const navItems = [
      {label: "Kliniky", options: [{label:"Praha",link:"/reprofit/praha"},{label:"Brno",link:"/reprofit/brno"}]},
      {label: "Neplodnost", options: [{label:"Lorem",link:"/reprofit/praha"},{label:"Ipsum",link:"/reprofit/brno"}]},
      {label: "Genetika", options: [{label:"Lorem",link:"/reprofit/praha"},{label:"Ipsum",link:"/reprofit/brno"}]},
      {label: "Gynekologie", options: [{label:"Lorem",link:"/reprofit/praha"},{label:"Ipsum",link:"/reprofit/brno"}]},
      {label: "Dárcovství", options: [{label:"Lorem",link:"/reprofit/praha"},{label:"Ipsum",link:"/reprofit/brno"}]},
      {label: "Úspěšnost", options: [{label:"Lorem",link:"/reprofit/praha"},{label:"Ipsum",link:"/reprofit/brno"}]},
      {label: "Ceník", options: [{label:"Lorem",link:"/reprofit/praha"},{label:"Ipsum",link:"/reprofit/brno"}]},
    ];




  const aboutItems= [
      {img: "../../../src/img/Success.svg", label: "Nadprůměrná úspěšnost léčby", alt:"úspěch"},
      {img: "../../../src/img/Born.svg", label: "Přes 16 000 narozených dětí", alt:"Dítě"},
      {img: "../../../src/img/Price.svg", label: "Cenová dostupnost léčby", alt:"Cena"},
      {img: "../../../src/img/Time.svg", label: "Žádná čekací doba", alt:"Čas"},
      {img: "../../../src/img/Jazyk.svg", label: "Mluvíme 8. světovými jazyky", alt:"Jazyk"},
      {img: "../../../src/img/Experiences.svg", label: "17 let zkušeností", alt:"Zkušenosti"},
  ]





  const solutionItems = [
    {img:"../../../src/img/Data Display/Images/Card care/Image01.png", alt:"Dítě", title:"IVF s vlastními vajíčky", label:"Neplodnost trápí velké množství párů. Víme jak pomoci."},
    {img:"../../../src/img/Data Display/Images/Card care/Image02.png", alt:"Těhotenství", title:"IVF s darovanými vajíčky", label:"Nedaří se vám počít dítě přirozenou cestou? Obraťte se na naši kliniku."},
    {img:"../../../src/img/Data Display/Images/Card care/Image03.png", alt:"Test", title:"IVF s darovanými embryi", label:"Díky dlouholetým zkušenostem dosahujeme v léčbě IVF vysoké úspěšnosti."}
  ]





  const bannerItem = {
    img: '../../../src/img/Data Display/Images/Banner/Image01.png',
    alt: 'alt',
    bannerTitle: 'První krok k rodičovství z pohodlí domova',
    bannerText: 'Naši lékaři jsou tu pro Vás i on-line. Konzultace poskytujeme zdarma, objednáme Vás bez čekání a nutnosti předložení žádanky.',
  }



  
  const sliderItems = [
    {
      sliderTitle:"Vybralo si nás už více než 20 000 párů",
      sliderText:"Po ťažkých 2 rokoch liečby, bolesti snaženia sme sa rozhodli pre vašu kliniku a teraz vieme, že to bolo to najsprávnejšie rozhodnutie v našom živote.",
      sliderImg:"../../../src/img/kid1.png",
      sliderAlt:"Dítě"
    },
  /*  {
      sliderText:"Po ťažkých 2 rokoch liečby, bolesti snaženia sme sa rozhodli pre vašu kliniku a teraz vieme, že to bolo to najsprávnejšie rozhodnutie v našom živote.",
      sliderImg:"../../../src/img/kid1.png",
      sliderAlt:"Dítě"
    },
    {
      sliderText:"Po ťažkých 2 rokoch liečby, bolesti snaženia sme sa rozhodli pre vašu kliniku a teraz vieme, že to bolo to najsprávnejšie rozhodnutie v našom živote.",
      sliderImg:"../../../src/img/kid1.png",
      sliderAlt:"Dítě"
    } */
  ]
  

</script>


<style scoped>


</style>
