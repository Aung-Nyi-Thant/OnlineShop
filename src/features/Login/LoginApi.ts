import {API_URL} from "../../setting/API";
import axios from "../../setting/our_axios";
import {Users,User1} from './UsersSlice'


const API = API_URL+"/users" 


export function getallUsers (){
    return axios.get(API)
}
export function saveUsers(users:Users){
    console.log('Save Users backend ',users);
    return axios.post(API,users);
}
export function DeleteUser(users:Users){
    let id =users._id
    console.log('Save Users backend ',users);
    return axios.delete(`${API}/RemoveAcc/${id}`);
}
export function Login(users:Users){
    return axios.post(API,"/login",users);
}
export function registerUser(users:User1){
    console.log("users is ",users)
    return axios.post(API,users);
}
export function UpdateAccount(users:Users){
    let id =users._id
    let API2 = API_URL+"/users"+"/UpdateUser/"
    console.log("users is ",users)
    return axios.patch(API2+id,users);
}
