import React from "react";
import Container from "react-bootstrap/Container";
import SearchBox from "../components/SearchBox";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import { Link } from "gatsby";


const IndexPage = () => (
  <Container>
    <Row>
      <Col>
        <h1 style={{"font-size": "4em"}}>Boom Recipe</h1>
      </Col>
    </Row>
    <Row id="search-row">
      <Col>
        <SearchBox style={{}}></SearchBox>
      </Col>
    </Row>
  </Container>
);

export default IndexPage
