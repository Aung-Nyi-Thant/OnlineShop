import { useParams } from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {Movie, selectMovieById} from "../features/movie/movieSlice";
import app from "../App"
import "./DetailStyle.css"
import {
    apiGetAllReviewByMovieId,
    apiGetAllReviewByMovieIfNotLoaded,
    Review,
    selectReviewMovieById
} from "../features/review/reviewSlice";
import ReviewUI from "../features/review/ReviewUI";
import {useEffect} from "react";
import ReviewListUI from "../features/review/ReviewListUI";
import { Link, useNavigate } from "react-router-dom";
import DownloadPage from "./DownloadPage";
export default function MovieDetailsPage() {
    let {movieId} = useParams();
    let {Username} =useParams();
    var movie = useAppSelector(state=>selectMovieById(state,movieId!));
    console.log("Movie ",movie);
    console.log(movie.background_img)
    const Movie_:Movie={
        title:movie.title,
        year:movie.year,
        summary:movie.summary,
        background_img:movie.background_img,
        image_adress:movie.image_adress,
        color:movie.color

    }
    const DownloadClick = ()=>{
        navigate("/download")
    }
    let navigate = useNavigate();
    let home = `/${Username}/home`;
    let movie_list = `/${Username}/movie-list`
    let profile = `/${Username}/profile`
    let shop = `/${Username}/shop`
    return (
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


        </ul>

    </div>
    </nav>
        <div className={"Main__"} style={{backgroundImage: `url("${movie.background_img}")`}}>
            <div className={"Detail_"} style={{backgroundColor: `${movie.color}`}}>
                    <h2 className={"detail_title"}>{movie.title}</h2>
                    <h4 className={"detail_year"}> Year: {movie.year}</h4>
                    <div className={"summary_div"}>
                        <h6 className={'summary'}>{movie.summary}</h6>
                    </div>
                    <button className={"Download"} onClick={()=>{
                        DownloadClick()
                    }}>Download</button>
            </div>
    </div></div>)

}
// export const Movie1 = ()=>{
//     let movie = movie
// }