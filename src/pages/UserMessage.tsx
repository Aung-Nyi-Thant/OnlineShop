import { Message_ } from "../message/messageSlice"
import "./UserMessageStyle.css"
export default function UserMessage(props:any){
    let messages:Message_ = props.messages 
    let display = props.display
    let MessageDisplay = ""
    let messageLength = messages.FoodName.length
    let marginLeft = messageLength * 13 //one word = marginLeft : 13px
    let marginResult = 0
    if(marginLeft < 115){
        marginResult = 115 - marginLeft
        marginLeft = 115 + marginResult 
    }else if(marginLeft > 115 && marginLeft != 117){
        marginResult = marginLeft - 130
        marginLeft = 120 - marginResult
    }else{
        marginLeft = 120
    }
    return(
        <div className="MainMessages">
            <div className="MessageDiv" style={{display:MessageDisplay}}>
            <h5 className="FoodNameForProfile">{messages.FoodName}</h5>
            <h5 className="CountForProfile" style={{marginLeft:`${marginLeft}px`}}>{messages.count}</h5>
            <h5 className="CostForProfile_">{messages.cost}</h5>
            <h5 className="DateForProfile_">{messages.date}</h5>
            </div>
        </div>
    )
}