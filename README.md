# Desafio Dev. Full Stack Bridge

## Desafio:
Crie um web app que através de um formulário simples, submeta um número e mostre a lista de divisores desse número e se o mesmo é um número primo.<br>
● O sistema deve possuir uma tela com um campo de texto e um botão.<br>
● Ao clicar no botão, os dados devem ser enviados ao ​ backend ​ para os cálculos.<br>
● O resultado deve ser exibido na tela.<br>

### Restrições técnicas:

●Os cálculos dos divisores e do número primo devem ser executados pelo ​ backend​.<br>
●Estilize as páginas utilizando a ferramenta/biblioteca CSS de sua preferência. Nós julgaremos a usabilidade das telas e componentes.<br>
●Crie um README explicando as tecnologias e principais bibliotecas utilizadas em sua solução.<br>
●Adicione também diretivas de como executar seu projeto localmente.

## Como executar o projeto localmente

Para a execução do projeto, deve-se primeiramente instalar o node e o yarn em sua máquina:<br>

`sudo apt install nodejs`<br>
`sudo apt install yarn`<br>

Depois, deve-se clonar o conteúdo deste repositório em uma pasta qualquer:<br>

`git clone https://github.com/EDGutterres/Desafio-Full-Stack-Bridge.git`<br>

Por fim, dentro da pasta em que o repositório foi clonado, abrir duas abas do terminal e executar os seguintes comandos (um em cada aba):<br>

`yarn start-api`<br>
`yarn start`<br>

A partir daí, a aplicação deve estar funcionando, e é possível acessá-la através do http://localhost:3000

## Tecnologias utilizadas:

### Front End:

Para o Front End foi utilizado o ReactJS, sendo ele inicializado através do create-react-app. Também foi incluída a biblioteca semantic-ui-react para auxílio na estilização.

### Back End:

O Back End foi feito utilizando a liguagem Python através do framework Flask, que recebe a requisição do Front End e realiza os cálculos, enviando o resultado de volta para o Front End.

### Ambiente de desenvolvimento:

O ambiente em que a aplicação foi desenvolvida foi no sistema operacional Ubuntu 18.04.4 LTS, utilizando o Visual Studio Code como ferramenta de código e o terminal do Ubuntu para execução de comandos.