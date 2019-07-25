import React from 'react';
import { BrowserRouter , Route } from "react-router-dom";
import { Container, Row } from 'react-bootstrap'
import './App.css';
import Web1 from "./Pages/Web1";
import Web2 from "./Pages/Web2";

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      departament: [],
      isLoaded: false
    }
  }


  componentDidMount(){


    fetch("https://backendapi.turing.com/departments")
        .then(response => response.json())
        .then(result =>  {
            this.setState({
                departament: result,
                isLoaded: true
            })
    })


  }


  render(){
    return(
      <BrowserRouter >
        <div>
          <Root>
            {/*<Route exact path={"/"} component={Web1} />*/}
            <Route exact path={"/"} render={props => <Web1 store={this.state} {...props} />} />
            <Route path="/Web2/:id" render={props => <Web2 store={this.state} {...props} />} />
          </Root>
        </div>
      </BrowserRouter >
    ) 
  }


}


class Root extends React.Component{
  render(){
    return (
      <Container id="bg-root">
          <Row>
              {this.props.children}
          </Row>
      </Container>
    );
  }

}
export default App;
