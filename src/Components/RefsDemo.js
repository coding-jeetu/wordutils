import React, { Component } from 'react'

 class RefsDemo extends Component {
  constructor(props) {
    super(props)
    this.inputref = React.createRef()
  }
  componentDidMount() {
  this.inputref.current.focus()
    console.log(this.inputRef)
  }
  
  clickHandler = () => {
    alert(this.inputRef.current.value)
  }
  
  render() {
    return (
      <div>
        <input type = "text" ref = {this.inputref} />
      <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}


export default RefsDemo