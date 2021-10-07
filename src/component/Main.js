import Boolzap from "../img/Boolzap.png";

function Main (props) {
    return (
       <section id="ms_main">
           <div id="icon-profile" className="d-flex align-self-end justify-content-end">
                <ul data-aos="fade-left">
                <li>
                    <a href="https://github.com/Antonioflo13" target="_blank" rel="noreferrer"><i className="fab fa-github icon-profile"></i></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/antonio-flore-49b695167/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin icon-profile"></i></a>
                </li>
                </ul>
            </div>
           <article id="Home" className="container" data-aos="fade">
               <div className="d-flex flex-column justify-content-center align-items-center ms_box">
                    <h1>Hello, I am Antonio.</h1>
                    <p>Jr. Full Stack Web Developer</p>
               </div>
           </article>
            <article className="container" data-aos="fade-up">
                <div id="About-me" className="d-flex flex-column justify-content-center align-items-center ms_box">
                   <h2>About Me</h2>
                   <div id="description" className="w-75">
                        <p>
                            Appassionato di informatica fin da piccolo, cerco di migliorarmi ogni giorno di più. Dopo un lungo periodo ricco di esperienze e soddisfazioni torno sui miei passi per far diventare la mia passione il mio lavoro.
                        </p>
                        <p>
                            Da Marzo 2021 ho iniziato a frequentare un master presso la Tech Accademy <a href="https://www.boolean.careers/corso/full-time?utm_source=google&utm_medium=cpc&utm_content=corso&gclid=CjwKCAjw4qCKBhAVEiwAkTYsPLasFS7UJS-Q10Zb8esM-BkDdmlNtjfMYCQ0r_9pbq0UXjdZos9_rxoCPnwQAvD_BwE">Boolean Careers</a> ; per 6 mesi / 700 ore di corso ho affrontato diverse sfide, mi hanno consentito di avere la giusta preparazione per imparare ogni giorno nuove tecnologie.
                        </p>
                   </div>
                </div>
            </article>
            <article className="container">
            <div id="Tecnologies" className="d-flex justify-content-center align-items-center">
                    <ul className="list-inline ms_box d-flex flex-wrap align-content-center">
                        <li className="list-inline-item"  data-aos="zoom-in">
                            <a href="#"><i className="fab fa-html5 icon"></i></a>
                        </li>
                        <li className="list-inline-item" data-aos="zoom-in">
                            <a href="#"><i className="fab fa-css3-alt icon"></i></a>
                        </li>
                        <li className="list-inline-item" data-aos="zoom-in">
                            <a href="#"><i className="fab fa-sass icon"></i></a>
                        </li>
                        <li className="list-inline-item" data-aos="zoom-in">
                            <a href="#"><i className="fab fa-bootstrap icon"></i></a>
                        </li>
                        <li className="list-inline-item" data-aos="zoom-in">
                            <a href="#"><i className="fab fa-js-square icon"></i></a
                        ></li>
                        <li className="list-inline-item" data-aos="zoom-in">
                            <a href="#"><i className="fab fa-vuejs icon"></i></a>
                        </li>
                        <li className="list-inline-item" data-aos="zoom-in">
                            <a href="#"><i className="fab fa-react icon"></i></a>
                        </li>
                        <li className="list-inline-item" data-aos="zoom-in">
                            <a href="#"><i className="fab fa-github icon"></i></a>
                        </li>
                        <li className="list-inline-item" data-aos="zoom-in">
                            <a href="#"><i className="fab fa-php icon"></i></a>
                        </li>
                        <li className="list-inline-item" data-aos="zoom-in">
                            <a href="#"><i className="fab fa-laravel icon"></i></a>
                        </li>
                        <li className="list-inline-item" data-aos="zoom-in">
                            <a href="#"><i className="fab fa-npm icon"></i></a>
                        </li>
                        <li className="list-inline-item" data-aos="zoom-in">
                            <a href="#"><i className="fab fa-node-js icon"></i></a>
                        </li>
                    </ul>
                </div>
            </article>
            <article className="container">
                <div id="Projects" className="d-flex flex-column align-items-center justify-content-center ms_box">
                    <h2 data-aos="fade-up">Projects</h2>
                    <div className="ms_card  d-flex flex-column align-items-center justify-content-center">
                        <h3>Boolzap</h3>
                        <img src={Boolzap} alt="Boolzap" />
                        <p className="w-75">Web app realizzata con HTML, CSS e Vue.js. Simulazione di invio di messaggi con risposta automatica, ricerca dei contatti dinamica, cancellazione messaggi, gestione dark mode.</p>
                        <button className="btn-sm"><a href="https://github.com/Antonioflo13/vue-boolzapp.git" target="_blank" rel="noreferrer"><i className="fab fa-github icon"></i> Repository</a></button>
                        <button className="btn btn-sm"><a href="https://vue-boolzap.netlify.app/" target="_blank" rel="noreferrer"><i class="fas fa-link"></i> Link</a></button>
                    </div>
                </div>
            </article>
            <article className="container">
                <div id="Certifications" className="d-flex flex-column align-items-center justify-content-center ms_box">
                    <h2 data-aos="fade-up">Certifications</h2>
                    <img src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/38864145" alt="certificate" data-aos="zoom-out"/>
                </div>
            </article>
       </section>
    );
}

export default Main;
    
