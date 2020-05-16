import React from "react";
//import { tourData } from "./tourlist/tourData";
import {Label, Form, Input, Button, FormGroup} from 'reactstrap';



export default function AboutUs (){
     return( 
        <section className="section-b">
        <Form id="contact-form" className="form-control-wrap">
          <div className="container" id="headliner">
              <h1> Book a tour or request more information About us:</h1>
                  <div className="row row-content">
                      <div className="col ">
                          <FormGroup>
                              <Label for="form-label">Firstname </Label>
                              <Input id="form-name" type="text" name="name" className="form-control" placeholder="First name " />
                             
                          </FormGroup>
                      </div>
                      <div className="col">
                          <div className="form-group">
                              <Label for="form-lastname">Lastname </Label>
                              <Input id="form-lastname" type="text" name="lastname" className="form-control" placeholder="Last name"  />
                             
                          </div>
                      </div>
                  </div>
                  <div className="row row-content">
                      <div className="col ">
                          <div className="form-group">
                              <Label for="form-email">Email</Label>
                              <Input id="form-email" type="email" name="email" className="form-control" placeholder="Email" />
                             
                          </div>
                      </div>
                      <div className="col ">
                          <div className="form-group">
                              <Label for="form-label">Please specify your need </Label>
                              <select id="form-book" name="book" className="form-control" >
                                  <option value="Book a tour">Book a Tour</option>
                                  <option value="Request quotation">Request private tours</option>
                                  <option value="Request information">Request more information</option>
                                  <option value="Other">Other</option>
                              </select>
                             
                          </div>
                      </div>
                  </div>
                  <div className="row row-content">
                      <div className="col">
                          <div className="form-group">
                              <Label for="form-label">Message</Label>
                              <Input id="form-message" className="form-control text" type="textarea" name="text"placeholder="Message for me" />
                              
                          </div>
                      </div>
                      <div className="col">
                          <Button type="submit" id="submit"  onclick={alert("Thank you")} className="btn btn-success btn-send" >Submit</Button>
                      </div>
                  </div>
              </div>
              <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      
          </Form>
      </section>
     )
 }