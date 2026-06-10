import React, { useState } from 'react';
import cars from '../data/cars';
import CarCard from '../components/CarCard';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import BookingForm from '../components/BookingForm';
import { FaCar, FaFileAlt, FaCheckCircle, FaSmile } from 'react-icons/fa';
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

    const handleBookNow = (car) => {
        setSelectedCar(car);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedCar(null);
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
                            className="d-flex flex-column align-items-center rental-car-card-container"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <CarCard
                                name={car.name}
                                image={car.image}
                                alt={car.alt}
                                imageFit="contain"
                                onBook={() => handleBookNow(car)}
                            />
                        </Col>
                    ))}
                </Row>

                <Modal show={showModal} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Book {selectedCar?.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <BookingForm
                            selectedCar={selectedCar}
                            showDropDateTime
                            submitLabel="Confirm Booking"
                            buttonClassName="w-100 fw-semibold"
                            buttonWrapperClassName=""
                        />
                    </Modal.Body>
                </Modal>
            </Container>
        </>
    );
};

export default Fleet;
