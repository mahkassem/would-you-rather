import './App.css'
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { Fragment } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
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
import NotFound from './components/NotFound';
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar style={{backgroundColor: 'rgb(56, 201, 80)'}}/>
          {!this.props.loading &&
            <div>
              <AppNav />
              <Container>
                <Switch>
                  <ProtectedRoute exact path='/' component={HomePage} loading />
                  <ProtectedRoute path='/add' component={NewQuestion} />
                  <ProtectedRoute path='/question/:question_id' component={QuestionPage} />
                  <ProtectedRoute path='/leaderboard' component={LeaderBoardPage} />
                  <Route path='/login' component={Signin} />
                  <Route component={NotFound} />
                </Switch>
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
