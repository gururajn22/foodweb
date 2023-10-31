import React from "react";
import UserClass from "./UserClass";
import UserContext from "../../utils/userContext";

class About extends React.Component{
    constructor(props){
super(props);
    console.log("parent constructor")
    }
componentDidMount(){
    console.log("parent mounting");
}
    render(){
console.log("parent render");
     return(
        <div>
            <h1>About</h1>
             <UserContext.Consumer>
                {({loggedUser})=><h1>{loggedUser}</h1>}
             </UserContext.Consumer>
            <h2>hello this raect router</h2>
            <UserClass name={"First Class"} loaction={"Bengaluru first class"}/>
        </div>
    );
    }
}



export default About;