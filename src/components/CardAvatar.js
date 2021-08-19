import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'

class CardAvatar extends Component {
    render() {
        const { src, alt } = this.props
        return (
            <Col className='justify-content-center question-avatar-container' xs={false} lg='3'>
                <Image src={src} className='nav-avatar' alt={alt} width='100' roundedCircle />
            </Col>
        )
    }
}

export default CardAvatar