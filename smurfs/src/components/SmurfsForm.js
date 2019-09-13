import React, { useState } from "react";


const SmurfForm = props => {
  // console.log(props);
  const [smurf, setSmurf] = useState({ name: "", age: "", height: "" });

  const changeHandler = event => {
    // const newObj = {...note}
    // newObj[event.target.name] = event.target.value;
    setSmurf({ ...smurf, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    const newSmurf = {
      ...smurf,
      id: Date.now()
    };
    // console.log(newSmurf)
    props.addSmurf(newSmurf);
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="new Smurf">New Smurf</label>
      <input
        type="text"
        name="name"
        placeholder="New Smurf"
        value={smurf.name}
        onChange={changeHandler}
      />

      <label htmlFor="smurf age">Smurf Age</label>
      <input
        type="text"
        name="age"
        placeholder="smurf age"
        value={smurf.age}
        onChange={changeHandler}
      />

      <label htmlFor="smurf height">Smurf Age</label>
        <input
          type="text"
          name="height"
          placeholder="smurf height"
          value={smurf.height}
          onChange={changeHandler}
        />

      <button type="submit">Add New Smurf</button>
    </form>
  );
};


export default SmurfForm;