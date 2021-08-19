import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ScoreCard from '../components/ScoreCard'

class LeaderBoardPage extends Component {
    render() {
        return (
            this.props.sortedUsers &&
            <Container className='app-container'>
                <Row className="justify-content-center">
                    <Col md="auto">
                        <h3>Player Rankings</h3>
                        <br />
                        {this.props.sortedUsers.map((user, index) => (
                            <ScoreCard key={user.id} index={index + 1} user={user} />
                        ))}
                    </Col>
                </Row>
            </Container>
        )
    }
}

function totalScore(user) {
    return Object.keys(user.answers).length + user.questions.length;
}

function mapStateToProps({ users }) {
    return {
        sortedUsers: Object.values(users).sort((a, b) => totalScore(users[b.id]) - totalScore(users[a.id])),
    }
}

export default connect(mapStateToProps)(LeaderBoardPage)