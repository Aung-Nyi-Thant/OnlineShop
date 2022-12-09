import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectUserById } from "../features/Login/UsersSlice";
import { saveMessage } from "../message/messageApi";
import { Message_ } from "../message/messageSlice";
import { selectFoodById } from "../Shop/ShopSlice";
import './BuyingStyle.css'
export default function BuyingTheFood(){
    let {Username} = useParams()
    let {count} = useParams()
    let user = useAppSelector(state=>selectUserById(state,Username!));
    console.log(Username)
    console.log(user)
    let {cost} =useParams()
    let {Foodid} =useParams()
    let food = useAppSelector(state=>selectFoodById(state,Foodid!));
    let navigate = useNavigate()
    if(cost == undefined || count == undefined || Username == undefined){
        BuyingTheFood()
    }else if(cost != undefined){
        let costs = Number(cost)
        let home = `/${Username}/home`;
        let Username_ = Username
        let cost_ = cost
        let count_ = count
        let movie_list = `/${Username}/movie-list`
        let shop = `/${Username}/shop`
        let Title = "Admin"
        let widths = "120px"
        let margin = "0px"
        if (Username != "Aung Nyi Thant"){
            Title="BILLIONER"
            widths ="146px"
            margin = "6px"
        }
        const btnClick = ()=>{
            let date_ = new Date().toISOString().slice(0, 10)
            if(Username =="Aung Nyi Thant"){
                //nothing
            }else{
                let message:Message_ = {
                    username:Username_,
                    cost: cost_,
                    count:count_,
                    FoodName:food.Food_name,
                    date:date_,
                    Message:"",
                    image_adress:food.FoodImage
                }
                saveMessage(message)
            }
        }
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
                    //nothing do
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
            <div className={"Main_Card"} style={{backgroundColor:`white`}}>
                <h1 className={"Title_Card"}>BILLIONER</h1>
                <h3 className={"Title_Card"}>Online shop</h3>
                <div>
            <label className={"CardLabel"}>Card ID :</label><input className={"CardId"} placeholder={"0123456"} id={"Id"}/>
            </div>
            <div>
            <label className={"CardLabel"}>Password :</label><input type={"password"} placeholder={"password"} className={"CardPassword"} id={"Password"}/>
            </div>
            <button className={"confirmBtn"} style={{color:`${food.ColorForStyle}`}} onClick={()=>{
                var CardID = (document.getElementById("Id") as HTMLInputElement).value;
                var Password = (document.getElementById("Password") as HTMLInputElement).value;
                if(CardID =="" || Password==""){
                    //Nothing
                }
                else{
                    navigate(`/bye/buy/${Username}/reaload`)
                    btnClick()
                }
            }}>Confirm</button>
            </div>
        </div>
    )
    
}
return(
    <div></div>
)
}