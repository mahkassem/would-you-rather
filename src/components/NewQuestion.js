import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false,
    }
    handleCreate = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        const { optionOne, optionTwo } = this.state
        dispatch(handleAddQuestion(optionOne, optionTwo))
        this.setState({
            optionOne: '',
            optionTwo: '',
            toHome: true,
        })
    }
    handleChange = (e) => {
        e.preventDefault()
        const value = e.target.value
        const name = e.target.name;
        this.setState({ [name]: value });
    }
    render() {
        const { optionOne, optionTwo, toHome } = this.state
        return (
            toHome ? <Redirect to='/' /> :
                <Container className='app-container'>
                    <Row className="justify-content-center">
                        <Col md="auto">
                            <Container className='questions-container'>
                                <Card>
                                    <Card.Header className="text-center">
                                        <h4>Create New Question</h4>
                                    </Card.Header>
                                    <Card.Body>
                                        <Form>
                                            <Form.Text>
                                                <h6>Complete the question:</h6>
                                            </Form.Text>
                                            <br />
                                            <h5>Would you rather...</h5>
                                            <br />
                                            <Form.Group className="mb-3" controlId="formOptionOne">
                                                <Form.Control
                                                    type="test"
                                                    value={optionOne}
                                                    name='optionOne'
                                                    autoComplete='off'
                                                    onChange={this.handleChange}
                                                    placeholder="Enter first option text"
                                                />
                                            </Form.Group>
                                            <div className='divider'>
                                                <hr />
                                                <strong>OR</strong>
                                                <hr />
                                            </div>
                                            <Form.Group className="mb-3" controlId="formOptionTwo">
                                                <Form.Control
                                                    type="test"
                                                    value={optionTwo}
                                                    name='optionTwo'
                                                    autoComplete='off'
                                                    onChange={this.handleChange}
                                                    placeholder="Enter first option text"
                                                />
                                            </Form.Group>
                                            <div className='d-grid gap-2'>
                                                <Button variant="success" disabled={!optionOne || !optionTwo} onClick={this.handleCreate} type="submit">
                                                    Create
                                                </Button>
                                            </div>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Col>
                    </Row>
                </Container>
        )
    }
}

export default connect()(NewQuestion)