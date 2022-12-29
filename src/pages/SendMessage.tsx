import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useParams } from "react-router"
import { useAppDispatch, useAppSelector } from "../app/hooks";
import UsersSlice, { selectUserById, Users } from "../features/Login/UsersSlice";
import { apiGetAllMessage, apiSaveMessage, Message_, selectMessage } from "../message/messageSlice";
import * as Yup from 'yup';
import { saveMessage } from "../message/messageApi";
import"./SendMessageStyle.css"
import { useNavigate } from "react-router-dom";

const Messagechema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    year: Yup.number().required('Required'),
});
const MessageForm = (props:any)=>{
    let dispatch = useAppDispatch();
    let message = props.message;
    console.log('Edit movie ',message);
    let handleClose = props.handleClose;
    let initValues ={
        _id : message? message._id:'',
        username:  message? message.username:'',
        FoodName:  message? message.FoodName:'',
        count: message? message.count:'',
        cost:message? message.cost:'',
        date:message? message.date:"",
        Message:message? message.Message:'',
        image_adress:message? message.Message:''
    }
    return (<div>
        
        <Formik
            initialValues={initValues}
            validationSchema={Messagechema}
            onSubmit={values => {
                // same shape as initial values
                //console.log("Handle Close ", handleClose);
                console.log(values);

                if (!message)//save
                {
                    let newMessage: Message_ = {
                        username:values.username,
                        FoodName:values.FoodName,
                        count:values.count,
                        cost:values.cost,
                        date:values.date,
                        Message:values.Message,
                        image_adress:values.image_adress
                    }

                    console.log('Movie ', newMessage);
                    dispatch(apiSaveMessage(newMessage));
                }
                else //Update movie
                {
                    let messageToUpdate: Message_ = {
                        _id : values._id,
                        username:values.username,
                        FoodName:values.FoodName,
                        count:values.count,
                        cost:values.cost,
                        date:values.date,
                        Message:values.Message,
                        image_adress:values.image_adress
                    }

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
                           value={values.username}
                    />
                    {errors.username && touched.username ? (
                        <div className="alert alert-danger">{errors.username.toString()}</div>
                    ) : null}

                    <label>Year</label>
                    <input type="text"
                           className="form-control"
                           id="year"
                           name="year"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.username}
                    />
                    {errors.username && touched.username ? <div className="alert alert-danger">{errors.username.toString()}</div> : null}
                    <button type="submit"
                            className="btn btn-primary">{message?'Update':'Save'}
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
export default function SendMessage(){
    useEffect(()=>{
        dispatch(apiGetAllMessage());
    },[]);
    const messages = useAppSelector(selectMessage);
    let {ID_} = useParams()
    let navigate = useNavigate();
    let {Username} = useParams();
    let home = `/${Username}/home`;
    let movie_list = `/${Username}/movie-list`
    let profile = `/${Username}/profile`
    let shop = `/${Username}/shop`
    let user:Users = useAppSelector(state=>selectUserById(state,ID_!));
    const dispatch = useAppDispatch();
    const btnClick = ()=>{
    }
    console.log(user)
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
            <div className={"Admin_title"} onClick={()=>{
                navigate(`/admin/${Username}/shop`)
            }}>
            <h3 className={"Title__"}>Admin</h3>
            </div>
            {/* <div className={"Message"} onClick={()=>{
                navigate("/Aung%20Nyi%20Thant/message")
            }}><h4>M</h4></div> */}

                        <div className="profile" onClick={()=>{
                navigate(`/${Username}/profile`)
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
            <div className={"sendMessagediv"}>
                <h2 className={"messageTitle"}>Message</h2>
                <label>Message : </label><input className={"MessageInput"} id={"message"}/>
                <button className={"SendBtn"} onClick={()=>{
                   let date_ = new Date().toISOString().slice(0, 10)
                   var Message = (document.getElementById("message") as HTMLInputElement).value;
                   if (Username != undefined){
                       if (Message !=""){
                   let message:Message_ = {
                       username:user.username,
                       cost: "message",
                       count:"message",
                       FoodName:"message!",
                       date:date_,
                       Message:Message,
                       image_adress:""
                   }
                   saveMessage(message)
                   console.log("Done")
                   navigate(`/${user._id}/message/${Username}/reaload`)}
                   else{
                       //nothing
                   }
               }else{
                   <SendMessage/>
               }
                }}>Send</button>
            </div>
        </div>
        
    )
}