import React, { useState } from "react";


  
function AddDay( {days, setDays} ) {
  const [addDay, setAddDay] = useState("");
  
  


  function handleSubmit(e) {
  e.preventDefault();

  const addedDay = {"day": addDay}

  fetch("http://localhost:9292/calenders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(addedDay),
  })

    .then((r) => r.json())
    .then((data) => {
      setDays([...days, data])
    });


  }



  return (
    <div>
      <div>New Day</div>
      <div>
      <form onSubmit={handleSubmit}>
        &nbsp;
        <label htmlFor="day">Day</label>
        <input
          onChange={(e) => setAddDay(e.target.value)}
          type="text"
          name="day"
          value={days.day}
        />
        <br />
        <input type="submit" value="Add New Day" />
      </form>
    </div>
    </div>
  );



}


export default AddDay;
