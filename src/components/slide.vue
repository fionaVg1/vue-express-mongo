
<template>
    <div class="wh_slide" @click="clickSlide">
        <slot/>
    </div>
</template>
<script>
    export default {
        methods: {
            clickSlide() {
                this.$emit('click')
            }
        }
    }
</script>
<style scoped>
    .wh_slide {       
        -ms-flex-negative: 0;
        flex-shrink: 0;
        z-index: 10;
        min-height: 100px;
    }

    .wh_slide img {
        display: block;
    }
</style>