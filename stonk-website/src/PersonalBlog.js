import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';

function PersonalBlog(){

    const [data, setData] = React.useState(null);

    React.useEffect(() =>{
        fetch("/blogs")
        .then((res) => res.json())
        .then((data) => setData(data.message))
    }, []);

    return (
        <div>
            <Container>
                <Row>
                    <h1>Blog</h1>
                    <Col>
                    <p>{data}</p>
                    </Col>
                </Row>
            </Container>
            <p>Link to database and retrieve blogs, display and hide certain ones</p>
            <p>Search bar and archives list</p>
        </div>
    )
}
export default PersonalBlog;