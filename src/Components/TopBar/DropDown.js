import React from 'react'
import {Link} from "react-router-dom";
import {ButtonMedWhite} from '../Symbols/Buttons'
import { Container, Row, Col } from 'react-bootstrap'
import MenuShop from './MenuShop'

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
    constructor(){
        super()
        this.state = {
            menuIsOpened: false
        }
        this.handleClickOutSide = this.handleClickOutSide.bind(this)
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutSide)
    }
    
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside)
    } 

    handleClickOutSide(event){
        document.getElementById("dropdown2").classList.add("hide")
        this.setState({ menuIsOpened: false })
    }

    onMouseOverHandle(description,id){
        const textDropDown = document.getElementById("textDropDown")
        if(id===undefined){
            textDropDown.innerHTML = description
        } else {
            const dep = this.props.departament.filter(d => d.department_id === id)
            if(dep.length>0){
                textDropDown.innerHTML = dep[0].description
            }
        }
        
    }



    render(){
        const skinID = this.props.skin.substring(this.props.skin.indexOf("-")+1)
        const menuItens = this.props.category.rows.map(menus =>
            <p key={menus.category_id}>
                <Link to={ "/Web2/category:" + menus.category_id } 
                      className={"categoryMenu " + skinID==="1" ? "colorWhite" : "colorDarkGrey" }
                      onMouseOver ={()=> this.onMouseOverHandle(  menus.description )}>
                    {menus.name}
                </Link>
            </p>
        )

        const bgColor = this.props.skin.substring(this.props.skin.indexOf("-")+1) === "1" ? "dropdown2-bg-grey" : "dropdown2-bg-black"
        return(
            <div id="dropdown2" className="hide">
                <div id={bgColor}>
                    <div className="padingTop40px">
                        <Container>
                            <Row>
                                <Col md={3}>
                                    {menuItens}
                                </Col>
                                <Col md={9}>
                                    <div id="contentDropdown2" >
                                        <label id="textDropDown" className={skinID==="1" ? "colorDarkGrey" : "colorWhite"}>
                                            {this.onMouseOverHandle(null,this.props.dep_id)}
                                        </label>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}


export {DropDown1, DropDown2}