import {Movie} from "./movieSlice";
import "./Movie.css";
import {
    useParams,
    useNavigate,
    useLocation,
    Link,
} from "react-router-dom";
import {useEffect} from "react";
export default function MovieUI (props:any) {

    let navigate = useNavigate();
    let {Username} = useParams();
    const movie:Movie = props.movie;
    const btnLogin = props
    const btnEditClickHandler=()=>{
        props.editClick(movie);
    };
    const btnDetailHandler=()=>{
        console.log('Go to detail');

        navigate(`/movie-details/${movie._id}`);
    };
    return (<div className={"Mainmovie"}>
        <div className={'movie'} onClick={()=>{navigate(`/${Username}/movie-details/${movie._id}`);}}>
        <div>
            <img src={movie.image_adress} className={"img_movie"} onClick={()=>{navigate(`/movie-details/${movie._id}`);}}/>
        </div>
        <div className={'movie-title'}>
            <h3>
             { movie.title}
             </h3>
        </div>
        <div className={"YearDiv"}>
            <h5 className={"Years"}>Year {movie.year}</h5> &nbsp;
        </div>

    </div>
    </div>)
};