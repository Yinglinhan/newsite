import React from "react"
import PropTyps from "prop-types"
import {useStaticQuery, graphql} from "gatsby"
import {Global,css} from "@emotion/core"

import Header from "./header/header"
import Content from "./content/content"

const color = {
  primary: "#06011E",
  blue: "#3D06FF",
  gray: "#E2E2E3",
  yellow: "#FFE832",
}
const Layout = ({children})=>{
    return (
      <>
        <Global
          styles={css`
            html {
              font-size: 16px;
              margin: 0;
              & * {
                
                  box-sizing: border-box;
                
              }
            }

            body {
              margin: 0;
              > div {
                margin: 0;
              }
            }
          `}
        ></Global>
        <Header colorSetting={color}></Header>
        <Content colorSetting={color}>{children}</Content>
      </>
    )
}


export default Layout