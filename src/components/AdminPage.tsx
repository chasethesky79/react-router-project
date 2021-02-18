import { PageContainer } from "../styled-components/styled-components"

export const AdminPage: React.FC<{}> = () => {
    return (
        <PageContainer>
            <h1>Admin Panel</h1>
            <p>You should only be here if you have logged in</p>
        </PageContainer>
    )
}