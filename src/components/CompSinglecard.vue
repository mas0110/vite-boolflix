<script>
import { store } from'../store.js'
export default{
    name:"CompSinglecard",
    data(){
    return{
        store,
    }
}
}
</script>

<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="card text-center col-2 m-3" style="height: 300px" v-for="(element, index) in store.FilmList">
            <figure class="">
                <img :src="'https://image.tmdb.org/t/p/w154' + element.poster_path" alt="">
            </figure>
            <h5>Titolo: {{ (element.title) ? element.original_title : element.original_name}}</h5>
            <span>Lingua originale: {{ element.original_language }}</span>
            <span>voto: {{ element.vote_average }}</span>
        </div>
    </div>
</div>
</template>

<style>
.card h6, span{
    display: none;
}
.card:hover{

}
</style>
