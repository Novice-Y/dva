import React from "react";
import MapRoute from "./Maproute";
import routes from "./config.route";

const Routeview = props => {
    return <MapRoute routes={routes} {...props} />;
};

export default Routeview;
