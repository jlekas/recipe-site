import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/results.module.css";
import RecipeBox from "../components/RecipeBox";
import { Link } from "gatsby";
import Button from "react-bootstrap/Button";

const ResultsPage = () => (
  <Container className={styles.container}>
    <Row>
      <Col>
        <h1>Results Page</h1>
      </Col>
    </Row>
    <Row>
      <Col size="md-4">
        <RecipeBox></RecipeBox>
      </Col>
      <Col size="md-4">
        <RecipeBox></RecipeBox>
      </Col>
      <Col size="md-4">
        <RecipeBox></RecipeBox>
      </Col>
    </Row>
    <Row>
      <Link to="/">
        <Button variant="outline-secondary" className={styles.btn}>Back to Search</Button>
      </Link>
    </Row>
    <Row>
    </Row>
  </Container>
);

export default ResultsPage;
