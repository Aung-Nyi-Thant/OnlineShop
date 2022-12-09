import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectFoodById } from "../Shop/ShopSlice";
import './GoodByeStyle.css'
export default function GoodBye(){
    let {Username} = useParams()
    let {cost} =useParams()
    let {Foodid} =useParams()
    let food = useAppSelector(state=>selectFoodById(state,Foodid!));
    let navigate = useNavigate()
    if(cost == undefined){
        GoodBye()
    }else if(cost != undefined){
        let costs = Number(cost)
        let home = `/${Username}/home`;
        let movie_list = `/${Username}/movie-list`
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
            <div className={"Logo__"} onClick={()=>{
            }}></div>
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
    <div className={"GoodBye"}>
    <h1 className={"Text_"}>BILLIONER</h1>
    <h3 className={"Text_"}>Online Shop</h3>
     <div className={"Image_Thanks"}></div>
        <button className={"Goback"} onClick={()=>{
            navigate(shop)
        }}>Back</button>
    </div>
        </div>
    )
}
return(
    <div></div>
)
}