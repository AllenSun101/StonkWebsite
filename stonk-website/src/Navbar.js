import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
import {useLocation} from 'react-router-dom';
import Logo from './images/Logo.png';

function SiteNavbar(){
    var alternateNavbar = false;
    const location = useLocation();
    const page = location.pathname;

    //modify as needed
    if(page === "/Home" || page === "/AboutMe" || page === "/"){
      alternateNavbar = false;
    }
    else{
      alternateNavbar = false;
    }

    return(
      
      <Navbar expand="lg" className={alternateNavbar ? "Navbar" : "Navbar2"}>
        <Container className='NavContainer'>
          <Navbar.Brand href="/Home">
            <img
              src={Logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="Dark Horse Logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="/Home">Dark Horse of Wall Street</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Home" className="Nav">Home</Nav.Link>
              <Nav.Link href="/AboutMe" className="Nav">About</Nav.Link>
              <NavDropdown title="Blog" id="blog-dropdown" className="NavDropdown" menuVariant='dark'>
                <NavDropdown.Item href="/DailyTradingUpdates">Trading Blog</NavDropdown.Item>
                <NavDropdown.Item href="/TradingReports">Trading Reports</NavDropdown.Item>
                <NavDropdown.Item href="/PersonalBlog">Personal Blog</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Trading Resources" id="Trading-Records-Dropdown" className="NavDropdown" menuVariant='dark'>
                <NavDropdown.Item href="/Records">Performance History</NavDropdown.Item>
                <NavDropdown.Item href="/ProjectsResources">Projects</NavDropdown.Item>
                <NavDropdown.Item href="/MiscellaneousResources">Other Resources</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Contact" className="Nav">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
export default SiteNavbar