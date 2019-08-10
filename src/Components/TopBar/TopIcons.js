import React from 'react'
import {SearchBlack, SearchWhite, BagBlack, BagWhite, 
        BurgerRed, BurgerWhite, IconCloseBigWhite, IconCloseBigRed } from '../Symbols/Icons'
import {NumberRed, NumberWhite} from '../Symbols/Controls'


class TopIcons extends React.Component{
    
    constructor(){
        super()
        this.state = {
            menuIsOpened: false
        }
    }

    skinID(){
        return this.props.skin.substring(this.props.skin.indexOf("-")+1)        
    }

    searchIcon(){
        if(this.props.skin.substring(0,this.props.skin.indexOf("-")) === 'white'){
            return(
                <SearchBlack  />
            )
        } else {
            return(
                <SearchWhite  />
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

export default TopIcons
