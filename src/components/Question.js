import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import CardAvatar from './CardAvatar'
import QuestionPreview from './QuestionPreview'
import QuestionResult from './QuestionResult'
import QuestionSubmit from './QuestionSubmit'
import { connect } from 'react-redux'

class Question extends Component {
    state = {
        id: null,
    }

    render() {
        const { question, preview, authedUser, users } = this.props
        /** TODO: determine if authedUser
         * id answer the question or not */
        const answered = authedUser.answers[question.id] ?? false
        /** TODO: get the author of
         * the question */
        const author = users[question.author]
        return (
            <Row className='question-card d-grid gap-2'>
                <Col className='auto'>
                    <Card>
                        <Card.Header>
                            {answered ? /** TODO: Show better UX text */
                                <strong>Asksed by {author.name}</strong>
                                : <strong>{author.name} asks:</strong>
                            }
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <CardAvatar src={author.avatarURL} alt={author.name} />
                                {preview ? /** TODO: determine weather question is in QuestionsContainer or inside QuestionPage */
                                    <QuestionPreview question={question} />
                                    : (answered ? /** TODO: Show answer question or results */
                                        <QuestionResult question={question} />
                                        : <QuestionSubmit question={question} />
                                    )
                                }
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row >
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        authedUser: users[authedUser],
        users: users,
    }
}

export default connect(mapStateToProps)(Question)