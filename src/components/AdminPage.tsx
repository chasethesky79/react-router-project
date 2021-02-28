import { NavLink } from "react-router-dom"
import { IUser } from "../models/user-model";
import { HorizontalListElementWrapper, NoListStyleWrapper, PageContainer } from "../styled-components/styled-components"
import '../styles/Header.css';
import { Route } from 'react-router-dom';
import { AdminUsersWrapper } from "./AdminUsersWrapper";

export const adminUsersData: IUser[] = [
    {
        id: 1,
        name: 'Fred',
        isAdmin: true
    },
    {
        id: 2,
        name: 'Bob',
        isAdmin: false
    },
    {
        id: 3,
        name: 'Jane',
        isAdmin: true
    },
]

export const AdminPage: React.FC<{}> = () => {
    return (
        <PageContainer>
            <h1>Admin Page</h1>
            <NoListStyleWrapper>
                <HorizontalListElementWrapper>
                    <NavLink to={`/admin/users`} activeClassName='header-link-active'>Users</NavLink>
                </HorizontalListElementWrapper>
                <HorizontalListElementWrapper>
                    <NavLink to={`/admin/products`} activeClassName='header-link-active'>Products</NavLink>
                </HorizontalListElementWrapper>
            </NoListStyleWrapper>
            <Route path={`/admin/users`} component={AdminUsersWrapper}/>
        </PageContainer>
    )
}