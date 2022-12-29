import React from "react"
import "./UserSettingStyle.css"
export default function UserSetting(props:any){
    let Username = props.username
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
            <h6 className="Username_InSetting" style={{display:this.state.textDisplay}}>Username:{Username}</h6>
            <label className="UsernameLabelInProfile" style={{display:this.state.inputDisplay}}>Username:</label>
            <input className={"UserNameInputInProfile"} style={{display:this.state.inputDisplay}}/>
            <i className='far fa-edit' style={{fontSize:"20px",marginRight:this.state.marginRight_eadit,marginTop:this.state.marginTop_eadit}} onClick={()=>{
                this.setState({
                    textDisplay:"none",
                    inputDisplay:"",
                    marginRight_eadit:"460px",
                })
            }}></i>
            <div>
                <h6>Email : {}</h6>
            </div>
            </div>
            )
    }
    }
    return(
        <SettingProfile/>
    )
}