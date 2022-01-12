<template>
  <div class="home">
    <map-view />
    <location-btn />
    <search-bar />
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
