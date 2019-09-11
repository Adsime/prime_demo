import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class NavigationAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
            show: false
        };

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.popModal = this.popModal.bind(this);
        this.handlePizza = this.handlePizza.bind(this);
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    popModal() {
        this.setState({ show: !this.state.show });
    }

    handlePizza() {
        let elem = document.getElementById("pizza");
        elem.className = elem.className == "pizza_right" ? "pizza_left" : "pizza_right";
    }

    render() {
        return (
            <>
                <Navbar color="dark" dark expand="md" fixed="top">
                    <Link to="/" className="navbar-brand">Primtall!</Link>
                    <img alt="" src="https://media1.giphy.com/media/10ZEUsmynGEGT6/source.gif" style={{ height: 5 + "em" }}></img>
                    <button className="btn btn-link" onClick={this.popModal}>
                        <img alt="" src="https://i.pinimg.com/originals/3f/2c/97/3f2c979b214d06e9caab8ba8326864f3.gif" style={{ height: 5 + "em" }}></img>
                    </button>
                    <img alt="" src="https://media1.giphy.com/media/10ZEUsmynGEGT6/source.gif" style={{ height: 5 + "em" }}></img>
                </Navbar>


                <Modal isOpen={this.state.show} onHide={this.popModal}>
                    <ModalHeader closeButton>
                        <h1>Nysgjerrigper!</h1>
                    </ModalHeader>
                    <ModalBody>Visste du at det finnes <u>evig</u> med primtall?</ModalBody>
                    <ModalFooter>
                        <Button variant="primary" onClick={this.popModal}>
                            Lukk
                        </Button>
                    </ModalFooter>
                </Modal>
                <div>
                    <img id="pizza" alt="" className="pizza_right" onClick={this.handlePizza} src="https://pngriver.com/wp-content/uploads/2018/04/Download-Pepperoni-Pizza.png" width="400px"></img>
                </div>
            </>
        );
    }
}

export default NavigationAppBar;
