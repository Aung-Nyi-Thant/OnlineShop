import { useEffect } from 'react';
import { useAppDispatch , useAppSelector} from '../app/hooks';
import { apiGetAllPayMent, PayMent, selectPayMents } from '../features/PayMents/PayMentsSlice';
import './UserPayMentsStyle.css'
export default function UserPayMents(props:any){
    console.log("PayMents")
    let PayMents:PayMent = props.PayMents
    console.log("PayMents",PayMents.username)
    let amount =String(PayMents.amount)+"$"
    let display = props.display
    return(
        <div className='MainPayMent'>
            <div className='OrderIdDiv'>
            <h5 className='OrderId_text'>{PayMents.Things}</h5>
            </div>
            <div>
            <h5 className='Ordered_text'>{PayMents.Date}</h5>
            </div>
            <div>
            <h5 className='Paid_text'>{amount}</h5>
            </div>
        </div>
    )
}