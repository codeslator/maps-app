import { GetterTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';

export const PlacesGetters = {
    IS_READY_LOCATION: 'places/isReadyLocation',
    IS_LOADING: 'places/isLoading',
    USER_LOCATION: 'places/userLocation',
    PLACES: 'places/places',
    IS_LOADING_PLACES: 'places/isLoadingPlaces',
}

const getters: GetterTree<PlacesState, StateInterface> = {
    isReadyLocation: (state) => {
        return !!state.userLocation;
    },
    isLoading: (state) => {
        return state.isLoading;
    },
    userLocation: (state) => {
        return state.userLocation;
    },
    places: (state) => {
        return state.places;
    },
    isLoadingPlaces: (state) => {
        return state.isLoadingPlaces;
    }
}



export default getters;