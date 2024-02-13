import {reactive} from 'vue'

export const store = reactive({
    searchText: "",
    FilmList:[],
    apiUrl:"https://api.themoviedb.org/3/search/movie?api_key=294faad1c76b2e9d2611c933c7c1627d"
})