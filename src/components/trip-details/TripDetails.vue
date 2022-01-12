<template>
  <div class="trip-container column" v-if="distance !== undefined">
    <div class="col">Distance: <strong>{{ distance }} km</strong></div>
    <div class="col">Duration: <strong>{{ duration }} min</strong></div>
  </div>
</template>

<script lang="ts">
import { useMap } from '@/hooks';
export default {
  name: 'TripDetails',
  setup() {
    const { distance, duration } = useMap();

    return {
      distance,
      duration,
    };
  }
}
</script>

<style>
  .trip-container {
    padding: 10px;
    position: fixed;
    bottom: 20px;
    left: 20px;
    border-radius: 10px;
    background-color: #fff;
    width: 350px;
    font-size: 14px;
  }

  strong {
    color: #42b983;
  }
</style>