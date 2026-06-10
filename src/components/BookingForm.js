import React, { useEffect, useMemo, useState } from 'react';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { FaCalendarAlt, FaCarSide, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import './BookingForm.css';

const createInitialFormData = (selectedCar) => ({
    selectedCar: selectedCar ? String(selectedCar.id) : '',
    bookingType: 'individual',
    customerName: '',
    email: '',
    phone: '',
    pickupLocation: '',
    dropLocation: '',
    pickupDate: '',
    pickupTime: '',
    dropDate: '',
    dropTime: '',
});

const BookingForm = ({
    cars = [],
    selectedCar = null,
    variant = 'full',
    showCarSelect = false,
    showBookingType = true,
    showDropLocation = true,
    showDropDateTime = false,
    showSuccessMessage = true,
    submitLabel = 'Book Now',
    buttonClassName = 'text-dark fw-semibold px-5',
    buttonWrapperClassName = 'd-flex justify-content-center',
    getSuccessMessage,
    onBookingSubmit,
}) => {
    const [formData, setFormData] = useState(() => createInitialFormData(selectedCar));
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        setFormData((prev) => ({
            ...prev,
            selectedCar: selectedCar ? String(selectedCar.id) : prev.selectedCar,
        }));
        setSuccessMessage('');
    }, [selectedCar]);

    const bookedCar = useMemo(() => {
        if (selectedCar) {
            return selectedCar;
        }

        return cars.find((car) => String(car.id) === formData.selectedCar) || null;
    }, [cars, formData.selectedCar, selectedCar]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (showCarSelect && !bookedCar) {
            setSuccessMessage('');
            return;
        }

        const booking = {
            ...formData,
            car: bookedCar,
            customerType: showBookingType ? formData.bookingType : 'individual',
            customerName: formData.customerName,
        };

        onBookingSubmit?.(booking);

        const carName = bookedCar?.name || 'your ride';
        if (showSuccessMessage) {
            setSuccessMessage(
                getSuccessMessage
                    ? getSuccessMessage(booking)
                    : `Booking request received for ${carName}. We will contact you shortly.`
            );
        }
        setFormData(createInitialFormData(selectedCar));
    };

    if (variant === 'compact') {
        return (
            <Form className="booking-form hero-booking-form" onSubmit={handleSubmit}>
                {successMessage && (
                    <Alert variant="success" className="mb-3">
                        {successMessage}
                    </Alert>
                )}

                <div className="hero-booking-grid">
                    {showCarSelect && (
                        <Form.Group className="hero-booking-field">
                            <Form.Label className="fw-semibold">
                                <FaCarSide /> Car
                            </Form.Label>
                            <Form.Select
                                name="selectedCar"
                                value={formData.selectedCar}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Choose a car</option>
                                {cars.map((car) => (
                                    <option key={car.id} value={car.id}>
                                        {car.name}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    )}

                    <Form.Group className="hero-booking-field">
                        <Form.Label className="fw-semibold">
                            <FaMapMarkerAlt /> Pickup
                        </Form.Label>
                        <Form.Control
                            type="text"
                            name="pickupLocation"
                            placeholder="Pickup location"
                            value={formData.pickupLocation}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    {showDropLocation && (
                        <Form.Group className="hero-booking-field">
                            <Form.Label className="fw-semibold">
                                <FaMapMarkerAlt /> Drop
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="dropLocation"
                                placeholder="Drop location"
                                value={formData.dropLocation}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    )}

                    <Form.Group className="hero-booking-field hero-booking-field--date">
                        <Form.Label className="fw-semibold">
                            <FaCalendarAlt /> Date
                        </Form.Label>
                        <Form.Control
                            type="date"
                            name="pickupDate"
                            value={formData.pickupDate}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <div className="hero-booking-submit">
                        <div className={buttonWrapperClassName}>
                            <Button type="submit" variant="warning" className={buttonClassName}>
                                <FaSearch />
                                {submitLabel}
                            </Button>
                        </div>
                    </div>
                </div>
            </Form>
        );
    }

    return (
        <Form className="booking-form" onSubmit={handleSubmit}>
            {successMessage && (
                <Alert variant="success" className="mb-3">
                    {successMessage}
                </Alert>
            )}

            {selectedCar && !showCarSelect && (
                <div className="booking-form-selected-car">
                    {selectedCar.image && (
                        <img
                            src={`/assets/cars/${selectedCar.image}`}
                            alt={selectedCar.alt || selectedCar.name}
                            loading="lazy"
                            decoding="async"
                        />
                    )}
                    <div>
                        <span>Selected car</span>
                        <strong>{selectedCar.name}</strong>
                    </div>
                </div>
            )}

            {showCarSelect && (
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
                            {cars.map((car) => (
                                <option key={car.id} value={car.id}>
                                    {car.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Col>
                </Row>
            )}

            {showBookingType && (
                <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold d-block mb-2">Booking For</Form.Label>
                    <Form.Check
                        inline
                        type="radio"
                        label="Individual"
                        name="bookingType"
                        value="individual"
                        checked={formData.bookingType === 'individual'}
                        onChange={handleChange}
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="Company"
                        name="bookingType"
                        value="company"
                        checked={formData.bookingType === 'company'}
                        onChange={handleChange}
                    />
                </Form.Group>
            )}

            <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">
                    {formData.bookingType === 'company' ? 'Company Name' : 'Full Name'}
                </Form.Label>
                <Form.Control
                    type="text"
                    name="customerName"
                    placeholder={formData.bookingType === 'company' ? 'Enter company name' : 'Enter your full name'}
                    value={formData.customerName}
                    onChange={handleChange}
                    required
                />
            </Form.Group>

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

            <Row className="mb-3">
                <Col xs={12} md={showDropLocation ? 6 : 12} className={showDropLocation ? 'mb-3 mb-md-0' : ''}>
                    <Form.Label className="fw-semibold">Pickup Location</Form.Label>
                    <Form.Control
                        type="text"
                        name="pickupLocation"
                        placeholder="Enter pickup location"
                        value={formData.pickupLocation}
                        onChange={handleChange}
                        required
                    />
                </Col>
                {showDropLocation && (
                    <Col xs={12} md={6}>
                        <Form.Label className="fw-semibold">Drop Location</Form.Label>
                        <Form.Control
                            type="text"
                            name="dropLocation"
                            placeholder="Enter drop location"
                            value={formData.dropLocation}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                )}
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

            {showDropDateTime && (
                <Row className="mb-3">
                    <Col xs={12} md={6} className="mb-3 mb-md-0">
                        <Form.Label className="fw-semibold">Drop Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="dropDate"
                            value={formData.dropDate}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Label className="fw-semibold">Drop Time</Form.Label>
                        <Form.Control
                            type="time"
                            name="dropTime"
                            value={formData.dropTime}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                </Row>
            )}

            <div className={buttonWrapperClassName}>
                <Button type="submit" variant="warning" className={buttonClassName}>
                    {submitLabel}
                </Button>
            </div>
        </Form>
    );
};

export default BookingForm;
