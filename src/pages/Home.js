import React, { useState, useRef } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import {
    FaArrowLeft,
    FaArrowRight,
    FaBolt as faBolt,
    FaCarSide as faCarSide,
    FaClock as faClock,
    FaHeadset as faHeadset,
    FaShieldAlt as faShieldAlt,
    FaTags as faTags
} from 'react-icons/fa';
import carsData from '../data/cars';
import BookingForm from '../components/BookingForm';
import CarCard from '../components/CarCard';
import './Home.css';

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);

    const carContainerRef = useRef(null);

    const handleShowModal = (car) => {
        setSelectedCar(car);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedCar(null);
    };

    const scrollToBooking = () => {
        document.getElementById('book-car')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
                className="hero-section text-white d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: "url('/assets/hero-optimized.jpg')",
                }}
                data-aos="fade-in"
            >
                <div
                    className="hero-overlay"

                ></div>

                <Container className="hero-content position-relative z-2">
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
                        onClick={scrollToBooking}
                        data-aos="zoom-in"
                        data-aos-delay="300"
                    >
                        🚗 Reserve Your Ride Now
                    </Button>
                    <div className="hero-booking-panel" data-aos="fade-up" data-aos-delay="350">
                        <div className="hero-booking-header">
                            <span className="hero-booking-kicker">Quick search</span>
                            <h2>Find your RideX car</h2>
                        </div>
                        <BookingForm
                            cars={carsData}
                            variant="compact"
                            showCarSelect
                            showBookingType={false}
                            showSuccessMessage={false}
                            submitLabel="Find"
                            buttonClassName="w-100 text-dark fw-semibold"
                            buttonWrapperClassName="d-grid"
                            onBookingSubmit={scrollToBooking}
                        />
                    </div>
                </Container>
            </div>


            {/* BOOKING FORM SECTION */}
            <section id="book-car" className="booking-section bg-light py-5" data-aos="fade-up" data-aos-delay="100">
                <Container className="p-4 rounded shadow bg-white">
                    <h2 className="text-center mb-4">Book Your Car</h2>

                    <BookingForm cars={carsData} showCarSelect submitLabel="Book Now" />

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
                                    className="car-carousel-item"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    <CarCard
                                        name={car.name}
                                        image={car.image}
                                        alt={car.alt}
                                        onBook={() => handleShowModal(car)}
                                    />
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
                        ].map(({ icon: Icon, title, text }, idx) => (
                            <Col md={4} className="mb-4" key={idx} data-aos="zoom-in" data-aos-delay={250 + idx * 100}>
                                <div className="p-4 text-center shadow rounded bg-white h-100">
                                    <Icon className="why-us-icon text-warning mb-3" />
                                    <h5>{title}</h5>
                                    <p>{text}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Book {selectedCar?.name || 'Your Car'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BookingForm
                        selectedCar={selectedCar}
                        showDropDateTime
                        submitLabel="Confirm Booking"
                        buttonClassName="fw-semibold"
                        buttonWrapperClassName="d-grid"
                    />
                </Modal.Body>
            </Modal>

        </div>
    );
};

export default Home;
