import './UserMoneyStyle.css'
export default function UserMoney(props:any){
    let money =  props.money
    let totalMoney = props.totalMoney
    console.log(money)
    return(
        <div className='UserMoneyMainDiv'>
            <h4 className='Money_'>Money : {money}</h4>
            <h5 className='TotalMoney'>Total Use Money : {totalMoney}</h5>
        </div>
    )
}