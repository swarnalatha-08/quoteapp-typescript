import { useEffect, useState } from "react"

export default function Quotes(){
    const [quotes,setQuotes]= useState<any>('')
    useEffect(()=>{
        fetch("https://api.quotable.io/quotes")
        .then((res)=>res.json())
        .then((data)=>setQuotes(data))
    })
    return(
        <div>{quotes && quotes.results.map((each:any,index:number)=>{
            return(<div>{each.content}</div>)
        })}</div>
    )
}