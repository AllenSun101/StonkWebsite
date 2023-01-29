import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function SiteNavbar(){
    return(
      <Navbar bg="light" expand="lg" classname="Navbar">
        <Container>
          <Navbar.Brand href="/Home">Dark Horse of Wall Street</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Home">Home</Nav.Link>
              <Nav.Link href="/AboutMe">About</Nav.Link>
              <NavDropdown title="Blog" id="blog-dropdown">
                <NavDropdown.Item href="/DailyTradingUpdates">Trading Blog</NavDropdown.Item>
                <NavDropdown.Item href="/TradingReports">Trading Reports</NavDropdown.Item>
                <NavDropdown.Item href="/PersonalBlog">Personal Blog</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Trading Records" id="Trading-Records-Dropdown">
                <NavDropdown.Item href="/Records">Historical Returns</NavDropdown.Item>
                <NavDropdown.Item href="/ProjectsResources">Projects</NavDropdown.Item>
                <NavDropdown.Item href="/MiscellaneousResources">Other Resources</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
export default SiteNavbar