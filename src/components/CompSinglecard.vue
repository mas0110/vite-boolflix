<script>
import { store } from'../store.js'
export default{
    name:"CompSinglecard",
    data(){
    return{
        store,
    } 
},
methods:{
    getCountrycode(language){
        switch(language){
            case 'en':
                return 'us'
            case 'ja':
                return 'jp'
            case 'he':
                return 'il'
            case 'zh':
                return 'cn'
            case 'ko':
                return 'kr'
            case 'hi':
                return 'in'
            default:
                return language
        }
    }
    
}
}
</script>

<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="card text-center col-2 m-3" style="height: 400px" v-for="(element, index) in store.FilmList">
            <figure class="">
                <img :src="'https://image.tmdb.org/t/p/w185' + element.poster_path" alt="">
            </figure>
            <h5>{{ (element.title) ? element.original_title : element.original_name}}</h5>
            <figure>
                <span class="opacity-50">Lingua originale: </span>
                <img :src="`https://flagsapi.com/${ getCountrycode(element.original_language).toUpperCase()}/flat/24.png`" 
                width="24" 
                :alt="element.original_language">
            </figure>
            <span>voto: {{ Math.min(5, Math.max(1, element.vote_average | number)) }}</span>
        </div>
    </div>
</div>
</template>

<style>
</style>
