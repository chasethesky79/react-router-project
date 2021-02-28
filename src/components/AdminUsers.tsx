import { NavLink } from "react-router-dom"
import { IAdminUserProps, IUser } from "../models/user-model";
import { HorizontalListElementWrapper, NoListStyleWrapper } from "../styled-components/styled-components";

export const AdminUsers: React.FC<IAdminUserProps> = ({ users }: IAdminUserProps) => {
    return (
        <div>
            <NoListStyleWrapper>
                { users && users.map((user: IUser) => 
                    <HorizontalListElementWrapper key={user.id}>
                         <NavLink to={`/admin/users/${user.id}`} activeClassName='header-link-active'>{user.name}</NavLink>
                    </HorizontalListElementWrapper>)
                }
            </NoListStyleWrapper>
        </div>
    )
}