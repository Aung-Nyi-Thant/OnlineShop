import { randomInt } from "crypto";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectUserById } from "../features/Login/UsersSlice";
export default function AccountMessage(){
    let navigate = useNavigate();
    let {Username} = useParams();
    let {Id} = useParams();
    let home = `/${Username}/home`;
    let movie_list = `/${Username}/movie-list`
    let profile = `/${Username}/profile`
    let shop = `/${Username}/shop`
    let user = useAppSelector(state=>selectUserById(state,Id!));
    console.log(user.email)
    let email_slice = user.email.slice(2, 6)
    let email = user.email
    let email_hide = email.replace(email_slice, "****")
    let code_ = Math.random()
    let codeStr = code_.toString()
    let sliceCode = codeStr.slice(2,7)
    console.log("Code is",sliceCode)
    class SendCode extends React.Component{
        state={Message:"",
                Color:""}
        render(){
            return(
                <div className={"mainForgot"}>
        
                    
                    <div className={"childforgot"}>
                        <h2 className={"TitleForgot"}>BILLIONER</h2>
                        <h5 className={"text3"}>Sending code to the {email_hide}</h5>
                        <input className={"codeComfig"} type={"number"} placeholder={"code"} id={"code"} style={{borderColor:this.state.Color}}/>
                        <div><button className={"enterBtn"} onClick={()=>{
                            var code = (document.getElementById("code") as HTMLInputElement).value;
                            console.log(code , "=",sliceCode)
                            if (code == sliceCode){
                                navigate(`/forgot/${Id}/message/eadit`)
                            }else{
                                this.setState({Message:"Wrong code",
                                                Color:"red"})
                            }
                        }}>Enter</button></div>
                        <h6 className={"ErrMessage"}>{this.state.Message}</h6>
                    </div>
                </div>
            )
        }
}
return(
    <SendCode/>
)
}