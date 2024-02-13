<script>
import CompHeader from'./components/CompHeader.vue'
import compMain from'./components/compMain.vue'
import { store } from'./store.js'

import axios from 'axios'

export default{
    components:{
        CompHeader,
        compMain
    },
    data(){
        return{
            store
        }
    },
    methods: {
    //   getFilm(){
        // if( store.searchText != "" ){
        // store.apiUrl += `&query=${store.searchText}`
        // }
    //   },
      getSearchFilm(){
        if( store.searchText){
        store.apiUrl += `&query=${store.searchText}`
        }


        axios
        .get(store.apiUrl)
        .then(res => {
            console.log(res.data.results)
            store.FilmList = res.data.results
        })
      }
    },
    mounted(){
        this.getSearchFilm()
        // this.getFilm()
    }

}
</script>

<template>
 <CompHeader  @performSearch="getSearchFilm"/>
 <compMain/>
</template>

<style>

</style>
