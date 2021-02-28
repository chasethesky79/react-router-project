import { AdminUsers } from './AdminUsers';
import { IUser } from "../models/user-model"

const adminUsersData: IUser[] = [
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

export const AdminUsersWrapper: React.FC<{}> = () => {
    return(
      <AdminUsers users={adminUsersData}/>
    )
}