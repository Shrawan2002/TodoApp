import { useState } from "react"

export default function Laudo(){
    let [moves,setMoves] = useState({blue:0,yellow:0,red:0,green:0})
    let blueMoves = ()=>{
        setMoves((curr)=>{
            return {...curr,blue:curr.blue+1}
        })
    }

      let yellowMoves = ()=>{
        setMoves((curr)=>{
            return {...curr,yellow:curr.yellow+1}
        })
    }

      let redMoves = ()=>{
        setMoves((curr)=>{
            return {...curr,red:curr.red+1}
        })
    }

      let greenMoves = ()=>{
        setMoves((curr)=>{
            return {...curr,green:curr.green+1}
        })
    }
    return(
        <div>
            <p>Blue Move ={moves.blue}</p>
            <button onClick={blueMoves}>+1</button>
             <p>yellow Move = {moves.yellow}</p>
            <button onClick={yellowMoves}>+1</button>
             <p>Red Move = {moves.red}</p>
            <button onClick={redMoves}>+1</button>
             <p>Green Move = {moves.green}</p>
            <button onClick={greenMoves}>+1</button>
        </div>
    )
}