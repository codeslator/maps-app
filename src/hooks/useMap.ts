import { computed } from 'vue'; 
import { useStore } from "vuex";
import Mapboxgl from 'mapbox-gl';
import { StateInterface } from "@/store";
import { MapGetters } from '@/store/map/getters';
import { LngLat, MapActions } from '@/store/map/actions';
import { MapMutations } from '@/store/map/mutations';
import { Feature } from '@/interfaces/places';


export const useMap = () => {
  const store = useStore<StateInterface>();

  return {
    map: computed(() => store.getters[MapGetters.MAP]),
    duration: computed(() => store.getters[MapGetters.DURATION]),
    distance: computed(() => store.getters[MapGetters.DISTANCE]),
    isReadyMap: computed<boolean>(() => store.getters[MapGetters.IS_READY_MAP]),
    setMap: (map: Mapboxgl.Map) => store.commit(MapMutations.SET_MAP, map),
    setMarkers: (places: Feature[]) => store.commit(MapMutations.SET_MARKERS, places),
    getRouteBetweenPoints: (start: LngLat, end: LngLat) => store.dispatch(MapActions.GET_ROUTE_BETWEEN_POINTS, { start, end }),

  };
};