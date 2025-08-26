export interface ITUserLogin {
    email: string;
    password: string;
}

export interface ITUserRegister {
    name: string;
    email: string;
    password: string;
}

export interface ITUserChangePassword {
    email: string;
    oldPassword: string;
    newPassword: string;
}