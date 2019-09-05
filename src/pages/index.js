import React from "react";
import Container from "../components/layout";
import SearchBox from "../components/SearchBox";
import Layout from "../components/layout";
//import { Link } from "gatsby";


const IndexPage = () => (
  <Layout>
    <Container>
      <div>Welcome to the recipe site!</div>
      <SearchBox></SearchBox>
    </Container>
  </Layout>
);

export default IndexPage
