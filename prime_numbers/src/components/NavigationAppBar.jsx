import React, { Component } from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarToggler, NavItem, Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class NavigationAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
            show: false
        };

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.popModal = this.popModal.bind(this);
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    popModal() {
        this.setState({ show: !this.state.show });
    }

    render() {
        return (
            <>
                <Navbar color="dark" dark expand="md" fixed="top">
                    <Link to="/" className="navbar-brand">Primtall!</Link>
                    <img src="https://media1.giphy.com/media/10ZEUsmynGEGT6/source.gif" style={{ height: 5 + "em" }}></img>
                    <button class="btn btn-link" onClick={this.popModal}>
                        <img src="https://i.pinimg.com/originals/3f/2c/97/3f2c979b214d06e9caab8ba8326864f3.gif" style={{ height: 5 + "em" }}></img>
                    </button>
                    <img src="https://media1.giphy.com/media/10ZEUsmynGEGT6/source.gif" style={{ height: 5 + "em" }}></img>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                    </Collapse>
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
            </>
        );
    }
}

export default NavigationAppBar;
