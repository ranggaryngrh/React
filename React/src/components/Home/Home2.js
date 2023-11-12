import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/natasya.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am a Computer Science Education student from the Indonesian University of Education
              <br />
              <br />I quite like programming on computers because I can learn a lot and create various simple projects
              <i>
                
              </i>
              <br />
              <br />
              Of the many programming languages, I quite fundamentally understand the&nbsp;
              <i>
                <b className="purple"> HTML, CSS and Java Script </b> {" "}
                <b className="purple">
                 
                </b>
              </i>
              <br />
              <br />
              
              <i>
                
              </i>
              
              <i>
                
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/natasyadestiani"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/natasyades_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;