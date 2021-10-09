import logo from '../logo.png';

function Navbar(props) {
  return (

  <nav id="ms_navbar" className="navbar navbar-expand-lg navbar-dark position-fixed w-100">
    <div id="navbar-m-query" className="container-fluid align-items-start">
      <a className="navbar-brand" href="#home" data-aos="fade-right"><img src={logo} alt="{logo}"/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav flex-column" data-aos="fade-right">
          {props.links[0].map((link, index) => (
            <li className="nav-item" key={index}>
             <a className="nav-link active" aria-current="page" href={'#'+ link}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;