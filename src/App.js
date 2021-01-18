import "./App.css";
import "antd/dist/antd.css";
import AppRouter from "./router";

import { Provider } from "react-redux";
import store from "./store";

export default () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
};
