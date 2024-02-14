import {reactive} from 'vue'

export const store = reactive({
    searchText: "",
    FilmList:[],
    seriesList:[],
    apiKey:"294faad1c76b2e9d2611c933c7c1627d",
    endpointFilm:"https://api.themoviedb.org/3/search/movie",
    endpointSeries:"https://api.themoviedb.org/3/search/tv",
})