export default function UserMoney(props:any){
    let money =  props.money
    let totalMoney = props.totalMoney
    return(
        <div>
            <h5>Usermoney</h5>
            <h5>{money}</h5>
            <h5>TotalMoney : {totalMoney}</h5>
        </div>
    )
}