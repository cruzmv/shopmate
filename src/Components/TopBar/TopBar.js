import React from 'react'
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import {Link} from "react-router-dom";
import {TextRed, TextWhite} from '../Symbols/logos'
import {SearchBlack, SearchWhite, BagBlack, BagWhite, BurgerRed, BurgerWhite} from '../Symbols/Icons'
import {NumberRed, NumberWhite} from '../Symbols/Controls'

class TopBar extends React.Component{
    textLogo(){
        if(this.props.skin.substring(0,this.props.skin.indexOf("-")) === 'white'){
            return(
                <TextRed />
            )
        } else {
            return(
                <TextWhite />
            )
        }
    }
    render(){
        const bgColor = 'bg-'+this.props.skin.substring(0,this.props.skin.indexOf("-"))
        return(
            <div id="topbar">
                <div id="topbar-bg" className={bgColor}>
                    <Container>
                        <Row id="topbarrow">
                            <Col md={4} id="logo">
                                {this.textLogo()}
                            </Col>
                            <Col md={6} id="menu">
                                <MenuShop skin={this.props.skin} departament={this.props.departament}/>
                            </Col>
                            <Col md={2} id="iconsTop">
                                <TopIcons skin={this.props.skin}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

class MenuShop extends React.Component{

    render(){
        const foreColor = this.props.skin.substring(0,this.props.skin.indexOf("-")) === 'white' ? 'linkMenu-black' : 'linkMenu-white'
        const hideMenu = this.props.skin.substring(this.props.skin.indexOf("-")+1) === "3" && "hide"
        const menuItens = this.props.departament.map(menus =>
            <Link key={menus.department_id} to={ "/Web2/id:" + menus.department_id } className={"linkMenu "+ foreColor + " " + hideMenu}>
                {menus.name}
            </Link>
        )

        return(
                <Navbar bg="bg" expand="lg" >
                    <Navbar.Collapse>
                        {menuItens}
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}

class TopIcons extends React.Component{
    skinID(){
        return this.props.skin.substring(this.props.skin.indexOf("-")+1)        
    }
    searchIcon(){
        if(this.props.skin.substring(0,this.props.skin.indexOf("-")) === 'white'){
            return(
                <SearchBlack />
            )
        } else {
            return(
                <SearchWhite />
            )
        }
    }

    bagIcon(){
        if(this.props.skin.substring(0,this.props.skin.indexOf("-")) === 'white'){
            return(
                <BagBlack />
            )
        } else {
            return(
                <BagWhite />
            )
        }
    }

    numberIcon(){
        if(this.props.skin.substring(0,this.props.skin.indexOf("-")) === 'white'){
            return(
                <NumberRed number="1"/>
            )
        } else {
            return(
                <NumberWhite number="1" />
            )
        }
    }

    burderIcon(){
        if(this.props.skin.substring(0,this.props.skin.indexOf("-")) === 'white'){
            return (<BurgerRed />)
        } else {
            return (<BurgerWhite />)
        }
    }

    render(){
        if(this.skinID() === "3"){
            return(
                <div>
                    {this.burderIcon()}
                </div>
            )
        } else {
            return(
                <div>
                    {this.searchIcon()}
                    {this.bagIcon()}
                    <div id="numbag">
                        {this.numberIcon()}
                    </div>
                </div>
            )
        }
    }
}

export default TopBar