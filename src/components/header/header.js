import React from "react"
import PropTypes from "prop-types"
import {Global,css} from "@emotion/core"
import styled from "@emotion/styled"
import {Link} from "gatsby"

import SubNav from "./subNav.js"

const Svglogo = styled.svg`
  width: 60px;
  ${"" /* height:20px; */}
  ${'' /* background-color:red; */}
  flex-shrink: 0;
`
const Logo = () => (
  <Svglogo viewBox="0 0 120 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M92.7966 0C77.7729 0 65.5932 12.0886 65.5932 27C65.5932 41.9114 77.7729 54 92.7966 54C107.82 54 120 41.9114 120 27C120.001 12.0886 107.821 0 92.7966 0ZM100.603 36.4637L95.4981 31.3974V38.5965H90.0962V31.2547L84.9918 36.3199L81.1718 32.5285L88.1701 25.5825H82.0351V20.221H90.0951V15.4046H95.497V20.221H103.557V25.5825H97.2772L104.42 32.6722L100.603 36.4637Z"
      fill="#06011E"
    />
    <path
      d="M50.7522 13.506C47.1204 7.26333 41.2571 2.79749 34.2416 0.931453C27.2261 -0.934582 19.8979 0.0227064 13.608 3.62721C7.31818 7.23172 2.81861 13.0511 0.938487 20.0151C-0.94164 26.9781 0.0228779 34.2503 3.6546 40.4941C7.28633 46.7368 13.1496 51.2026 20.1651 53.0687C22.5082 53.6918 24.8854 54 27.2466 54C31.9577 54 36.6086 52.774 40.7988 50.3729C47.0886 46.7684 51.5882 40.949 53.4683 33.9861C55.3484 27.0221 54.3839 19.7487 50.7522 13.506ZM44.1746 13.8876L7.27723 35.0315C6.39575 32.8889 5.87709 30.639 5.73264 28.3564L39.1222 9.22193C41.0422 10.4874 42.746 12.0588 44.1746 13.8876ZM16.4515 8.51525C19.7648 6.61648 23.442 5.64678 27.1693 5.64678C29.021 5.64678 30.8863 5.88723 32.7232 6.37152L6.44465 21.4296C7.93806 15.9433 11.4902 11.3578 16.4515 8.51525ZM10.0946 39.9342L47.0454 18.761C47.9644 20.9273 48.5069 23.2076 48.6673 25.5229L15.1833 44.7093C13.2429 43.4145 11.5254 41.807 10.0946 39.9342ZM37.9564 45.4837C32.9814 48.3342 27.1863 49.0916 21.6381 47.6162C21.604 47.6072 21.5698 47.597 21.5346 47.5868L48.0019 32.4204C47.9928 32.4542 47.9849 32.4892 47.9758 32.5242C46.4892 38.0309 42.9303 42.6333 37.9564 45.4837Z"
      fill="#06011E"
    />
  </Svglogo>
)


const navItems = [
  {title:'whoami', titleName: "WHO AM I", url: "/" },
  {title:'share', titleName: "SHARE", url: "/share" },
  {title:'code', titleName: "CODE", url: "/code" },
  {title:'framer', titleName: "FRAMER", url: "/framer" },
  {title:'projects', titleName: "PROJECTS", url: "/projects" },
  {title:'contact', titleName: "CONTACT", url: "/contact" },

]


//  Header组件---------------------------------

const Header = ({children,colorSetting})=>{



    const NavLink = styled(Link)`
      margin-left: 3rem;
      text-decoration: none;
      color: ${colorSetting.primary};
      opacity: 0.5;
      height: 4rem;
      display: flex;
      align-items: center;
      padding: 0 0.6rem;
      flex-shrink: 0;
      &:hover {
        background-color: ${colorSetting.primary};
        color: white;
        opacity: 1;
      }
      &:hover > .sub-nav {
        display: block;
        color: ${colorSetting.primary};
      }
      &.current-page {
        opacity: 1;
      }
      @media (min-width: 1180px) {
        margin-left: 5rem;
      }
      @media (min-width: 1580px) {
        margin-left: 8rem;
      }
    `
    
    
    
    return (
      <header
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.6rem;
          color: ${colorSetting.primary};
          min-width: 1080px;
          height: 4rem;
          border-bottom: 4px solid ${colorSetting.primary};
          box-sizing:border-box;
        `}
      >
        <Logo></Logo>
        <nav
          css={css`
            display: flex;
            flex: 1 1 auto;
            margin-right: 2rem;
            justify-content: flex-end;
            font-family: "Optician Sans";
            font-size: 1.6rem;
           
          `}
        >
          {/* 把所有的导航项循环出来 */}
          {navItems.map((item, index) => {
            return (
              <NavLink to={item.url} activeClassName="current-page" key={index}>
                {item.titleName}
                <SubNav subtitle={item} colorSetting={colorSetting}></SubNav>
              </NavLink>
            )
          })}
        </nav>
      </header>
    )
}
export default Header