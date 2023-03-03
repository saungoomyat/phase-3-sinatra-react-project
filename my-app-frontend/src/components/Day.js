import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";


function Day( {days, deleteActivity, submitActivity} ) {
  const [toggle, setToggle] = useState(true);
  const [addTodo, setAddTodo] = useState("");
  const [addLocation, setAddLocation] = useState("");
  const [addDuration, setAddDuration] = useState("");
  const [addCalendarId, setAddCalendarId] = useState("");


  const history = useHistory();
  const {id} = useParams();

  console.log(days)
  const day = days.find(dObj => dObj.id == id)
  console.log(day)


  function handleDeleteClick(activity) {
    console.log("Deleting", activity);
    fetch(`http://localhost:9292/activities/${activity.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        deleteActivity(activity);
        setToggle(!toggle);
      });
  }


  const activities = 
  day.activities.map((activity) => (
      <div key={activity.id}>
        <ul>
          <li>{activity.to_do}</li>
          {activity.location}/&nbsp;{activity.duration}&nbsp;
          <button onClick={()=>handleDeleteClick(activity)}>X</button>
        </ul>
      </div>
    ))

    function handleSubmit(e) {
      e.preventDefault();

      const addActivityObject = {"to_do": addTodo, "location": addLocation, "duration": addDuration, "calender_id": addCalendarId}

    fetch("http://localhost:9292/activities", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addActivityObject),
    })
  
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
  

        day.activities = [...day.activities, data]
        submitActivity(day)

        console.log(day)
  
      });


    }

   

  return (
    <div>
      {activities}
      <div>Add Activities</div>
      <div>
      <form onSubmit={handleSubmit}>
        &nbsp;
        <label htmlFor="to_do">Activity</label>
        <input
          onChange={(e) => setAddTodo(e.target.value)}
          type="text"
          name="to_do"
          value={day.to_do}
        />
        <br />
        <label htmlFor="location">Location</label>
        <input
          onChange={(e) => setAddLocation(e.target.value)}
          type="text"
          name="location"
          value={day.location}
        />
        <br />
        <label htmlFor="duration">Duration</label>
        <input
          onChange={(e) => setAddDuration(e.target.value)}
          type="text"
          name="duration"
          value={day.duration}
        />
        <br />
        <label htmlFor="calender_id">Calender_ID</label>
        <input
          onChange={(e) => setAddCalendarId(e.target.value)}
          type="number"
          name="calender_id"
          value={day.calender_id}
        />
        <br />
        <input type="submit" value="Add Activity" />
      </form>
    </div>
    </div>
  );
}

export default Day;

