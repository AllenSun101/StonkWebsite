import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Returns from './images/Returns.png';
import Returns2023 from './images/2023Returns.png';
import Returns2022 from './images/2022Returns.png';
import './Records.css'

function Records(){
    return(
        <div>
            <h1>Performance History</h1>
            <Container>
                <Row>
                    <h2>Overall History</h2>
                    <img className="ReturnsChart" src={Returns} alt="Multi-Year Returns Comparison"/>
                </Row>
                <Row>
                    <h2>2023</h2>
                    <img className="ReturnsChart" src={Returns2023} alt="2023 Returns Progression and Comparison"/>
                </Row>
                <Row>
                    <h2>2022</h2>
                    <img className="ReturnsChart" src={Returns2022} alt="2022 Returns Progression and Comparison"/>
                </Row>
            </Container>
        </div>
    )
}
export default Records;