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
      getSearchFilm( apiParams ){

        store.FilmList = []

        if( store.searchText){
        axios
            .get( store.endpointFilm, apiParams )
            .then((res) => {
                console.log(res.data.results)
                store.FilmList = res.data.results
            })
            .catch((err) =>{
                console.log(err)
            })
        }
      },
      getSearchSeries( apiParams ){

        store.SeriesList = []

        if( store.searchText){
        axios
            // .get( `${store.endpointSeries}?api_key=${store.apiKey}&query=${store.searchText}`)
            .get( store.endpointSeries, apiParams )
            .then((res) => {
                console.log(res.data.results)
                store.SeriesList = res.data.results
            })
            .catch((err) =>{
                console.log(err)
            })
        }
      },
      Search(){
        const apiParams = {
            params: {
                api_key: store.apiKey,
                query: store.searchText,
                language: 'it-IT'
                
            } 
        }
            this.getSearchFilm( apiParams )
            this.getSearchSeries( apiParams )
      },
    },
    mounted(){
     
    }

}
</script>

<template>
 <CompHeader  @performSearch="Search"/>
 <compMain/>
</template>

<style>

</style>
