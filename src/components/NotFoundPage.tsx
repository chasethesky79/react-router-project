import React from "react"
import { MessageNotificationWrapper } from "../styled-components/styled-components"

export const NotFoundPageComponent: React.FC<{}> = () => {
    return (
        <MessageNotificationWrapper>Sorry the page you are requesting cannot be found</MessageNotificationWrapper>
    )
}