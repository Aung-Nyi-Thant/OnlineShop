import { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./currencyStyle.css"
export default function Currency(){
    let {Username} = useParams();
    let movie_list = `/${Username}/movie-list`
    let shop = `/${Username}/shop`
    let navigate = useNavigate();
    let Title ="Admin"
    let widths = "120px"
    let margin = "0px"
    if (Username !== "Aung Nyi Thant"){
        Title="BILLIONER"
        widths ="146px"
        margin = "6px"
    }
    function sleep(milliseconds:any) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
     }
    class CurrencyClass extends Component{
        state = {
            widths:20,
            display:"none"
        } 
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
    <div className="MainDivInCurrency">
        <h1 className="TitleOfCurrency">Buy The Shopping Coins</h1>
        <div className="DivForCurrencyInput">
        <input className="currencyInput" type={"number"} placeholder={"0$"}/>
        <button className="BuyBtnForCurrencyPage" onClick={async ()=>{
            this.setState({
                display:""
            })
            function sleep(ms:number) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
        
                for (let i = 0; i < 20; i++) {
                    if(this.state.widths != 400){
                    await sleep(i * 20);
                    this.setState({
                        widths:this.state.widths+20
                    })
                }
                }
        }}>Buy</button>
        <div className="LoadingBarForDiv" style={{display:this.state.display}}>
            <div className="LoadingBar">
                <div className="RunningBar" style={{width:`${this.state.widths}px`}}></div>
            </div>
        </div>
        </div>
    </div>
        </div>
        )
        }
    }
    return (
        <CurrencyClass/>
    )
}