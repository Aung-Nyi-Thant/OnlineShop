import { useNavigate, useParams } from "react-router-dom";
import { Users, users } from "../features/Login/UsersSlice";
import"./ComtandStyle.css"
export default function ComtandUI(props:any){
    const users:Users = props.users;
    let {Username} = useParams()
    let navigate = useNavigate();
    return(<div className={"comtand_main"} onClick={()=>{
        navigate(`/${Username}/message/comtand/sendMessage/${users._id}`)
    }}>
        <h6 className={"Username_"}>Username : {users.username}</h6>
        <h6 className={"Password_"}>Password : {users.password}</h6>
    </div>)
}