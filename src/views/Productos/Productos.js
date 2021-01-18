import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import { crearNuevoProductoAction } from '../../actions/ProductosActions';
// import {iniciarSesionAction} from '../../actions/SesionActions';
import {loadingAction, loadedAction} from '../../actions/LoadingActions';


const NuevoProducto = () => {
    
    //  utilizar el hook de redux para poder llamar a los actions
    const dispatch = useDispatch();
    
    // mandar a llamar al action mediante dispatch
    // const agregarProducto = (producto) =>  dispatch(crearNuevoProductoAction(producto))
    // const iniciarSesion = (sesion) => dispatch(iniciarSesionAction(sesion));
    const loading = () => dispatch(loadingAction());
    const loaded = () => dispatch(loadedAction());

    const submitHandler = (e) => {
        // let producto = {
        //     name: "laptop",
        //     price: 1000
        // }

        loading();
        
        setTimeout(() => {
            loaded();
        }, 3000);
        
        
        // iniciarSesion({
        //     data: {
        //         name: "paco",
        //         id: "aksjdnksd123"
        //     },
        //     token: "asklaldsasdladsljadjaskjkdjaslsd"
        // })

        
        // agregarProducto(producto);
    }


    return (
        <>
            <h1>Nuevo producto</h1>
            <button onClick={submitHandler}>Cargar</button>
        </>
    );
}
 
export default NuevoProducto;