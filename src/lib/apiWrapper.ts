import axios from 'axios';
import { UserFormDataType,UserType,TokenType} from "../type"


const baseURL: string = "https://flask-stuff.onrender.com"
const userEndpoint:string = '../users'
const tokenEndpoint: string = '/token'


const apiClientNoAuth = () => axios.create({
    baseURL: baseURL
})

const apiClientBasicAuth = (username:string, password:string) => axios.create ({
    baseURL:baseURL,
    headers: {
        Authorization: 'Basic ' + btoa(`${username}:${password}`) 
    }
})

const apiClientTokenAuth = (token:string) => axios.create({
    baseURL:baseURL,
    headers: {
        Authorization:'Bearer ' + token
    }
})

type APIResponse<T> = {
    error?: string,
    data?: T
}

async function register(newUserData:UserFormDataType): Promise<APIResponse<UserType>> {
    let error;
    let data;
    try {
        const response = await apiClientNoAuth().post(userEndpoint, newUserData)
        data = response.data
    } catch(err) {
        if (axios.isAxiosError(err)){
            error = err.response?.data.error
        } else {
            error = 'Something went wrong'
        }
    }
    return {error,data}
}

async function login(username:string, password:string): Promise<APIResponse<TokenType>> {
    let error;
    let data;
    try{
        const response = await apiClientBasicAuth(username, password).get(tokenEndpoint);
        data = response.data
    } catch(err) {
        if (axios.isAxiosError(err)){
            error = err.response?.data.error
        } else {
            error = 'Something went wrong'
        }
    }
    return { error, data }
}

async function getMe(token:string): Promise<APIResponse<UserType>> {
    let error;
    let data;
    try{
        const response = await apiClientTokenAuth(token).get(userEndpoint + '/me');
        data = response.data
    } catch(err) {
        if (axios.isAxiosError(err)){
            error = err.response?.data.error
        } else {
            error = 'Something went wrong'
        }
    }
    return { error, data }
}


export {
    register,
    login,
    getMe

}