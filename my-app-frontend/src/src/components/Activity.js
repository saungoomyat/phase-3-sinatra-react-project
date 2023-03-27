import React, {useState} from 'react'

const Activity = ({activity, handleDeleteClick, updateActivity}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editActivity, setEditActivity] = useState({
        to_do: activity.to_do,
        location: activity.location,
        duration: activity.duration,
        calender_id: activity.calender_id,
      });

    const updatedActivity = {
        to_do: editActivity.to_do,
        location: editActivity.location,
        duration: editActivity.duration,
        calender_id: editActivity.calender_id,
      };
    
      function handleEditSubmit() {
        console.log("update!");
        fetch(`http://localhost:9292/activities/${activity.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedActivity),
        })
          .then((r) => r.json())
          .then((data) => {
            setEditActivity(data)
            updateActivity(data)
            
          });
      }

  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setEditActivity((prevActivity) => ({...prevActivity, [name]: value, }));
    };
  
    const handleEditClick = () => {
      setIsEditing(true);
    };
  
    const handleSaveClick = () => {
      handleEditSubmit()
      setEditActivity(editActivity)

  
      setIsEditing(false);
    };
  
    const handleCancelClick = () => {
      setEditActivity(editActivity);
  
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
                value={editActivity.to_do}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="location"
                value={editActivity.location}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="duration"
                value={editActivity.duration}
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
}

export default Activity


