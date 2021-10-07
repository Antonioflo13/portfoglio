import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
//Components
import './App.scss';
import Navbar from '../src/component/Navbar.js';
import Main from '../src/component/Main.js';
//Projects Image 
import Boolzap from "./img/Boolzap.png";


function App() {
  const links = useState([
    ['Home'],
    ['About-me'],
    ['Tecnologies'],
    ['Projects'],
    ['Certifications']
  ]);

  const projects = useState([
    {
      img: {Boolzap},
      description: "Web app realizzata con HTML, CSS e Vue.js. Simulazione di invio di messaggi con risposta automatica, ricerca dei contatti dinamica, cancellazione messaggi, gestione dark mode.",
      gitHubRepo : "https://github.com/Antonioflo13/vue-boolzapp.git",
      siteLink: "https://vue-boolzap.netlify.app/"
    },
    {
      img: {Boolzap},
      description: "Web app realizzata con HTML, CSS e Vue.js. Simulazione di invio di messaggi con risposta automatica, ricerca dei contatti dinamica, cancellazione messaggi, gestione dark mode.",
      gitHubRepo : "https://github.com/Antonioflo13/vue-boolzapp.git",
      siteLink: ""
    },
  ])

  return (
    <div className="App">
      <header>
        <Navbar links={links}/>
      </header>
      <main>
      <Main projects={projects}/>
      </main>
    </div>
  );
  }


export default App;
