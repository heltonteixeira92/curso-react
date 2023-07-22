# curso-react

Playlist https://www.youtube.com/watch?v=FXqX7oof0I4&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&pp=iAQB


*REACT*:

- Uma biblioteca JS para criação de interfaces
- Utilizado para construir SPAS ( Single Page Application)
- Baseado em componentes
- Utiliza o JSX para renderizar HTML;
- E aplica o Virtual DOM para realizar as alterações de DOM
- Podemos adicionar a um projeto ou criar um projeto com ele

**Requisitos**:

- Node
- NPM

## Como instalar o React?

- Para instalar o React vamos utilizar uma ferramenta chamada Create React App;
- Recebemos todos os arquivos da biblioteca e temos como executá-la
- Para utilizar precisamos do Node e também npm
- Esta ferramenta também otimiza o app gerado para produção
- É possível iniciar a aplicação com npm start

Criando o projeto

```jsx
npx create-react-app meu-projeto
```

```jsx
npm start
Starts the development server.

npm run build
Bundles the app into static files for production.

npm test
Starts the test runner.

We suggest that you begin by typing:

cd meu-projeto
npm start
```

ARQUIVOS:

- **Package.json**
    - lista as dependencias e scripts
- **Package-lock.json**
    - semelhante ao Package.json
- **node_modules**
    - Onde fica todas as dependências do projeto e do react
- **public**
    - ponto de partida do projeto, onde fica o html e afins
- **src**
    - arquivo que mais vamos alterar, onde fica o js, css, imagens, fonts
    

### Entendendo o JSX

- O JSX é como um HTML, porém dentro do código JavaScript
- É a principal maneira de escrever HTML com o React
- Podemos interpolar variáveis, inserindo ela entre { }
- É possível também executar funções em JSX
- Inserir valores em atributos de tags também é valido em JSX

```jsx
function App() {

  const name = 'Helton'
  const newName = name.toUpperCase()

  function sum(a, b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1> Alterando o JSX</h1>
      <p> olá {newName} </p>
      <p> Multiplicação { 4 * 5 } </p>
      <p> Soma: {sum(4, 4)} </p>
      <img src={url} alt="Minha Imagem"/>
    </div>
  );
}
```

### Componentes

- Permite dividir a aplicação em partes
- Os componentes renderizam JSX, assim como App.js ( que é um componente)
- Precisamos criar um arquivo de componente
- E Importá-lo onde precisamos utilizar
- Normalmente ficam em uma pasta chamada components

src/components/Frase.js

```jsx
function Frase() {
    return (
        <div>
            <p>Este é um componente com uma frase</p>
        </div>
    )
}

export default Frase
```

### Props

- As props são valores passados para componentes
- Podemos deixá-los dinâmicos
- Ou seja, mudando a execução por causa do valor da prop
- O valor é passado como um atributo na chamada do componente
- E precisa ser resgatado dentro de uma propriedade/argumento chamado props na função de definição do componente
- As props são somente de leitura!

components/Pessoa.js

```jsx
function Pessoa(props) {
    return (
        <div>
            <img src={props.foto} alt={props.nome}/>
            <h2>Nome: {props.nome}</h2>
            <p>Idade: {props.idade}</p>
            <p>Profissão: {props.profissão}</p>
        </div>
    )
}

export default Pessoa
```

App.js

```jsx
<Pessoa 
        nome="Rodrigo" 
        idade="28" 
        profissão="Programador" 
        foto="https://via.placeholder.com"
        />
    </div>
```

Usando o structure não precisamos repetir o props

```jsx
function Pessoa({}) {
    return (
        <div>
            <img src={props.foto} alt={props.nome}/>
            <h2>Nome: {props.nome}</h2>
            <p>Idade: {props.idade}</p>
            <p>Profissão: {props.profissão}</p>
        </div>
    )
}

export default Pessoa
```

### Adicionando CSS

- O CSS pode ser adicionado de forma global na aplicação, por meio do arquivo index.css por exemplo;
- Porém é possível estilizar a nível de componentes;
- Utilizamos o CSS modules para isso;
- Basta criar um arquivo como: Componente.module.css;
- E chama este CSS de componente;

o css não aceita criar esse estilo de classe: .frase-container com traço, apenas underscore

components/Frase.module.css

```jsx
.fraseContainer {
    background-color: #333;
    border: 1px solid #111;
}

.fraseContent {
    color: #fff;
    background-color: #333;
    margin: 0;
}
```

components/Frase.js

```jsx
import styles from './Frase.module.css'

function Frase() {
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este é um componente com uma frase</p>
        </div>
    )
}

export default Frase
```

### Fragmentos

- Os React Fragments permite a criação de um componente sem elemento pai;
- O propósito é descomplicar os nós do DOM;
- A sintaxe é <> e <>, não há um nome para a tag;
- Criamos no próprio JSX;

components/Lista.js

```jsx
import Item from "./Item"

function List(){
    return(
        <> {/*fragments (comentário) */}
            <h1>Minha Lista</h1>
                <ul>
                    <Item marca="Ferrari"></Item>
                    <Item marca="Honda"></Item>
                    <li>Item 2</li>
                </ul>
        </>
    )
}

export default List
```

### Avançando em props

- Podemos definir tipos para as props, realizando uma espécie de validação;
- Definimos em um objeto chamado propTypes no próprio componente;
- E ainda há possibilidade de definir um valor padrão;
- Neste caso utilizamos o objeto defaultProps;

```jsx
import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){
    return(
        <>
            <li>{marca} - {ano_lancamento} </li>
        </>
    )
}

Item.propTypes = {
    marca : PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}

export default Item
```

### Eventos

- Os eventos de React são o mesmos eventos do DOM;
- Ou seja, temos eventos para responder a um click;
- O evento é atrelado a uma tag que irá executá-lo;
- Geralmente um método é atríbuido ao evento;
- Este método deve ser criado no componente;

components/Evento.js

```jsx
function Evento() {

    function meuEvento() {
        console.log('Opa, fui ativado!')
    }

    return (
        <div>
            <p>Clique ara disparar um evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento
```

App.js

```jsx
import './App.css';
import Evento from './components/Evento';

function App() {
  return (
    <div className="App">
      <h1> Testando Eventos</h1>
      <Evento/>
    </div>
  );
}

export default App;
```

components/Form.js

```jsx
function Form(){

    function cadastrarUsuario(e){
        e.preventDefault() /*o 'e' é o evento da submissão mas pode ser qualquer nome e preventDefault para o comportamento padrão do html e processa oq está abaixo dele */
        console.log("Cadastrou o usuário")
    }

    return (
        <div>
            <h1> Meu cadastros:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form
```

### useState

- O useState é um hook do React;
- Com ele conseguimos manusear o estado de um componente de forma simples;
- Este hook funciona muito bem com eventos;
- podemos atrelar um evento a mudança de state;