import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { setAuthedUser } from '../actions/authedUser'

class Signin extends Component {
    state = {
        id: null,
    }

    handleSelectUser = (key) => {
        this.setState({ id: key })
    }

    /**TODO: signin the selected user */
    handleLogin = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        const { id } = this.state
        dispatch(setAuthedUser(id))
    }

    render() {
        const { id } = this.state
        return (
            <Container className='app-container'>
                <Row className='justify-content-center'>
                    <Col md='auto'>
                        <Card className='text-center'>
                            <Card.Header>Welcome To WYR Game</Card.Header>
                            <Card.Body>
                                <Card.Title>Let's Play</Card.Title>
                                <Card.Text>
                                    Please choose an account to continue.
                                </Card.Text>
                                <div className='animated-avatars'></div>
                                <ul className='user-avatar-select'>
                                    {this.props.users.map((user) => (
                                        <li key={user.id}
                                            className={id === user.id ? 'selected' : ''}
                                            onClick={() => this.handleSelectUser(user.id)}
                                        >
                                            <Image src={user.avatarURL} className='nav-avatar' alt={user.name + ' avatar'} width='40' roundedCircle />
                                            <span>{user.name}</span>
                                        </li>
                                    ))}
                                </ul>
                                {id && <div className='card-actions d-grid gap-2'>
                                    <Button variant='primary' onClick={this.handleLogin}>Signin</Button>
                                </div>}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users: Object.values(users)
    }
}

export default connect(mapStateToProps)(Signin)