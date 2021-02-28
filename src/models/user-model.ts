export interface IUser {
    id: number;
    name: string;
    isAdmin: boolean;
}

export interface IAdminUserProps {
    users: IUser[]
}