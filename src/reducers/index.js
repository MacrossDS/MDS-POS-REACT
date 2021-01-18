import {combineReducers} from  'redux'
import ProductosReducer from './ProductosReducer';
import SesionReducer from './SesionReducer';
import LoadingReducer from './LoadingReducer';


export default combineReducers({
    productos: ProductosReducer,
    sesion: SesionReducer,
    loading: LoadingReducer
})