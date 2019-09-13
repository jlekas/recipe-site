import React from "react";
import Container from "react-bootstrap/Container";
import SearchBox from "../components/SearchBox";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/global.module.css";
//import { Link } from "gatsby";

console.log(styles)
const IndexPage = () => (
  <Container className={styles.container}>
    <Row>
      <Col>
        <h1>Boom Recipe</h1>
      </Col>
    </Row>
    <Row id="search-row">
      <Col>
        <SearchBox className={styles.searchbox}></SearchBox>
      </Col>
    </Row>
  </Container>
);

export default IndexPage
