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
            return(<div className={"MainFood"}>
            <div className={'food_'} style={{backgroundColor: `white`}}>
            <div onClick={()=>{btnDetailHandler()}} className={"Image_view"}>
                <img src={food.FoodImage} className={"img_food"} id = {"img"} style={{width:img_width,height:img_width}}/>
            </div>
            <div className={'food-title'}>
                {/* <iframe className="responsive-iframe" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe> */}
                <h3>
                 { food.Food_name}
                 </h3>
                 <i className="fa fa-heart" style={{fontSize:"15px" , float:"left", marginTop:"33px" , marginLeft:"15px" , color:this.state.Color }} onClick={()=>{
                     clickCount = clickCount+1
                     let count = clickCount%2
                     if (clickCount == 1){
                        this.setState({Color:"red"})
                        console.log(this.like)
                        this.like=this.like+1
                        let likeString = this.like.toString()
                        let Food_ : Food = {
                            _id:this.state.food._id,
                            Food_name:this.state.food.Food_name,
                            FoodImage:this.state.food.FoodImage,
                            expire_date:this.state.food.expire_date,
                            typeOfTaste:this.state.food.typeOfTaste,
                            Prices:this.state.food.Prices,
                            age_permisssion:this.state.food.age_permisssion,
                            Brand:this.state.food.Brand,
                            Ingredients:"SomeThing",
                            Rating:"0.0",
                            textStyle:"Something",
                            ColorForStyle:"#4aa55e",
                            country:this.state.food.country,
                            like:this.like}
                            UpdateFood(Food_)
                            this.setState({like:likeString})
                     }else if(count === 0){
                         this.setState({Color:""})
                         this.like = this.like-1
                         let likeString = this.like.toString()
                          let Food_ : Food = {
                            Food_name:this.state.food.Food_name,
                            FoodImage:this.state.food.FoodImage,
                            expire_date:this.state.food.expire_date,
                            typeOfTaste:this.state.food.typeOfTaste,
                            Prices:this.state.food.Prices,
                            age_permisssion:this.state.food.age_permisssion,
                            Brand:this.state.food.Brand,
                            Ingredients:"SomeThing",
                            Rating:"0.0",
                            textStyle:"Something",
                            ColorForStyle:"#4aa55e",
                            country:this.state.food.country,
                            like:this.like}
                            FoodUpdate(Food_)
                            this.setState({like:""})
                     }else{
                         this.setState({Color:"red"})
                         this.like = this.like+1
                         let likeString = this.like.toString()
                          let Food_ : Food = {
                            Food_name:this.state.food.Food_name,
                            FoodImage:this.state.food.FoodImage,
                            expire_date:this.state.food.expire_date,
                            typeOfTaste:this.state.food.typeOfTaste,
                            Prices:this.state.food.Prices,
                            age_permisssion:this.state.food.age_permisssion,
                            Brand:this.state.food.Brand,
                            Ingredients:"SomeThing",
                            Rating:"0.0",
                            textStyle:"Something",
                            ColorForStyle:"#4aa55e",
                            country:this.state.food.country,
                            like:this.like}
                            FoodUpdate(Food_)
                            this.setState({like:likeString})
                     }
                     console.log(likeFood)
                 }}>{this.state.like}</i>
            </div>
            <div className={"YearsDiv"}>
                <h5 className={"Year"}>Age : {age_perm}</h5> &nbsp;
            </div>
        
        </div>
        </div>)
        }
    }
    return ((<FoodPage/>))}