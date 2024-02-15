<script>
import { store } from'../store.js'
export default{
    name:"CompHeader",
    data(){
    return{
        store,
    }
}
}
</script>

<template>
  <header>
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid w-75">
        <img src="../assets/img/boolflix.png" width="200px" alt="logo">
        <form class="d-flex" role="search">
          <input 
          class="form-control me-2" 
          type="search" 
          placeholder="Film, Serie..." 
          aria-label="Search"
          v-model="store.searchText"
          >
          <button class="btn btn-outline-danger" type="submit"  @click.prevent="$emit('performSearch')">Cerca</button>
        </form>
      </div>
    </nav>
  </header>
</template>

<style>
</style>
