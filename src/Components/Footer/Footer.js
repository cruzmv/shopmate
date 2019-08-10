import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MenuShop from '../TopBar/MenuShop'
import {IconInstagramGray, IconPinterestGray, IconTwitterGray, IconFaceBookGray} from '../Symbols/Icons'
import {TextRed} from '../Symbols/logos'
import EmailBox from './EmailBox'
import {ButtonSmallRed, ButtonSmallWhite} from '../Symbols/Buttons'

class Footer extends React.Component{

    Questions(skinColor){
        const foreColor = skinColor === "white" ? "colorDarkGrey" : "colorWhite"
        return(
                <div>
                    <p><label className={"footerHeadLink "+foreColor}>QUESTIONS?</label></p>
                    <label className={"footerLink "+foreColor}>Help</label><br/>
                    <label className={"footerLink "+foreColor}>Track Order</label><br/>
                    <label className={"footerLink "+foreColor}>Returns</label><br/>
                </div>
        )
    }

    InStore(skinColor){
        const foreColor = skinColor === "white" ? "colorDarkGrey" : "colorWhite"
        return(
                <div>
                    <p><label className={"footerHeadLink "+foreColor}>WHAT'S IN STORE</label></p>
                    <label className={"footerLink "+foreColor}>Women</label><br/>
                    <label className={"footerLink "+foreColor}>Men</label><br/>
                    <label className={"footerLink "+foreColor}>Product A-Z</label><br/>
                    <label className={"footerLink "+foreColor}>Buy Gift Vouchers</label><br/>
                </div>
        )
    }

    followUs(skinColor){
        const foreColor = skinColor === "white" ? "colorDarkGrey" : "colorWhite"
        return(
                <div>
                    <p><label className={"footerHeadLink "+foreColor}>FOLLOW US</label></p>
                    <label className={"footerLink "+foreColor}>Facebok</label><br/>
                    <label className={"footerLink "+foreColor}>Twitter</label><br/>
                    <label className={"footerLink "+foreColor}>YouTube</label><br/>
                </div>
        )
    }

    footer1(skinColor){
        const bgColor = skinColor === "white" ? "BackColorWhite" : "BackColorBlack"
        const foreColor = skinColor === "white" ? "colorDarkGrey" : "colorWhite"
        return(
            <Container className={"paddingTop50px "+bgColor} >
                <Row>
                    <Col md={3}>
                        {this.Questions(skinColor)}
                    </Col>
                    <Col md={3}>
                        {this.InStore(skinColor)}
                    </Col>
                    <Col md={3}>
                        {this.followUs(skinColor)}
                    </Col>
                    <Col md={3}>
                        <p><label className={"footerHeadLink "+foreColor}>©2016 shopmate Ltd</label></p>
                    </Col>
                </Row>
            </Container>
        )
    }

    footer2(skinColor){
        return(
            <div className="paddingTop50px">
                <Container>
                    <Row className="displayFlex justifyCenter">
                            <MenuShop skin={skinColor+"-footer"}
                                    departament={this.props.departament}
                                    direction="center"
                            />
                    </Row>
                    <Row id="socialicon" className="displayFlex justifyCenter paddingTop20px">
                            <Col md={1}>
                                <IconInstagramGray />
                            </Col>
                            <Col md={1}>
                                <IconPinterestGray />
                            </Col>
                            <Col md={1}>
                                <IconTwitterGray />
                            </Col>
                            <Col md={1}>
                                <IconFaceBookGray />
                            </Col>
                    </Row>
                    <Row id="shopmateLt" className="displayFlex justifyCenter paddingTop40px">
                        <label>©2016 shopmate Ltd  •  Contact  • Privacy policy</label>
                    </Row>
                </Container>

            </div>
        )
    }

    footer3(skinColor){
        const bgColor = skinColor === "white" ? "bggrey-grey" : "bggrey-black"
        const foreColor = skinColor === "white" ? "colorDarkGrey" : "colorWhite"
        return(
            <div className="fitContent relativePosition">
                <Container className="paddingTop20px">
                    <Row>
                        <Col md={6}>
                            <Row>
                                <Col><label id="o800" className={foreColor}>1 800 2 000 000</label></Col>
                                <Col><label id="infoshopma" className={foreColor}>info@shopmate.com</label></Col>
                            </Row>
                            <Row className="marginTop50px">
                                <Col md={2}><IconInstagramGray /></Col>
                                <Col md={2}><IconPinterestGray /></Col>
                                <Col md={2}><IconTwitterGray /></Col>
                                <Col md={2}><IconFaceBookGray /></Col>
                            </Row>
                        </Col>
                        <Col md={2}>
                            {this.Questions(skinColor)}
                        </Col>
                        <Col md={2}>
                            {this.InStore(skinColor)}
                        </Col>
                        <Col md={2}>
                            {this.followUs(skinColor)}
                        </Col>
                    </Row>
                </Container>
                <div id="bggrey" className={"displayFlex justifyCenter alignCenter alignBottom "+bgColor}>
                    <label id="shopmateLt">©2016 shopmate Ltd</label>
                </div>
            </div>
        )
    }

