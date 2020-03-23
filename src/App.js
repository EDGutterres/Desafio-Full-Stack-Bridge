import React, { useState } from "react";
import "./App.css";
import {
  Container,
  Header
} from "semantic-ui-react";
import { NumberForm } from "./components/NumberForm";

function App() {
  return (
    <div className="app">
      <Container style={{ marginTop: 40 }}>
        <Header size="huge">Calculadora de divisores</Header> <br />
        <NumberForm/>
      </Container>
    </div>
  );
}
export default App;
