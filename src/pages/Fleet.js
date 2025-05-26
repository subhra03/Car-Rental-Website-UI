import React, { useState, useEffect } from 'react';
import cars from '../data/cars';
import CarCard from '../components/CarCard';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { FaCar, FaFileAlt, FaCheckCircle, FaSmile } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Fleet.css';

const steps = [
    { id: 1, icon: <FaCar />, title: "Choose your car" },
    { id: 2, icon: <FaFileAlt />, title: "Fill out the booking form" },
    { id: 3, icon: <FaCheckCircle />, title: "Confirm your rental" },
    { id: 4, icon: <FaSmile />, title: "Enjoy your ride!" },
];

const Fleet = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);
    const [formData, setFormData] = useState({
        bookingType: 'individual',
        companyName: '',
        fullName: '',
        email: '',
        phone: '',
        pickupLocation: '',
        dropLocation: '',
        fromDate: '',
        toDate: '',
        pickupTime: '',
        dropTime: '',
    });

    useEffect(() => {
        AOS.init({ duration: 500, once: true });
    }, []);

    const handleBookNow = (car) => {
        setSelectedCar(car);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setFormData({
            bookingType: 'individual',
            companyName: '',
            fullName: '',
            email: '',
            phone: '',
            pickupLocation: '',
            dropLocation: '',
            fromDate: '',
            toDate: '',
            pickupTime: '',
            dropTime: '',
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let bookingPerson = formData.bookingType === 'company' ? formData.companyName : formData.fullName;

        alert(
            `Booking Details:
Car: ${selectedCar.name}
Booking For: ${formData.bookingType === 'company' ? 'Company' : 'Individual'}
Name: ${bookingPerson}
Email: ${formData.email}
Phone: ${formData.phone}
Pickup Location: ${formData.pickupLocation}
Drop Location: ${formData.dropLocation}
From: ${formData.fromDate} at ${formData.pickupTime}
To: ${formData.toDate} at ${formData.dropTime}`
        );

        handleClose();
    };

    return (
        <>
            <Container className="my-5 how-it-works" data-aos="fade-up">
                <h2 className="mb-3 text-center">HOW IT WORKS</h2>
                <Row className="justify-content-center text-center">
                    {steps.map(({ id, icon, title }) => (
                        <Col key={id} xs={6} md={3} className="mb-4" data-aos="zoom-in" data-aos-delay={id * 100}>
                            <div className="step-card">
                                <div className="step-number">{id}</div>
                                <div className="step-icon">{icon}</div>
                                <div className="step-title">{title}</div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

        
            <Container className="py-5" id="fleet" data-aos="fade-up">
                <h2 className="mb-3 text-center">CARS AVAILABLE</h2>
                <p className="text-center mb-5 px-md-5 fs-5 text-muted" data-aos="fade-up" data-aos-delay="100">
                    Choose from our wide range of premium cars for your rental needs. Whether you want comfort, luxury, or performance, we have the perfect ride for you.
                </p>
                <Row className="g-4 justify-content-center">
                    {cars.map((car, index) => (
                        <Col
                            key={car.id}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            className="d-flex flex-column align-items-center car-card-container"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <CarCard name={car.name} image={car.image} alt={car.alt} />
                            <Button variant="warning" className="mt-3 book-now-btn" onClick={() => handleBookNow(car)}>
                                Book Now
                            </Button>
                        </Col>
                    ))}
                </Row>

                <Modal show={showModal} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Book {selectedCar?.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Booking For</Form.Label>
                                <div>
                                    <Form.Check inline label="Individual" name="bookingType" type="radio" id="individual" value="individual" checked={formData.bookingType === 'individual'} onChange={handleChange} />
                                    <Form.Check inline label="Company" name="bookingType" type="radio" id="company" value="company" checked={formData.bookingType === 'company'} onChange={handleChange} />
                                </div>
                            </Form.Group>

                            {formData.bookingType === 'company' ? (
                                <Form.Group className="mb-3" controlId="formCompanyName">
                                    <Form.Label>Company Name</Form.Label>
                                    <Form.Control type="text" name="companyName" placeholder="Enter company name" value={formData.companyName} onChange={handleChange} required />
                                </Form.Group>
                            ) : (
                                <Form.Group className="mb-3" controlId="formFullName">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" name="fullName" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} required />
                                </Form.Group>
                            )}

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPhone">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="tel" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
                            </Form.Group>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formPickupLocation">
                                        <Form.Label>Pickup Location</Form.Label>
                                        <Form.Control type="text" name="pickupLocation" placeholder="Enter pickup location" value={formData.pickupLocation} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formDropLocation">
                                        <Form.Label>Drop Location</Form.Label>
                                        <Form.Control type="text" name="dropLocation" placeholder="Enter drop location" value={formData.dropLocation} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formFromDate">
                                        <Form.Label>From Date</Form.Label>
                                        <Form.Control type="date" name="fromDate" value={formData.fromDate} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formToDate">
                                        <Form.Label>To Date</Form.Label>
                                        <Form.Control type="date" name="toDate" value={formData.toDate} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formPickupTime">
                                        <Form.Label>Pickup Time</Form.Label>
                                        <Form.Control type="time" name="pickupTime" value={formData.pickupTime} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formDropTime">
                                        <Form.Label>Drop Time</Form.Label>
                                        <Form.Control type="time" name="dropTime" value={formData.dropTime} onChange={handleChange} required />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Button variant="warning" type="submit" className="w-100 fw-semibold">
                                 Confirm Booking
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </Container>
        </>
    );
};

export default Fleet;
