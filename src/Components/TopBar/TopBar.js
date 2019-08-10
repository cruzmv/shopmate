import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MenuShop from './MenuShop'
import SearchBox from './SearchBox'
import TopIcons from './TopIcons'
import {DropDown1, DropDown2} from './DropDown'
import {TextRed, TextWhite} from '../Symbols/logos'

class TopBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            category: props.category,
            DepIDSelected: 0
        }
        this.menuHandle = this.menuHandle.bind(this)
    }

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
            return(<DropDown2 skin={this.props.skin} 
                              dep_id={this.state.DepIDSelected}
                              departament={this.props.departament}
                              category={this.state.category}
                    />)
        }     
    }

    menuHandle(id){
        var newCategory = {count: 0, rows: []}
        var cat = this.props.category.rows.filter(row => row.department_id === id)
        newCategory.count = cat.length
        newCategory.rows = cat
        this.setState({ 
            category: newCategory,
            DepIDSelected: id
        })
    }

    render(){
        const bgColor = 'bg-'+this.props.skin.substring(0,this.props.skin.indexOf("-"))
        var topBarID = "topbar"
        var topBarBgID = "topbar-bg"
        if(this.props.imageID){
            topBarID = "topbarwith"
            topBarBgID = "topbarwith-bg"
        }
        return(
            <div>
            <div id={topBarID}>
                <div id={topBarBgID} className={bgColor}>
                    <Container>
                        <Row className="alignItemsCenter">
                            <Col md={3} id="logo">
                                {this.textLogo()}
                            </Col>
                            <Col md={4} id="menu">
                                <MenuShop skin={this.props.skin} 
                                          departament={this.props.departament} 
                                          menuHandle={this.menuHandle}
                                />
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

export default TopBar