import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const ProtectedRoute = ({
    path,
    component: Component,
    render,
    loggedIn,
    ...rest
}) => {
    /**TODO: to protect routes that
     * needs authedUsers */

    /** I got this from StackoverFlow */
    return (
        <Route
            path={path}
            {...rest}
            render={(props) => {
                if (loggedIn) {
                    return Component ? <Component {...props} /> : render(props);
                }
                return (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                );
            }}
        />
    );
};

const mapStateToProps = ({ authedUser }) => {
    return {
        loggedIn: authedUser ? true : false
    };
};

export default connect(mapStateToProps)(ProtectedRoute);