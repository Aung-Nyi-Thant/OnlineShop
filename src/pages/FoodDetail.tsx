import { useParams } from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import app from "../App"
import "./FoodStyle.css"
import {
    Food,
    getFooById,
   selectFoodById,
} from "../Shop/ShopSlice";
import ReviewUI from "../features/review/ReviewUI";
import React, {useEffect, useTransition} from "react";
import ReviewListUI from "../features/review/ReviewListUI";
import { Link, useNavigate } from "react-router-dom";
import DownloadPage from "./DownloadPage";
import BuyTheFood from "./FoodBuyPage";
import { DeleteFood } from "../Shop/ShopApi";
import { apiGetAllMessage, Message_, selectMessage } from "../message/messageSlice";
import { saveMessage } from "../message/messageApi";
import { apiGetAllUsers, selectUser } from "../features/Login/UsersSlice";
export default function FoodDetailsPage(props:any) {
    console.log(props)
    let dispatch = useAppDispatch();
    let {foodID} = useParams();
    let {Username} = useParams();
    let navigate = useNavigate()
    let food = useAppSelector(state=>selectFoodById(state,foodID!));
    var today = new Date();
    var count = 0
    var IfC = 0
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let message_ : Message_ = {
        username:"Aung Nyi Thant",
        FoodName:"message",
        Message:`This food is expire Foodid ${food._id},Food name is ${food.Food_name}`,
        count:"message",
        cost:"message",
        date:date,
        image_adress:""

    }
    let Title = "Admin"
    let widths = "120px"
    let margin = "0px"
    if (Username != "Aung Nyi Thant"){
        Title="BILLIONER"
        widths ="146px"
        margin = "6px"
    }
    console.log(foodID)
    console.log("Food ",food);
    console.log("Foods expire date",food.expire_date)
    const DownloadClick = ()=>{
        navigate("/download")
    }
    let home = `/${Username}/home`;
    let movie_list = `/${Username}/movie-list`
    let shop = `/${Username}/shop`
    let like = food.like
    let Rating = ""
    let Price = food.Prices
    useEffect(()=>{
        dispatch(apiGetAllUsers())
    },[]);
    var users = useAppSelector(selectUser) 
    let user = ""
    for(let i = 0 ; i <users.length;i++){
        if(users[i].username == Username){
            user= "User"
        }
    }
    if(user != "User"){
        navigate('/')
    }
    if(Username == "Aung Nyi Thant"){
        Price = "Free"
    }
    class FoodDetail extends React.Component{
        state={Message:""}
        render(){
            return (
                <div className={"main_profile"}>
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
                <i className="fa fa-bitcoin" onClick={()=>{
                    navigate(movie_list)
                }}></i></li>
                </div>
            </li>
            </li>
            <li className="nav-item active">
            <li className="nav-item active">
            <div className={"ProfileIcon_Shop"} onClick={()=>{ navigate(shop)}}>
            <li>
            <i className='fa-solid fa-shop'></i></li>
                </div>
            </li>
            </li>
            <div className={"Admin_title"} style={{width:widths, boxShadow:"0 10px 10px 0 rgba(0, 0, 0, 0.2)"}} onClick={()=>{
                if(Username === "Aung Nyi Thant"){
                    navigate(`/admin/${Username}/shop`)
                }
            }}>
            <h3 className={"Title__"} id={"title"} style={{marginLeft:margin}} >{Title}</h3>
            </div>
            {/* <div className={"Message"} onClick={()=>{
                navigate("/Aung%20Nyi%20Thant/message")
            }}><h4>M</h4></div> */}
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
                <div className={"profile_photo"} style={{backgroundImage:`url("${food.FoodImage}")`}} onClick={()=>{
                navigate(`/${Username}/shop`)
            }}></div>
                <div>
                <div className={"Ifo"}>
                    <h3 className={"Text_title"} style={{color:`black`}}> {food.Food_name}</h3>
                    <h4 className={"Text"} style={{color:`balck`}}>{Price}</h4>
                    <div className="all_Info" style={{backgroundColor:`white`}}>
                        <div className={"Ifo_textName_Div"}>
                        </div>
                        <h6 className={"Ifo_text"}>Age:{food.age_permisssion}</h6>
                        <h6 style={{color:"white"}} className={"Ifo_text"}>Like : {like}</h6>
                        <h6 className={"Ifo_text"}>Made in {food.country}</h6>
                        <h6 className={"Ifo_text"}>Brand:{food.Brand}</h6>
                        <h6 className={"Ifo_textName"}>Expire Date:{food.expire_date}</h6>
                        <input id={"length"} className={"length_of_food"} type="number" placeholder={"Count"}/>
                        <button className={"button_buy"} style={{color:`${food.ColorForStyle}`}} onClick={()=>{
                            var length_of_food = (document.getElementById("length") as HTMLInputElement).value;
                            var length = Number(length_of_food)
                            console.log(length_of_food)
                            console.log(typeof(length_of_food))
                            if (length_of_food == ""){
                                this.setState({Message:"Please fill the count"})
                            }else if (length < 1){
                                this.setState({Message:"Please fill the count"})

                            }
                            else if (length_of_food !=""){
                                navigate(`/${Username}/shop/${foodID}/buy/${length_of_food}`)
                            }
                        }}>Buy</button>
                        <div className={"messageBox"}>
                        <h6 className={"errorMessage"}>{this.state.Message}</h6>
                        </div>
                    </div>
                </div>
                <button className={"BackButton"} onClick={()=>{navigate(`/${Username}/shop`)}}>Back</button>
                </div>
                </div>
            </div>
                )
        }
    }
    return(
        <FoodDetail/>
    )

}

// export const Movie1 = ()=>{
//     let movie = movie
// }