import React from 'react'
import {TopBar} from '../Components/TopBar/TopBar'
import Header from '../Components/TopBar/Header'

class Web1 extends React.Component{
    render(){
        return(
            <div>
                <Header skin="white" departament={this.props.store.departament}/>
                <Header skin="grey" departament={this.props.store.departament}/>
                <Header skin="black" departament={this.props.store.departament}/>

                <TopBar skin="white-1" departament={this.props.store.departament}/>
                <TopBar skin="white-3" departament={this.props.store.departament}/>
                <TopBar skin="white-4" departament={this.props.store.departament}/>

                <TopBar skin="red-1" departament={this.props.store.departament}/>
                <TopBar skin="red-3" departament={this.props.store.departament}/>
                <TopBar skin="red-4" departament={this.props.store.departament}/>

                <TopBar skin="black-1" departament={this.props.store.departament}/>
                <TopBar skin="black-3" departament={this.props.store.departament}/>
                <TopBar skin="black-4" departament={this.props.store.departament}/>
            </div>
        )
    }
}

export default Web1