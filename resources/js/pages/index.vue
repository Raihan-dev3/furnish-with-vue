<template lang="">
    <div>
        <Hero />
        <Services />
        <Quality />
        <Subscribe />
    </div>
</template>
<script>
import Hero from "../components/hero.vue";
import Services from "../components/services.vue";
import Quality from "../components/quality.vue";
import Subscribe from "../components/subscribe.vue";

export default {
    name: "Home",
    components: {
        Hero,
        Services,
        Quality,
        Subscribe
    }
}
</script>
<style lang="">
    
</style>