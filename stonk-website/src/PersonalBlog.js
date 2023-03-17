import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import './PersonalBlog.css';
import {Link} from "react-router-dom";


function PersonalBlog(){

    const [data, setData] = React.useState([{Title: "", Author: "", Date: "", BlogText: "", idBlogPosts: ""}]);
    const [visiblePosts, setVisiblePosts] = React.useState(4);
    const [searchData, setSearchData] = React.useState("");
    const [officialSearchData, setOfficialSearchData] = React.useState("");

    React.useEffect(() =>{
        fetch("/blogs",{
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                numPosts: visiblePosts,
                search: officialSearchData
            })
        })
        .then((res) => res.json())
        .then((data) => setData(data))
    }, [visiblePosts, officialSearchData]);


    function FormatDate(date){
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
        var year = date.substring(0, 4);
        var day = date.substring(8, 10);
        var month = monthConversion[date.substring(5, 7)];
        return month + " " + day + ", " + year;
    }

    function RenderPosts(){
        var posts = data;
        // cap words
        // render only visible posts
        return(
            <div className='PostWrap'>
                {posts.map((post) => {
                    var formattedDate = FormatDate(post.Date);
                    return(
                        <div className='Posts' key={post.idBlogPosts}>
                            <h3 className='PostTitles'>{post.Title}</h3>
                            <h5 className='NameDate'>By: {post.Author}, {formattedDate}</h5>
                            <p>{post.BlogText.substring(0, 250) + "..."}</p>
                            <Link className="external" to={`/PersonalBlog/${post.idBlogPosts}`} state={post}>Read More</Link>
                        </div>
                    )
                })}
            </div>
        )
    }


    function LoadMorePosts(){
        setVisiblePosts(visiblePosts => visiblePosts + 3);
    }

    function updateSearch(event){
        setSearchData(event.target.value);
    }


    function SearchKeyword(event){
        event.preventDefault();
        setOfficialSearchData(searchData);
    }


    return (
        <div>
            <Container>
                <div className='Title'>
                    <h1>Personal Blog</h1>
                </div>
                <Row>
                    <Form>
                        <Form.Group className="mb-3 search" controlId="postSearchBar">
                        <Form.Label>Search for a Post</Form.Label>
                        <Form.Control type="text" 
                            placeholder="Enter title or keywords"
                            className="SearchBar"
                            value={searchData}
                            onChange={updateSearch}
                        />
                        <Button className="button" size="lg" type="submit" onClick={SearchKeyword}>Search</Button>
                        </Form.Group>
                    </Form>
                </Row>
                <Row>
                    <Col sm="9" className='PostGroup'>
                        <h2 className='PostsTag'>Recent Posts</h2>
                        <RenderPosts />
                        <Button className="button" size="lg" type="submit" onClick={LoadMorePosts}>Load More Posts</Button>
                    </Col>
                    <Col>
                        <Row className='mb-3'>
                            <h2 className="labels">Archives</h2>
                            <ul>
                                <li><a className="external" href='/March2023'> March 2023</a></li>
                                <li><a className="external" href='/April2023'> April 2023</a></li>
                            </ul>
                        </Row>
                        <Row>
                            <h2 className="labels">Categories</h2>
                            <ul>
                                <li><a className="external" href='/Stocks'>Stocks</a></li>
                                <li><a className="external" href='/Coding'>Coding</a></li>
                                <li><a className="external" href='/PersonalLife'>Personal Life</a></li>
                            </ul>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default PersonalBlog;