import React, {Component} from "react"
import './tour/tour.scss';
import Modal from 'react-modal';
import { Button, Input, FormGroup, Form, Label,  ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';



export default class Adventure extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name: '',
            lastname: '',
            email: ' ',
            modalIsOpen : false,
            setModalIsOpen : false,
            isModalOpen: false,
            touched:{
                name: false,
                lastname: false,
                email: false,
            }

        }
    }

validate(name, lastName, email) {

    const errors = {
        name: '',
        lastName: '',
        email: ''
    };

    if (this.state.touched.name) {
        if (name.length < 2) {
            errors.name = 'First name must be at least 2 characters.';
        } else if (name.length > 15) {
            errors.name = 'First name must be 15 or less characters.';
        }
    }

    if (this.state.touched.lastName) {
        if (lastName.length < 2) {
            errors.lastName = 'Last name must be at least 2 characters.';
        } else if (lastName.length > 15) {
            errors.lastName = 'Last name must be 15 or less characters.';
        }
    }


    if (this.state.touched.email && !email.includes('@')) {
        errors.email = 'Email should contain a @';
    }

    return errors;
}

    toggleModal= () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
                  });
                }
    render(){
        return(
           <div>
          <h2>Adventures</h2>
          
                <Button color="success" onClick={this.toggleModal}>Book now</Button>{' '}
                <Modal clasName="container" toggle={this.toggleModal} isOpen={this.state.isModalOpen} onRequestClose={() => this.state.isModalOpen(false)}>
                    <ModalHeader toggle={this.toggleModal}>Tours</ModalHeader>
                    <p className="container">Bacon ipsum dolor amet cupim meatball pig andouille. Veniam elit landjaeger burgdoggen, ipsum consequat meatloaf eu nulla tri-tip consectetur sirloin aliqua cow est. Deserunt chuck meatloaf ad turkey ribeye in dolor irure quis. Eiusmod tongue sausage fatback aute non, pork belly ullamco jowl. Ham excepteur ea, ullamco pork belly capicola fugiat dolore pastrami jerky turducken kielbasa labore pork chop shoulder. Sed nulla ad ut kevin cupim. Officia qui ipsum sed.</p>
                    <ModalBody className="container">
                        <Form id="contact-form" >
                            <FormGroup className="form-group">
                                <div>
                                <Label for="form-label" md={4}>Firstname </Label>
                                <Input model="name" id="name" type="text" name="name" className="form-control" placeholder="First name " validate />
                               
                                </div>
                                <Label for="form-lastname">Lastname </Label>
                                <Input id="lastName" type="text" name="lastname" className="form-control" placeholder="Last name" />


                                <Label for="form-email" md={4}>Email</Label>
                                <Input id="email" type="email" name="email" className="form-control" placeholder="Email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="form-label" md={4}>Please specify your need </Label>
                                <select id="form-book" name="book" className="form-control" >
                                    <option value="Book a tour">Book a Tour</option>
                                    <option value="Request quotation">Request private tours</option>
                                    <option value="Request information">Request more information</option>
                                    <option value="Other">Other</option>
                                </select>
                            </FormGroup>
                        </Form> 
                        <Row className="form-group">
                                <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input model=".feedback" id="feedback" name="feedback"
                                        rows="12"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                        </ModalBody>
                    <ModalFooter className="container">
                                 <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>  
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                        <Button type="sumbit"  onClick={this.toggleModal} color="primary">Book</Button>
                     </Col>  
                     </Row>
                                  </ModalFooter>
                </Modal>
            </div>
           
        )
    }
} 
