import React from 'react';
import { Col, Row } from 'reactstrap'
const FruitData = (props) => {
    const { index, value } = props
    console.log('propsss', props, value.image, require('../../assets/img/' + value.image))
    return <Col className={value.bg} sm={12} xs={12} lg={12} md={12} >
        <Row className={index % 2 == 0 ? 'flex-row-reverse' : ""}>
            <Col sm={4} xs={12} lg={6} md={6} className={index % 2 == 0 ? "text-right" : 'text-left'}>
                <img className='image-dimensions' src={'/assets/img/' + value.image} />
            </Col>
            <Col sm={8} xs={12} lg={6} md={6} className='row text-center' >
                <Col className='align-self-center'>
                    <h2 className={`align-middle ${value.text} title-font`}>{value.title}</h2>
                    <h6 className={`align-middle ${value.bg ? "text-white" : "text-muted"}`}>{value.subtitle}</h6>
                </Col>

            </Col>

        </Row>
    </Col>
}
export default FruitData