import NewPgaeUi from "./NewPageUI"


export default function NewPage(){
let iteam: any[] = []
    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
	.then(response => response.json())
	.then(json => {
        // for(let i =0;i<json.length;i++){
        //     console.log(json[i].title)
        // }
        for(let i =0 ;i<100;i++){
        iteam.push(json[i])
        }
    })
    console.log(iteam)
    

    return(
        <div>
           <h3></h3>
        </div>
    )
}