<script>
import { store } from'../store.js'
export default{
    name:"compMain",
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
            <div class="card text-center col-3 m-3" style="height: 300px" v-for="(element, index) in store.FilmList">
                <figure class="">
                    <img :src="element.poster_path" alt="">
                    https://image.tmdb.org/t/p/original/bl7qEeoKCdoaacB1jykxv5EaEeE.jpg
                </figure>
                <h5>Titolo: {{ element.title }}</h5>
                <h6>Titolo originale: {{ element.original_title}}</h6>
                <span>Lingua originale: {{ element.original_language }}</span>
                <span>voto: {{ element.vote_average }}</span>
            </div>
        </div>
    </div>
</template>

<style>

</style>
