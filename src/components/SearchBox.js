import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import styles from "../styles/searchbox.css"

const SearchBox = () => (
  <div className={styles.searchBox}>
    <InputGroup size="lg">
      <FormControl
        placeholder="Search By Ingredients or Cuisine"
        aria-label="Search By Ingredients or Cuisine"
        aria-describedby="Search By Ingredients or Cuisine"
      />
      <InputGroup.Append>
        <Button variant="outline-secondary">Search</Button>
      </InputGroup.Append>
    </InputGroup>
  </div>
);

export default SearchBox
