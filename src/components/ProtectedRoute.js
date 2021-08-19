import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = (props) => {
    const location = useLocation();
    const { loggedIn } = props;
    return loggedIn ? (
        <Route {...props} loading />
    ) : (
        <Redirect
            to={{
                pathname: '/login',
                state: { from: location }
            }}
        />
    );
}

const mapStateToProps = ({ authedUser }) => {
    return {
        loggedIn: authedUser ? true : false
    };
};

export default connect(mapStateToProps)(ProtectedRoute);