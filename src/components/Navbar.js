import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaHome, FaCarSide, FaServicestack, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa';
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

    const [formData, setFormData] = useState({
        pickupLocation: '',
        pickupDate: '',
        pickupTime: '',
        userName: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Booking Submitted!');
        handleCloseModal();
    };

    return (
        <>
            <Navbar expand="lg" variant="dark" sticky="top" className="custom-navbar py-3 shadow-sm" expanded={expanded}>
                <Container>
                    <Navbar.Brand as={NavLink} to="/" onClick={handleNavClick} className="logo-border">
                        <img src="/assets/logo.png" alt="SS Car Rental Logo" height="40" />
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
                                className="ms-lg-3 mt-3 mt-lg-0 px-4 rounded-pill text-dark fw-semibold"
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
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Pickup Location</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Pickup Location"
                                name="pickupLocation"
                                value={formData.pickupLocation}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Row className="mb-3">
                            <Col xs={12} md={6} className="mb-2 mb-md-0">
                                <Form.Label>Pickup Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="pickupDate"
                                    value={formData.pickupDate}
                                    onChange={handleChange}
                                    required
                                />
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Label>Pickup Time</Form.Label>
                                <Form.Control
                                    type="time"
                                    name="pickupTime"
                                    value={formData.pickupTime}
                                    onChange={handleChange}
                                    required
                                />
                            </Col>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Label>Your Name / Company Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Your Name"
                                name="userName"
                                value={formData.userName}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Enter Phone Number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <div className="text-center">
                            <Button type="submit" variant="warning" className="text-dark fw-semibold px-4">
                                Book Now
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default NavbarComponent;
