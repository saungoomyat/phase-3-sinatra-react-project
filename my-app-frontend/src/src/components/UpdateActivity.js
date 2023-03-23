import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UpdateForm from "./UpdateForm";
import Day from "./Day";


function UpdateActivity( {editActivity, setEditActivity, day, handleDeleteClick} ) {
  // const [showInputEle, setShowInputEle] = useState(false);
  // const [isEditing, setIsEditing] = useState(false);
  // const [editedActivity, setEditedActivity] = useState(activity);


  // const [selectedActivity, setSelectedActivity] = useState({});
  // const [addDay, setAddDay] = useState({
  //   // to_do: "",
  //   // location: "",
  //   // duration: "",
  //   // day: "",
  // });


  // console.log(addDay)

  const newActivities = day.activities.map((activity) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedActivity, setEditedActivity] = useState(activity);

    console.log(editActivity)
    console.log(editedActivity)
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setEditedActivity((prevActivity) => ({...prevActivity, [name]: value, }));
    };
  
    const handleEditClick = () => {
      console.log(editedActivity)
      setIsEditing(true);
    };
  
    const handleSaveClick = () => {
      // call handleSaveClick from props to save the edited activity
      console.log(editedActivity)
      setEditActivity(editedActivity);
  
      setIsEditing(false);
    };
  
    const handleCancelClick = () => {
      // reset the edited activity to the original activity
      setEditedActivity(activity);
  
      setIsEditing(false);
    };
  
    return (
      <div key={activity.id}>
        {isEditing ? (
          <div>
            <div>
              <input
                type="text"
                name="to_do"
                value={editedActivity.to_do}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="location"
                value={editedActivity.location}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="duration"
                value={editedActivity.duration}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
            </div>
            </div>
        ) : (
          <div>
            <div>{activity.to_do}</div>
            <div>{activity.location}</div>
            <div>{activity.duration}</div>
            <div>
              <button onClick={handleEditClick}>Edit</button>
              <button onClick={() => handleDeleteClick(activity)}>Delete</button>
            </div>
          </div>
        )}
      </div>
    );
  });
  return <div>{newActivities}</div>;




  // const formattedActivities =
  // day.activities.map((activity) => (
  //   // format the activity as needed
  //   <div key={activity.id}>
  //     <h2>{activity.to_do}</h2>
  //     <p>Location: {activity.location}</p>
  //     <p>Duration: {activity.duration}</p>
  //     <button onClick={()=>handleDeleteClick(activity)}>X</button>
  //     <button onClick={() => handleSaveClick(activity.id)}>Save</button>
  //   </div>
  // ));

  // function handleEditClick(activityId) {
  //   const clickActivities = day.activities.find((activity) => activity.id === activityId);
  //   console.log(clickActivities);
  //   setAddDay(clickActivities)
  //   setShowInputEle(true)
  // }

  // const formattedActivities = day.activities.map((activity) => (
  //   <div key={activity.id}>
  //     <ul>
  //       <li>
  //         <input
  //           type="text"
  //           value={activity.to_do}
  //           onChange={(e) => setAddDay(e, activity.id, "to_do")
  //         }
  //         />
  //       </li>
  //       <li>
  //         <input
  //           type="text"
  //           value={activity.location}
  //           onChange={(e) => setAddDay(e, activity.id, "location")
  //         }
  //         />
  //       </li>
  //       <li>
  //         <input
  //           type="text"
  //           value={activity.duration}
  //           onChange={(e) => setAddDay(e, activity.id, "duration")
  //         }
  //         />
  //       </li>
  //       <li>
  //         <button onClick={() => handleDeleteClick(activity)}>X</button>
  //         <button onClick={() => handleEditClick(activity.id)}>Save</button>

  //       </li>
  //     </ul>
  //   </div>
  // ));

  // const handleInputChange = (event, id, property) => {
  //   const newActivities = day.activities.map((activity) => {
  //     if (activity.id === id) {
  //       return {
  //         ...activity,
  //         [property]: event.target.value,
  //       };
  //     }
  //     return activity;
  //   });
  //   setAddDay((prevDay) => ({
  //     ...prevDay,
  //     activities: newActivities,
  //   }));
  // };


  // function handleSaveClick(activityId) {
  //   const clickActivities = day.activities.find((activity) => activity.id === activityId);
  //   console.log(clickActivities);
  //   setAddDay(clickActivities)
  //   // setShowInputEle(true)
  // }

  // return (
  //   <div>
  //     {newActivities}
  //       {/* <UpdateForm
  //         // handleEditChange={(e) => setEditActivity(e.target.value)}
  //         // handleOnClickToggle={() => setShowInputEle(true)} // Initialize handleDoubleClick with a function that updates
  //         // handleBlur={() => setShowInputEle(false)}
  //         // showInputEle={showInputEle}
  //         // handleEditClick={handleEditClick} 
  //         // selectedActivity = {[selectedActivity]}
  //         // activities = {activities}
  //         // day = {[day]}
  //       /> */}
  //   </div>
  // );







}

export default UpdateActivity;
