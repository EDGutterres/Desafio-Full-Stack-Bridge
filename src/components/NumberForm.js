import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";

export const NumberForm = ({onCalculation}) => {
  const [number, setNumber] = useState();

  return (
    <Form
      onSubmit={async () => {
        const numberObj = { number };
        const response = await fetch("/calculate", {
          method: "POST",
          headers: {
            Content_type: "application/json"
          },
          body: JSON.stringify(numberObj)
        });
        if (response.ok) {
          const jaison = await response.json();
          console.log(jaison);
          
        }
      }}
    >
      <Form.Field>
        <label>Calculadora de divisores</label>
        <Input
          placeholder="Insira um número"
          type="number"
          value={number}
          id="numero"
          onChange={e => setNumber(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Button type="submit">Submit</Button>
      </Form.Field>
    </Form>
  );
};
