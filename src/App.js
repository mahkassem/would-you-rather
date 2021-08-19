import './App.css'
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { Fragment } from 'react';
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom';
import AppNav from './components/AppNav'
import HomePage from './pages/HomePage'
import Signin from './components/Signin';
import QuestionPage from './pages/QuestionPage';
import NewQuestion from './components/NewQuestion';
import LeaderBoardPage from './pages/LeaderBoardPage';
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import LoadingBar from 'react-redux-loading'
import ProtectedRoute from './components/ProtectedRoute';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {!this.props.loading &&
            <div>
              <AppNav />
              <Container>
                <Route path='/login'>
                  {this.props.authedUser ? <Redirect to='/' /> : <Signin />}
                </Route>
                <ProtectedRoute exact path='/' component={HomePage} />
                <ProtectedRoute path='/new' component={NewQuestion} />
                <ProtectedRoute path='/question/:id' component={QuestionPage} />
                <ProtectedRoute path='/leader-board' component={LeaderBoardPage} />
              </Container>
            </div>}
        </Fragment>
      </Router>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(App);
