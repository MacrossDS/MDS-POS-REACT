import {
    INICIAR_SESION
} from '../types';


export function iniciarSesionAction(sesion){
    return dispatch => {
        dispatch({
            type: INICIAR_SESION,
            sesion
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

