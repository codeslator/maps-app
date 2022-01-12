import { useMap, usePlaces } from "@/hooks";
import { Feature } from "@/interfaces/places";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: 'SearchResults',
  setup() {
    const { places, isLoadingPlaces, userLocation } = usePlaces();
    const { map, setMarkers, getRouteBetweenPoints } = useMap();
    const activePlace = ref('');

    watch(places, (newPlaces) => {
      activePlace.value = '';
      setMarkers(newPlaces)
    })

    return {
      places,
      isLoadingPlaces,
      activePlace,
      onPlaceClick: (place: Feature) => {
        activePlace.value = place.id;
        map.value?.flyTo({
          center: place.center,
          zoom: 14
        })
      },
      getRouteDirections: (place: Feature) => {
        activePlace.value = place.id;
        if(!userLocation.value) return;
        const [startLng, startLat] = userLocation.value; // Start route point
        const [lng, lat] = place.center; // End route point
        const start: [number, number] = [startLng, startLat];
        const end: [number, number] = [lng, lat];
        getRouteBetweenPoints(start, end)
      }
    };
  },
});