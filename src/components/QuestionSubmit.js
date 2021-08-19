import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'

class QuestionSubmit extends Component {
    state = {
        answer: null,
    }

    handleSelectAnswer = (e) => {
        const id = e.target.value;
        this.setState({ answer: id })
    }

    /**TODO: save submitted answer
     * to the question and update
     * user answers */
    handleSubmitAnswer = (e) => {
        e.preventDefault()
        const { answer } = this.state
        const { id } = this.props.question
        const { dispatch } = this.props
        dispatch(handleAnswerQuestion(id, answer))
    }

    render() {
        const { optionOne, optionTwo } = this.props.question
        return (
            <Col className='auto'>
                <h4 className='question-title'>Would you rather?</h4>
                <div className='answer-select'>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Check
                                className='checkBox'
                                type='radio'
                                label={optionOne.text}
                                value='optionOne'
                                id='1'
                                selected={true}
                                onChange={this.handleSelectAnswer}
                                name='answerGroup'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                className='checkBox'
                                type='radio'
                                label={optionTwo.text}
                                value='optionTwo'
                                id='2'
                                onChange={this.handleSelectAnswer}
                                name='answerGroup'
                            />
                        </Form.Group>
                    </Form>
                </div>
                <br />
                <div className='d-grid gap-2'>
                    <Button disabled={!this.state.answer} onClick={this.handleSubmitAnswer} variant='success'>Submit</Button>
                </div>
            </Col>
        )
    }
}

export default connect()(QuestionSubmit)