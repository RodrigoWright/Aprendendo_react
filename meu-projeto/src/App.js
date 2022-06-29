import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Rodrigo'
  const newname = name.toUpperCase()
  const url = 'https://image.shutterstock.com/image-vector/480p-resoluition-design-icon-vector-260nw-1267765879.jpg'

  function soma(a, b){
    return a + b
  }

  return (
    <div className="App"> {/*JSX só aceita className para definição de classes */}
      <h1>Meu primeiro projeto</h1> {/**/}
      <p>Olá {newname}!</p> {/*Os códigos js devem estar entre {}*/}
      <p>Soma 2 + 2 = {soma(2, 2)}</p>
      <img src={url} alt ="minha_primeira_img"/> {/*O src pode ser uma url dinâmica, e deve fechar corretamente*/}
    </div> /*Tudo deve estar devidamente envelopado*/
  );
}

export default App;
