
import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';
import { PlacesMutations } from './mutations';
import { searchApi } from '@/apis/';
import { Feature, PlacesResponse } from '@/interfaces/places';

export const PlacesActions = {
    GET_INITIAL_LOCATION: 'places/getInitialLocation',
    SEARCH_PLACES_BY_TERM: 'places/searchPlacesByTerm',
};

const actions: ActionTree<PlacesState, StateInterface> = {
    // someAction: ( /*{ commit }, payload  */ ) => {
    //     // a line to prevent linter errors
    // },
    getInitialLocation: ({ commit }) => {
        // a line to prevent linter errors
        // TODO: put loading
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                commit(PlacesMutations.SET_COORDS, { lng: coords.longitude, lat: coords.latitude });
            },
            (error) => {
                console.log(error);
                throw new Error('Not geolocated');
                
            } 
        );
    },
    // TODO: Set return value
    searchPlacesByTerm: async ({ commit, state }, query: string): Promise<Feature[]> => {
        console.log('Vuex: ', query);
        if(query.length === 0) {
            commit(PlacesMutations.SET_PLACES, []);
            return [];
        }

        if(!state.userLocation) {
            throw new Error('There is not a user location');
        }
        commit(PlacesMutations.SET_IS_LOADING_PLACES);

        const response = await searchApi.get<PlacesResponse>(`/${query}.json`, {
            params: {
                proximity: state.userLocation?.join(',')
            }
        });
        // console.log(response.data.features)
        commit(PlacesMutations.SET_PLACES, response.data.features);
        return response.data.features;
    }
}



export default actions;