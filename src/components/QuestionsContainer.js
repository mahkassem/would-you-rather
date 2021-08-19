import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import Question from './Question'

class QuestionContainer extends Component {
    state = {
        answeredQuestions: false,
    }

    handleShowQuestions = (answered) => {
        this.setState({ answeredQuestions: answered })
    }

    /**TODO: toggle display unanswered
     * or answered questions
     */
    handleQuestionNav = (id) => {
        this.props.history.push(`/question/${id}`);
    }
    /**TODO: determine if question is
     * answered or not
     * */

    isAnsweredQuestion(id) {
        const { authedUser, users } = this.props;
        if (authedUser)
            return users[authedUser].answers[id] ? true : false;
    }

    render() {
        const { answeredQuestions } = this.state
        const { sortedQuestions } = this.props
        // console.log(questions)
        return (
            <Container className='questions-container'>
                <Card>
                    <Card.Header>
                        <Nav fill variant="tabs">
                            <Nav.Item>
                                <Nav.Link onClick={() => this.handleShowQuestions(false)} className={!answeredQuestions ? 'active' : ''}>Unaswered Questions</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => this.handleShowQuestions(true)} className={answeredQuestions ? 'active' : ''}>Aswered Questions</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        {sortedQuestions.map((question) => (
                            answeredQuestions ?
                                this.isAnsweredQuestion(question.id) && <Question key={question.id} question={question} preview={true} />
                                : !this.isAnsweredQuestion(question.id) && <Question key={question.id} question={question} preview={true} />

                        ))}
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

function mapStateToProps({ questions, authedUser, users }) {
    return {
        sortedQuestions: Object.values(questions).sort((a, b) => questions[b.id].timestamp - questions[a.id].timestamp),
        authedUser: authedUser,
        users: users,
    }
}

export default connect(mapStateToProps)(QuestionContainer)