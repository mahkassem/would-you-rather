import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'

class QuestionPreview extends Component {
    /**TODO: display minimal question
     * details in the QuestionsContainer
     */
    render() {
        const { question } = this.props
        return (question && <Col className='auto'>
            <h5 className='question-title'>Would you rather</h5>
            <p>
                ..{question.optionOne.text.substring(0,10)}..or..{question.optionTwo.text.substring(0,10)}..
            </p>
            <div className='d-grid gap-2'>
                <Link to={`/question/${question.id}`} className='btn btn-outline-primary'>View Poll</Link>
            </div>
        </Col>
        )
    }
}

export default QuestionPreview