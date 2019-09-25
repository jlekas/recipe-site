import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import styles from "../styles/searchbox.module.css";
import { Link } from "gatsby";

console.log("saerch", styles)

const SearchBox = () => (
  <div className={styles.searchBox}>
    <InputGroup size="lg-3">
      <FormControl
        placeholder="Search By Ingredients or Cuisine"
        aria-label="Search By Ingredients or Cuisine"
        aria-describedby="Search By Ingredients or Cuisine"
      />
      <InputGroup.Append>
        <Link to="/results">
          <Button variant="outline-secondary" className={styles.btn}>Search</Button>
        </Link>
      </InputGroup.Append>
    </InputGroup>
  </div>
);

export default SearchBox;
