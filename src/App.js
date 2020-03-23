import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Header
} from "semantic-ui-react";
import { DivForm } from "./components/DivForm";

function App() {
  return (
    <div className="app">
      <Container style={{ marginTop: 40 }}>
        <Header size="huge">Calculadora de divisores</Header> <br />
        <DivForm/>
      </Container>
    </div>
  );
}
export default App;
