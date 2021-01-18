import {
    LOADING, LOADED
} from '../types';


export function loadingAction(){
    return dispatch => {
        dispatch({
            type: LOADING
        })
    }
}

export function loadedAction(){
    return dispatch => {
        dispatch({
            type: LOADED
        })
    }
}

// crear nuevos productos
// export function crearNuevoProductoAction(producto){
//     return (dispatch) => {
//         dispatch(agregarProducto());
//     }
// }

// const agregarProducto = () => ({
//     type: AGREGAR_PRODUCTO
// });

