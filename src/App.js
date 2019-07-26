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
      isLoading: true
    }
  }


  /*
  componentWillUpdate(nextProps, nextState){
    localStorage.setItem('departament', JSON.stringify(nextState.departament))

    //console.log(JSON.stringify(nextState.departament))
    //console.log(localStorage.getItem('departament'))

    //if(){

    //}
    //localStorage.setItem('departament', JSON.stringify(nextState.departament))
    localStorage.getItem('departament') && this.setState({
      departament: JSON.parse(localStorage.getItem('departament'))
    })
  }

  componentDidMount(){
    // TODO: turn into REDUX
    
    //console.log(localStorage.getItem('departament'))

    if(!localStorage.getItem('departament')){
      fetch("https://backendapi.turing.com/departments")
          .then(response => response.json())
          .then(result =>  {
              this.setState({
                  departament: result,
                  isLoading: true
              })
      })
      console.log("fething")
    } else {
      console.log("usando do storage")
    }


  }
  */

  componentWillMount() {
    localStorage.getItem('departament') && this.setState({
      departament: JSON.parse(localStorage.getItem('departament')),
      isLoading: false
    })
  }
  

  componentDidMount(){
    // TODO: turn into REDUX
    
    if(!localStorage.getItem('departament')){
      this.fetchData()
    }
    
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('departament', JSON.stringify(nextState.departament))
    localStorage.setItem('departamentDate', Date.now())
  }
  
  fetchData(){
    fetch("https://backendapi.turing.com/departments")
        .then(response => response.json())
        .then(result =>  {
            this.setState({
                departament: result,
                isLoading: false
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
