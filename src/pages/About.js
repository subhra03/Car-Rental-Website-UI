import React from "react";
import { Accordion } from "react-bootstrap";
import './About.css';

const About = () => {
  const faqs = [
    { question: "What types of vehicles do you offer?", answer: "We offer hatchbacks, sedans, SUVs, and luxury cars." },
    { question: "How do I book a car?", answer: "Via our website or customer support helpline." },
    { question: "Do you provide chauffeur services?", answer: "Yes, available for corporate clients and events." },
    { question: "Are your rentals available 24/7?", answer: "Yes, we operate around the clock for your convenience." },
  ];

  const testimonials = [
    { name: "Rahul Sharma", feedback: "Seamless business trip. Clean car and friendly staff." },
    { name: "Neha Singh", feedback: "Affordable, responsive, and perfect for our family trip!" },
    { name: "Amit Verma", feedback: "Reliable booking and well-maintained vehicle." },
  ];

  return (
    <div className="about-container container py-5">
<div className="row text-center mb-5" data-aos="fade-up">
  <h1 className="fw-bold text-orange mb-3">About Us</h1>
  <p className="text-muted">
    At RideX, we believe that every journey should be safe, smooth, and memorable. Whether you're heading to a business meeting, a weekend getaway, or a family vacation, we provide dependable and affordable vehicles that match your needs. Backed by a passionate team and a fleet of well-maintained cars, we ensure your travel experience is hassle-free and enjoyable. With a commitment to excellence and innovation, we strive to redefine car rental services across India.
  </p>
</div>

{/* Mission & Vision */}
<div className="row mb-5 g-4">
  <div className="col-md-6" data-aos="fade-right">
    <div className="glass-card p-4">
      <h4 className="text-orange mb-2">🎯 Our Mission</h4>
      <p>
        Our mission is to deliver high-quality, reliable, and affordable rental experiences that exceed customer expectations. We aim to provide vehicles that are not only comfortable and safe but also tailored to your lifestyle and travel preferences. Through constant innovation, technology integration, and a customer-first approach, we work tirelessly to make every ride a pleasant and trustworthy one.
      </p>
    </div>
  </div>
  <div className="col-md-6" data-aos="fade-left">
    <div className="glass-card p-4">
      <h4 className="text-orange mb-2">👁 Our Vision</h4>
      <p>
        Our vision is to become India's most trusted and tech-savvy car rental service provider. We aspire to set new standards in mobility solutions by blending convenience, affordability, and superior service. With a strong focus on sustainability, digital transformation, and personalized customer experiences, we envision a future where every individual and business can access reliable transportation anytime, anywhere.
      </p>
    </div>
  </div>
</div>


      {/* FAQs */}
      <div className="mb-5" data-aos="fade-up">
        <h2 className="text-center text-orange fw-bold mb-4">Frequently Asked Questions</h2>
        <Accordion flush>
          {faqs.map((faq, i) => (
            <Accordion.Item eventKey={String(i)} className="glass-card mb-2" key={faq.question}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>

      {/* Testimonials */}
      <div className="mb-5" data-aos="fade-up">
        <h2 className="text-center text-orange fw-bold mb-4">Client Testimonials</h2>
        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div key={i} className="col-md-4" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="glass-card p-4 h-100">
                <div className="d-flex align-items-center mb-2">
                  <div className="rounded-circle bg-warning text-white fw-bold d-flex justify-content-center align-items-center me-3" style={{ width: "40px", height: "40px" }}>
                    {t.name.charAt(0)}
                  </div>
                  <h6 className="mb-0">{t.name}</h6>
                </div>
                <p className="text-muted fst-italic">"{t.feedback}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default About;
