import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectUserById } from "../features/Login/UsersSlice";

export default function AccountComfig(){
    let navigate = useNavigate();
    let {Username} = useParams();
    let {Id} = useParams();
    let home = `/${Username}/home`;
    let movie_list = `/${Username}/movie-list`
    let profile = `/${Username}/profile`
    let shop = `/${Username}/shop`
    let user = useAppSelector(state=>selectUserById(state,Id!));
    return(
        <div className={"mainForgot"}>
            <div className={"childforgot"}>
                <h2 className={"TitleForgot"}>BILLIONER</h2>
                <h5 className={"Acc"}>It is your account?</h5>
                <div className={"userdiv"} onClick={()=>{
                    navigate(`/forgot/${user._id}/message`)
                }}>
                    <h5 className={"Username_acc"}>Name:{user.username}</h5>
                    <h6 className={"Password_acc"}>Password:******</h6>
                </div>
            </div>
        </div>
    )
}