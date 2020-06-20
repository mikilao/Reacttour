import React, { Component } from "react"
import './tour/tour.scss';
import Modal from 'react-modal';
import { Gallery } from './CarouselComponent';
import SimpleReactCalendar from 'simple-react-calendar'

import { Button, Input, FormGroup, Form, Label, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';

const initialState = {
    name: '',
    lastname: '',
    email: ' ',
    modalIsOpen: false,
    setModalIsOpen: false,
    isModalOpen: false,
    touched: {
        name: false,
        lastname: false,
        email: false,
    }

}

class Adventure extends Component {
    state = initialState
    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
    };


    validate = () => {
        let nameError = "";
        let emailError = "";
        // let passwordError = "";

        if (!this.state.name) {
            nameError = "name cannot be blank";
        }

        if (!this.state.email.includes("@")) {
            emailError = "invalid email";
        }

        if (emailError || nameError) {
            this.setState({ emailError, nameError });
            return false;
        }

        return true;
    };
    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            // clear form
            this.setState(initialState);
        }
    };
    /* if (this.state.touched.name) {
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
 }*/

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    };
    render() {
        return (
            <div className="container" name="adventure">
                <div className="adventure">
                    <h2 style={{ padding: 50, fontSize: '50px' }}>Adventures</h2>
                    <p style={{ padding: 20, }}>Pancetta ground round jerky chicken, beef pork chop fatback cow meatball picanha. Porchetta tail beef ribs salami, ham tongue cupim. Chicken drumstick doner, ham hock pork cupim andouille meatloaf salami. Pork chop brisket bacon swine. Rump alcatra ball tip leberkas andouille pork belly kevin fatback flank meatball meatloaf beef chuck spare ribs.</p>
                </div>
                <Button color="success" onClick={this.toggleModal}>Book now</Button>{' '}
                <Modal clasName="container" toggle={this.toggleModal} isOpen={this.state.isModalOpen} onRequestClose={() => this.state.isModalOpen}>
                    <ModalHeader style={{ padding: 50, fontSize: '50px' }} toggle={this.toggleModal}>Tours</ModalHeader>
                    <p className="container">Bacon ipsum dolor amet cupim meatball pig andouille. Veniam elit landjaeger burgdoggen, ipsum consequat meatloaf eu nulla tri-tip consectetur sirloin aliqua cow est. Deserunt chuck meatloaf ad turkey ribeye in dolor irure quis. Eiusmod tongue sausage fatback aute non, pork belly ullamco jowl. Ham excepteur ea, ullamco pork belly capicola fugiat dolore pastrami jerky turducken kielbasa labore pork chop shoulder. Sed nulla ad ut kevin cupim. Officia qui ipsum sed.</p>
                    <ModalBody className="container">
                        <Form id="contact-form" onSubmit={this.handleSubmit} >
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
                            <Col md={{ size: 10, offset: 2 }}>
                                <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                                <Button type="sumbit" onClick={this.toggleModal} color="primary">Book</Button>
                            </Col>
                        </Row>
                    </ModalFooter>
                </Modal>
                <div className="container" >
                    <h1 style={{ padding: '40px 0' }}>Gallery</h1>
                    <h3>Check out some photos</h3>
                    <Gallery />
                </div>
            </div>



        )
    }

}

export default Adventure;