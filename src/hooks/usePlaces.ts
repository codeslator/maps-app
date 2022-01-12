import { computed, onMounted } from 'vue';
import { useStore } from "vuex";
import { StateInterface } from "@/store";
import { PlacesGetters } from '@/store/places/getters';
import { PlacesActions } from '@/store/places/actions';

export const usePlaces = () => {
  const store = useStore<StateInterface>();

  onMounted(() => {
    if(!store.getters[PlacesGetters.IS_READY_LOCATION]) {
      store.dispatch(PlacesActions.GET_INITIAL_LOCATION)
    }
  });


  return {
    isLoading: computed(() => store.getters[PlacesGetters.IS_LOADING]),
    userLocation: computed(() => store.getters[PlacesGetters.USER_LOCATION]),
    isReadyLocation: computed<boolean>(() => store.getters[PlacesGetters.IS_READY_LOCATION]),
    places: computed(() => store.getters[PlacesGetters.PLACES]),
    isLoadingPlaces: computed(() => store.getters[PlacesGetters.IS_LOADING_PLACES]),
    searchPlacesByTerm: (query: string) => store.dispatch(PlacesActions.SEARCH_PLACES_BY_TERM, query),
  };
};