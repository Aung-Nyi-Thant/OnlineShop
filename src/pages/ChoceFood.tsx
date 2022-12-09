import { Food, Foods, selectFoodById } from '../Shop/ShopSlice'
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import { useAppSelector } from '../app/hooks';
export default function ChoseFood (props:any) {
    let navigate = useNavigate();
    let {Foodid} = useParams();
    let {Username} = useParams();
    const food:Food = props.food;
    console.log("Food is",food)
    let age_perm ;
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
            <i className='fas fa-comment' style={{fontSize:"35px" , marginTop:"10px" , marginLeft:"1200px"}} onClick={()=>{
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
    <div className="input-group">
    <div className="form-outline">
  <input type="search" id="form1" className="form-control" placeholder="Type query"  aria-label="Search" />
</div>
    <button type="button" className="btn btn-outline-primary" onClick={()=>{
        navigate(`/${Username}/shop`)
    }}>search</button>
    </div>
                <div className={"MainFood"}>
        <div className={'food_'} onClick={()=>{navigate(`/${Username}/shop/food-details/${food._id}`);}} style={{backgroundColor: `#4aa55e`}}>
        <div>
            <img src={food.FoodImage} className={"img_food"}/>
        </div>
        <div className={'food-title'}>
            <h3>
            { food.Food_name}
            </h3>
        </div>
        <div className={"YearsDiv"}>
            <h5 className={"Year"}>Age : {age_perm}</h5> &nbsp;
        </div>

    </div>
    </div>
            </div>
    )
}