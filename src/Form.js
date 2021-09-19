/*
import React, { Component } from "react";

class Form extends Component {
  initialState = {
    name: "",
    job: "",
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, job } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        />
        <label for="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
*/

import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") setName(value);
    if (name === "job") setJob(value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.handleSubmit({ name, job });
    console.log(event);
    setName("");
    setJob("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label for="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleChange}
      />
      <label for="job">Job</label>
      <input
        type="text"
        name="job"
        id="job"
        value={job}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
