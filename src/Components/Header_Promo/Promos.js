import React from 'react'
import {ButtonMedWhite, ButtonMedRed} from '../Symbols/Buttons'
import {BadgesGreen, BadgesRed} from '../Symbols/Badges'
import { Container, Row, Col} from 'react-bootstrap'

class Hero1 extends React.Component{
    render(){
        return(
                <div id="hero1">
                    <div id="hero1-bg">
                        <div id="hero1-bitmap">
                            <div className="hero1-itens paddingTop8Percent">
                                <label id="background">
                                    Background <br/>development
                                </label>
                                <label id="and">
                                    and
                                </label>
                            </div>
                            <div className="hero1-itens">
                                <label id="convergent">
                                    Convergent the dictates of the<br />
                                    consumer: background and
                                </label>
                            </div>
                            <div className="hero1-itens paddingTop20px">
                                <ButtonMedWhite text="Call to Action"/>
                            </div>
                        </div>
                    </div>
                </div>
              )
    }
}

class FullWidth extends React.Component{
    render(){
        return(
            <div id="fullwidth1">
                <div id="fullwidth1-bg">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

class FullWidth1 extends React.Component{
    render(){
        return(
                <Container className="fitContent">
                    <Row>
                        <Col md={1}>
                            <BadgesGreen text="SALE"/>
                        </Col>
                        <Col md={4}>
                            <img id="fullwidth1-bitmap" src={'./Images/images-bag.png'} alt="" />
                        </Col>
                        <Col md={7}>
                            <div className="veraBradle-itens">
                                <label id="veraBradle">
                                    Vera Bradley
                                </label>
                                <label id="veraBradle-carrytheda">
                                    Carry the day in style with this extra-large tote crafted in our chic<br />
                                    B.B. Collection textured PVC. Featuring colorful faux leather trim,<br />
                                    this tote offers a roomy interior plus just enough perfectly placed<br />
                                </label>
                                <p/>
                                <ButtonMedRed text="Shop Now"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
        )
    }
}

class FullWidth2 extends React.Component{
    render(){
        return(
            <div id="fullwidth2-bitmap" className="fitContent featureAlign justifyCenter">
                <div>
                    <label id="fullwidth2-newArrival">New Arrival</label>
                    <label id="bethefirst">Be the first</label>
                    <div className="fitContent featureAlign justifyCenter padingTop20px">
                        <ButtonMedWhite text = "View All"/>
                    </div>
                </div>
            </div>
        )
    }
}

class FullWidth3 extends React.Component{
    render(){
        return(
            <div id="fullwidth3-bitmap">
                <div className="paddingTopLeft50x70px">
                    <label id="converse">Converse</label>
                    <label id="exploresty">
                        Explore styles tough enough to<br />
                        handle all your workouts<br />
                    </label>
                    <ButtonMedWhite text = "Shop Brand"/>
                </div>
            </div>
        )
    }
}

class Block123 extends React.Component{
    render(){
        return(
            <div id="block123">
                <div id="block123-bg">
                    <div id="block123-bitmap">
                        <div className="block123-itens">
                            <label id="bigSummerS">
                                Big Summer Sale
                            </label>
                            <label id="upto90disc">
                                Up to 90% discount
                            </label>
                            <ButtonMedWhite text="Shop Sale"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class OneThirty extends React.Component{
    render(){
        return(
            <div id="oneoneThirty">
                <div id="oneoneThirty-bg">
                    {this.props.children}
                </div>
            </div>
        )

    }
}

class Block1 extends React.Component{
    render(){
        return(
            <div className="fitContent">
                <div className="alignLeftCorner20x20px">
                    <BadgesRed text="NEW"/>
                </div>
                
                <div className="fitContent featureAlign justifyCenter">
                    <div>
                        <div className="fitContent featureAlign justifyCenter">
                            <img id="block1-img" src={'./Images/images-short.png'} alt="" />
                        </div>
                        <label id="shorts">Shorts</label>
                        <label id="checkoutne">
                            Check out new<br />
                            arrival
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

class Block2 extends React.Component{
    render(){
        return(
            <div id="block2-color" className="fitContent featureAlign justifyCenter">
                <div>
                    <label id="autumn">Autumn</label>
                    <label id="willcomeag">Will came again</label>
                </div>
            </div>
        
        )
    }
}

class Block3 extends React.Component{
    render(){
        return(
            <div id="block3-bitmap" className="fitContent featureAlign justifyCenter">
                <div id="block3-color" className="fitContent featureAlign justifyCenter">
                    <div>
                        <label id="takealook">Take a look</label>
                        <label id="newarrival">New arrival</label>
                    </div>
                </div>
            </div>
        )
    }
}

class Block4 extends React.Component{
    render(){
        return(
            <div id="block4-color" className="fitContent featureAlign justifyCenter">
                <label id="collection">
                    Collection textured PVC.<br />
                    Featuring colorful faux<br />
                    leather trim.
                </label>
            </div>
        )
    }
}

class Block5 extends React.Component{
    render(){
        return(
            <div id="block5-color" className="fitContent featureAlign justifyCenter">
                <div>
                    <label id="wOW">WOW</label>
                    <label id="checkWHAT">Check<br />WHAT!</label>
                </div>
            </div>
        )
    }
}

class Block6 extends React.Component{
    render(){
        return(
            <div id="block6-bitmap">
                <div id="block6-color" className="fitContent featureAlign justifyCenter">
                    <div>
                        <label id="wOW">WOW</label>
                        <label id="checkWHAT">Check<br />WHAT!</label>
                    </div>
                </div>
            </div>
        )
    }
}


export {Hero1, FullWidth, FullWidth1, FullWidth2, FullWidth3, Block123, OneThirty, Block1, Block2, Block3, Block4, Block5, Block6 }