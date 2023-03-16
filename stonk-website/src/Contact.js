import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Contact.css';
import FormGroup from 'react-bootstrap/esm/FormGroup';

function Contact(){
    const [contactForm, setContactForm] = React.useState({firstName: "", lastName: "", email: "", message: ""})
    const [hasSubmitted, setHasSubmitted] = React.useState("No")

    function handleChange(event){
        console.log(event)
        setContactForm(previousData => {
            return{
                ...previousData,
                [event.target.name]: event.target.value
            }
        })
    }

    function submit(event){
        if(hasSubmitted === "No"){
            setHasSubmitted("Yes")
        }
        else{
            setHasSubmitted("No")
        }
        return(
            // Send message to blog writer application for manual responses
            <p></p>
        )
    }

    function FormApprears(){
        if(hasSubmitted === "No"){
            return(
                <form>
                    <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={contactForm.firstName}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={contactForm.lastName}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" 
                            placeholder="Enter email" 
                            name="email"
                            value={contactForm.email}
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                            I will never share your emails: it is only for response purposes.
                        </Form.Text>
                    </Form.Group>
                    <FormGroup className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control 
                            as="textarea"
                            rows={3}
                        />
                    </FormGroup>
                    <Button className="button" size="lg" type="submit" onClick={submit}>Submit</Button>
                </form>
            )
        }
        else{
            return(
                <div>
                    <p>Thank you for contacting me!</p>
                    <p>To submit again, refresh the page.</p>
                </div> 
            )
        }
    }

    
 
    return(
            <Container>
                <div className='Title'>
                    <h1>Contact Me!</h1>
                </div>
                <Row className='FormContent'>
                    <Col className='FormDescription' sm="5">
                        <p>Comments, inquiries, requests, and feedback are all appreciated! </p>
                        <p>I will respond to all messages in a timely manner.</p>
                    </Col>
                    <Col>
                        <FormApprears /> 
                    </Col>
                </Row>
                
            </Container>
    )
}
export default Contact