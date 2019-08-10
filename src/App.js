import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import "./App.css";
import Web1 from "./Pages/Web1";
import Web2 from "./Pages/Web2";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      departament: [],
      category: [],
      isLoading: true
    };
  }

  componentWillMount() {
    localStorage.getItem("departament") &&
      this.setState({
        departament: JSON.parse(localStorage.getItem("departament")),
        isLoading: false
      });

    localStorage.getItem("category") &&
      this.setState({
        category: JSON.parse(localStorage.getItem("category")),
        isLoading: false
      });
  }

  componentDidMount() {
    // TODO: turn into REDUX

    if (!localStorage.getItem("departament")) {
      this.fetchDepartament();
    }

    if (!localStorage.getItem("category")) {
      this.fetchCategory();
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("departament", JSON.stringify(nextState.departament));
    localStorage.setItem("category", JSON.stringify(nextState.category));
  }

  fetchDepartament() {
    fetch("https://backendapi.turing.com/departments")
      .then(response => response.json())
      .then(result => {
        this.setState({
          departament: result,
          isLoading: false
        });
      });
  }

  fetchCategory() {
    fetch("https://backendapi.turing.com/categories")
      .then(response => response.json())
      .then(result => {
        this.setState({
          category: result,
          isLoading: false
        });
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Root>
            <Route
              exact
              path={"/"}
              render={props => <Web1 store={this.state} {...props} />}
            />
            <Route
              path="/Web2/:id"
              render={props => <Web2 store={this.state} {...props} />}
            />
          </Root>
        </div>
      </BrowserRouter>
    );
  }
}

class Root extends React.Component {
  render() {
    return (
      <Container id="bg-root">
        <Row>{this.props.children}</Row>
      </Container>
    );
  }
}

export default App;
