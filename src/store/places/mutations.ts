import { Feature } from '@/interfaces/places';
import { MutationTree } from 'vuex';
import { PlacesState } from './state';

export const PlacesMutations = {
    SET_COORDS: 'SET_COORDS',
    SET_PLACES: 'SET_PLACES',
    SET_IS_LOADING_PLACES: 'SET_IS_LOADING_PLACES'
}

const mutation: MutationTree<PlacesState> = {
    // someMutation: ( /* state: ExampleStateInterface */) => {
    //     // a line to prevent linter errors
    // }
    SET_COORDS: (state: PlacesState, { lng, lat }: { lng: number, lat: number }) => {
        // a line to prevent linter errors
        // console.log(coords);
        state.userLocation = [lng, lat];
        state.isLoading = false;
    },
    SET_PLACES: (state: PlacesState, places: Feature[]) => {
        state.places = places;
        state.isLoadingPlaces = false;
    },
    SET_IS_LOADING_PLACES: (state: PlacesState) => {
        state.isLoadingPlaces = true;
    },
}


export default mutation;