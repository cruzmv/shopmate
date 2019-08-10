import React from 'react'
import {SearchBlack, SearchWhite, IconCloseSmallBlack, IconCloseSmallWhite } from '../Symbols/Icons'

class EmailBox extends React.Component{
    IconSearch(hideSearchBox){
        if(hideSearchBox === ""){
            if(this.props.skin.substring(0,this.props.skin.indexOf("-")) === 'white'){
                return(<SearchBlack position="searchBox-lupa-position"/>)
            } else {
                return(<SearchWhite position="searchBox-lupa-position"/>)
            }
        }
    }

    IconClose(hideSearchBox){
        if(hideSearchBox===""){
            if(this.props.skin.substring(0,this.props.skin.indexOf("-")) === 'white'){
                return(<IconCloseSmallBlack position="searchBox-close-position" />)
            } else {
                return(<IconCloseSmallWhite position="searchBox-close-position" />)
            }
        }
    }
    render(){
        //const bgColor = this.props.skin.substring(0,this.props.skin.indexOf("-")) === 'white' ? "searchBox-bg-gray" : "searchBox-bg-white"
        const hideSearchBox = this.props.skin.substring(this.props.skin.indexOf("-")+1) !== "4" ? "hide" : ""
        return(
            <div id="searchBox" >
                <input type="text" className={"searchBox-bg "+hideSearchBox} placeholder="         Search anything" />
                {this.IconSearch(hideSearchBox)}
                {this.IconClose()}
            </div>
        )
    }
}


export default EmailBox