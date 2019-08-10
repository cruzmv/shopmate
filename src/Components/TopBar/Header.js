import React from 'react'
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import {Link} from "react-router-dom"
import {BagBlack,BagWhite} from '../Symbols/Icons'
import {NumberRed} from '../Symbols/Controls'

class Header extends React.Component{
    bagIcon(){
        if(this.props.skin === 'black'){
            return(
                <BagWhite />
            )
        } else {
            return(
                <BagBlack />
            )
        }
    }

    render(){
        const bgColor = 'bg-'+this.props.skin
        return(
            <div id="header">
                <div id="header-bg" className={bgColor}>
                    <Container>
                        <Row className="alignItemsCenter">
                            <Col md={3}>
                                <SignInOrReg skin={this.props.skin}/>
                            </Col>
                            <Col md={5}>
                                <HeaderMenu skin={this.props.skin}/>
                            </Col>
                            <Col md={1}>
                                <Currency skin={this.props.skin}/>
                            </Col>
                            <Col md={1} id="iconsTop">
                                {this.bagIcon()}
                                <NumberRed number="1"/>
                            </Col>
                            <Col md={2}>
                                <YouBag skin={this.props.skin}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

class YouBag extends React.Component{
    render(){
        const fontColor = "font-" + (this.props.skin === "black" ? "white" : "black")
        return(
            <div id="yourbag" className={fontColor}>
                <label>Your bag: £3.99</label>
            </div>
        )
    }
}

class Currency extends React.Component{
    render(){
        const fontColor = "font-" + (this.props.skin === "black" ? "white" : "black")
        return(
            <div id="currency">
                <img src="../Icon/gbr.png" alt="" id="currency-flag" />
                <label id="currency-text" className={fontColor}>&nbsp;£ GBP</label>
            </div>
        )
    }
}

class HeaderMenu extends React.Component{
    render(){
        const fontColor = "font-" + (this.props.skin === "black" ? "white" : "black")
        return(
            <Navbar bg="bg" expand="lg" >
            <Navbar.Collapse>
                <Link to="/" className={"dailyDeals "+fontColor}>Daily Deals</Link>
                <Link to="/" className={"dailyDeals "+fontColor}>Sell</Link>
                <Link to="/" className={"dailyDeals "+fontColor}>Help & Contact</Link>
            </Navbar.Collapse>
        </Navbar>

        )
    }
}

class SignInOrReg extends React.Component{
    render(){
        const fontColor = "font-" + (this.props.skin === "black" ? "white" : "black")
        return(
            <div>
                <label id="hior" className={fontColor}>Hi!&nbsp;</label>
                <label id="signinRegister">Sign in&nbsp;</label>
                <label id="hior" className={fontColor}>or&nbsp;</label>
                <label id="signinRegister">Register</label>
            </div>
        )
    }
    
}

export default Header