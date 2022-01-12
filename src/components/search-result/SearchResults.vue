<script lang="ts" src="./SearchResults"></script>

<template>
  <div class="alert alert-primary text-center" v-if="isLoadingPlaces">
    <h6>Loading...</h6>
    <p>Please wait...</p>
  </div>
  <ul class="list-group mt-1 text-left" v-else-if="places.length > 0">
    <li
      class="list-group-item list-group-item-action text-left"
      :class="{ 'active': place.id === activePlace }"
      v-for="place in places"
      :key="place.id"
      @click="onPlaceClick(place)"
    >
      <h6>{{ place.text }}</h6>
      <p>
        {{ place.place_name }}
      </p>
      <div align="right">
        <button class="btn btn-sm"
          :class="(place.id === activePlace) ? 'btn-outline-light' : 'btn-outline-primary'"
          @click.self="getRouteDirections(place)"
        >Addesses</button>
      </div>
    </li>
  </ul>
</template>


<style scoped>
li {
  cursor: pointer;
}

h6 {
  font-size: 14px;
  font-weight: bold;
}

p {
  font-size: 12px;
}
</style>