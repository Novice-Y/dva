import React from "react";
import { Router, Route, Redirect, Switch } from "dva/router";
const MapRoute = prop => {
    const { history, routes } = prop;
    return (
        <Router history={history}>
            <Switch>
                {routes.map(Item =>
                    Item.path ? (
                        Item.children ? (
                            <Route
                                key={Item.path}
                                path={Item.path}
                                component={props => (
                                    <Item.component {...props}>
                                        <MapRoute
                                            routes={Item.children}
                                            history={history}
                                        />
                                    </Item.component>
                                )}
                            />
                        ) : (
                            <Route
                                key={Item.path}
                                path={Item.path}
                                component={props => (
                                    <Item.component {...props} />
                                )}
                            />
                        )
                    ) : (
                        <Redirect key={Item.from} {...Item} />
                    )
                )}
            </Switch>
        </Router>
    );
};

export default MapRoute;
