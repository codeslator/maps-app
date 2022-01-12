<script lang="ts" src="./MapView.ts" />

<template>
  <div class="loading-map d-flex justify-content-center align-items-center" v-if="!isReadyLocation">
    <div class="text-center">
      <h3>Please wait...</h3>
      <span>Locating...</span>
    </div>
  </div>
  <div class="map-container" ref="mapElement" v-show="isReadyLocation">

  </div>
</template>

<style scoped>
  .loading-map {
    color: #fff;
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, .8);
  }

  .map-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
  }
</style>