<template>
  <button class="btn btn-primary" @click="onMyLocationClick" v-if="isReadyBtn">
    Go to my Location
  </button>
</template>

<script lang="ts">
import { useMap, usePlaces } from "@/hooks";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "LocationBtn",
  setup() {
    const { userLocation, isReadyLocation } = usePlaces();
    const { map, isReadyMap } = useMap();

    return {
      isReadyBtn: computed<boolean>(
        () => isReadyLocation.value && isReadyMap.value
      ),
      onMyLocationClick: () => {
        map.value?.flyTo({
          center: userLocation.value,
          zoom: 14,
        });
      },
    };
  },
});
</script>

<style scoped>
button {
  position: fixed;
  top: 20px;
  right: 20px;
}
</style>