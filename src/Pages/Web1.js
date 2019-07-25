import React from 'react'
import TopBar from '../Components/TopBar/TopBar'

class Web1 extends React.Component{
    render(){
        return(
            <div>
                <TopBar skin="red-3" departament={this.props.store.departament}/>   
            </div>
        )
    }
}

export default Web1