    footer4(skinColor){
        const foreColor = skinColor === "white" ? "colorDarkGrey" : "colorWhite"
        return(
            <Container>
                <Row className="alignItemsCenter">
                    <Col><TextRed /></Col>
                    <Col><label id="aBOUT" className={foreColor}>ABOUT</label></Col>
                    <Col><label id="cONTACTUS" className={foreColor}>CONTACT US</label></Col>
                    <Col><label id="tERMSANDCO" className={"noWrap "+foreColor}>TERMS AND CONDITIONS</label></Col>
                    <Col><label className={"noWrap "+ (skinColor === "black" ? "hide" : "")}>©2016 shopmate Ltd</label></Col>
                </Row>
            </Container>
        )
    }

    createFooter(skinColor,skinID){
        if(skinID === "1"){
            return(this.footer1(skinColor))
        } else if(skinID === "2"){
            return(this.footer2(skinColor))
        } else if(skinID === "3"){
            return(this.footer3(skinColor))
        } else if(skinID === "4"){
            return(this.footer4(skinColor))
        }
    }

    render(){
        const skinColor = this.props.skin.substring(0,this.props.skin.indexOf("-"))
        const skinID = this.props.skin.substring(this.props.skin.indexOf("-")+1)
        var backColor = "BackColorWhite"
        var footerID = "footerbig"

        if (skinColor==="black"){
            backColor = "BackColorBlack"
        } else if (skinColor==="red"){
            backColor = "BackColorRed"
        }

        if(skinID === "4" ){
            footerID = "footersmall"
        }

        return(
            <div id={footerID}>
                <div id={footerID+"-bg"} className={backColor}>
                    {this.createFooter(skinColor,skinID)}
                </div>
            </div>
        )
    }
}

class FooterSub extends React.Component{

    subFooter1(){
        const bgColor = this.props.sub_id === "1" ? "bggrey-grey" : "BackColorRed"
        const foreColor = this.props.sub_id === "1" ? "colorDarkGrey" : "colorWhite"
        const buttom = () =>{
            if(this.props.sub_id === "1"){
                return(<ButtonSmallRed text="Subscribe"/>)
            } else {
                return(<ButtonSmallWhite text="Subscribe"/>)
            }
        }

        return(
            <div className={"fitContent "+bgColor}>
                <Container className="fitContent">
                    <Row className="alignItemsCenter fitContent">
                        <Col md={6}>
                            <label id="sUBSCRIBEF" className={"noWrap "+foreColor}>SUBSCRIBE FOR SHOP NEWS, UPDATES AND SPECIAL OFFER</label>
                        </Col>
                        <Col md={4}>
                            <EmailBox skin="white-4"/>
                        </Col>
                        <Col md={1}>
                            {buttom()}
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
    
    subFooter3(){
        return(
            <div className="fitContent BackColorGrey paddingTop40px textAlignCenter">
                <label id="discountfo">10% Discount for your subscription</label>
                <br />
                <label id="carrytheda">
                    Carry the day in style with this extra-large tote crafted in our<br />
                    chic B.B. Collection textured PVC. Featuring colorful faux<br />
                    leather trim, this tote offers a roomy interior.<br />
                </label>
                <br />
                <br />
                <div>
                    <Row className="justifyCenter">
                        <Col md={3}><EmailBox skin="white-4"/></Col>
                        <Col md={2}><ButtonSmallRed text="Subscribe"/></Col>
                    </Row>
                </div>
            </div>
        )
    }

    createFooter(){
        if(this.props.sub_id === "3"){
            return(this.subFooter3())
        } else {
            return(this.subFooter1())
        }
    }

    render(){
        const footerID = this.props.sub_id === "3" ? "footerbigSub" : "footersmall"
        return(
            <div id={footerID}>
                {this.createFooter()}
            </div>
        )
    }
}

class FooterContact extends React.Component{
    footerCto1(){
        return(
            <label id="cONTACTFOR">CONTACT FOR CUSTOMER SERVICE: 1 800 2 000 000</label>
        )
    }

    footerCto2(){
        return(
            <Row>
                <Col md={2}><IconInstagramGray /></Col>
                <Col md={2}><IconPinterestGray /></Col>
                <Col md={2}><IconTwitterGray /></Col>
                <Col md={2}><IconFaceBookGray /></Col>
            </Row>
        )
    }
    render(){
        const bgColor = this.props.cto_id === "1" ? "bggrey-grey" : "BackColorBlack"
        return(
            <div id="footersmall" className={"fitContent featureAlign justifyCenter "+bgColor}>
                {this.props.cto_id === "1" ? this.footerCto1() : this.footerCto2()}
            </div>
        )
    }
}

class FooterMap extends React.Component{
    footerMap1(){
        return(
                <div className="mapCircle">
                    Office 64<br/>
                    8 Colmore Row<br/>
                    Birmingham<br/>
                    England<br/>
                </div>
        )
    }

    footerMap2(){
        return(
            <div className="featureAlign">
                <img src="Icon/PIN.png" alt="" />
                <div className="pinCircle"></div>
                <div id="adress">
                    Office 64<br/>
                    8 Colmore Row<br/>
                    Birmingham<br/>
                    England<br/>
                </div>
            </div>
        )
    }

    render(){
        return(
            <div id="footerMap">
                {this.props.map_id === "1" ? this.footerMap1() : this.footerMap2()}
            </div>
        )
    }
}

export {Footer, FooterSub, FooterContact, FooterMap}