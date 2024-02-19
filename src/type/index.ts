



export type UserFormDataType = {
    firstName: string,
    lastName:string,
    username: string,
    email:string,
    password:string,
    confirmPassword: string,
}

export type UserType = {
    id:number,
    firstName:string,
    lastName:string,
    username:string,
    email:string
}

export type TokenType = {
    token:string,
    tokenExpiration: string
}


export type AlertType = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" 

