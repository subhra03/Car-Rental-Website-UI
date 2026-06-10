import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn
} from 'react-icons/fa';
import './FooterComponent.css';

const getFooterLinkClass = ({ isActive }) =>
    `nav-link px-0 py-1 d-inline-block${isActive ? ' active' : ''}`;

const FooterComponent = () => {
    return (
        <footer className="footer bg-dark text-white pt-5 pb-3">
            <Container>
                <Row className="mb-4">
                    <Col md={4} className="mb-4 mb-md-0">
                        <h5 className="text-orange fw-bold">RideX</h5>
                        <p className="small">
                            Reliable and affordable car rentals for every occasion — whether it's a business trip, weekend getaway, or airport pickup.
                            Choose RideX for well-maintained vehicles, 24/7 support, and a hassle-free booking experience.
                            Your journey starts with trust, comfort, and convenience.
                        </p>

                    </Col>

                    <Col md={4} className="mb-4 mb-md-0">
    <h6 className="fw-semibold text-orange">Quick Links</h6>
    <ul className="list-unstyled">
        <li>
            <NavLink to="/" className={getFooterLinkClass}>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/fleet" className={getFooterLinkClass}>
                Fleet
            </NavLink>
        </li>
        <li>
            <NavLink to="/services" className={getFooterLinkClass}>
                Services
            </NavLink>
        </li>
        <li>
            <NavLink to="/about" className={getFooterLinkClass}>
                About
            </NavLink>
        </li>
        <li>
            <NavLink to="/contact" className={getFooterLinkClass}>
                Contact
            </NavLink>
        </li>
    </ul>
</Col>

                    <Col md={4}>
                        <h6 className="fw-semibold text-orange">Follow Us</h6>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        </div>
                    </Col>
                </Row>

                <hr className="border-orange" />

                <p className="text-center small mb-0">
                    &copy; {new Date().getFullYear()} RideX. All rights reserved.
                </p>
            </Container>
        </footer>
    );
};

export default FooterComponent;

