import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PersonalBlog(){
    return (
        <div>
            <Container>
                <Row>
                    <h1>Blog</h1>
                </Row>
            </Container>
            <p>Link to database and retrieve blogs, display and hide certain ones</p>
            <p>Search bar and archives list</p>
        </div>
    )
}
export default PersonalBlog;