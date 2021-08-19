import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Question from '../components/Question'
import { connect } from 'react-redux'
import NotFound from '../components/NotFound'
import { Route } from 'react-router-dom'

class QuestionPage extends Component {
    getQuestionId = () => {

    }
    render() {
        const { question } = this.props
        if(!question) {
            return (
                <Route component={NotFound} />
            )
        }
        return (
            <Container className='app-container'>
                <Row className="justify-content-center">
                    <Col md="auto">
                        <Question question={question} preview={false} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps({ questions }, props) {
    const { question_id } = props.match.params
    return {
        question: questions[question_id]
    }
}

export default connect(mapStateToProps)(QuestionPage)