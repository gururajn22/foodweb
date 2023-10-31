
import { useState } from "react";
const User=({name})=>{
const[count,setCount]=useState(0);
const[count2,setCount2]=useState(1);

    return(
        <div className="user-card">
             <h1>count={count}</h1> 
             <button onClick={()=>{
                setCount(count+1);
             }} >count</button>
            <h2>Name: {name}</h2>
            <h3>Location: Bengaluru</h3>
            <h4>Contact : @Gururaj73553037</h4>
        </div>
    )
}
export default User;