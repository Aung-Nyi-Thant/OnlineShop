import {API_URL} from "../setting/API";
import {Message_} from "./messageSlice";
import axios from "../setting/our_axios";


const API = API_URL+"/messages/getAllMessages"
const API2 = API_URL+"/messages"

export function getAllMessage() {
    return axios.get(API);
}
export function saveMessage(message:Message_){
    console.log('Save movie backend ',message);
    return axios.post(API2,message);
}
export function deleteMessage(message:Message_){
    console.log('Save movie backend ',message);
    let id = message._id
    console.log(id)
    console.log(API2,"/",id)
    return axios.delete(API2+"/"+id);
}
