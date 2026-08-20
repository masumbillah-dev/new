export interface User {
    id?: number;
    name: string;
    email: string;
    role_id: number;
    role?: String;
    password?: string;
}
export const defaultUser: User = {
    name: "",
    email: "",
    role_id: 0,
    password: "",
};