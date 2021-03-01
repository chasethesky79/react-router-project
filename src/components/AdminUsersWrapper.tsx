import { AdminUsers } from './AdminUsers';
import { adminUsersData, IUser } from "../models/user-model"

export const AdminUsersWrapper: React.FC<{}> = () => {
    return(
      <AdminUsers users={adminUsersData}/>
    )
}