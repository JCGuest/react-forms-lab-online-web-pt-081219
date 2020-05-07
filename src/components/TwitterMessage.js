import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      mesg: ""
    };
  }

  updateCount = e => {
    this.setState({
      mesg: e.target.value
    })
    console.log(this.state.mesg)
  } 

  render() {
    let charsRemain = (this.props.maxChars) - (this.state.mesg.length)
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.updateCount} value={this.state.mesg} type="text" name="message" id="message" />
        {charsRemain}
      </div>
    );
  }
}

export default TwitterMessage;
