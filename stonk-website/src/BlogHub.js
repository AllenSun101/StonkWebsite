import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import PersonalBlogCover from './images/PersonalBlogCover.jpg'
import DailyUpdates from './images/DailyUpdates.jpeg'
import PremarketReports from './images/PremarketReportsCover.jpg'
import './BlogHub.css'

function BlogHub(){
    return(
        <Container>
            <div className='Title'>
                    <h1>Blog Hub</h1>
                </div>
            <Row className='CardsRow'>
                <Col className="CardColumn">
                    <Card className="CardImages text-black">
                        <Card.Img src={PersonalBlogCover} alt="Personal Blog" className="CardImages"/>
                        <Card.ImgOverlay>
                            <Card.Title className="CardTitle">Personal Blog</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col className="CardColumn">
                    <Card className="CardImages text-black">
                        <Card.Img src={DailyUpdates} alt="Daily Market Updates" className="CardImages"/>
                        <Card.ImgOverlay>
                            <Card.Title className="CardTitle">Daily Market Updates</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col className="CardColumn">
                    <Card className="CardImages text-black">
                        <Card.Img src={PremarketReports} alt="Personal Blog" className="CardImages"/>
                        <Card.ImgOverlay>
                            <Card.Title className="CardTitle">Premarket Reports</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default BlogHub;