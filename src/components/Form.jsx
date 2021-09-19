import { useState } from "react";

const Form = (props) => {
  const [task, setTask] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    // alert if empty
    if (task !== "") {
      props.handleSubmit({ task, status: false });
      setTask("");
    } else alert("Cannot be empty");
  };

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <div>
      <h2>Add New</h2>
      <form onSubmit={onFormSubmit}>
        <input
          className="m-2"
          type="text"
          name="task"
          required
          value={task}
          onChange={handleChange}
        />
        <button className="btn btn-primary m-2" type="submit">
          add todo
        </button>
      </form>
    </div>
  );
};

export default Form;
