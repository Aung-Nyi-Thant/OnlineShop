import {useAppDispatch} from "../app/hooks";
import "./adminFoodstorestyle.css"
import {apiSaveFood, Food} from"../Shop/ShopSlice"
import "./HomePage.css"
import {
    useParams,
    useNavigate,
} from "react-router-dom";
import { getAllMovie } from "../features/movie/movieApi";
// import { link } from "fs";

export default function AdmStore() {
    let dispatch = useAppDispatch()
    let resonse = getAllMovie()
    let {Username} = useParams();
    let Title ="Admin"
    let widths = "120px"
    let margin = "0px"
    if (Username !== "Aung Nyi Thant"){
        Title="BILLIONER"
        widths ="146px"
        margin = "6px"
    }
    console.log("movies are",resonse["PromiseResult"])
    let navigate = useNavigate();
    let movie_list = `/${Username}/movie-list`
    let shop = `/${Username}/shop`
    console.log("Username is",Username)
    return <div>
        <div className={"Foodlist"}>
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
            <i className='fas fa-comment-alt' style={{fontSize:"35px" , marginTop:"10px"}} onClick={()=>{
                navigate(`/${Username}/message`)
            }}></i>
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
    {/* <button>Food List</button> */}
    <div className={"AdminHome"}> 
        <h1 className={"Billioner_"}>BILLIONER</h1>
        <h4 className={"OnlineShop"}>Online Shop</h4>
                <label className={"Label_1"}>FoodName </label><input className={"Foodname"} id={'Foodname'}/>
                <div>
                <label className={"Label_2"}>Prices </label><input type={"number"} className={"FoodPrice"} id={'FoodPrice'}/>
                </div>
                <div>
                <label className={"Label_3"}>ImageAdress </label><input type={"string"} className={"FoodImage"} id={'FoodImage'}/>
                </div>
                <div>
                <label className={"Label_4"}>AgeLimit </label><input type={"number"} className={"FoodAgeLimit"} id={'FoodAgeLimit'}/>
                </div>
                <div>
                <label className={"Label_5"}>Type Of Taste </label><input type={"string"} className={"FoodTaste"} id={'FoodTaste'}/>
                </div>
                <div>
                <label className={"Label_6"}>Brand </label><input type={"string"} className={"FoodBrand"} id={'FoodBrand'}/>
                </div>
                <div>
                <label className={"Label_6"}>expire_date </label><input type={"string"} className={"expireDate"} id={'expireDate'}/>
                </div>
                <div>
                <label className={"Label_6"}>made in country </label><input type={"string"} className={"country"} id={'country'}/>
                </div>
                <div>
                <label htmlFor="cars" >Choose a car:</label>

         <select name="cars" id="cars" className={"Selcet"}>
        <option value="SomeThing">Foods</option>
        <option value="Gamming">Gamming</option>
        <option value="suit">Suit</option>
        </select>
                </div>
                <div id="myProgress">
                <div id="myBar"></div>
                </div>
                <button className={"SubmitBtn"} onClick={()=>{
                    var FoodName = (document.getElementById("Foodname") as HTMLInputElement).value;
                    var FoodPrices = (document.getElementById("FoodPrice") as HTMLInputElement).value;
                    var FoodImage = (document.getElementById("FoodImage") as HTMLInputElement).value;
                    var FoodAgeLimit = (document.getElementById("FoodAgeLimit") as HTMLInputElement).value;
                    var FoodTaste = (document.getElementById("FoodTaste") as HTMLInputElement).value;
                    var FoodBrand = (document.getElementById("FoodBrand") as HTMLInputElement).value;
                    var  expire_date= (document.getElementById("expireDate") as HTMLInputElement).value;
                    var  madeInCountry= (document.getElementById("country") as HTMLInputElement).value;
                    var selectIndex = (document.getElementById('cars') as HTMLSelectElement);
                    let select = selectIndex.options[selectIndex.selectedIndex].value
                    if(FoodName !== ""){
                        console.log("Step 1")
                        if(FoodPrices!==""){
                            console.log("Step 2")
                            if(FoodImage!==""){
                                console.log("Step 3")
                                if(FoodAgeLimit!==""){
                                    console.log("Step 4")
                                    if(FoodTaste!==""){
                                        console.log("Step 5")
                                        if(FoodBrand!==""){
                                            console.log("Step 6")
                                            if(expire_date!==""){
                                                console.log("Step 7")
                                                if(madeInCountry!==""){
                                                    console.log(select)
                                                    console.log("Step 8")
                                                    let age = FoodAgeLimit+"_"
                                                    let ageLimit = age.replace("_","+")
                                                    let price = FoodPrices+"_"
                                                    let Prices = price.replace("_","$")
                                            let Food : Food = {
                                                Food_name:FoodName,
                                                FoodImage:FoodImage,
                                                expire_date:expire_date,
                                                typeOfTaste:FoodTaste,
                                                Prices:Prices,
                                                age_permisssion:ageLimit,
                                                Brand:FoodBrand,
                                                Ingredients:select,
                                                Rating:"0.0",
                                                textStyle:"Something",
                                                ColorForStyle:"#4aa55e",
                                                country:madeInCountry,
                                                like:0
                                            }
                                            console.log(Food)
                                            dispatch(apiSaveFood(Food))
                                            navigate("/Aung%20Nyi%20Thant/home")
                                        }
                                    }
                                        }
                                        
                                    }
                                }
                            }
                        }
                    }
                
            }
    }>Sumbit</button>
                </div>
        </div>
    </div>
}