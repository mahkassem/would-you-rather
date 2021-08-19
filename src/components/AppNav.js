import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { Fragment } from 'react';
import { unsetAuthedUser } from '../actions/authedUser';

class AppNav extends Component {
    handleLogout = () => {
        const { dispatch } = this.props
        dispatch(unsetAuthedUser())
        this.props.history.push('/login')
    }

    render() {
        const { authedUser, users } = this.props
        return (
            <Navbar className='app-nav' expand='lg'>
                <Container>
                    <Navbar.Brand><b>Woud You Rather</b></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav variant="pills" defaultActiveKey='/'>
                            <NavLink to='/' exact={true} activeClassName='active' className='nav-link nav'>Home</NavLink>
                            <NavLink to='/add' activeClassName='active' className='nav-link nav'>New Question</NavLink>
                            <NavLink to='/leaderboard' activeClassName='active' className='nav-link nav'>Leader Board</NavLink>
                        </Nav>
                        <span className='spacer'></span>
                        {authedUser &&
                            <Fragment>
                                <Navbar.Text>
                                    Hello,
                                    <span className="user-name">
                                        {(users[authedUser].name).split(' ')[0].trim()}
                                    </span>
                                </Navbar.Text>
                                <Image
                                    src={users[authedUser].avatarURL}
                                    className='nav-avatar'
                                    alt={users[authedUser].name + ' avatar'}
                                    width='40' roundedCircle />
                                <Button variant='outline-secondary' onClick={this.handleLogout}>Logout</Button>
                            </Fragment>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        authedUser: authedUser,
        users: users,
    }
}

export default withRouter(connect(mapStateToProps)(AppNav))