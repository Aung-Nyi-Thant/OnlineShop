import {API_URL} from "../setting/API";
// import {Movie} from "./movieSlice";
import axios from "../setting/our_axios";
import { Food } from "./ShopSlice";


const API = API_URL+"/foods"


export function getAllFood() {
    return axios.get(API);
}
export function saveFood(food:Food){
    console.log('Save Food backend ',food);
    return axios.post(API,food);
}
export function GetFoodById(id:any){
    console.log('Save Food backend ');
    return axios.get(API+`/${id}`);
}
export function GetFoodByName(Name:any){
    return axios.get(API+`/foodname/${Name}`)
}
export function DeleteFood(food:any){
    let foodid = food._id
    return axios.delete(API+`/`+foodid)
}
export function serchFoodByTaste(food:any){
    let taste = food
    return axios.get(API+`/`+'Taste'+"/"+taste)
}
export function UpdateFood(food:Food){
    let id = food._id
    return axios.patch(API+`/${id}`,food)
}