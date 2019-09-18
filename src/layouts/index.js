import React from "react"
import { Helmet } from "react-helmet"
import Transition from "../components/transition"

const TemplateWrapper = ({ children, location }) => (
  <div>
    <Helmet
      title="Boom Recipe"
      meta={[
        { name: `description`, content: `This website will help you find and access recipes much easier` },
        { name: `keywords`, content: `cooking, recipe` },
      ]}
    />
    <div>
      <Transition location={location}>{children}</Transition>
    </div>
  </div>
)

export default TemplateWrapper
