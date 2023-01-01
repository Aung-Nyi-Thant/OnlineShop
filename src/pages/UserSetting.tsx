import React from "react"
import { UpdateAccount } from "../features/Login/LoginApi"
import { apiSaveUsers, UpdateAccount_, User1, Users } from "../features/Login/UsersSlice"
import "./UserSettingStyle.css"
export default function UserSetting(props:any){
    let Users_:User1 = props.User
    let USerID = props.Id
    class SettingProfile extends React.Component {
        state = {
            textDisplay : "",
            inputDisplay: "none",
            marginRight_eadit:"385px",
            marginTop_eadit:"0px"
        }
        render(){
            return(
                <div className="UserSetting_Div">
            <h6 className="Username_InSetting" style={{display:this.state.textDisplay}}>Username:{Users_.userName}</h6>
            <label className="UsernameLabelInProfile" style={{display:this.state.inputDisplay}}>Username:</label>
            <input className={"UserNameInputInProfile"} id={"UsernameInput"} style={{display:this.state.inputDisplay}}/>
            <i className='far fa-edit' style={{fontSize:"20px",marginRight:this.state.marginRight_eadit,marginTop:this.state.marginTop_eadit}} onClick={()=>{
                this.setState({
                    textDisplay:"none",
                    inputDisplay:"",
                    marginRight_eadit:"460px",
                })
            }}></i>
            <div className="EmailDiv">
                <h6 className="Email_In_Setting">Email : {Users_.email}</h6>
            </div>
            <div className="PasswordDiv">
                <h6 className="Password_In_Setting">Password : *******</h6>
            </div>
            <button className="Savebtn" style={{display:this.state.inputDisplay}} onClick={()=>{
                console.log("Tap the Save")
               let User_name = (document.getElementById("UsernameInput") as HTMLInputElement).value;
               if(User_name != ""){
                let User:Users={
                    _id : Users_._id,
                    username : User_name,
                    password: Users_.password,
                    email:Users_.email,
                    age:Users_.age,
                    totalMoney:Users_.totalMoney,
                    money:Users_.money,
                    type_:Users_.type_
                }
                UpdateAccount(User)
            }
            }}>Save</button>
            <button className="Cancelbtn" style={{display:this.state.inputDisplay}} onClick={()=>{
                this.setState({
                    textDisplay : "",
                    inputDisplay: "none",
                    marginRight_eadit:"385px",
                    marginTop_eadit:"0px"
                })
            }}>Cancel</button>
            </div>
            )
    }
    }
    return(
        <SettingProfile/>
    )
}