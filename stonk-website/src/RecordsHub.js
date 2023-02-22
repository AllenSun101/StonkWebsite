import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import PersonalBlogCover from './images/PersonalBlogCover.jpg'
import DailyUpdates from './images/DailyUpdates.jpeg'
import PremarketReports from './images/PremarketReportsCover.jpg'
import './BlogHub.css'

function RecordsHub(){
    return(
        <Container>
            <div className='Title'>
                    <h1>Records Hub</h1>
                </div>
            <Row className='CardsRow'>
                <Col className="CardColumn">
                    <Card className="CardImages text-black">
                        <Card.Img src={PersonalBlogCover} alt="Record1" className="CardImages"/>
                        <Card.ImgOverlay>
                            <Card.Title className="CardTitle">Record1</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col className="CardColumn">
                    <Card className="CardImages text-black">
                        <Card.Img src={DailyUpdates} alt="Daily Market Updates" className="CardImages"/>
                        <Card.ImgOverlay>
                            <Card.Title className="CardTitle">Record2</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col className="CardColumn">
                    <Card className="CardImages text-black">
                        <Card.Img src={PremarketReports} alt="Personal Blog" className="CardImages"/>
                        <Card.ImgOverlay>
                            <Card.Title className="CardTitle">Record3</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default RecordsHub;