import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux';

class QuestionResult extends Component {
    /**TODO: convert question votes to
     * percentage values
     */
    votesPercentage(a, b, total) {
        return {
            0: ((a.length * 100) / total).toFixed(),
            1: ((b.length * 100) / total).toFixed()
        }
    }
    render() {
        const { id, optionOne, optionTwo } = this.props.question
        const { myAnswers } = this.props
        const total = optionOne.votes.length + optionTwo.votes.length;
        const percentages = this.votesPercentage(optionOne.votes, optionTwo.votes, total);
        const myAnswer = myAnswers[id];

        return (
            <Col className='auto'>
                <h4 className='question-title'>Results</h4>
                <div className={'result' + (myAnswer === 'optionOne' ? ' answer' : '') + (percentages[0] > percentages[1] ? ' more' : '')}>
                    <h6>{optionOne.text}</h6>
                    <div className='result-bar'>
                        <div className='bar' style={{ width: percentages[0] + '%' }}><span>{percentages[0]}%</span></div>
                    </div>
                    <h6 className='text-center'>{optionOne.votes.length} out of {total} votes</h6>
                    <span className='your-answer'>
                        You
                    </span>
                </div>
                <div className={'result' + (myAnswer === 'optionTwo' ? ' answer' : '') + (percentages[1] > percentages[0] ? ' more' : '')}>
                    <h6>{optionTwo.text}</h6>
                    <div className='result-bar'>
                        <div className='bar' style={{ width: percentages[1] + '%' }}><span>{percentages[1]}%</span></div>
                    </div>
                    <h6 className='text-center'>{optionTwo.votes.length} out of {total} votes</h6>
                    <span className='your-answer'>
                        You
                    </span>
                </div>
            </Col >
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
        myAnswers: users[authedUser].answers
    }
}

export default connect(mapStateToProps)(QuestionResult)