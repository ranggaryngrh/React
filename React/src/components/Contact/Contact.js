import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ContactCards";
import Particle from "../Particle";
import github from "../../Assets/Projects/Github.png";
import gmail from "../../Assets/Projects/Gmail.png";
import instagram from "../../Assets/Projects/Instagram.png";
import linkedin from "../../Assets/Projects/Linkedin.png";
import whatsapp from "../../Assets/Projects/Whatsapp.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Find <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linkedin}
              isBlog={false}
              title="LinkedIn"
              description= "Natasya Destiani | natasya-destiani"
              Link="http://linkedin.com/in/natasya-destiani-439338261"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instagram}
              isBlog={false}
              title="Instagram"
              description="Natasya Destiani | natasyades_"
              Link="https://instagram.com/natasyades_"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="GitHub"
              description="Natasya Destiani | natasyadestiani"
              Link="https://github.com/natasyadestiani"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whatsapp}
              isBlog={false}
              title="WhatsApp"
              description="Natasya Destiani | 0857-2494-0244"
              Link="https://wa.me/6285724940244"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gmail}
              isBlog={false}
              title="GMail"
              description="Natasya Destiani | natasyadestiani9123@upi.edu"
              Link="mailto:natasyadestiani9123@upi.edu"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;