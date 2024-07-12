import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMobileAlt, FaCode, FaCogs } from 'react-icons/fa';


const FeatureCard = ({ icon, title, description }) => (
  <Col className="text-center">
    <div className="mb-3">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </Col>
);

export function Card () {
    return(
  <div className="cardcls">
  <Container className="my-1"> 
    <Row className="my-5">
      <FeatureCard
        icon={<FaMobileAlt size={40} />}
        title="Fully Responsive"
        description="This theme will look great on any
         device, no matter the size!"
      />
      <FeatureCard
        icon={<FaCode size={40} />}
        title="Bootstrap 5 Ready"
        description="Featuring the latest build of the new Bootstrap 5 framework!"
      />
      <FeatureCard
        icon={<FaCogs size={40} />}
        title="Easy to Use"
        description="Ready to use with your own content, or customize the source files!"
      />
    </Row>
  </Container>
  </div>
);
}
