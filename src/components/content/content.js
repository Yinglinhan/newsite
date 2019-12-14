import React from "react"
import styled from "@emotion/styled"
import {css} from "@emotion/core"


const Content =({children,colorSetting})=>{

    return(
        <div css={css`
            background-color:${colorSetting.gray};
            height:calc(100vh - 68px);
        `}>
            {children}
        </div>
    )
}


export default Content