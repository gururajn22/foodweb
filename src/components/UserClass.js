import React from "react"

class UserClass extends React.Component{
    constructor(props){
    super(props);
 this.state={
    userInfo:{
        name:"demo",
        location:"demo1",
    }
 };
 console.log(this.props.name + "child constructor");
    }
async componentDidMount(){
   
    const data=await fetch("https://api.github.com/users/gururajn22");
    const json=await data.json();
    this.setState({
        userInfo:json,
    })

    console.log(json);
     

    console.log(this.props.name + "child mouting");
}
componentDidUpdate(){
    console.log("update started");
}
componentWillUnmount(){
    console.log("unmounting started");
}
    render(){
        console.log(this.props.name + "child render");
     const{avatar_url,name,location,bio}=this.state.userInfo;
        return(
        <div className="user-card">
            <img src={avatar_url}/>
            <h2>Name: {name}</h2>
             <h3>Location: {location}</h3> 
             <h3>bio:{bio}</h3>
            <h4>Contact : @Gururaj73553037</h4>
        </div>  
        )
    }
}
export default UserClass;