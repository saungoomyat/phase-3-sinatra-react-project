import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Day from "./Day";
import AddDay from "./AddDay";


function App() {

  const [dayDataArray, setDayDataArray] = useState([]);

  useEffect(() => {
  fetch(`http://localhost:9292/calenders`)
      .then((r) => r.json())
      .then((dayActivities) => setDayDataArray(dayActivities));
  },[]);


  function handleDeleteClick(deletedActivity) {
    const { id, calender_id } = deletedActivity
    const specificDay = dayDataArray.find(dObj => dObj.id == calender_id)
    const specificDayActivities = specificDay.activities
    const updatedActivity = specificDayActivities.filter((act) => act.id !== id);
    const updatedDays = dayDataArray.map((day) => {
      if (day.id === specificDay.id) {
        return { ...specificDay, activities: updatedActivity };
      }
      return day;
    });

    setDayDataArray(updatedDays);
    
  }

  function handleSubmit(addedActivity){
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
          setDayDataArray = {setDayDataArray}

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




