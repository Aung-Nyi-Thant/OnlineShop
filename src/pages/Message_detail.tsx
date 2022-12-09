import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectMessageById } from "../message/messageSlice";
import "./Message_detail_style.css"
export default function Message_detail(){
    let navigate = useNavigate();
    let {Username} = useParams()
    let home = `/${Username}/home`;
    let movie_list = `/${Username}/movie-list`
    let profile = `/${Username}/profile`
    let shop = `/${Username}/shop`;
    let {MID} = useParams();
    console.log(MID)
    let message = useAppSelector(state=>selectMessageById(state,MID!));
    console.log(message)
    let message_2 = message.Message
    let Username1 = message.username
    let FoodName1 = message.FoodName
    let Date1 = message.date
    let Date_1 = "Date :"
    let Title = "Admin"
        let widths = "120px"
        let margin = "0px"
        if (Username != "Aung Nyi Thant"){
            Title="BILLIONER"
            widths ="146px"
            margin = "6px"
        }
    if (FoodName1.length <= 8){
        Date_1 = "__"+Date_1
    }
    if(message_2 == undefined){
        message_2=""
    }
    let message_1 = "Username :"+Username1+"\r\n"+"_FoodName :"+FoodName1+"\r\n"+Date_1+Date1+"\r\n"+message_2
    return(<div>
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
            <div>
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
                if(Username != "Aung Nyi Thant"){
                    //nothing
                }else{
                    navigate(`/admin/${Username}/shop`)
                }
            }}>
            <h3 className={"Title__"} style={{marginLeft:margin}}>{Title}</h3>
            </div>
            {/* <div className={"Message"} onClick={()=>{
                navigate("/Aung%20Nyi%20Thant/message")
            }}><h4>M</h4></div> */}
            <i className='fas fa-comment-alt' style={{fontSize:"35px" , marginTop:"10px"}} onClick={()=>{
                navigate("/Aung%20Nyi%20Thant/message")
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
    <div className={"message_detail"}>
        <div className={'messageDiv1'}>
        <h4 className={"cost__"}> {message_1} </h4>
        </div>

    </div>
    </div>)
}