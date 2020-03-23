import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  FormField,
  Header
} from "semantic-ui-react";

export const NumberForm = () => {
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
        setIsPrime(res.isPrime === true ? "Sim" : "Não");
      });
  }

  function handleValue(e) {
    setValue(e.target.value);
  }

  return (
    <div>
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
      {isPrime != null && (
        <div>
          <Header style={{ marginTop: 20, marginBottom: 0 }}>
            Lista de divisores:
            <br />
            {divList}
          </Header>
          <br />
          <Header style={{ marginTop: 0 }}>
            É um número primo?
            <br />
            {isPrime}
          </Header>
        </div>
      )}
    </div>
  );
};
