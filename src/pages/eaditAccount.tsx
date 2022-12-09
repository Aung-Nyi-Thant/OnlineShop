import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { UpdateAccount } from "../features/Login/LoginApi";
import { selectUserById, UpdateAccount_, Users, users } from "../features/Login/UsersSlice";
import "./eaditAccountStyle.css"
export default function EaditAcc(){
    let navigate = useNavigate();
    let {Username} = useParams();
    let {Id} = useParams();
    let user:Users = useAppSelector(state=>selectUserById(state,Id!));
    return(<div className={"Main_view"}>
        <div className={"childView"}>
            <h2 className={"TitleEd"}>BILLIONER</h2>
            <h6 className={"note_"}>Don't forgot that password :)</h6>
            <input className={"passwordEd"} id={"password_"} placeholder={"Password"}/>
            <div>
            <input className={"ComfigpasswordEd"} id={"ComfigPass"} placeholder={"ComfigPassword"}/>
            </div>
            <button className={"EnterEd"} onClick={()=>{
                var password = (document.getElementById("password_") as HTMLInputElement).value;
                var ComfigPass = (document.getElementById("ComfigPass") as HTMLInputElement).value;
                if(password != "" && ComfigPass !=""){
                if (password == ComfigPass){
                    let users:Users ={
                        _id:user._id,
                        username:user.username,
                        password:ComfigPass,
                        email:user.email,
                        age:user.age
                    }
                    UpdateAccount(users)
                    console.log("Successful")
                    window.location.reload()
                    // window.location.reload()
                }}
            }}>Enter</button>
        </div>
    </div>)
}