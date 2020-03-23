import React, { useState } from "react";
import "./App.css";
import {
  Container,
  Form,
  Input,
  Button,
  FormField,
  Header
} from "semantic-ui-react";
import "./components/NumberForm.js";
import { render } from "react-dom";

function App() {
  const [divList, setDivList] = useState([]);
  const [isPrime, setIsPrime] = useState();
  const [value, setValue] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    const data = { number: value };
    fetch("/calculate", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        setDivList(JSON.stringify(res.divList));
        setIsPrime(res.isPrime == true ? "Sim" : "Não");
      });
  }

  function handleValue(e) {
    setValue(e.target.value);
  }

  return (
    <div className="app">
      <Container style={{ marginTop: 40 }}>
        <Header size="huge">Calculadora de divisores</Header> <br />
        <Form action="" onSubmit={handleSubmit}>
          <FormField>
            <Input
              type="number"
              placeholder="Insira um número"
              onChange={handleValue}
            />{" "}
            <br />
          </FormField>
          <FormField>
            <Button type="submit"> Calcular </Button>
          </FormField>
        </Form>
        {isPrime != null && <div>
          <Header>
            Lista de divisores:
            <br />
            {divList}
          </Header>
          <br />
          <Header>
            É um número primo?
            <br />
            {isPrime}
          </Header>
        </div>}
      </Container>
    </div>
  );
}
export default App;
