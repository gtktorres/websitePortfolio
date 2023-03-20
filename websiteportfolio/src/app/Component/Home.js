"use client"; // this is a client component 👈🏽
import React from "react";
import "../App.css"
import Portrait from "../portrait.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Contact from "./Modal";
import Image from "next/image";

const Home = () => {

  return (
      <div>
        <Container>
          
          <Row style={{ height: "5rem", width: "36rem", margin: "1rem" }}>
            <h1>Guevara Torres</h1>
          </Row>
          <Row>
            <Col>
              <Image height={500} width={370} src={Portrait} className="App-port" alt="Portrait" />
            </Col>

            <Col>
              <Row>
                <Link to="/about">
                    <Button
                    className="Button1"
                    type="Button"
                    style={{ height: "5rem", width: "18rem", margin: "1rem" }}
                    >
                    About Me
                    </Button>                  
                </Link>
              </Row>

              <Row>
                <Link to="/projects">
                  <Button
                    className="Button2"
                    type="Button"
                    style={{ height: "5rem", width: "18rem", margin: "1rem" }}
                  >
                    Projects
                  </Button>
                </Link>
              </Row>

              <Row >                
                <Contact />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default Home;
