import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'
import Form from 'react-bootstrap/Form';
import LinkedIn from './images/LinkedIn.png';
import OldDarkHorseLogo from './images/OldWebsiteLogo.jpeg';
import Button from 'react-bootstrap/Button';


function Footer(){
    return(
        <div className='Footer'>
            <Container className='Background'>
                <Row>
                    <Col sm="auto">
                        <h5>Information</h5>
                        <ul>
                            <li>
                                <a href="/Home">Home Page</a>
                            </li>
                            <li>
                                <a href="/AboutMe">About Me</a>
                            </li>
                            <li>
                                <a href="/Contact">Contact</a>
                            </li>
                        </ul>
                    </Col>
                    <Col sm="auto">
                        <h5>Blog Pages</h5>
                        <ul>
                            <li>
                                <a href="/DailyTradingUpdates">Daily Updates</a>
                            </li>
                            <li>
                                <a href="/TradingReports">Premarket Reports</a>
                            </li>
                            <li>
                                <a href="/PersonalBlog">Personal Blog</a>    
                            </li>
                            <li>
                                <a href="/Records">Trading Records</a> 
                            </li>
                        </ul>
                    </Col>
                    <Col sm="auto">
                        <h5>Records</h5>
                        <ul>
                            <li>
                                <a href="/Records">Trading Records</a>
                            </li>
                        </ul>
                    </Col>
                    <Col sm="auto">
                    </Col>
                    <Col className="Newsletter" sm="4">
                        <h5>Newsletter</h5>
                        <p>Sign up for weekly newsletters!</p>
                        <form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" 
                                    placeholder="Enter email"
                                    className="input" 
                                    name="email"
                                    value={""}
                                    onChange={""}
                                />
                            </Form.Group>
                            <Button className="button" size="" type="submit" onClick={""}>Submit</Button>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <a href="https://www.linkedin.com/in/allen-sun-96b709252/" className='Display'>
                        <img src={LinkedIn} alt="LinkedIn" className='Icon'/></a>
                    <a href="https://darkhorseofwallstreet.wordpress.com/" className='Display'>
                        <img src={OldDarkHorseLogo} alt="Old Website" className='Icon'/></a>
                </Row>
            </Container>      
        </div> 
    )
}
export default Footer