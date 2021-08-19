import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import notfound from '../assets/404.png'

class NotFound extends Component {
    render() {
        return (
            <Row className='justify-content-center'>
                <Image src={notfound} alt='404 Not Found' roundedCircle />
            </Row>
        )
    }
}

export default NotFound