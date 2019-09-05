import React from "react";
/*
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
*/

const Layout = ({ children }) => {
    return (
        <>
            <div id="layout">
                <div>{children}</div>
            </div>
        </>
    )
};

export default Layout;
