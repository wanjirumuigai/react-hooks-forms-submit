import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([])
  const [errors, setErrors] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault()
    if (firstName.length > 0) {
    const formData = {
      firstName: firstName,
      lastName: lastName
    }
    const newArray = [...submittedData, formData]
    setSubmittedData(newArray)
    setFirstName("")
    setLastName("")
    setErrors([])
  }  else {
    setErrors(["Firstname is required!"])
  } }

  const listofSubmissions = submittedData.map((item, index) => {
    return (
      <div key={index}> Firstname: {item.firstName} Lastname:{item.lastName}

      </div>
    )
  })

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    <p>
      {errors.length > 0 ? errors.map((error,index) => (
        <p key={index} style={{color: "red"}}>{error} </p>
      ) ) : null}
    </p>
    <h3>{listofSubmissions}</h3>
    </div>
  );
}

export default Form;
