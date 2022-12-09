import React from "react";
import {selectMovie} from "../features/movie/movieSlice"
import {useAppDispatch, useAppSelector} from "../app/hooks";
import{Users} from "../features/Login/UsersSlice"
import "./HomePage.css"
import {
    useParams,
    useNavigate,
    useLocation,
    Link,
} from "react-router-dom";
import { getAllMovie } from "../features/movie/movieApi";
import { url } from "inspector";

export default function Reaload() {
    let resonse = getAllMovie()
    let {Username} = useParams();
    console.log("movies are",resonse["PromiseResult"])
    let navigate = useNavigate();
    let home = `/${Username}/home`;
    let movie_list = `/${Username}/movie-list`
    let profile = `/${Username}/profile`
    let shop = `/${Username}/shop`
    let {R} = useParams();
    let {D} = useParams();
    let time = 3;
    let page = ""
    if(R != undefined){
        if(R == "message_delete"){
            page = `/${Username}/message`
            time=2
        }else if(R == "buy"){
            page=`/${Username}/shop/bye/buying/bye/Bye`
        }else if(R == "message"){
            page = `/${Username}/message/comtand/sendMessage/${D}`
        }
    }
    console.log("Username is",Username)
    function sleep(ms:number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function demo() {
        for (let i = 0; i < time; i++) {
            await sleep(i * 1000);
        }
        navigate(page)
    }
    
    demo();
    return <div className={"main_home"}>
        {/* <title>Billioner</title>
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
            <div onClick={()=>{ navigate(home)}}>
            <li className="w3-xxlarge">
                <i className="fa fa-home" onClick={()=>{
                    navigate(home)
                }}></i></li>
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
            <div className={"Logo__"} onClick={()=>{
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


        {/* </ul>

    </div>
    </nav>
    <div> */}

    {/* </div>
        <h1 className={"title"}>BILLIONER</h1>  
        <div className={"child_Home"}>
            <div className={"Title__"}>
                <h1 className={"Intro"}>Online Shop Services</h1>
            </div>
            </div>   */} 
        <div className="spinner-wrapper">
 <div className="spinner">
  <div className="sk-folding-cube">
   <div className="sk-cube1 sk-cube"></div>
   <div className="sk-cube2 sk-cube"></div>
   <div className="sk-cube4 sk-cube"></div>
   <div className="sk-cube3 sk-cube"></div>
  </div>
 </div>
</div>
    </div>
}