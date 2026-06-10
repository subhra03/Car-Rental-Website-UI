import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaHome, FaCarSide, FaServicestack, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa';
import BookingForm from './BookingForm';
import carsData from '../data/cars';
import './NavbarComponent.css';

const NavbarComponent = () => {
    const [expanded, setExpanded] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleNavClick = () => setExpanded(false);
    const handleShowModal = () => {
        setExpanded(false);
        setShowModal(true);
    };
    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            <Navbar expand="lg" variant="dark" sticky="top" className="custom-navbar py-3 shadow-sm" expanded={expanded}>
                <Container>
                    <Navbar.Brand as={NavLink} to="/" onClick={handleNavClick} className="logo-border">
                        <img src="/assets/ridex-logo.svg" alt="RideX Logo" height="44" />
                        <span className="brand-name">RideX</span>
                    </Navbar.Brand>


                    <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />

                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ms-auto align-items-lg-center">
                            <Nav.Link as={NavLink} to="/" end onClick={handleNavClick}>
                                <FaHome className="me-1" /> Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/about" onClick={handleNavClick}>
                                <FaInfoCircle className="me-1" /> About
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/fleet" onClick={handleNavClick}>
                                <FaCarSide className="me-1" /> Fleet
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/services" onClick={handleNavClick}>
                                <FaServicestack className="me-1" /> Services
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" onClick={handleNavClick}>
                                <FaPhoneAlt className="me-1" /> Contact
                            </Nav.Link>
                            <Button
                                variant="warning"
                                className="ms-lg-3 mt-3 mt-lg-0 px-4 text-dark fw-semibold"
                                onClick={handleShowModal}
                            >
                                Book Now
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Booking Modal */}
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Book Your Ride</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BookingForm
                        cars={carsData}
                        showCarSelect
                        showDropLocation={false}
                        submitLabel="Book Now"
                        buttonClassName="text-dark fw-semibold px-4"
                        buttonWrapperClassName="text-center"
                    />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default NavbarComponent;
