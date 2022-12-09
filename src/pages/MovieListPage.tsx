import MovieList from "../features/movie/MovieList";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {
    apiDeleteMovie,
    apiGetAllMovie,
    apiSaveMovie,
    apiUpdateMovie,
    Movie,
    selectMovie
} from "../features/movie/movieSlice";
import "./MovieListPagestyle.css"
import React, {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";
import {Form, Formik} from "formik";
import * as Yup from 'yup';
import Swal from 'sweetalert2';

import {useDispatch} from "react-redux";

import {saveMovie, updateMovie} from "../features/movie/movieApi";
import MovieUI from "../features/movie/MovieUI";
import { Link, useNavigate, useParams } from "react-router-dom";
import { login } from "../features/Login/UsersSlice";

const MovieSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    year: Yup.number().required('Required'),
});
const MovieForm = (props:any)=>{
    let dispatch = useAppDispatch();
    let movie = props.movie;
    console.log('Edit movie ',movie);
    let handleClose = props.handleClose;
    let initValues ={
        _id : movie? movie._id:'',
        title:  movie? movie.title:'',
        year:  movie? movie.year:'',
        image_adress: movie? movie.image_adress:'',
        background_img:movie? movie.background_img:'',
        color:movie? movie.color:'',
        summary:movie? movie.summary:''
    }
    return (<div>
        
        <Formik
            initialValues={initValues}
            validationSchema={MovieSchema}
            onSubmit={values => {
                // same shape as initial values
                //console.log("Handle Close ", handleClose);
                console.log(values);

                if (!movie)//save
                {
                    let newMovie: Movie = {
                        title: values.title,
                        year: Number(values.year),
                        image_adress:values.image_adress,
                        background_img:values.background_img,
                        color:values.color,
                        summary:values.summary
                    }

                    console.log('Movie ', newMovie);
                    dispatch(apiSaveMovie(newMovie));
                }
                else //Update movie
                {
                    let movieToUpdate: Movie = {
                        _id : values._id,
                        title: values.title,
                        year: Number(values.year),
                        image_adress:values.image_adress,
                        background_img:values.background_img,
                        color:values.color,
                        summary:values.summary
                    }

                    console.log('Updated Movie ', movieToUpdate);
                    dispatch(apiUpdateMovie(movieToUpdate));
                }

                handleClose();
            }}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
              }) => (
                <Form>
                    <label>Title</label>
                    <input type="text"
                           className="form-control"
                           id="title"
                           name="title"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.title}
                    />
                    {errors.title && touched.title ? (
                        <div className="alert alert-danger">{errors.title.toString()}</div>
                    ) : null}

                    <label>Year</label>
                    <input type="text"
                           className="form-control"
                           id="year"
                           name="year"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.year}
                    />
                    {errors.year && touched.year ? <div className="alert alert-danger">{errors.year.toString()}</div> : null}
                    <button type="submit"
                            className="btn btn-primary">{movie?'Update':'Save'}
                    </button>
                    <button type="button"
                            onClick={()=>handleClose()}
                            className="btn">Cancel
                    </button>
                </Form>
            )}
        </Formik>

    </div>);
};
export default function MovieListPage() {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(apiGetAllMovie());
    },[]);

    const movies = useAppSelector(selectMovie);

    const [editMovie,setEditMovie] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let {Username} = useParams();
    let home = `/${Username}/home`;
    let movie_list = `/${Username}/movie-list`
    let profile = `/${Username}/profile`

    const btnAddNewMovieClick = ()=>{
        console.log('Btn Add New Movie click');
        setEditMovie(null);
        handleShow();
    };
    let shop = `/${Username}/shop`
    const btnEditClick=(movie:any)=>{
        console.log('Btn Edit Movie click ',movie);
        setEditMovie(movie);
        handleShow();
    }
    let navigate = useNavigate();
    const btnDeleteClick = (movie:any)=>{
      console.log('Delete click ',movie);
        Swal.fire({
            title: 'Do you want to delete movie?',
            showCancelButton: true,
            confirmButtonText: 'Delete',

        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                dispatch(apiDeleteMovie(movie)).then(()=>{
                    Swal.fire('Deleted!', '', 'success');
                });

            }
        })
    };
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{editMovie?'Update Movie':'New Movie'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <MovieForm handleClose={handleClose}
                              movie ={editMovie}
                             />

                </Modal.Body>
                {/*<Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>*/}
            </Modal>
            <div className={"Movie__"}>
            {
                movies.map((movie:Movie)=>
                    <MovieUI
                        key={movie._id}
                        editClick = {btnEditClick}
                        deleteClick = {btnDeleteClick}
                        movie={movie}/>
                )
            }
            </div>
        </div>
    );
}