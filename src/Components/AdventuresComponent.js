import React, {Component, useState} from "react"
import './tour/tour.scss';
import Modal from 'react-modal';


class Adventure extends Component {
    constructor(props) {
        super(props);
        this.state ={
            modalIsOpen : false,
            setModalIsOpen : false,
            isModalOpen: false,
        }
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
                  })}
    render(){
        
        return(
            <div class="header">
        <div class="container" id="headliner" >
          <div class="col">
          <div className="container"><h1>Tours</h1>
                <p>Bacon ipsum dolor amet cupim meatball pig andouille. Veniam elit landjaeger burgdoggen, ipsum consequat meatloaf eu nulla tri-tip consectetur sirloin aliqua cow est. Deserunt chuck meatloaf ad turkey ribeye in dolor irure quis. Eiusmod tongue sausage fatback aute non, pork belly ullamco jowl. Ham excepteur ea, ullamco pork belly capicola fugiat dolore pastrami jerky turducken kielbasa labore pork chop shoulder. Sed nulla ad ut kevin cupim. Officia qui ipsum sed.</p> 
                <button onClick={this.toggleModal}>Open Modal</button>
              <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                  <p>something</p>
                  <button onClick={() => this.setModalIsOpen(false)}>Book</button>
                </Modal>
</div>
        </div>
      </div> 
      </div>
        )
    }
} 
export default Adventure;