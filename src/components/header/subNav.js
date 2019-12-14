import React from "react"
import {css} from "@emotion/core"
import styled from "@emotion/styled"

import icon from '../../assets/icon'

// const subNavItems = [{ title: "WHO AM I", subtitles: [{ subtitle: "skill", icon: "../../assets/icons/cast.svg" }] }]
const SubNavBoxs = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  height:3rem;
  padding:0 0.6rem;
`

const SubNav = ({ subtitle, colorSetting }) => {
  console.log(icon.navIcons[subtitle.title], 1)
  const icons = icon.navIcons[subtitle.title]
  return (
    <div
      className="sub-nav"
      css={css`
        position: absolute;
        background-color: white;
        top: 4rem;
        width: 11rem;
        ${"" /* 让次级导航向左移动一些 */}
        transform:translateX(-0.6rem) translateY(-4px);
        display: none;
        border: 4px solid ${colorSetting.primary};
        box-shadow: 4px 4px 0 ${colorSetting.blue};
      `}
    >
      {/* 这里是把次级的导航都展示出来 */}
      {icons.map((icon, index) => {
        console.log(icon.url, __dirname)
        return (
          <SubNavBoxs key={index}>
            <span>{icon.title}</span>
            <img src={`/images/icons/${icon.title}.svg`} alt="icon" />
          </SubNavBoxs>
        )
      })}
    </div>
  )
}

export default SubNav ;