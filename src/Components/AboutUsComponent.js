import React, { Component } from "react";
//import { tourData } from "./tourlist/tourData";
import { Label, Input, Row, Col } from 'reactstrap';
import './tour/tour.scss';




//export default function AboutUs (){
//   return( 

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",


};

export default class ValidationForm extends Component {
  state = initialState;

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

  render() {
    return (
      <div id="aboutform" padding-left='40' >
        <Row className="form-group">
          <Col>
            <h1> Book a tour or request more information About us:</h1>
          </Col>
        </Row>
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <Row className="form-group">
              <Col  >
                <Label>Name</Label>
                <Input
                  name="name"
                  className="form-control"
                  placeholder="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: 'red' }}>
                  {this.state.nameError}
                </div>
              </Col>
            </Row>

            <div>
              <Label className="form-label" name='email' >Email</Label>
              <Input
                name="email"
                placeholder="email"
                value={this.state.email}

                onChange={this.handleChange}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.emailError}
              </div>
            </div>

            <div className="col ">
              <div className="form-group">
                <Label className="form-label">Please specify your need </Label>
                <select id="formtext" name="book" className="form-control" >
                  <option value="Book a tour">Book a Tour</option>
                  <option value="Request quotation">Request private tours</option>
                  <option value="Request information">Request more information</option>
                  <option value="Other">Other</option>
                </select>

              </div>
            </div>
            <div >
              <Row className="form-group">
                <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                <Col md={10}>
                  <Input model="feedback"
                    id="feedback"
                    name="feedback"
                    rows="12"
                    className="feedback"
                  />
                </Col>
              </Row>
            </div></div>
          <button type="submit" onClick={console.log('See you in San Francisco!')}>submit</button>
        </form>
      </div>
    );
  }
}


