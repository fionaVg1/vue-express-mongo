<template>
    <div>
        <h3>count自增</h3>
        <p>{{count}}</p>
        <button @click="increase">count自增</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            count:0
        }
    },
    methods:{
        increase(){
            this.count ++ ;
        }
    }
}
</script>