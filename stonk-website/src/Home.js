import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hero from './images/Hero.jpeg';
import Bull from './images/WSBull.jpg'
import Chart from './images/Chart.jpg'
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';

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
                            <li>To beat the Dow, NASDAQ, and S&P 500 each year</li>
                            <li>To improve trading strategies and returns</li>
                            <li>To continue learning and growing through experience</li>
                        </ul>
                    </div>    
                </Row>
                <Row className='Description'>
                    <h2>My Five Point Plan for Success:</h2>
                    <div className='Description mb-1'>
                        <ul>
                            <li>1. Employ short-term Technical Analysis on a wide range of assets.</li>
                            <li>2. Leverage economic context to guide portfolio composition and trading style.</li>
                            <li>3. Balance diversification and concentrataion in accordance with broader market trends.</li>
                            <li>4. Utilize a Value over Replacement approach with portfolio selections.</li>
                            <li>5. Proritize long-term instinctive development and learning over profits.</li>
                        </ul>
                    </div>    
                </Row>
                <Row className='Description'>
                    <h2 className='mb-5'>Navigation:</h2>
                    <Col className="CardColumn">
                        <Link to={'/BlogHub'}>
                        <Card className="CardImageHome text-black">
                            <Card.Img src={Bull} alt="Personal Blog" className="CardImageHome ImageBackground"/>
                            <Card.ImgOverlay>
                                <Card.Title className="CardTitle">Blog Pages</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                        </Link>
                    </Col>
                    <Col className="CardColumn">
                        <Link to={'/RecordsHub'}>
                        <Card className="CardImageHome text-black">
                            <Card.Img src={Chart} alt="Daily Market Updates" className="CardImageHome ImageBackground"/>
                            <Card.ImgOverlay>
                                <Card.Title className="CardTitle">Trading Resources</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Home;