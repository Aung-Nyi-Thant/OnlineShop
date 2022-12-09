import React, { Component, useEffect, useState } from "react";
import {
    useParams,
    useNavigate,
    useLocation,
    Link,
} from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import MessageListPage from "../pages/MessagePage";
import Reaload from "../pages/reload";
import reaload from "../pages/reload";
import { apiGetAllFood, selectFood } from "../Shop/ShopSlice";
import { deleteMessage, saveMessage } from "./messageApi";
import "./MessagePageStyle.css"
import { apiGetAllMessage, Message_, selectMessage } from "./messageSlice";
export default function Message(this: any, props:any){
    const message_:Message_ = props.message;
    let isAdmin = props.isAdmin
    console.log(isAdmin)
    const dispatch = useAppDispatch();
    let navigate = useNavigate();
    let {Username} = useParams();
    let ImageAdress = message_.image_adress
    if(message_.FoodName == "message!"){
        ImageAdress = "https://th.bing.com/th/id/OIP.bbXsNwMXrGKMvEjwoz6j2QHaHa?w=206&h=206&c=7&r=0&o=5&pid=1.7"
    }
    let message_2 = message_.Message
    let Username1 = message_.username
    let FoodName1 = message_.FoodName
    console.log(ImageAdress)
    let Date1 = message_.date
    let Date_1 = "Date :"
    if (FoodName1.length <= 8){
        Date_1 = "__"+Date_1
    }
    if(message_2 == undefined){
        message_2=""
    }
    let reaload = `message_delete`
    let message_1 = "FoodName :"+FoodName1+"\r\n"+"Count :"+message_.count+"\r\n"+Date_1+Date1+"\r\n"+message_2
    console.log(message_) 
            return(<div><div>
                <div className={"message_div"}>
                <div className={"Image__"} style = {{backgroundImage:`url(${ImageAdress})`}}>
                        
                        </div>
                    <div className={"messageDiv"}>
                    <h6 className={"Messagecount"}>{message_1}</h6>
                    </div>
                    <button className={"OpenBtn"} onClick={()=>{
                        navigate(`/${Username}/message/detail/${message_._id}`)
                    }}>Open</button>
                    <button className={"DeleteBtn"} onClick={()=>{
                        if(isAdmin == false){
                            let message:Message_ = {
                                username:message_.username+"_DFromUser",
                                cost: message_.cost,
                                count:message_.count,
                                FoodName:message_.FoodName,
                                date:message_.date,
                                Message:message_.Message,
                                image_adress:message_.image_adress
                            }
                            deleteMessage(message_)
                            saveMessage(message)
                        }else{
                            deleteMessage(message_)
                        }
                       navigate(`/0/${reaload}/${Username}/reaload`)
                    }}>Delete</button>
                </div>
                </div></div>)
}