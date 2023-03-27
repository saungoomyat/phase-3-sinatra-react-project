import React from "react";
import Activity from "./Activity";


function UpdateActivity( {day, handleDeleteClick, updateActivity} ) {

  const newActivities = day.activities.map((activity) => {
    return(
      <Activity 
      key={activity.id}
      activity = {activity}
      handleDeleteClick = {handleDeleteClick}
      updateActivity = {updateActivity}
      />
    )

  });
  return <div>{newActivities}</div>;



}

export default UpdateActivity;
