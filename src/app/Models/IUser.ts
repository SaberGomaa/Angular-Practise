export interface IUser {
    name: string;
    email: string;
    mobile: string[];
    address: {
        street: string,
        postalCode: string
    };
    password: string;
    reachedBy: string;
    reachedByOther?: string;
}
