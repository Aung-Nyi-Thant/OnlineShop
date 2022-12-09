import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { apiGetAllUsers, selectUser } from "../features/Login/UsersSlice";
import './ForgotPageStyle.css'

export default function ForgotPage(){
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(apiGetAllUsers());
    },[]);

    const users = useAppSelector(selectUser);
    let navigate = useNavigate();
    let {Username} = useParams();
    let home = `/${Username}/home`;
    let movie_list = `/${Username}/movie-list`
    let profile = `/${Username}/profile`
    let shop = `/${Username}/shop`
    let btnClick = ()=>{
        var email = (document.getElementById("email") as HTMLInputElement).value;
        for (let i =0; i<users.length;i++){
            if(email == users[i].email){
                console.log("Successful")
                navigate(`/forgot/${users[i]._id}`)
            }
        }
    }
    return(
        <div className={"mainForgot"}>
            <div className={"childforgot"}>
                <h2 className={"TitleForgot"}>BILLIONER</h2>
                <input className={"emailInput"} id={"email"} placeholder={"Email or PhoneNumber"}/>
                <div>
                <button className={"Serchclick"} onClick={()=>{
                    btnClick()
                }}>Serch</button>
                </div>
            </div>
        </div>
    )
}