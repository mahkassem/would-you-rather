import React, { Component } from 'react'
import QuestionContainer from '../components/QuestionsContainer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class HomePage extends Component {
    render() {
        return (
            <Container className='app-container'>
                <Row className="justify-content-center">
                    <Col md="auto">
                        <QuestionContainer />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default HomePage