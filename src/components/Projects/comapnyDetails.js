import React from "react";
import { Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import rshisfts1 from "../../Assets/rshisfts/Screenshot (581).png";
import rshisfts2 from "../../Assets/rshisfts/Screenshot (582).png";
import rshisfts3 from "../../Assets/rshisfts/Screenshot (583).png";
import rshisfts4 from "../../Assets/rshisfts/Screenshot (584).png";
import moksh1 from "../../Assets/moksh/Screenshot (393).png"
import moksh2 from "../../Assets/moksh/Screenshot (364).png"
import moksh3 from "../../Assets/moksh/Screenshot (347).png"
import moksh4 from "../../Assets/moksh/Screenshot (399).png"
import moksh5 from "../../Assets/moksh/Screenshot (283).png"
import moksh6 from "../../Assets/moksh/Screenshot (270).png"
import moksh7 from "../../Assets/moksh/Screenshot (268).png"
import sigmared3 from '../../Assets/sigmared/Screenshot (587).png'
import sigmared2 from '../../Assets/sigmared/Screenshot (586).png'
import sigmared1 from '../../Assets/sigmared/Screenshot (585).png'

import sigmared4 from '../../Assets/sigmared/Screenshot 2024-05-14 163628.png'
import sigmared5 from '../../Assets/sigmared/Screenshot (559).png'
import sigmared6 from '../../Assets/sigmared/Screenshot 2024-05-18 002043.png'

import sigmared7 from '../../Assets/sigmared/Screenshot 2024-04-11 195300.png'
import sigmared8 from '../../Assets/sigmared/Screenshot 2024-03-21 135424.png'
import sigmared9 from '../../Assets/sigmared/Screenshot 2024-03-21 135410.png'







const CompanyDetails = () => {
  const { companyName } = useParams();
  const companyData = [
    {
      name: "SigmaRed Technologies Inc. Canada",
      id: "sigmared",
      role: "Software Developer",
      period: "02/24 - Present",
      screenshots: [
        { url: sigmared1, caption: "Cyber Risk Dashboard" },
        { url: sigmared2, caption: "Cyber Risk Onboarding Dashboard" },
        { url: sigmared3, caption: "Cyber Risk Assessment Table" },
        { url: sigmared4, caption: "Ascert Dashboard" },
        { url: sigmared5, caption: "Ascert AI Bias Analytics" },
        { url: sigmared6, caption: "Ascert AI Bias Analytics" },
        { url: sigmared7, caption: "ESCROW Dashboard" },
        { url: sigmared8, caption: "ESCROW Dashboard" },
        { url: sigmared9, caption: "ESCROW Guardrail Dashboard" },

      ],
      points: [
        "Led the development of a Cyber Risk Assessment and Compliance dashboard from inception to deployment.",
        "Created responsive and user-friendly front-end interface using React, tailored to meet specific client requirements.",
        "Developed robust backend services using FastAPI, integrated with MongoDB for efficient data management.",
        "Implemented real-time asynchronous communication channels to support dynamic data exchange and updates in dashboard applications.",
        "Deployed applications on cloud services and containerized them using Docker for scalable and efficient deployment.",
        "Built a comprehensive dashboard application for AI Compliance and Risk Management using Angular framework.",
        "Integrated backend with servers hosting ML models to assess and mitigate bias, ensuring fairness in automated decisions.",
        "Collaborated with cross-functional teams for seamless integration and functionality of frontend and backend.",
      ],
    },
    {
      name: "Moksh",
      id: "moksh",
      role: "Software Developer",
      period: "01/23 - 06/23",
      screenshots: [
        { url: moksh1, caption: "Brand Overall Dashboard" },
        { url: moksh2, caption: "Product Overall Dashboard" },
        { url: moksh3, caption: "Product Marketplaces Dashboard" },
        { url: moksh4, caption: "Product Marketplaces Graph" },
        { url: moksh5, caption: "Product Overall Reviews" },
        { url: moksh6, caption: "Product Onboarding Dashboard" },
        { url: moksh7, caption: "Product Onboarding Dashboard" },

    ],
      points: [
        "Designed and developed a SaaS application that displayed aggregated customer reviews from online marketplaces.",
        "Utilized React.js to design frontend and employed Django’s REST framework to create well-defined endpoints.",
        "Integrated WebSocket to establish a real-time and asynchronous communication channel, enhancing reliability of data retrieval processes.",
        "Conducted thorough testing to identify and resolve frontend issues, optimizing overall application responsiveness.",
      ],
    },
    {
      name: "RShifts",
      id: "rshifts",
      screenshots: [
        {
          url: rshisfts1,
          caption: "Dashboard Page",
        },
        {
          url: rshisfts2,
          caption: "Dashboard Page",
        },
        {
          url: rshisfts3,
          caption: "Dashboard Page",
        },
        {
          url: rshisfts4,
          caption: "Dashboard Page",
        },
      ],
      points: [
        "Engineered company portfolio website utilizing React’s components and layouts, enabling interactive frontend.",
        "Teamed up with backend developers to synchronize frontend and backend of the website for enhanced user engagement.",
      ],
    },
  ];
  const company = companyData.find(
    (c) => c.id.toLowerCase() === companyName.toLowerCase()
  );

  if (!company) {
    return <p>No company found</p>;
  }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="purple">Company: {company.name}</h1>
        <Row>
          <Col style={{color: "white"}}>
            <h2>{company.role}</h2>
            <p>{company.period}</p>
          </Col>
        </Row>
        <h2 className="purple">Screenshots</h2>
        <Carousel fade>
          {company.screenshots.map((screenshot, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={screenshot.url}
                alt={`Screenshot ${index + 1}`}
              />
              <Carousel.Caption>
                <h6>{screenshot.caption}</h6>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <div style={{ marginTop: "2rem" }}>
          <h2 className="purple">Key Points</h2>
          <ul>
            {company.points.map((point, idx) => (
              <li key={idx} style={{color: "white"}}>{point}</li>
            ))}
          </ul>
        </div>
      </Container>
    </Container>
  );
};

export default CompanyDetails;
