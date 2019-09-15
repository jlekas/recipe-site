import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/results.module.css";
import RecipeBox from "../components/RecipeBox";
//import { Link } from "gatsby";

const ResultsPage = () => (
  <Container className={styles.container}>
    <Row>
      <Col>
        <h1 style={{"fontSize": "4em"}}>Results Page</h1>
      </Col>
    </Row>
    <Row>
        <RecipeBox></RecipeBox>
        <RecipeBox></RecipeBox>
        <RecipeBox></RecipeBox>
    </Row>
    <Row>
    </Row>
  </Container>
);

export default ResultsPage;
