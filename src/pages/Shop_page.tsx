import MovieList from "../features/movie/MovieList";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {
    apiGetAllFood, apiSaveFood, Food,selectFood, selectFoodByName
} from "../Shop/ShopSlice";
import "./MovieListPagestyle.css"
import ChoseFood from "./ChoceFood"
import React, {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import Swal from 'sweetalert2';

import {useDispatch} from "react-redux";

import {saveMovie, updateMovie} from "../features/movie/movieApi";
import MovieUI from "../features/movie/MovieUI";
import { Link, useParams } from "react-router-dom";
import { login } from "../features/Login/UsersSlice";
import FoodUI from "../Shop/FoodShopUI";
import { GetFoodByName } from "../Shop/ShopApi";
import FoodDShop from "../Shop/FoodDShop";
import FoodDetailsPage from "./FoodDetail";
import {useNavigate} from "react-router-dom";

const MovieSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    year: Yup.number().required('Required'),
});
const FoodForm = (props:any)=>{
    let dispatch = useAppDispatch();
    let food = props.food;
    console.log('Edit Food ',food);
    let handleClose = props.handleClose;
    let initValues ={
        _id : food? food._id:'',
        Food_name:  food? food.Food_name:'',
        Prices:  food? food.Prices:'',
        expire_date: food? food.expire_date:'',
        FoodImage:food? food.FoodImage:'',
        typeOfTaste:food? food.typeOfTaste:'',
        age_permisssion:food? food.age_permisssion:'',
        Brand:food? food.Brand:'',
        Ingredients:food? food.Ingredients:'',
        Rating:food? food.Rating:'',
        textStyle:food? food.textStyle:'',
        country:food? food.country:'',
        ColorForStyle:food? food.ColorForStyle:'',
        like : food? food.like:'',
    }
    return (<div>
        
        <Formik
            initialValues={initValues}
            validationSchema={MovieSchema}
            onSubmit={values => {
                // same shape as initial values
                //console.log("Handle Close ", handleClose);
                console.log(values);

                if (!food)//save
                {
                    let Foods: Food = {
                        _id : values._id,
                        Food_name:  values.Food_name,
                        Prices:  values.Prices,
                        expire_date: values.expire_date,
                        FoodImage: values.FoodImage,
                        typeOfTaste:values.typeOfTaste,
                        age_permisssion:values.age_permisssion,
                        Brand:values.Brand,
                        Ingredients:values.Ingredients,
                        Rating:values.Rating,
                        textStyle:values.textStyle,
                        country:values.country,
                        ColorForStyle:values.ColorForStyle,
                        like: values.like
                    }

                    console.log('Food ', Foods);
                    dispatch(apiSaveFood(Foods));
                }
                else //Update movie
                {
                    let FoodstoUpdate: Food = {
                        _id : values._id,
                        Food_name:  values.Food_name,
                        Prices:  values.Prices,
                        expire_date: values.expire_date,
                        FoodImage: values.FoodImage,
                        typeOfTaste:values.typeOfTaste,
                        age_permisssion:values.age_permisssion,
                        Brand:values.Brand,
                        Ingredients:values.Ingredients,
                        Rating:values.Rating,
                        textStyle:values.textStyle,
                        country:values.country,
                        ColorForStyle:values.ColorForStyle,
                        like:values.like
                    }
                }

                handleClose();
            }}
        >
        </Formik>

    </div>);
};
export default function MovieListPage() {
    let navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [state, setState]= useState(0)
    useEffect(()=>{
       dispatch(apiGetAllFood());
    },[state]);
    var Foods = useAppSelector(selectFood);
    var isFood = false
    const [editMovie,setEditMovie] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const btnAddNewMovieClick = ()=>{
        console.log('Btn Add New Movie click');
        setEditMovie(null);
        handleShow();
    };

    const btnSerch_Click=()=>{
        Foods.map((Foods_list:Food)=>
                    <FoodUI
                        food={Foods_list}/>
        )
}
    let {Username} = useParams();
    let home = `/${Username}/home`;
    let movie_list = `/${Username}/movie-list`
    let profile = `/${Username}/profile`
    let shop = `/${Username}/shop`
    let Foods_list: Food[] = [];
    const btnSerchClick=()=>{
        console.log("Done")
    }
    return (
            <div className={"Movie__"}>
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
            <div className={"Admin_title"} onClick={()=>{
                navigate(`/admin/${Username}/shop`)
            }}>
            <h3 className={"Title__"}>Admin</h3>
            </div>
            {/* <div className={"Message"} onClick={()=>{
                navigate("/Aung%20Nyi%20Thant/message")
            }}><h4>M</h4></div> */}
            <i className='fas fa-comment' style={{fontSize:"35px" , marginTop:"10px"}} onClick={()=>{
                navigate("/Aung%20Nyi%20Thant/message")
            }}></i>
            
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
  <input type="search" id="form1" className="form-control" placeholder="Taste (or) Name"  aria-label="Search"/>
</div>
    <button type="button" className="btn btn-outline-primary" onClick={()=>{
        var input = (document.getElementById("form1") as HTMLInputElement).value;
        for (let i = 0; i < Foods.length; i++) { 
            let taste = Foods[i].typeOfTaste
            if(taste == input){
                Foods_list.push(Foods[i])
            }
        }
        btnSerchClick()
    }}>search</button>
    <div className={"testing"}></div>
    </div>
    
            {
                Foods.map((food:Food)=>
                    <FoodUI
                        food={food}
                        />
                )
            }
            </div>
    );
}