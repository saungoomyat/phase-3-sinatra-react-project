puts "🌱 Seeding spices..."

# Seed your database here


Calender.create(day: "Monday")
Calender.create(day: "Tuesday")
Calender.create(day: "Wednesday")
Calender.create(day: "Thursday")
Calender.create(day: "Friday")



Activity.create(to_do: "Work", location: "Office", duration: "8 Hours", calender_id: 1)
Activity.create(to_do: "Work", location: "Office", duration: "8 Hours", calender_id: 2)
Activity.create(to_do: "Work", location: "Office", duration: "8 Hours", calender_id: 3)
Activity.create(to_do: "Work", location: "Office", duration: "8 Hours", calender_id: 4)
Activity.create(to_do: "Work", location: "Office", duration: "8 Hours", calender_id: 5)

Activity.create(to_do: "Workout", location: "Gym", duration: "1.5 Hours", calender_id: 1)
Activity.create(to_do: "Workout", location: "Gym", duration: "1.5 Hours", calender_id: 2)
Activity.create(to_do: "Workout", location: "Gym", duration: "1.5 Hours", calender_id: 3)
Activity.create(to_do: "Workout", location: "Gym", duration: "1.5 Hours", calender_id: 4)
Activity.create(to_do: "Workout", location: "Gym", duration: "1.5 Hours", calender_id: 5)




puts "✅ Done seeding!"
