// ./src/App.js

/**
 * COMPONENTES
 * 1. IMPORTACIONES
 */
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import Main from './components/Main'

/**
 * 
 * 2. FUNCIÓN
 */

function App() {

  // MANEJO DE VARIABLES Y OTRAS FUNCIONES
  const bootcamp = "Ironhack"

  // ESTE FORMATO NO ES HTML COMPLETAMENTE, SINO TAMBIÉN INVOLUCRA JAVASCRIPT AL SIMULTÁNEO.
  // HTML + JS = JSX
  return ( 
    <div className="App">
      <p>Hola mundo</p>
      <p>Mike Nieva</p>
      <p>{12*12}</p>
      <p>{bootcamp}</p>


      <Header nombre="Mike" ciudad="Veracruz"/>
      <Header nombre="Sam" ciudad="Edomex"/>
      <Header nombre="K'onhin" ciudad="Hidalgo" />
      <Body cancion="ataud" album="realidades" grupo="Los Tigres del Norte"/>

      <hr />
      <Main />
      <hr />

      <Footer nombre="Anahi" email="hola@hola.com"/>


    </div>
  );
}


// 3. EXPORTACIÓN
export default App;