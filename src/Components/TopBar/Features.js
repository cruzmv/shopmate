import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {IconCheckRed, IconMirrorRed, IconBoxRed, IconCardRed} from '../Symbols/Icons'

class Feature extends React.Component{
    render(){
        const bgColor = this.props.skin === "white" ? "BackColorWhite" : "BackColorGrey"
        return(
            <div id="features">
                <div id="features-bg" className={bgColor}>
                    <Container>
                        <Row>
                            <Col md={3}>
                                <div className="featureAlign">
                                    <IconCheckRed />
                                    <label id="guaranteeo">Guarantee of quality</label>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="featureAlign">
                                    <IconMirrorRed />
                                    <label id="trybeforey">Try before you buy</label>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="featureAlign">
                                    <IconBoxRed />
                                    <label id="freeshippi">Free shipping</label>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="featureAlign">
                                    <IconCardRed />
                                    <label id="payafterde">Pay after delivery</label>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Feature