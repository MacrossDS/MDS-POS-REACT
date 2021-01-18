import {
    INICIAR_SESION
} from '../types';

// cada reducer tiene su propio state
const initialState = {
    data: null,
    token: null
}

export default function(state= initialState, action){
    switch(action.type){
        case INICIAR_SESION: 
            return {
               ...state,
               ...action.sesion
            }

        default:
            return state;
    }
}