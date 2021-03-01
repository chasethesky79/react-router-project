import { IDetailsPageProps } from "../models/product-model";
import { adminUsersData, IUser } from "../models/user-model";

export const AdminUser: React.FC<IDetailsPageProps>  = ({ match: { params: { id: userId }} }: IDetailsPageProps) => {
    const user = adminUsersData.find((user: IUser) => user.id === Number(userId));
    return (
        <div>
          { user ? 
            <>
              <div><b>Id: </b><span>{user.id}</span></div>
              <div><b>Is Admin: </b><span>{user.isAdmin.toString()}</span></div>
            </> : <p>User not found</p>
           }
        </div>
    ) 
  }