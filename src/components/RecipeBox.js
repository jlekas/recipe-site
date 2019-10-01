import React from "react";
import styles from "../styles/recipebox.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

console.log("recipebox", styles);
console.log("pur\xc3\xa9ed");

const RecipeBox = () => (
  <div className={styles.recipebox}>
    <Row>
      <Col>
        <Image src="https://www.simplyrecipes.com/wp-content/uploads/2012/05/skillet-tortilla-pizza-horiz-a-1800-440x293.jpg" rounded></Image>
      </Col>
    </Row>
    <Row>
      <Col className={styles.ingredients}>
        <ul>
          <li>Tomato Sauce</li>
        </ul>
      </Col>
    </Row>
    <Row>
      <Col className={styles.instructions}>
        <ul>
          <li>Preheat oven to 420</li>
          <li>stir the sauce in the pan and crush garlic oven to 420</li>
          <li>Add cream to the sauce and then let the sauce simmer for 3 minutes in light heat</li>
        </ul>
      </Col>
    </Row>
    <Row>
      <Col>
        <div className={styles.citation}>
          <p>Author: Jake Lekas</p>
          <p>recipebox.com</p>
        </div>
      </Col>
    </Row>
  </div>
);

export default RecipeBox;