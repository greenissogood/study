import axios from "axios";
import React from "react";
import { Accordion, Col, Container, Row , Dropdown } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

const Movies = ({}) => {
  const getMovies = async () => {
    let response = await axios.get("/movie/popular?language=ko-KR&page=1");
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>인기 영화 필터링</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>정렬</Accordion.Header>
                <AccordionBody>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
               
                </AccordionBody>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col sm={9}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Movies;
