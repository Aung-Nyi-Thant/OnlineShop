import { Message_ } from "../message/messageSlice"
import "./UserMessageStyle.css"
export default function UserMessage(props:any){
    let messages:Message_ = props.messages 
    let display = props.display
    let MessageDisplay = ""
    return(
        <div className="MainMessages">
            <div className="MessageDiv" style={{display:MessageDisplay}}>
            <h5 className="FoodNameForProfile">{messages.FoodName}</h5>
            <h5 className="CountForProfile">{messages.count}</h5>
            <h5 className="CostForProfile_">{messages.cost}</h5>
            <h5 className="DateForProfile_">{messages.date}</h5>
            </div>
        </div>
    )
}