import React, { useState } from "react";
import { useParams } from "react-router-dom";
import UpdateActivity from "./UpdateActivity";
// import UpdateForm from "./UpdateForm";



function Day( {days, deleteActivity, submitActivity, updateActivity} ) {
  // const [toggle, setToggle] = useState(true);
  // const [addTodo, setAddTodo] = useState("");
  // const [addLocation, setAddLocation] = useState("");
  // const [addDuration, setAddDuration] = useState("");
  // const [addCalendarId, setAddCalendarId] = useState("");
  const [editActivity, setEditActivity] = useState({
    to_do: "",
    location: "",
    duration: "",
    day: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const addActivityObject = {"to_do": editActivity.to_do, "location": editActivity.location, "duration": editActivity.duration, "day": editActivity.day}

  fetch("http://localhost:9292/activities", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(addActivityObject),
  })

    .then((r) => r.json())
    .then((data) => {
      console.log(data)

      const specificDay = days.find(dObj => dObj.id == data.calender_id)
      console.log(specificDay)



      specificDay.activities = [...specificDay.activities, data]
      submitActivity(specificDay.activities)

      console.log(specificDay.activities)

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
        // setToggle(!toggle);
      });

  }


  function handleEditChange(e) {
    e.preventDefault();
    console.log("update!");
    fetch(`http://localhost:9292/activities/${editActivity.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedActivity),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        setEditActivity(data);
        updateActivity(data)
        // setToggle(!toggle);
        
      });
  }


  console.log(editActivity)


  const {id} = useParams();

  const day = days.find(dObj => dObj.id == id)




  const updatedActivity = {
    to_do: editActivity.to_do,
    location: editActivity.location,
    duration: editActivity.duration,
    calender_id: editActivity.calender_id,
  };

  console.log(updateActivity)






  // const activities = 
  // day.activities.map((activity) => (
  //     <div key={activity.id}>
  //       <ul>
  //         <li>{activity.to_do}</li>
  //         {activity.location}/&nbsp;{activity.duration}&nbsp;
  //         <button onClick={()=>handleDeleteClick(activity)}>X</button>
  //         {/* <button onClick={() => handleEditClick(activity.id)}>Edit</button> */}
  //       </ul>
  //     </div>
  //   ))


    //make an ind component, to clean up ^ above. so ul is abstracted into the component.
    //pass everything down to another compoonent and makle it look better
    //create a toggle, clicking the edit will toggle the form
    //so it changes into input boxes
    //1 component to make the ul more proper
    //1 for the toggle

  // console.log (activities)

    


  return (
    <div>
      <UpdateActivity 
      editActivity = {[editActivity]}
      setEditActivity = {setEditActivity}
      handleDeleteClick = {handleDeleteClick}
      // handleEditChange = {handleEditChange}
      // activities = {activities}
      day = {day}
      
      />
      {/* {activities} */}
      <div>Add Activities</div>
      <div>
      <form onSubmit={handleSubmit}>
        &nbsp;
        <label htmlFor="to_do">Activity: </label>
        <input
        onChange={(e) => setEditActivity({ ...editActivity, [e.target.name]: e.target.value })}         
          type="text"
          name="to_do"
          value={editActivity.to_do}
        />
        <br />
        <label htmlFor="location">Location: </label>
        <input
        onChange={(e) => setEditActivity({ ...editActivity, [e.target.name]: e.target.value })}         
        type="text"
          name="location"
          value={editActivity.location}
        />
        <br />
        <label htmlFor="duration">Duration: </label>
        <input
        onChange={(e) => setEditActivity({ ...editActivity, [e.target.name]: e.target.value })}         
        type="text"
          name="duration"
          value={editActivity.duration}
        />
        <br />
        <label htmlFor="day">Day: </label>
        <input
        onChange={(e) => setEditActivity({ ...editActivity, [e.target.name]: e.target.value })}         
        type="text"
          name="day"
          value={editActivity.day}
        />
        <input type="submit" value="Add Activity" />
      </form>
    </div>
    </div>
  );
}

export default Day;
