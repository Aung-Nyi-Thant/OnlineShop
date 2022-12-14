import {DeleteFoods, Food, FoodUpdate} from "./ShopSlice";
import "./Food.css";
import {useNavigate, useParams} from "react-router-dom";
import React from "react";
import { UpdateFood } from "./ShopApi";
export default function FoodUI (props:any) {

    let navigate = useNavigate();
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let food:Food = props.food;
    let clickCount = 0
    let likeFood = 0
    let age_perm: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined ;
    if (food.age_permisssion === "&"){
        age_perm= "NoLimit"
    }else if(food.age_permisssion === "0+"){
        age_perm="NoLimit"
    }else if(food.age_permisssion === "2+"){
        age_perm="NoLimit"
    }else if(food.age_permisssion === "3+"){
        age_perm="NoLimit"
    }else if(food.age_permisssion ==="4+"){
        age_perm="NoLimit"
    }
    else{
        age_perm=food.age_permisssion
    }
    let currentData = new Date(date);
    let date_ = new Date(food.expire_date);
    if (currentData > date_){
        DeleteFoods(food)
    }
    const btnDetailHandler=()=>{
        console.log('Go to detail');

        navigate(`/${Username}/shop/food-details/${food._id}`);
    };
    let {Username} = useParams();
    console.log("Food is",food)
    let img_width = "200px"
    let margin = "60px"
    class FoodPage extends React.Component{
        state={Color:"",
            food:food,
            like:""}
            like = this.state.food.like
        render(){
            return(
            <div className="BackgroundColor_">
                <div className={"MainFood"}>
            <div onClick={()=>{btnDetailHandler()}} className={"Image_view"}>
                <img src={food.FoodImage} className={"img_food"} id = {"img"} style={{width:img_width,height:img_width}}/>
            </div>
            <div className={'food-title'}>
                {/* <iframe className="responsive-iframe" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe> */}
                <h3 className="FoodName">
                 { food.Food_name}
                 </h3>
            </div>
            <div className={"YearsDiv"}>
                <h5 className={"Year"}>Age : {age_perm}</h5> &nbsp;
            </div>
        
        </div></div>)
        }
    }
    return ((<FoodPage/>))}