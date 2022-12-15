import { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import React, {useEffect, useState} from "react";
import { apiGetAllFood, Food, Foods, selectFood } from "../Shop/ShopSlice";
import { render } from "@testing-library/react";
import FoodUI from "../Shop/FoodShopUI";
import "./ShopPageStyle.css"
import { DeleteFood } from "../Shop/ShopApi";
import { apiGetAllMessage, Message_, selectMessage } from "../message/messageSlice";
import { saveMessage } from "../message/messageApi";
import { apiGetAllUsers, selectUser } from "../features/Login/UsersSlice";

export default function Shop_Page(){
    const dispatch = useAppDispatch();
    let navigate = useNavigate();
    let {Username} = useParams();
    let home = `/${Username}/home`;
    let movie_list = `/${Username}/movie-list`
    let profile = `/${Username}/profile`
    let shop = `/${Username}/shop`
    useEffect(()=>{
        dispatch(apiGetAllFood());
        dispatch(apiGetAllUsers())
    },[]);
    let Title ="Admin"
    let widths = "120px"
    let margin = "0px"
    let RunCount = 0
    if (Username != "Aung Nyi Thant"){
        Title="BILLIONER"
        widths ="146px"
        margin = "6px"
    }
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    console.log(date)
    let user = ""
    var Foods = useAppSelector(selectFood);
    var users = useAppSelector(selectUser) 
    for(let i = 0 ; i <users.length;i++){
        if(users[i].username == Username){
            user= "User"
        }
    }

    if(user != "User"){
        navigate('/')
    }
    let Foods_: Food[] =[]
    let Suit : Food[] = []
    let Gamming : Food[]= []
    let isFood = true;
    let isSuit = false;
    let isGamming = false
    for (let i = 0 ; i<Foods.length;i++){
        if(Foods[i].Ingredients == "SomeThing"){
            Foods_.push(Foods[i])
        }else if(Foods[i].Ingredients == "suit"){
            Suit.push(Foods[i])
        }else if(Foods[i].Ingredients == "Gamming"){
            Gamming.push(Foods[i])
        }
    }
    let row = 40 / 4
    let hight = row * 420
    console.log("Height=>>",hight)
    console.log("Foods_ length",Foods_.length)
    let Foods_may: Food[] =[]
    console.log("Function Run")
    console.log(Foods)
    let updateValue = (e:Event)=>{
        // console.log(e.target?.addEventListener.arguments)
        console.log("runnning")
    }
    let input = document.getElementById("form1");
    input?.addEventListener('input',updateValue)
class Shop_Page_ extends Component{
        
    // handleClick=()=>{
    //     console.log(this.state.Food)
    // };
    
        state={
            Food:Foods_,
            text:"Admin",
            maybeFood:[]
        }
    serchClick=(Foods:any)=>{
        let Foods_:Food = Foods
        this.setState({Food:Foods_})
        console.log(Foods_)
    }
    handleClick=()=>{
        this.setState({Food:"Color"})
    }
    render(){
        return(
            <div style={{backgroundColor:"#fbfbfb"}}>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
<meta name='viewport' content='width=device-width, initial-scale=1'></meta>
<script src='https://kit.fontawesome.com/a076d05399.js' crossOrigin='anonymous'></script>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <div className={"home"}>
        <li className="nav-item active">
            <div >
            <li className="w3-xxlarge">
                <i className="fa fa-home"></i></li>
                </div>
            </li>
            </div>
            <li className="nav-item active">
            <li className="nav-item active">
            <div className={"ProfileIcon"}>
            <li className="w3-xxlarge">
                <i className="material-icons w3-xxlarge" onClick={()=>{
                    navigate(movie_list)
                }}>menu</i></li>
                </div>
            </li>
            </li>
            <li className="nav-item active">
            <li className="nav-item active">
            <div className={"ProfileIcon"} onClick={()=>{ navigate(shop)}}>
            <li>
            <i className='fa-solid fa-shop'></i></li>
                </div>
            </li>
            </li>
            <div className={"Admin_title"} style={{width:widths, boxShadow:"0 10px 10px 0 rgba(0, 0, 0, 0.2)"}} onClick={()=>{
                if(Username == "Aung Nyi Thant"){
                    navigate(`/admin/${Username}/shop`)
                }
            }}>
            <h3 className={"Title__"} id={"title"} style={{marginLeft:margin}} >{Title}</h3>
            </div>
            {/* <div className={"Message"} onClick={()=>{
                navigate("/Aung%20Nyi%20Thant/message")
            }}><h4>M</h4></div> */}
            <i className='fas fa-comment-alt' style={{fontSize:"35px" , marginTop:"10px"}} onClick={()=>{
                navigate(`/${Username}/message`)
            }}></i>
            <div className="profile" onClick={()=>{
                navigate(`/${Username}/profile`)
            }}>

            </div>
            
            {/*{
            useAuthentication()
            && <li className="nav-item">
                <Link className="nav-link" to="/movie-list">Movie List</Link>
            </li>
        }

        {useAuthentication() && <li className="nav-item">
            <Link className="nav-link" to="/logout">Logout</Link>
        </li>}*/}


        </ul>

    </div>
    </nav>
    <div>
  <div className="col-md-6">

    <div className="form">
      <i className="fa fa-search"></i>
      <input type="text" className="form-control form-input" placeholder="Search anything..." onChange={(e)=>{
        let value = e.target.value
        if(value != ""){
            if(isFood == true){
                Foods_may=[]
            Foods_.forEach( (e) =>{
                const isVillable = e.Food_name.toLowerCase().includes(value.toLowerCase())
                if(isVillable == true ){
                    let count = Foods_may.length
                    Foods_may.push(e)
                    this.serchClick(Foods_may)
                    console.log("e is",Foods_may)
                }
            })
            }
            else if(isSuit == true){
                Foods_may=[]
            Suit.forEach( (e) =>{
                const isVillable = e.Food_name.toLowerCase().includes(value.toLowerCase())
                if(isVillable == true ){
                    let count = Foods_may.length
                    Foods_may.push(e)
                    this.serchClick(Foods_may)
                    console.log("e is",Foods_may)
                }
            })
            }
            else if(isGamming == true){
                Foods_may=[]
            Gamming.forEach( (e) =>{
                const isVillable = e.Food_name.toLowerCase().includes(value.toLowerCase())
                if(isVillable == true ){
                    let count = Foods_may.length
                    Foods_may.push(e)
                    this.serchClick(Foods_may)
                    console.log("e is",Foods_may)
                }
            })
            }
        }else if(isFood == true){
            this.serchClick(Foods_)
        }else if(isSuit == true){
            this.serchClick(Suit)
        }else if(isGamming == true){
            this.serchClick(Gamming)
        }
    }
        }/>
      <span className="left-pan"><i className="fa fa-microphone"></i></span>
    </div>
    
  </div>
    <div>
        <button className={"buttonClothes"} onClick={()=>{
            this.serchClick(Suit)
            isSuit = true
            isFood = false
            isGamming = false
        }}><i className='fas fa-tshirt' style={{fontSize:"26px"}}></i></button>
        <button className={"buttonFood"} onClick={()=>{
            this.serchClick(Foods_)
            isSuit = false
            isFood = true
            isGamming = false
        }}><i className='fas fa-hamburger' style={{fontSize:"26px"}}></i></button>
        <button className={"buttonGame"} onClick={()=>{
            this.serchClick(Gamming)
            isSuit = false
            isFood = false
            isGamming = true
        }}><i className='fas fa-gamepad' style={{fontSize:"26px"}}></i></button>
    </div>
    </div>
    <div className="MainFoodList" style={{height:hight}}>
            {
                this.state.Food.map((food:Food)=>
                    <FoodUI
                        food={food}
                        />
                )
            }
            </div>
            </div>
        )
    }
}
return(
    <Shop_Page_/>
)
}
