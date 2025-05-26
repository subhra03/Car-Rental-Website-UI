import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import {
  FaCar,
  FaUserShield,
  FaMoneyBillWave,
  FaHeadset,
  FaGasPump,
  FaMapMarkedAlt,
  FaTools,
  FaClock,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCar size={40} color="#ffa600" />,
    title: "Wide Range of Vehicles",
    description: "From compact cars to SUVs and luxury sedans, we have a car for every journey.",
  },
  {
    icon: <FaUserShield size={40} color="#ffa600" />,
    title: "Fully Insured Vehicles",
    description: "Every rental is backed with full insurance and safety compliance for your protection.",
  },
  {
    icon: <FaMoneyBillWave size={40} color="#ffa600" />,
    title: "Affordable Rates",
    description: "Transparent pricing with daily, weekly, and monthly packages at competitive rates.",
  },
  {
    icon: <FaHeadset size={40} color="#ffa600" />,
    title: "24/7 Customer Support",
    description: "Our support team is available around the clock to assist you with anything.",
  },
  {
    icon: <FaGasPump size={40} color="#ffa600" />,
    title: "Fuel-Efficient Options",
    description: "Save on fuel costs with our wide range of economy and hybrid vehicle options.",
  },
  {
    icon: <FaMapMarkedAlt size={40} color="#ffa600" />,
    title: "GPS Navigation",
    description: "Many vehicles are equipped with built-in GPS to help you find your way easily.",
  },
  {
    icon: <FaTools size={40} color="#ffa600" />,
    title: "Regular Maintenance",
    description: "Each vehicle undergoes routine checks and professional servicing for top performance.",
  },
  {
    icon: <FaClock size={40} color="#ffa600" />,
    title: "Flexible Rental Durations",
    description: "Book for hours, days, or months—our flexible plans adapt to your schedule.",
  },
];

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <section id="services" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-3">Our Services</h2>
        <p className="text-muted mb-5">
          Experience convenience and safety with SS Car Rental's trusted services.
        </p>
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              className="col-md-6 col-lg-3"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <div className="mb-3">{service.icon}</div>
                <h5 className="fw-semibold">{service.title}</h5>
                <p className="text-muted small">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
