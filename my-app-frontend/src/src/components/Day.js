import React, { useState } from "react";
import { useParams } from "react-router-dom";
import UpdateActivity from "./UpdateActivity";



function Day( {days, deleteActivity, submitActivity, setDayDataArray} ) {
  const [newActivity, setNewActivity] = useState({
    to_do: "",
    location: "",
    duration: "",
    day: "",
  });


  function handleSubmit(e) {
    e.preventDefault();

    const addActivityObject = {"to_do": newActivity.to_do, "location": newActivity.location, "duration": newActivity.duration, "day": newActivity.day}

  fetch("http://localhost:9292/activities", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(addActivityObject),
  })

    .then((r) => r.json())
    .then((data) => {
      const specificDay = days.find(dObj => dObj.id == data.calender_id)
      specificDay.activities = [...specificDay.activities, data]
      submitActivity(specificDay.activities)


    });


  }

  function handleDeleteClick(activity) {
    console.log("Deleting", activity);
    fetch(`http://localhost:9292/activities/${activity.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        deleteActivity(activity);
      });

  }



  const {id} = useParams();

  const day = days.find(dObj => dObj.id == id)

  function handleSubmitEdit(updatedData) {

  const index = day.activities.findIndex((activity) => activity.id === updatedData.id);
  day.activities[index] = updatedData;
  setDayDataArray([...days, day.activities]);


  }





  return (
    <div>
      <UpdateActivity 
      handleDeleteClick = {handleDeleteClick}
      updateActivity = {handleSubmitEdit}
      day = {day}
      />
      <div>Add Activities</div>
      <div>
      <form onSubmit={handleSubmit}>
        &nbsp;
        <label htmlFor="to_do">Activity: </label>
        <input
        onChange={(e) => setNewActivity({ ...newActivity, [e.target.name]: e.target.value })}         
          type="text"
          name="to_do"
          value={newActivity.to_do}
        />
        <br />
        <label htmlFor="location">Location: </label>
        <input
        onChange={(e) => setNewActivity({ ...newActivity, [e.target.name]: e.target.value })}         
        type="text"
          name="location"
          value={newActivity.location}
        />
        <br />
        <label htmlFor="duration">Duration: </label>
        <input
        onChange={(e) => setNewActivity({ ...newActivity, [e.target.name]: e.target.value })}         
        type="text"
          name="duration"
          value={newActivity.duration}
        />
        <br />
        <label htmlFor="day">Day: </label>
        <input
        onChange={(e) => setNewActivity({ ...newActivity, [e.target.name]: e.target.value })}         
        type="text"
          name="day"
          value={newActivity.day}
        />
        <input type="submit" value="Add Activity" />
      </form>
    </div>
    </div>
  );
}

export default Day;
