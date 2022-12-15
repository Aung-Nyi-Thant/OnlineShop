import React, { useEffect } from "react"
import {
    useParams,
    useNavigate,
    useLocation,
    Link,
} from "react-router-dom";
import UserMessage from "./UserMessage";
import UserMoney from "./UserMoney";
import UserPayMents from "./UserPayMents";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectUser,apiGetAllUsers, User1 } from "../features/Login/UsersSlice"
import "./personal_profile.css"
import UserSetting from "./UserSetting";
import { apiGetAllPayMent, PayMent, selectPayMents } from "../features/PayMents/PayMentsSlice";
import { apiGetAllMessage, Message_, selectMessage } from "../message/messageSlice";
 export function Personal_page(){
    let {Username} = useParams();
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(apiGetAllUsers());
        dispatch(apiGetAllPayMent());
        dispatch(apiGetAllMessage());
    },[]);
    var messages = useAppSelector(selectMessage);
    const users = useAppSelector(selectUser);
    var payMents  = useAppSelector(selectPayMents) 
    let User:User1 = {
        userName:"",
        password:"",
        email:"",
        age:"",
        totalMoney:"",
        money:0,
        type_:""
    }
    let MessageIsNull = true
    for (let i = 0 ;i<users.length;i++){
        if(users[i].username == Username){
            User={
                userName : users[i].username,
                password: users[i].password,
                email:users[i].email,
                age:users[i].age,
                totalMoney:users[i].totalMoney,
                money:users[i].money,
                type_:users[i].type_
            }
        }
    }
    let PayMentDisplay = ""
    let PayMentTextDisplay = "none"
    let PaymentIsNull = true
    let UserPayMentsIteam:PayMent[] = []
    for (let j = 0 ; j<payMents.length;j++){
        if(payMents[j].username == User.userName){
            UserPayMentsIteam.push(payMents[j])
            PaymentIsNull = false
        }
    }
    if(PaymentIsNull == true){
        PayMentDisplay = "none"
        PayMentTextDisplay = "" 
    }
    let UserMessageList :Message_[] = []
    for (let i = 0;i < messages.length;i++){
        if(messages[i].username == User.userName){
            UserMessageList.push(messages[i])
            MessageIsNull = false
        }
    }
    let MessageDisplay = ""
    let TextDisplay = "none"
    if(MessageIsNull == true){
        TextDisplay = ""
        MessageDisplay ="none"
    }
    UserPayMentsIteam = UserPayMentsIteam.reverse()
    console.log("UserMessage List",UserMessageList)
    console.log("PayMEnts",UserPayMentsIteam)
    let Title ="Admin"
    let widths = "120px"
    let margin = "0px"
    let RunCount = 0
    if (Username != "Aung Nyi Thant"){
        Title="BILLIONER"
        widths ="146px"
        margin = "6px"
    }
    let home = `/${Username}/home`;
    let movie_list = `/${Username}/movie-list`
    let profile = `/${Username}/profile`
    let shop = `/${Username}/shop`
    class Profile extends React.Component {
        state = {
            Money:"white",
            Payments:"#b3ce3d",
            Message:"#4daf90",
            Setting:"#2570aa",
            Money_txt:"black",
            Payments_text:"white",
            Message_text:"white",
            Setting_text:"white",
            UserMoneyDisplay:"",
            UserPayMentsDisplay:"none",
            UserMessageDisplay:"none",
            UserSettingDisplay:"none"
        }
        render() {
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
                navigate(`/:Id/profile`)
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
        <div className="personalProFile">
            <div className="BackgroundColor">
            <div className="profilePhoto"></div>
            <h4 className="UsernameInProfile">{Username}</h4>
            <h5 className="EmailInProfile">thantaungnyi@gmail.com</h5>
            <div className="MostBuyFood" style={{backgroundImage:`url('https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/743/cached.offlinehbpl.hbpl.co.uk/news/ORP/Coke-20150730041122131.JPG')`}}></div>
            <div className="MostBuyClothes" style={{backgroundImage:`url('https://th.bing.com/th/id/OIP.6wL1CoekZxzamTuLVHchkgHaHa?w=214&h=214&c=7&r=0&o=5&pid=1.7}')`}}></div>
            <div className="MostBuyGames" style={{backgroundImage:`url('https://cf.shopee.sg/file/9fca7aacbb8ef0a76d19d92bb48ac691')`}}></div>
            </div>
        </div>
        <div className="Imformation">
            <div className="MenuBar">
                <div className="Usermoney" style={{backgroundColor:this.state.Money}} onClick={()=>{
                    this.setState({
                        Money:"white",
                        Payments:"#b3ce3d",
                        Message:"#4daf90",
                        Setting:"#2570aa",
                        Money_txt:"black",
                        Payments_text:"white",
                        Message_text:"white",
                        Setting_text:"white",
                        UserMoneyDisplay:"",
                        UserPayMentsDisplay:"none",
                        UserMessageDisplay:"none",
                        UserSettingDisplay:"none"
                    })
                }}>
                    <h4 className="Money" style={{color:this.state.Money_txt}}>Money</h4>
                </div>
                <div className="Payments" style={{backgroundColor:this.state.Payments}} onClick={()=>{
                    this.setState({
                        Money:"#f8be45",
                        Payments:"white",
                        Message:"#4daf90",
                        Setting:"#2570aa",
                        Money_txt:"white",
                        Payments_text:"black",
                        Message_text:"white",
                        Setting_text:"white",
                        UserMoneyDisplay:"none",
                        UserPayMentsDisplay:"",
                        UserMessageDisplay:"none",
                        UserSettingDisplay:"none"
                    })
                }}>
                    <h4 className="PaymentsText" style={{color:this.state.Payments_text}}>Payments</h4>
                </div>
                <div className="Messages" style={{backgroundColor:this.state.Message}} onClick={()=>{
                    this.setState({
                        Money:"#f8be45",
                        Payments:"#b3ce3d",
                        Message:"white",
                        Setting:"#2570aa",
                        Money_txt:"white",
                        Payments_text:"white",
                        Message_text:"black",
                        Setting_text:"white",
                        UserMoneyDisplay:"none",
                    UserPayMentsDisplay:"none",
                    UserMessageDisplay:"",
                    UserSettingDisplay:"none"
                    })
                }}>
                    <h4 className="MessageText" style={{color:this.state.Message_text }}>Messages</h4>
                </div>
                <div className="Setting" style={{backgroundColor:this.state.Setting}} onClick={()=>{
                    this.setState({
                        Money:"#f8be45",
                        Payments:"#b3ce3d",
                        Message:"#4daf90",
                        Setting:"white",
                        Money_txt:"white",
                        Payments_text:"white",
                        Message_text:"white",
                        Setting_text:"black",
                        UserMoneyDisplay:"none",
                        UserPayMentsDisplay:"none",
                        UserMessageDisplay:"none",
                        UserSettingDisplay:""
                    })
                }}>
                    <h4 className="SettingText" style={{color:this.state.Setting_text}}>Settings</h4>
                </div>
                <div className="Logout" onClick={()=>{
                    navigate(`/`)
                }}>
                <i className="fa fa-power-off" style={{fontSize:"20px"}}></i>
                    <h4 className="LogoutText">Logout</h4>
                </div>
                <div className="UserMoney_" style={{display:this.state.UserMoneyDisplay}}>
                <UserMoney
                money = {User.money}
                totalMoney = {User.totalMoney}/>
                </div>
                <div className="UserMessage" style={{display:this.state.UserMessageDisplay}}>
                    <h4 className="ThingName">Name</h4>
                    <h4 className="Count_forProfile">Count</h4>
                    <h4 className="CostForProfile">Cost</h4>
                    <h4 className="DateForProfile">Date</h4>
                    <h3 className="NoMessageText" style={{display:TextDisplay}}>No Messages</h3>
                    <div style={{display : MessageDisplay}}>
                {
                UserMessageList.map((UserMessages:Message_)=>
                    <UserMessage
                        messages = {UserMessages}
                        />
                )
                }
                </div>
                </div>
                <div className="UserPayMents" style={{display:this.state.UserPayMentsDisplay}}>
                    <h4 className="OrderNumber">OrderNumber</h4>
                    <h4 className="Ordered">Ordered</h4>
                    <h4 className="Paid">Paid</h4>
                    <h3 className="NOPayMentsText" style={{display:PayMentTextDisplay}}>
                        No PayMents
                    </h3>
                <div className="PayMentsDiv" style={{display:PayMentDisplay}}>
                {
                UserPayMentsIteam.map((UserPayMent:PayMent)=>
                    <UserPayMents
                        User = {User}
                    PayMents = {UserPayMent}
                        />
                )
            }
            </div>
                </div>
                <div className="UserSetting" style={{display:this.state.UserSettingDisplay}}>
                    <UserSetting/>
                </div>
            </div>
        </div>
    </div>
          )
        }
      }
    return (
        <Profile/>
    )
}
