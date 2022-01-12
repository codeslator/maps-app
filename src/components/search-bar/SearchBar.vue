<script lang="ts" src="./SearchBar.ts"></script>

<template>
  <div class="search-bar-container">
    <input type="text" class="form-control" placeholder="Search place" v-model="searchTerm">
    <!-- {{ searchTerm }} -->
    <search-results />
  </div>  
</template>


<style scoped>
  .search-bar-container {
    background-color: #fff;
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 9999;
    /* box-shadow: 0px 5px 10px rgba(0, 0, 0, .8); */
    width: 300px;
    /* overflow: hidden; */
    /* padding: 5px;
    border-radius: 10px; */
  }
</style>