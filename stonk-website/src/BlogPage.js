import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import { useLocation } from 'react-router-dom'
import './BlogPage.css'


function BlogPage(){

    const location = useLocation();
    const post = location.state;

    var monthConversion = {
        "01": "January",
        "02": "February",
        "03": "March",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "September",
        "10": "October",
        "11": "November",
        "12": "December"
    }
    var year = post.Date.substring(0, 4);
    var day = post.Date.substring(8, 10);
    var month = monthConversion[post.Date.substring(5, 7)];
    var formattedDate =  month + " " + day + ", " + year;

    return (
        <div className='PostBody'>
            <h1>{post.Title}</h1>
            <p>By: {post.Author}</p>
            <p>{formattedDate}</p>
            <Container>
                <Row>
                    <p>{post.BlogText}</p>
                </Row>
            </Container>
            <h6>Comments:</h6>
            <h6>Tags:</h6>
        </div>
    )
}
export default BlogPage;