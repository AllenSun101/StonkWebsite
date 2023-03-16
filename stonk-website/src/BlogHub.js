import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import PersonalBlogCover from './images/PersonalBlogCover.jpg'
import DailyUpdates from './images/DailyUpdates.jpeg'
import PremarketReports from './images/PremarketReportsCover.jpg'
import './BlogHub.css'
import {Link} from 'react-router-dom';

function BlogHub(){
    return(
        <Container>
            <div className='Title'>
                    <h1>Blog Hub</h1>
                </div>
            <Row className='CardsRow'>
                <Col className="CardColumn">
                    <Link to={'/DailyTradingUpdates'}>
                    <Card className="CardImages text-black">
                        <Card.Img src={DailyUpdates} alt="Daily Market Updates" className="CardImages ImageBackground"/>
                        <Card.ImgOverlay>
                            <Card.Title className="CardTitle">Daily Trading Updates</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    </Link>
                </Col>
                <Col className="CardColumn">
                    <Link to={'/TradingReports'}>
                    <Card className="CardImages text-black">
                        <Card.Img src={PremarketReports} alt="Personal Blog" className="CardImages ImageBackground"/>
                        <Card.ImgOverlay>
                            <Card.Title className="CardTitle">Premarket Reports</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    </Link>
                </Col>
                <Col className="CardColumn">
                    <Link to={'/PersonalBlog'}>
                    <Card className="CardImages text-black">
                        <Card.Img src={PersonalBlogCover} alt="Personal Blog" className="CardImages ImageBackground"/>
                        <Card.ImgOverlay>
                            <Card.Title className="CardTitle">Personal Blog</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}
export default BlogHub;