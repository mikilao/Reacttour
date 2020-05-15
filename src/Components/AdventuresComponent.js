import React, {Component} from "react"
import './tour/tour.scss';
import Modal from 'react-modal';
import { Button, Form, FormGroup, Label, Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



export default class Adventure extends Component {
    constructor(props) {
        super(props);
        this.state ={
            modalIsOpen : false,
            setModalIsOpen : false,
            isModalOpen: false,
        }
    }
    toggleModal= () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
                  });
                }
    render(){
        
        return(
           <div>
            
       <Button color="success" onClick={this.toggleModal}>Book now</Button>{' '}
                <Modal clasName="container" toggle={this.toggleModal} isOpen={this.state.isModalOpen}  onRequestClose={() => this.state.isModalOpen(false)}>
                   <ModalHeader toggle={this.toggleModal}>Tours</ModalHeader>
                <p className="container">Bacon ipsum dolor amet cupim meatball pig andouille. Veniam elit landjaeger burgdoggen, ipsum consequat meatloaf eu nulla tri-tip consectetur sirloin aliqua cow est. Deserunt chuck meatloaf ad turkey ribeye in dolor irure quis. Eiusmod tongue sausage fatback aute non, pork belly ullamco jowl. Ham excepteur ea, ullamco pork belly capicola fugiat dolore pastrami jerky turducken kielbasa labore pork chop shoulder. Sed nulla ad ut kevin cupim. Officia qui ipsum sed.</p> 
                 <ModalBody>
                   <Form id="contact-form" className="form-control-wrap">
                  <FormGroup className="form-group">
                                        <Label for="form-label">Firstname </Label>
                                        <Input id="form-name" type="text" name="name" className="form-control" placeholder="First name " />
                                       
                             
                                        <Label for="form-lastname">Lastname </Label>
                                        <Input id="form-lastname" type="text" name="lastname" className="form-control" placeholder="Last name"  />
                                       
                           
                                        <Label for="form-email">Email</Label>
                                        <Input id="form-email" type="email" name="email" className="form-control" placeholder="Email" / >
                                   </FormGroup>
                                   <FormGroup>
                                        <Label for="form-label">Please specify your need </Label>
                                        <select id="form-book" name="book" className="form-control" >
                                            <option value="Book a tour">Book a Tour</option>
                                            <option value="Request quotation">Request private tours</option>
                                            <option value="Request information">Request more information</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        </FormGroup>
                                        </Form> </ModalBody>
                                        <ModalFooter>
                   
          <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
          <Button type="button" className="btn btn-primary btn-sm" onClick={this.toggleModal}  color="primary">Book</Button>
          </ModalFooter>
                </Modal>
</div>
      
       )
    }
} 
