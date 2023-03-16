import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Code from './images/Coding.jpg'
import Library from './images/Library.jpeg'
import Files from './images/Files.jpg'
import './BlogHub.css'
import {Link} from 'react-router-dom'


function RecordsHub(){
    return(
        <Container>
            <div className='Title'>
                    <h1>Resources Hub</h1>
                </div>
            <Row className='CardsRow'>
                <Col className="CardColumn">
                    <Link to={'/Records'}>
                    <Card className="CardImages text-black">
                        <Card.Img src={Files} alt="Performance History" className="CardImages ImageBackground"/>
                        <Card.ImgOverlay>
                            <Card.Title className="CardTitle">Performance History</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    </Link>
                </Col>
                <Col className="CardColumn">
                    <Link to={'/ProjectsResources'}>
                    <Card className="CardImages text-black">
                        <Card.Img src={Code} alt="Personal Projects" className="CardImages ImageBackground"/>
                        <Card.ImgOverlay>
                            <Card.Title className="CardTitle">Personal Projects</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    </Link>
                </Col>
                <Col className="CardColumn">
                    <Link to={'/MiscellaneousResources'}>
                    <Card className="CardImages text-black">
                        <Card.Img src={Library} alt="Trading Records" className="CardImages ImageBackground"/>
                        <Card.ImgOverlay>
                            <Card.Title className="CardTitle">Trading Records</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}
export default RecordsHub;