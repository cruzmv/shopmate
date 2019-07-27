import React from 'react'
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import {Link} from "react-router-dom";
import {TextRed, TextWhite} from '../Symbols/logos'
import {SearchBlack, SearchWhite, BagBlack, BagWhite, 
        BurgerRed, BurgerWhite, IconCloseSmallBlack, IconCloseSmallWhite, IconCloseBigWhite, IconCloseBigRed } from '../Symbols/Icons'
import {NumberRed, NumberWhite} from '../Symbols/Controls'
import {ButtonMedWhite} from '../Symbols/Buttons'

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

    dropDown(){
        if(this.props.skin.substring(0,this.props.skin.indexOf("-")) === 'red'){
            return(<DropDown1 skin={this.props.skin} departament={this.props.departament} />)
        } else {
            return(<DropDown2 skin={this.props.skin} departament={this.props.departament} />)
        }     
    }

    render(){
        const bgColor = 'bg-'+this.props.skin.substring(0,this.props.skin.indexOf("-"))
        return(
            <div>
            <div id="topbar">
                <div id="topbar-bg" className={bgColor}>
                    <Container>
                        <Row id="topbarrow">
                            <Col md={3} id="logo">
                                {this.textLogo()}
                            </Col>
                            <Col md={4} id="menu">
                                <MenuShop skin={this.props.skin} departament={this.props.departament} />
                            </Col>
                            <Col md={2}>
                                < SearchBox skin={this.props.skin} />
                            </Col>
                            <Col md={3} id="iconsTop">
                                <TopIcons skin={this.props.skin} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            {this.dropDown()}
            </div>
        )
    }
}

class MenuShop extends React.Component{

    render(){
        const foreColor = this.props.skin.substring(0,this.props.skin.indexOf("-")) === 'white' ? 'linkMenu-black' : 'linkMenu-white'
        const hideMenu = (this.props.skin.substring(this.props.skin.indexOf("-")+1) === "3" & this.props.direction !== "vertical" )  && "hide"
        const verticalMenu = this.props.direction === "vertical" ? "flex-column" : ""
        const menuClass = this.props.direction === "vertical" ? "linkMenu-vertical" : "linkMenu"
        const menuItens = this.props.departament.map(menus =>
            <Link key={menus.department_id} to={ "/Web2/id:" + menus.department_id } className={menuClass +" "+ foreColor +" "+ hideMenu}>
                {menus.name}
            </Link>
        )

        return(
                <Navbar bg="bg" expand="lg" className={verticalMenu} >
                    {/*<Navbar.Collapse>*/}
                        {menuItens}
                    {/*</Navbar.Collapse>*/}
                </Navbar>
        )
    }
}

class SearchBox extends React.Component{
    IconSearch(){
        if(this.props.skin.substring(0,this.props.skin.indexOf("-")) === 'white'){
            return(<SearchBlack position="searchBox-lupa-position"/>)
        } else {
            return(<SearchWhite position="searchBox-lupa-position"/>)
        }
    }

    IconClose(){
        if(this.props.skin.substring(0,this.props.skin.indexOf("-")) === 'white'){
            return(<IconCloseSmallBlack position="searchBox-close-position" />)
        } else {
            return(<IconCloseSmallWhite position="searchBox-close-position" />)
        }
    }
    render(){
        //const bgColor = this.props.skin.substring(0,this.props.skin.indexOf("-")) === 'white' ? "searchBox-bg-gray" : "searchBox-bg-white"
        const hideSearchBox = this.props.skin.substring(this.props.skin.indexOf("-")+1) !== "4" ? "hide" : ""
        return(
            <div id="searchBox" className={hideSearchBox}>
                <input type="text" className="searchBox-bg " placeholder="         Search anything" />
                {this.IconSearch()}
                {this.IconClose()}
            </div>
        )
    }
}


class TopIcons extends React.Component{
    constructor(){
        super()
        this.state = {
            menuIsOpened: false
        }
        //this.handleClickOutSide = this.handleClickOutSide.bind(this)
    }

    /*
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutSide)
    }
    
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside)
    } 

    handleClickOutSide(event){
        document.getElementById("dropdown1").classList.add("hide")
        this.setState({ menuIsOpened: false })
    }
    */

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

    burgerIcon(){
        if(this.state.menuIsOpened){
            if(this.props.skin.substring(0,this.props.skin.indexOf("-")) === 'red'){
                return(<IconCloseBigWhite />)
            } else {
                return(<IconCloseBigRed />)
            }
        } else {
            if(this.props.skin.substring(0,this.props.skin.indexOf("-")) === 'white'){
                return (<BurgerRed />)
            } else {
                return (<BurgerWhite />)
            }
        }
    }

    burdergHandleClick(e){
        e.preventDefault()
        var divDrop
        if(this.props.skin.substring(0,this.props.skin.indexOf("-")) === 'red'){
            divDrop = document.getElementById("dropdown1")
        } else {
            divDrop = document.getElementById("dropdown2")
        }
        if(this.state.menuIsOpened){
            divDrop.classList.add("hide")
        } else{
            divDrop.classList.remove("hide")
        }
        this.setState({menuIsOpened: !this.state.menuIsOpened})

    }

    render(){
        if(this.skinID() === "3"){
            return(
                <div className="cursorHandClick" onClick={e=> this.burdergHandleClick(e)} >
                    {this.burgerIcon()}
                </div>
            )
        } else {
            return(
                <div className="displayFlex">
                    {this.searchIcon()}
                    {this.bagIcon()}
                    {this.numberIcon()}
                </div>
            )
        }
    }
}

class DropDown1 extends React.Component{
    render(){
        return(
            <div id="dropdown1" className="hide">
                <div id="dropdown1-bg">
                    <Container>
                        <Row>
                            <Col>
                                <div id="dropdown1-text">
                                    <label id="backtothe">Back to the</label>
                                    <label id="earth">Earth</label>
                                    <label id="keepitligh">
                                        Keep it light and clean with this effortlessly chic, maritime inspired look.
                                    </label>
                                    <ButtonMedWhite text="Call to Action"/>
                                </div>
                            </Col>
                            <Col className="NoMargin">
                                <div id="dropdown-menu">
                                    <MenuShop skin="white-1" 
                                            direction="vertical"
                                            departament={this.props.departament} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

class DropDown2 extends React.Component{
    render(){
        return(
            <div id="dropdown2" className="hide">
                <div id="dropdown2-bg">

                </div>
            </div>
        )
    }
}




export {TopBar, MenuShop, TopIcons, DropDown1, DropDown2}