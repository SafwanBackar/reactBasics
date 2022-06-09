import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn : false
    }
  }

  render() {



    // By ternory method
    return(
        this.state.isLoggedIn?
        <div>Welcome logged in User</div> :
        <div>Welcome Guest</div> 
    )




    // element variable(here - message) approach
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome logged in user</div>
    // }else{
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>



// if else method
//     if(this.state.isLoggedIn){
//         return <div>Welcome logged in user</div>
//     }else{
//         return (
//             <div>Welcome Guest</div>
//           )
//     }
   }
}

export default UserGreeting