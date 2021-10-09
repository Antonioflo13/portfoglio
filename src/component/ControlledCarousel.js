import React, {useState} from 'react';

import { Carousel } from "react-bootstrap";

//Projects Image 
import Boolzap from "../img/Boolzap.png";
import Boolflix from "../img/Boolflix.png";
import BoolBnb from "../img/BoolBnB.png";

function ControlledCarousel() {
  const [projects] = useState([
    {
      title: 'Boolzap',
      img: Boolzap,
      description: "Web app realizzata con HTML, CSS e Vue.js. Simulazione di invio di messaggi con risposta automatica, ricerca dei contatti dinamica, cancellazione messaggi, gestione dark mode.",
      gitHubRepo : "https://github.com/Antonioflo13/vue-boolzapp.git",
      siteLink: "https://vue-boolzap.netlify.app/"
    },
    {
      title: 'Boolflix',
      img: Boolflix,
      description: "Riproduzione della Homepage del sito Netflix con HTML, CSS, JavaScript, gestione API di TMDb attraverso chiamate Ajax, stampa in pagina con utilizzo di componenti di Vue CLI.",
      gitHubRepo : "https://github.com/Antonioflo13/vue-boolzapp.git",
      siteLink: "https://boolflix-34.netlify.app/"
    },
    {
      title: 'BoolBnb',
      img: BoolBnb,
      description: "Riproduzione del più famoso servizio di hosting AirBnB con Vue.js, Sass, Bootstrap, Laravel, MySQL, Api TomTom, Braintree per implementazione del metodo di pagamento. BollBnB è anche una single-application responsiva per Smartphone, Tablet e Desktop.",
      gitHubRepo : "https://github.com/Antonioflo13/boolbnb-team1",
      siteLink: ""
    },
  ]);
    return (
      <Carousel id="ControlledCarousel">
        {projects.map((project, index) => (
        <Carousel.Item key={index} id="carouselItem">
          <h3>{project.title}</h3>
          <img
            className="w-75"
            src={project.img}
            alt={project.img}
          />
          <p>{project.description}</p>
          <button className="btn btn-sm"><a href={project.gitHubRepo} target="_blank" rel="noreferrer"><i className="fab fa-github icon"></i> Repository</a></button>
          <button className={project.siteLink == "" ? 'none' : 'btn btn-sm'} ><a href={project.siteLink} target="_blank" rel="noreferrer"><i className="fas fa-link"></i> Link</a></button>
        </Carousel.Item>
         ))}
      </Carousel>
    );
  }
export default ControlledCarousel;