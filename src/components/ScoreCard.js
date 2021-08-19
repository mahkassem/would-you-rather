import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import CardAvatar from './CardAvatar'

class ScoreCard extends Component {

    /** TODO: Get Ordinal Number */
    ordinalNum = (n) => {
        return n + ['st', 'nd', 'rd'][((n + 90) % 100 - 10) % 10 - 1] || 'th'
    }

    /** TODO: Rank to className */
    rankToClass = (n) => {
        return n === 1 ? ' first' : (n === 2 ? ' second' : '');
    }

    render() {
        const { user, index } = this.props
        const answers = Object.keys(user.answers);
        const questions = user.questions;
        return (
            <Row className='score-card d-grid gap-2'>
                <Col className='auto'>
                    <Card>
                        <Card.Body>
                            <Row>
                                <CardAvatar src={user.avatarURL} alt={user.name + ' avatar'} />
                                <Col className='auto'>
                                    <span className={'score-rank' + this.rankToClass(index)}>
                                        <span>{this.ordinalNum(index)}</span>
                                    </span>
                                    <h4>{user.name}</h4>
                                    <div className='score-details'>
                                        <h6><span>Answered Questions</span><span>{answers.length ?? 0}</span></h6>
                                        <hr />
                                        <h6><span>Created Questions</span><span>{questions.length ?? 0}</span></h6>
                                    </div>
                                </Col>
                                <Col className='score-total' xs={false} lg='2'>
                                    <span>{questions.length + answers.length}</span>
                                    <h5>Score</h5>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row >
        )
    }
}

export default ScoreCard