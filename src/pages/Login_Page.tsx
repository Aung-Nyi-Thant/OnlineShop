// import { sign } from "crypto";
// import {
//     useParams,
//     useNavigate,
//     useLocation,
// } from "react-router-dom";
// import './LoginPage.css'
// export default function LoginPage() {
//     let navigate = useNavigate();
//     const handleClick = () => {
//         let isAdmin = false
//         var User_name = (document.getElementById("Username_input") as HTMLInputElement).value;
//         var Password = (document.getElementById("Password_input") as HTMLInputElement).value;
//         if(User_name === "Aung Nyi Thant"){
//             isAdmin = true
//         }else if(Password==="accmobile"){
//             isAdmin = true
//         }else{
//             isAdmin = false
//         }
//         if(isAdmin === true){
//             navigate('/home')
//         }
//         else if(isAdmin===false){
//             return null
//         }
//     }
//     const singnClick = ()=>{
//         navigate('/sign')
//     }
//     return (<div className={"Login_page_main"}>
//         <div className={"child_Login"}>
//             <div className={"UserPhoto"}>
//                     <img src={"data:image/png;base64,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"} width={"200"} height={"200"}/>
//             </div>
//        <label>Username:</label> <input type={"text"} className={"Username_input"} id = {"Username_input"} placeholder={"Username"}/>
//        <div>
//        <label className={"Password_Label"}>Password:</label> <input type = {"password"} id={"Password_input"} className = {"Password_input"} placeholder={"password123"}/>
//        </div>
//        </div>
//        <button  className={"Login_button"} onClick={()=>{handleClick()}} >
//            <h5 className={"Login_text"}>Login</h5>
//        </button>
//        <div>
//        <button className={"Sign"} onClick={()=>{
//            singnClick()
//        }}><h6 className={"Sign_text"}>Sign In</h6></button>
//        </div>
//     </div>)
// }

import MovieList from "../features/movie/MovieList";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import "./LoginPage.css"
import HomePage from "./HomePage"
import { 
    hashRandom, 
    hashString, 
    hashObject, 
    hashArray 
  } from 'react-hash-string'
import {
    apiGetAllUsers,
    apiSaveUsers,
    Users,
    selectUser,
    login,
    User1
} from "../features/Login/UsersSlice";
import "./MovieListPagestyle.css"
import React, {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";
import {Form, Formik} from "formik";
import Swal from 'sweetalert2';

import {useDispatch} from "react-redux";

import {saveMovie, updateMovie} from "../features/movie/movieApi";
import LoginPage from "../features/Login/LoginUi";
import { Link, useNavigate } from "react-router-dom";
import { Personal_page } from "./Personal_page";
import axios from "axios";
import { number } from "yup";
export default function MovieListPage() {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(apiGetAllUsers());
    },[]);
    const users = useAppSelector(selectUser);
    const [editMovie,setEditMovie] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let navigate = useNavigate();
    const singnClick = ()=>{
        navigate('/sign')
    }
    const btnLogin = (code:any) => {
        dispatch(code)
}
class Login__ extends React.Component{
    state={Message:""}
render(){
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{editMovie?'Update Movie':'New Movie'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                {/*<Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>*/}
            </Modal>
            <div className={"Movie__"}>
            <div className={"Login_page_main"}>
        <div className={"child_Login"}>
            <div className={"UserPhoto"}>
                    <img src={"data:image/png;base64,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"} width={"200"} height={"200"}/>
            </div>
         <label className={"UsernameOfLabel"}>Username:</label><input type={"text"} className={"Username_input"} id = {"Username_input"} placeholder={"Username"}/>
       <div> <label className={"PasswordOfLabel"}>Password:</label><input type = {"password"} id={"Password_input"} className = {"Password_input"} placeholder={"password123"} onClick={()=>{
           let btn = document.getElementById('btn')
           document.getElementById('Password_input')
           ?.addEventListener('keyup', function(event){
               if(event.code == 'Enter'){
                   event.preventDefault();
                   btn?.click()
               }
           })
       }}/>
       </div>
       <h6 className={"Errormessage"}>{this.state.Message}</h6>
       <button  className={"Login_button"} id={'btn'} onClick={()=>{
           let onClick = ()=>{
            var User_name = (document.getElementById("Username_input") as HTMLInputElement).value;
               var Password = (document.getElementById("Password_input") as HTMLInputElement).value;
               console.log(Password)
               Password =  String(stringToHash(Password))
               let User_login: User1 = {
                   userName:User_name,
                   password:Password,
                   email:"",
                   age:"",
                   totalMoney:"",
                   money:0,
                   type_:""
               }
               function stringToHash(string:any) {
                var hash = 0;
                if (string.length == 0) return hash;
                  
                for (let i = 0; i < string.length; i++) {
                    let char = string.charCodeAt(i);
                    hash = ((hash << 5) - hash) + char;
                    hash = hash & hash;
                }
                  
                return hash;
            }
            console.log(stringToHash("username001"))
               for (let i =0; i < users.length; i++){
                let UserPassword =users[i].password
                   if(users[i].username==User_login.userName){
                       console.log("Username is",users[i].username)
                       let Username_ = users[i].username
                       console.log(typeof(Username_))
                       console.log("UserPassowrd",UserPassword)
                       console.log("Password",Password)
                       if(User_login.userName == "Aung Nyi Thant" && User_login.password=="accmobile"){
                        navigate(`/${users[i].username}/home`)
                       }
                       else if(UserPassword == Password){
                           navigate(`/${users[i].username}/home`)
                       }else if(i == users.length){
                       this.setState({Message:"Username or Password Wrong"})
                       }
                   }
                   this.setState({Message:"Username or Password Wrong"})
               }
        }
           onClick()
       }} >
           <h5 className={"Login_text"}>Login</h5>
       </button>
       <h6 className={"Forgoth6"} onClick={()=>{
           navigate("/forgot")
       }}>Forgot Password?</h6>
       </div>
       <div>
       <button className={"Sign"} onClick={()=>{
           singnClick()
       }}><h6 className={"Sign_text"}>Sign In</h6></button>
       </div>
    </div>
            </div>
        </div>
    );
}
}
return(
    <Login__/>
)
}