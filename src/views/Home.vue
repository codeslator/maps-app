<template>
  <div class="home">
    <map-view />
    <div class="container-fluid bar-container">
      <div class="row justify-content-between">
        <div class="col-8 col-sm-8 col-md-4 mb-2">
          <search-bar />
        </div>
        <div class="col-4 col-sm-4 col-md-3 mb-2">
          <location-btn />
        </div>
      </div>
    </div>
    <trip-details />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePlaces } from '@/hooks';
import MapView from '@/components/mapview/MapView.vue';
import LocationBtn from '@/components/location-btn/LocationBtn.vue';
import SearchBar from '@/components/search-bar/SearchBar.vue';
import TripDetails from '@/components/trip-details/TripDetails.vue';

export default defineComponent({
  name: 'Home',
  components: {
    MapView,
    LocationBtn,
    SearchBar,
    TripDetails,
  },
  setup() {
    usePlaces();
    return {

    }
  }
});
</script>

<style scoped>
.bar-container {
  position: fixed;
    top: 20px;
    z-index: 9999;
}
</style>