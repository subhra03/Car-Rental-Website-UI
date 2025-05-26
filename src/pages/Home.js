import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide, faClock, faShieldAlt, faTags, faBolt, faHeadset } from "@fortawesome/free-solid-svg-icons";
import carsData from '../data/cars';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './Home.css';

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);
    const [userType, setUserType] = useState('individual');
    const [formData, setFormData] = useState({
        selectedCar: '',
        pickupLocation: '',
        dropLocation: '',
        pickupDate: '',
        pickupTime: '',
        dropDate: '',
        dropTime: '',
        userName: '',
        email: '',
        phone: ''
    });

    const carContainerRef = useRef(null);

    // Initialize AOS once on component mount
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    const handleShowModal = (car) => {
        setSelectedCar(car);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCar(null);
        setFormData({
            pickupLocation: '',
            dropLocation: '',
            pickupDate: '',
            pickupTime: '',
            dropDate: '',
            dropTime: '',
            userName: '',
            email: '',
            phone: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `Booking confirmed for ${selectedCar.name} by ${formData.userName || (userType === 'company' ? 'Company' : 'Individual')
            }`
        );
        handleCloseModal();
    };

    const scrollLeft = () => {
        carContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        carContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };


    return (
        <div className="home">
            <div
                className="hero-section text-white d-flex align-items-center justify-content-center text-center"
                style={{
                    backgroundImage: "url('/assets/hero.jpg')",
                }}
                data-aos="fade-in"
            >
                <div
                    className="hero-overlay"

                ></div>

                <Container className="position-relative z-2">
                    <h1
                        className="hero-title mb-3 display-4 fw-bold"
                        data-aos="fade-down"
                        data-aos-delay="100"
                    >
                        Freedom on Four Wheels
                    </h1>
                    <p
                        className="hero-subtitle mb-4 fs-5"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Discover India at your own pace — Premium cars, unbeatable prices, and hassle-free booking.
                    </p>
                    <Button
                        variant="warning"
                        size="lg"
                        className="fw-semibold px-4 py-2"
                        onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
                        data-aos="zoom-in"
                        data-aos-delay="300"
                    >
                        🚗 Reserve Your Ride Now
                    </Button>
                </Container>
            </div>


            {/* BOOKING FORM SECTION */}
            <section id="book-car" className="booking-section bg-light py-5" data-aos="fade-up" data-aos-delay="100">
                <Container className="p-4 rounded shadow bg-white">
                    <h2 className="text-center mb-4">Book Your Car</h2>

                    <Form>
                        <Row className="mb-3">
                            <Col xs={12}>
                                <Form.Label className="fw-semibold">Select Car</Form.Label>
                                <Form.Select
                                    name="selectedCar"
                                    value={formData.selectedCar}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Choose a car...</option>
                                    {carsData.map((car) => (
                                        <option key={car.id} value={car.id}>
                                            {car.name}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={12} md={6} className="mb-3 mb-md-0">
                                <Form.Label className="fw-semibold">Pickup Location</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="pickupLocation"
                                    value={formData.pickupLocation}
                                    onChange={handleChange}
                                    placeholder="Enter pickup location"
                                    required
                                />
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Label className="fw-semibold">Drop Location</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="dropLocation"
                                    value={formData.dropLocation}
                                    onChange={handleChange}
                                    placeholder="Enter drop location"
                                    required
                                />
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col xs={12} md={6} className="mb-3 mb-md-0">
                                <Form.Label className="fw-semibold">Pickup Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="pickupDate"
                                    value={formData.pickupDate}
                                    onChange={handleChange}
                                    required
                                />
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Label className="fw-semibold">Pickup Time</Form.Label>
                                <Form.Control
                                    type="time"
                                    name="pickupTime"
                                    value={formData.pickupTime}
                                    onChange={handleChange}
                                    required
                                />
                            </Col>
                        </Row>

                        <Row className="mb-3 align-items-center">
                            <Col xs={12} md={3} className="mb-3 mb-md-0">
                                <Form.Label className="fw-semibold d-block mb-2">User Type</Form.Label>
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="Individual"
                                    name="userType"
                                    checked={userType === 'individual'}
                                    onChange={() => setUserType('individual')}
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="Company"
                                    name="userType"
                                    checked={userType === 'company'}
                                    onChange={() => setUserType('company')}
                                />
                            </Col>
                            <Col xs={12} md={9}>
                                <Form.Label className="fw-semibold">
                                    {userType === 'individual' ? 'Your Name' : 'Company Name'}
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="userName"
                                    placeholder={userType === 'individual' ? 'Your Name' : 'Company Name'}
                                    value={formData.userName}
                                    onChange={handleChange}
                                    required
                                />
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col xs={12} md={6} className="mb-3 mb-md-0">
                                <Form.Label className="fw-semibold">Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Label className="fw-semibold">Phone Number</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </Col>
                        </Row>

                        <div className="d-flex justify-content-center">
                            <Button
                                type="submit"
                                variant="warning"
                                className="text-dark fw-semibold px-5"
                            >
                                Book Now
                            </Button>
                        </div>
                    </Form>

                </Container>
            </section>

            {/* CARS SECTION */}
            <section className="cars-section py-5 bg-white" data-aos="fade-up" data-aos-delay="150">
                <Container>
                    <h2 className="text-center mb-4">Available Cars</h2>
                    <div className="position-relative">
                        <Button
                            variant="light"
                            className="position-absolute start-0 top-50 translate-middle-y z-3"
                            onClick={scrollLeft}
                            style={{ borderRadius: '50%', boxShadow: '0 0 10px rgba(0,0,0,0.2)' }}
                        >
                            <FaArrowLeft />
                        </Button>

                        <div
                            className="d-flex overflow-auto gap-3 px-5"
                            style={{ scrollSnapType: 'x mandatory' }}
                            ref={carContainerRef}
                        >
                            {carsData.map((car) => (
                                <div
                                    key={car.id}
                                    className="car-card p-3 shadow rounded bg-light"
                                    style={{ minWidth: '280px', scrollSnapAlign: 'start', flex: '0 0 auto' }}
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    <img
                                        src={`/assets/cars/${car.image}`}
                                        alt={car.alt}
                                        className="img-fluid mb-3 rounded"
                                        style={{ height: '180px', objectFit: 'cover' }}
                                    />
                                    <h5 className="mb-2">{car.name}</h5>
                                    <Button variant="warning" onClick={() => handleShowModal(car)}>
                                        Book Now
                                    </Button>
                                </div>
                            ))}
                        </div>

                        <Button
                            variant="light"
                            className="position-absolute end-0 top-50 translate-middle-y z-3"
                            onClick={scrollRight}
                            style={{ borderRadius: '50%', boxShadow: '0 0 10px rgba(0,0,0,0.2)' }}
                        >
                            <FaArrowRight />
                        </Button>
                    </div>
                </Container>
            </section>

            {/* WHY CHOOSE US SECTION */}
            <section className="why-us-section py-5 bg-light" data-aos="fade-up" data-aos-delay="200">
                <Container>
                    <h2 className="text-center mb-5">Why Choose Us?</h2>
                    <Row>
                        {[
                            { icon: faCarSide, title: 'Wide Car Selection', text: 'Choose from economy to luxury cars suited for every need and budget.' },
                            { icon: faClock, title: '24/7 Availability', text: 'Book your ride anytime, day or night, hassle-free.' },
                            { icon: faShieldAlt, title: 'Safe & Reliable', text: 'All cars are sanitized and serviced regularly to ensure a smooth experience.' },
                            { icon: faTags, title: 'Affordable Pricing', text: 'Enjoy competitive rates with no hidden charges — what you see is what you pay.' },
                            { icon: faBolt, title: 'Instant Booking', text: 'Reserve your car in seconds with our easy-to-use booking platform.' },
                            { icon: faHeadset, title: 'Customer Support', text: 'Our support team is always ready to assist you with your queries and concerns.' }
                        ].map(({ icon, title, text }, idx) => (
                            <Col md={4} className="mb-4" key={idx} data-aos="zoom-in" data-aos-delay={250 + idx * 100}>
                                <div className="p-4 text-center shadow rounded bg-white h-100">
                                    <FontAwesomeIcon icon={icon} size="3x" className="text-warning mb-3" />
                                    <h5>{title}</h5>
                                    <p>{text}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Book Your Car Now</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Your Name / Company Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
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
                                placeholder="Enter phone number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Pickup Location</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Pickup Location"
                                name="pickupLocation"
                                value={formData.pickupLocation}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Drop Location</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Drop Location"
                                name="dropLocation"
                                value={formData.dropLocation}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Row className="mb-3">
                            <Col>
                                <Form.Label>Pickup Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="pickupDate"
                                    value={formData.pickupDate}
                                    onChange={handleChange}
                                    required
                                />
                            </Col>
                            <Col>
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

                        <Row className="mb-3">
                            <Col>
                                <Form.Label>Drop Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="dropDate"
                                    value={formData.dropDate}
                                    onChange={handleChange}
                                    required
                                />
                            </Col>
                            <Col>
                                <Form.Label>Drop Time</Form.Label>
                                <Form.Control
                                    type="time"
                                    name="dropTime"
                                    value={formData.dropTime}
                                    onChange={handleChange}
                                    required
                                />
                            </Col>
                        </Row>

                        <div className="d-grid">
                            <Button variant="warning" type="submit">
                                Confirm Booking
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

        </div>
    );
};

export default Home;
