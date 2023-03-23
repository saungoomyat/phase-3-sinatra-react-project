import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Day from "./Day";
import UpdateActivity from "./UpdateActivity";
import AddDay from "./AddDay";


function App() {

  const [dayDataArray, setDayDataArray] = useState([]);

  useEffect(() => {
  fetch(`http://localhost:9292/calenders`)
      .then((r) => r.json())
      .then((dayActivities) => setDayDataArray(dayActivities));
  },[]);

  console.log(dayDataArray)


  function handleDeleteClick(deletedActivity) {
    const { id, calender_id } = deletedActivity
    //aneed to go through dayDataArray
    // find the day that we are interested in, by mtaching with calendar_id
    const specificDay = dayDataArray.find(dObj => dObj.id == calender_id)
    console.log(specificDay)
    // from the specific day, get the activities
    const specificDayActivities = specificDay.activities
    // console.log(specificDayActivities)
    // filter the activity with matching id
    const updatedActivity = specificDayActivities.filter((act) => act.id !== id);
    // foundDay.activities = updateActivity
    const updatedDays = dayDataArray.map((day) => {
      if (day.id === specificDay.id) {
        return { ...specificDay, activities: updatedActivity };
      }
      return day;
    });

    console.log(updatedDays)
    console.log(dayDataArray)

    setDayDataArray(updatedDays);
    
  }






  function handleSubmit(addedActivity){
    console.log(addedActivity)
    setDayDataArray([...dayDataArray, addedActivity])

  };

  function handleSubmitEdit(addedActivity){
    console.log(addedActivity)
    setDayDataArray([...dayDataArray, addedActivity])

  };



  return (  
    <div>
      <center>
        <h1>My Schedule List</h1>
      </center>
      <NavBar 
      days = {dayDataArray}
      />

      <Switch>
        
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/days/:id">
          <Day 
          days = {dayDataArray}
          deleteActivity = {handleDeleteClick}
          submitActivity = {handleSubmit}
          updateActivity = {handleSubmitEdit}

          />
        </Route>
        <Route path="/AddDay">
          <AddDay 
          days = {dayDataArray} 
          setDays = {setDayDataArray}
          submitActivity = {handleSubmit}

          />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;




