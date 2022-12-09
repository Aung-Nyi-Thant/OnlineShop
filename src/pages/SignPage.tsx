import "./SignPageStyle.css"
import {
    Users,
    User1,
    apiGetAllUsers,
    selectUser
} from '../features/Login/UsersSlice'
import {
    useParams,
    useNavigate,
    useLocation,
} from "react-router-dom";
import { registerUser } from "../features/Login/LoginApi";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect } from "react";
import { count } from "console";
export default function SignPage(){
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(apiGetAllUsers());
    },[]);
    let alertbox = ()=>{
        alert("Username Already exit!")
    }

    let users = useAppSelector(selectUser);
    let navigate = useNavigate();
    const SignClick = () =>{
        let isNull = "Y"
        var FirstName = (document.getElementById("FirstName") as HTMLInputElement).value;
        var LatestName = (document.getElementById("LatestName") as HTMLInputElement).value;
        var Email = (document.getElementById("Email") as HTMLInputElement).value;
        var Age = (document.getElementById("Age") as HTMLInputElement).value;
        var Age_int = parseInt(Age)
        var password = (document.getElementById("Password") as HTMLInputElement).value;
        var RePassword = (document.getElementById("RePassword") as HTMLInputElement).value;
        var Username = FirstName+LatestName
        let count = 0
        var users1:User1={
            userName:Username,
            password:password,
            email:Email,
            age:Age
        }
        if (FirstName!=""){
            if(LatestName!=""){
                if(Age != ""){
                    if(password!=""){
                        if(password==RePassword){
                            for (let i =0;i<users.length;i++){
                                console.log(users[i].username)
                            if(users[i].username != Username){
                                console.log("!=")
                                // registerUser(users1)
                                // console.log("Successful") 
                                // //for loop error!!! I can do this
                                // navigate(`/${Username}/home`)
                            }else if(users[i].username==Username){
                                //nothing
                                console.log("=")
                                count = count+1
                                alertbox()
                                window.location.reload()
                                break
                            }
                        }
                        }
                        if(count == 0){
                            registerUser(users1)
                            console.log("Successful")
                            navigate(`/`)
                        }
                    }
                }
            }
        }
    }
    return <div className={"SignMainPage"}>
        <div className={"SignPage"}>
            <h3 className={"tt_creative"}>Creative Account</h3>
        {/* To do Name input ,  age input , email input and good ui √ */}
        <label className={"label"}>FirstName :</label><input id={"FirstName"} className={"FirsrName"}/>
        <div className={"LatestN_div"}><label className={"label"}>LatestName :</label><input id={"LatestName"} className={"LatestName"}/></div>
        <div><label className={"label"}>Email(or)Ph :</label><input type={"text"} id={"Email"} className={'Password'}/></div>
        <div><label className={"labelAge"}>Age :</label><input type={"number"} id={"Age"} className={"Age"}/></div>
        <div><label className={"label"}>Password :</label><input type={"password"} id={"Password"} className={'Password'}/></div>
        
        <div><label className={"label"}>Confirm Password :</label><input type={"password"} id={"RePassword"} className={'Password'}/></div>
        <button className={"SignIn_btn"} onClick={()=>{SignClick()}}><h6  className={"Signtxt"}>Sign In</h6></button>
        </div>
    </div>
}