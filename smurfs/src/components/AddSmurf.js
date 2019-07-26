import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class AddSmurf extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  onInputChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  onSubmitHandle = e => [e.preventDefault(), this.props.addSmurf(this.state)];

  render() {
    return (
      <div>
        <form style={{marginTop:'5%'}} className="ui form" onSubmit={this.onSubmitHandle}>
          <div className="field">
            <input
              type="text"
              onChange={this.onInputChange}
              name="name"
              value={this.state.name}
            />
          </div>
          <div className="field">
          <input
            onChange={this.onInputChange}
            name="age"
            value={this.state.age}
          /></div>
        <div className="field">  <input
            onChange={this.onInputChange}
            name="height"
            value={this.state.height}
          /></div>

          <button className="ui button">Add</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addSmurf }
)(AddSmurf);
