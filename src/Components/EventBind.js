import React, { Component } from 'react'

export class EventBind extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello'
    }
    // Way of binding event as per react document (in the constructor itself)
    this.clickHandler = this.clickHandler.bind(this)
  }  

  clickHandler(){
      this.setState({
          message: 'Goodbye'
      })
  }

  render() {
    return (
      <div>
          <div>{this.state.message}</div>
          {/* way of binding event directly in render */}
          {/*<button onClick={this.clickHandler.bind(this)}>Event Click</button>*/}
          <button onClick={this.clickHandler}>Event Click</button>
      </div>
    )
  }
}

export default EventBind