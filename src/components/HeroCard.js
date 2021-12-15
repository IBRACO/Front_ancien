import React from "react";
// import "../App.css";
import "./css/HeroSection.css";

import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";
import Slide from "react-reveal/Slide";

function HeroCard() {
  return (
    <div className="cr">
      <div>
        <Slide right>
          {/* <Spin> */}
          {/* <Wobble> */}
          <Container>
            <Row>
              <Col>
                <Link to="/services">
                  <Card>
                    <Card.Img
                      className="imgc"
                      variant="top"
                      src="images/img-9.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Services</Card.Title>
                      <Card.Text>NoS services</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col>
                <Link to="/don">
                  <Card>
                    <Card.Img variant="top" src="images/img-9.jpg" />
                    <Card.Body>
                      <Card.Title>Soutenir</Card.Title>
                      <Card.Text>Coup de pousse</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col>
                <Link to="/entrainement">
                  <Card>
                    <Card.Img variant="top" src="images/img-4.jpg" />
                    <Card.Body>
                      <Card.Title>Activite Sportif</Card.Title>
                      <Card.Text>Sociaux culturel</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col>
                <Link to="/connexion">
                  <Card>
                    <Card.Img variant="top" src="images/img-8.jpg" />
                    <Card.Body>
                      <Card.Title>AUTENTIFICATION</Card.Title>
                      <Card.Text>Pour se connecter</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col>
                <Link to="/actualit">
                  <Card>
                    <Card.Img variant="top" src="images/img-9.jpg" />
                    <Card.Body>
                      <Card.Title>Actualité</Card.Title>
                      <Card.Text>East Africa SL</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </Row>
          </Container>
          {/* </Wobble> */}
          {/* </Spin> */}
        </Slide>
      </div>
    </div>
  );
}

export default HeroCard;
