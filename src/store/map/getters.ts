import { GetterTree } from 'vuex';
import { MapState } from './state';
import { StateInterface } from '../index';

export const MapGetters = {
    IS_READY_MAP: 'map/isReadyMap',
    MAP: 'map/map',
    DISTANCE: 'map/distance',
    DURATION: 'map/duration'
}

const getters: GetterTree<MapState, StateInterface> = {
    isReadyMap: (state) => {
        return !!state.map;
    },
    map: (state) => {
        return state.map;
    },
    distance: (state) => {
        return state.distance;
    },
    duration: (state) => {
        return state.duration;
    }
}



export default getters;