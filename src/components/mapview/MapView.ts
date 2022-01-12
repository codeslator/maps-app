import { defineComponent, ref, onMounted, watch } from 'vue';
import Mapboxgl from 'mapbox-gl';
import { useMap, usePlaces } from '@/hooks';

export default defineComponent({
  name: 'MapView',
  setup() {
    const mapElement = ref<HTMLDivElement>()
    const { isLoading, userLocation, isReadyLocation } = usePlaces();
    const { setMap } = useMap();

    const initMap = async () => {
      if(!mapElement.value) throw new Error('Div element undefined');
      if(!userLocation.value) throw new Error('User location undefined');
      await Promise.resolve();
      const map = new Mapboxgl.Map({
        container: mapElement.value, // container ID
        style: 'mapbox://styles/mapbox/light-v10', // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 9 // starting zoom
        });
      
      const myLocationPopup = new Mapboxgl.Popup()
        .setLngLat(userLocation.value)
        .setHTML(`
          <h4>Current Location</h4>
          <p>Barquisimeto</p>
          <p>${userLocation.value}</p>
        `);
      const myLocationMarker = new Mapboxgl.Marker()
        .setLngLat(userLocation.value)
        .setPopup(myLocationPopup)
        .addTo(map);

      setMap(map); // Setting map in Store
    }

    onMounted(() => {
      if(isReadyLocation.value) return initMap();
    });

    watch(isReadyLocation, (newValue) => {
      if(isReadyLocation.value) initMap();
    })

    return {
      isLoading,
      userLocation,
      isReadyLocation,
      mapElement,
    };
  }
});