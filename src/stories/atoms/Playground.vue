<template>


    <button @click="isOpen = !isOpen">asd</button>
    <div v-if="isOpen" v-for="sss in names">{{ sss.firstname }} {{ sss.lastname }}</div>

    <div style="display: flex; gap: 30px;" class="wrap">
        <span v-for="q in data">
            {{ q.label }}
            <div style="display: flex; flex-direction: column;" class="wrap2">
                <a :href="eee.link" v-for="eee in q.links">
                    {{ eee.label }}
                    <span v-for="r in eee.morelinks">{{r}}</span>
                </a>
                
            </div>
        
        </span>
    </div>

</template>

<script setup>
    import { computed, ref, reactive } from 'vue'


    const isOpen = ref(false)

    const names = [
        {firstname: "michal", lastname: "hojgr"},
        {firstname: "tom", lastname: "hojgr"}
    ]

    const data = [
        {
            label : "lecba",
            links : [
                {
                    label: "fff",
                    link: "/reprofit/fff",
                    morelinks: ["skoda", "bike"]
                },
                {
                    label: "ffh",
                    link: "/reprofit/ffh",
                    morelinks: ["skoda","bike"]
                }
                
            ]
        },
        {
            label : "uzitecne info",
            links : [
                {
                    label: "ivf",
                    link: "/reprofit/ivf",
                },
                {
                    label: "ggg",
                    link: "/reprofit/ggg"
                }
            ]

        }
    ]   
</script>