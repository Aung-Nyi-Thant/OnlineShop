import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { apiSaveMessage, Message_ } from "../message/messageSlice";
import * as Yup from 'yup';
import { apiGetAllUsers, login, selectUser, Users } from "../features/Login/UsersSlice";
import ComtandUI from "./ComtandUI";
const UsersForm = (props:any)=>{
    let dispatch = useAppDispatch();
    let users = props.movie;
    console.log('Edit movie ',users);
    let handleClose = props.handleClose;
    let initValues ={
        _id : users? users._id:'',
        username: users? users.username:'',
        password: users? users.password:'',
        email:users? users.email:'',
        age:users? users.age:''
    }
    return (<div>
        
        <Formik
            initialValues={initValues}
            onSubmit={values => {
                // same shape as initial values
                //console.log("Handle Close ", handleClose);
                console.log(values);

                if (!users)//save
                {
                    let login_users: Users = {
                        // title: values.title,
                        // year: Number(values.year),
                        // image_adress:values.image_adress,
                        // background_img:values.background_img,
                        // color:values.color,
                        // summary:values.summary
                        _id:values._id,
                        username: values.username,
                        password: values.password,
                        email:'',
                        age:''


                    }

                    console.log('Movie ', login_users);
                    dispatch(login(login_users));
                }
                handleClose();
            }}
        >
        </Formik>

    </div>);
};
export default function Comtand(){
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
    return(
        <div>
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
            <div className={"Admin_title"} onClick={()=>{
                if(Username == "Aung Nyi Thant"){
                    navigate(`/admin/${Username}/shop`)
                }
            }}>
            <h3 className={"Title__"} id={"title"}>Admin</h3>
            </div>
            {/* <div className={"Message"} onClick={()=>{
                navigate("/Aung%20Nyi%20Thant/message")
            }}><h4>M</h4></div> */}
            <i className='fas fa-comment-alt' style={{fontSize:"35px" , marginTop:"10px"}} onClick={()=>{
                navigate(`/${Username}/message`)
            }}></i>
                        <div className="profile" onClick={()=>{
                navigate(`/:Id/profile`)
            }}></div>
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
    {
                        users.map((users:Users)=>
                        <ComtandUI 
                            users={users}
                        />)
                    }
        </div>
    )
}