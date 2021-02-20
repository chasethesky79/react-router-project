import React from "react"
import { NotFoundPageWrapper } from "../styled-components/styled-components"

export const NotFoundPageComponent: React.FC<{}> = () => {
    return (
        <NotFoundPageWrapper>Sorry the page you are requesting cannot be found</NotFoundPageWrapper>
    )
}