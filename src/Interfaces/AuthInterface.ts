export interface IUserDetails {
    firstName:string | null,
    lastName:string | null,
    isUser:boolean,
    isAdmin:boolean
}


export interface ILoginCredentails {
    username:string,
    password:string
}