import './App.css';
import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GlobalContext from '@common/global-context';
import { renderAllRoutes } from '@routes/route-loader';

interface AppProps {
    routes?: any;
}

const App = props => {
    const globalContext = {};
    const routes = renderAllRoutes(props.routes);

    return (
        <GlobalContext.Provider value={globalContext}>
            <Switch
                onUpdate={setTimeout(() => {
                    document.documentElement.scrollTop = document.body.scrollTop = 0;
                }, 0)}
            >
                {routes}
            </Switch>
        </GlobalContext.Provider>
    );
};

export default App;
