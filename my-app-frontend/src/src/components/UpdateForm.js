// import React from "react";

// function UpdateForm({ day, handleEditChange, handleBlur,  showInputEle, handleEditClick, selectedActivity, toggleEditMode, isEditMode}) {
//   // handleChange, handleBlur, handleDoubleClick, showInputEle ,activites
//   // console.log(selectedActivity.to_do)


//   return (

//   //   <div>
//   //   {isEditMode ? (
//   //     <div>
//   //     <input type="text" value={selectedActivity.to_do} onChange={handleEditChange} />
//   //     <input type="text" value={selectedActivity.location} onChange={handleEditChange} />
//   //     <input type="text" value={selectedActivity.duration} onChange={handleEditChange} />
//   //     </div>


//   //   ) : (
//   //     <div>{day}</div>
//   //   )}
//   //   {/* <button onClick={handleEditClick(selectedActivity.id)}>
//   //     {isEditMode ? "Save" : "Edit"}
//   //   </button> */}
//   // </div>





//     <span>
//       {
//         showInputEle ? (
//       <div>
//           <input 
//             type="text" 
//             value={selectedActivity.to_do} 
//             onChange={handleEditChange} 
//             onBlur={handleBlur} 
//             autoFocus 
//           />

//           <input 
//             type="text" 
//             value={selectedActivity.location} 
//             onChange={handleEditChange} 
//             onBlur={handleBlur} 
//             autoFocus 
//           />

//           <input 
//             type="text" 
//             value={selectedActivity.duration} 
//             onChange={handleEditChange} 
//             onBlur={handleBlur} 
//             autoFocus 
//           />
          
//           </div>
          
//         ) : (
//           <span onClick={handleEditClick} // Invoke handleDoubleClick() whenever users doubleclick the <span> element
//           style={{ 
//               display: "inline-block", 
//               height: "25px", 
//               minWidth: "300px", 
//             }}>
//               {day}
//           </span>
//         )
//       }
//     </span>
//   );
// }

// export default UpdateForm;


// {/* <label htmlFor="to_do">Activity</label>
//         <input
//         onChange={(e) => setEditActivity({ ...editActivity, [e.target.name]: e.target.value })}         
//           type="text"
//           name="to_do"
//           value={editActivity.to_do}
//         />
//         <br />
//         <label htmlFor="location">Location</label>
//         <input
//         onChange={(e) => setEditActivity({ ...editActivity, [e.target.name]: e.target.value })}         
//         type="text"
//           name="location"
//           value={editActivity.location}
//         />
//         <br />
//         <label htmlFor="duration">Duration</label>
//         <input
//         onChange={(e) => setEditActivity({ ...editActivity, [e.target.name]: e.target.value })}         
//         type="text"
//           name="duration"
//           value={editActivity.duration}
//         />
//         <br />
//         <label htmlFor="day">Day</label>
//         <input
//         onChange={(e) => setEditActivity({ ...editActivity, [e.target.name]: e.target.value })}         
//         type="text"
//           name="day"
//           value={editActivity.day}
//         /> */}
