import React from "react";
import { Route, Redirect,useLocation } from "react-router-dom";

function PrivateRoutes ({rol,component:Component,...rest}) {
  return (
    <Route
      {...rest}
      render={props => {
        // console.log("las props PRIVATE ROUTES" + {...rest},props.location)
        if (rol == "admin") {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/photos",state: {from:props.location}}}
            />
          );
        }
      }}
    />
  );
}

// export default WrapperConsumer(PrivateRoutes)
export default PrivateRoutes