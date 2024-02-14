<script>
import CompSinglecard from './CompSinglecard.vue'
import { store } from'../store.js'
export default{
    name:"compMain",
    components:{
        CompSinglecard
    },
    data(){
    return{
        store,
    }
}
}
</script>

<template>
    <CompSinglecard/>
</template>

<style>

</style>
