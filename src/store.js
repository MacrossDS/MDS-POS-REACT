import { createStore, applyMiddleware, compose } from "redux";
import Cookies from 'universal-cookie';
import thunk from "redux-thunk";
import reducer from "./reducers";

const cookies = new Cookies();

const saveState = (state) => {
    cookies.set('__STATE__', JSON.stringify(state), {path: "/"})
};

const loadState = () => {
    let state = cookies.get('__STATE__') 
    return state ? state : {}
}

const initialState = loadState() || {};

const store = createStore(
    reducer,
    initialState,
    compose(
        applyMiddleware(thunk),
        typeof window === "object" &&
            window.__REDUX_DEVTOOLS_EXTENSION__ !== undefined
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : () => {}
    )
);

store.subscribe(() => {
    saveState(store.getState());
});


export default store;
