import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useSelector} from 'react-redux'
import Login from "./views/Login/Login";
import NuevoProducto from './views/Productos/Productos';
import Loading from './components/loading/Loading';

const AppRouter = () => {
    return (
        <Router>
            <Loading />
            <Switch>
                <Route exact path={["/login", "/"]} component={Login} />
                <PrivateRoute path="/productos">
                    <NuevoProducto />
                </PrivateRoute>
            </Switch>
        </Router>
    );
};

function PrivateRoute({ children, ...rest }) {

    const sesion = useSelector(global => global.sesion)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                sesion.token ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

export default AppRouter;
