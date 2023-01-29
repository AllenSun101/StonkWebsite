import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Carousel } from 'react-bootstrap';
import Hero from './images/Hero.jpeg'

function Home(){
    return(
        <div>
            <div className='Title'>
                <img className="Hero" src={Hero} alt="Wall Street at Night"/>
                <h1 className="HeroText">Dark Horse of Wall Street</h1>
            </div>
            <Container>
                <Row className='Description mb-3'>
                    <h1>Welcome to my blog!</h1>
                </Row>
                <Row className='Description mb-2'>
                    <p>I'm Allen, an eighteen-year-old stock market enthusiast. I love trading,
                        integrating programming with finance, and following up on the latest economic 
                        developments! I share all of my thoughts on this blog to hold myself accountable.
                        <br></br>Note: I am not a financial advisor.
                    </p>
                </Row>
                <Row className='Description mb-3'> 
                    <h2>My goals are simple:</h2>
                </Row>
                <Row>
                    <div className='Description mb-2'>
                        <ul>
                            <li>To beat the Dow, NASDAQ, and S&P500 each year</li>
                            <li>To improve trading strategies and returns</li>
                            <li>To Continue learning and growing through experience</li>
                        </ul>
                    </div>    
                </Row>
                <Row className='Description'>
                    <h2>Samples Of My Work</h2>   
                    <p>Carousel</p>
                </Row>
            </Container>
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img src={Hero} alt="placeholder"/>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
}
export default Home;