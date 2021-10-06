import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
//Components
import './App.scss';
import Navbar from '../src/component/Navbar.js';
import Main from '../src/component/Main.js';


function App() {
  const links = useState([
    ['Home'],
    ['About-me'],
    ['Tecnologies'],
    ['Certifications']
  ]);

  return (
    <div className="App">
      <header>
        <Navbar links={links}/>
      </header>
      <main>
      <Main />
      </main>
    </div>
  );
  }


export default App;
