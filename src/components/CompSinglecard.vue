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
    },
}
}
</script>

<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="card text-center col-2 m-3 border-0" style="height: 300px" v-for="(element, index) in store.FilmList">
            <figure class="">
                <img :src="'https://image.tmdb.org/t/p/w185' + element.poster_path" :alt="element.original_name">
            </figure>
            <div class="text p-3">
                <h4>{{ (element.title) ? element.original_title : element.original_name}}</h4>
                <figure>
                    <span class="opacity-50">Lingua originale: </span>
                    <img :src="`https://flagsapi.com/${ getCountrycode(element.original_language).toUpperCase()}/flat/24.png`" 
                    width="24" 
                    :alt="element.original_language">
                </figure>
                <ul class="d-flex gap-2">
                    <span>voto: </span>
                    <li v-for="index in Math.ceil((element.vote_average / 2))" :key="index">
                        <i>&#9733;</i>
                    </li>
                </ul>

                <p class="mt-2">{{ element.overview }}</p>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss">
.container{
    padding-top: 90px;
}
header{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
.text{
display: none;
overflow: auto;
}
.card{
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.card:hover{
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    background-color: black;
    figure:first-child{
        display: none;

    }
    .text{
    display: block;
}
}
ul li{
    list-style: none;
}
</style>
