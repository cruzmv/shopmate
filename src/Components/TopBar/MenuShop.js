import React from 'react'
import { Navbar } from 'react-bootstrap'
import {Link} from "react-router-dom";

class MenuShop extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            menuIsOpened: false,
            category: props.category
        }
    }

    DropDownHandleMenu(depID,clickHandle){
        if( this.props.skin.substring(this.props.skin.indexOf("-")+1) === "footer" ){
            return null
        }else{
            const divDrop = document.getElementById("dropdown2")
            divDrop.classList.remove("hide")
            this.setState((prevState) =>{
                return {menuIsOpened: !prevState.menuIsOpened}
            })
            clickHandle(depID)
        }

    }

    render(){
        const foreColor = this.props.skin.substring(0,this.props.skin.indexOf("-")) === 'white' ? 'linkMenu-black' : 'linkMenu-white'
        const hideMenu = (this.props.skin.substring(this.props.skin.indexOf("-")+1) === "3" && this.props.direction !== "vertical" )  ? "hide" : ""
        var verticalMenu = this.props.direction === "vertical" ? "flex-column" : ""
        verticalMenu = this.props.direction === "center" ? "justifyCenter" : ""
        const footerID = this.props.skin.substring(this.props.skin.indexOf("-")+1) === "footer" ? "footer-menu" : "footer"
        const menuClass = this.props.direction === "vertical" ? "linkMenu-vertical" : "linkMenu"
        const menuLinkClass = this.props.skin.substring(this.props.skin.indexOf("-")+1) === "footer" ? "footerMenuLink" : ""
        const menuItens = this.props.departament.map(menus =>
            <Link key={menus.department_id} 
                  to={ "/Web2/departament:" + menus.department_id } 
                  onMouseOver ={()=> this.DropDownHandleMenu( menus.department_id, this.props.menuHandle )}
                  className={menuClass +" "+ foreColor +" "+ hideMenu+" "+menuLinkClass}>
                {menus.name}
            </Link>
        )

        return(
                <Navbar id={footerID} bg="bg" expand="lg" className={verticalMenu} >
                    {/*<Navbar.Collapse>*/}
                        {menuItens}
                    {/*</Navbar.Collapse>*/}
                </Navbar>
        )
    }
}

export default MenuShop