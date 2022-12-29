import { apiGetAllMessage, Message_, selectMessage } from "../message/messageSlice";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import React, {useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiGetAllUsers, selectUser } from "../features/Login/UsersSlice";
import Message from "../message/MessageUI"
import { DeleteUser } from "../features/Login/LoginApi";
import { deleteMessage } from "../message/messageApi";
export default function MessageListPage() {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(apiGetAllMessage());
        dispatch(apiGetAllUsers())
    });
    var users = useAppSelector(selectUser) 
    let navigate = useNavigate();
    let {Username} = useParams();
    let movie_list = `/${Username}/movie-list`
    let shop = `/${Username}/shop`
    let messageList: Message_[] = []
    let messages = useAppSelector(selectMessage);
    for(let j =0;j<messages.length;j++){
        if(messages[j].Message.slice(-1) === "!"){
            for(let x = 0 ; x<users.length;x++){
                if(users[x].username === messages[j].username){
                    for(let a = 0 ; a<messages.length;a++){
                        if(messages[a].username === users[x].username){
                            deleteMessage(messages[a])
                        }
                    }
                    DeleteUser(users[x])
                    console.log("Ban !!")
                }
            }
        }
    }
    let isAdmin = false
    for (let i=messages.length -1; i>=0; i--){
        let Message_name = messages[i].username
        if(Username === Message_name){
            messageList.push(messages[i])
        }else if(Username === "Aung Nyi Thant"){
            messageList.push(messages[i])
            isAdmin =true
        }
    }
    let user = ""
    for(let i = 0 ; i <users.length;i++){
        if(users[i].username === Username){
            user= "User"
        }
    }
    if(user !== "User"){
        navigate('/')
    }
        let Title = "Admin"
        let widths = "120px"
        let margin = "0px"
        if (Username !== "Aung Nyi Thant"){
            Title="BILLIONER"
            widths ="146px"
            margin = "6px"
        }

    class MessagePage extends React.Component{
        state = {Messages:messageList}
        render(){
            return(
                <div>
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
    <button style={{borderRadius:"10px", marginRight:"1620px",marginTop:"10px",borderLeft:"none",backgroundColor:"white" ,width:"1450px", border:"none",height:"50px" ,boxShadow:"0 10px 12px 0 rgba(0, 0, 0, 0.2)"}} onClick={()=>{
        if(Username !== "Aung Nyi Thant"){
            //nothing
        }else{
        navigate(`/${Username}/message/comtand`)
        }
    }}><h2 className={"MessageTitle"} style={{fontFamily:"Courier, monospace"}}>MESSAGE</h2></button>
                    {
                        this.state.Messages.map((message:Message_)=>
                        <Message 
                            message={message}
                            isAdmin = {isAdmin}
                        />)
                    }
                </div>
            )
        }
    }
    return(
        <MessagePage/>
    )
}