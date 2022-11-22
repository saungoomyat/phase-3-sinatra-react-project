puts "🌱 Seeding spices..."

# Seed your database here


Calender.create(day: "Monday")
Calender.create(day: "Tuesday")
Calender.create(day: "Wednesday")
Calender.create(day: "Thursday")
Calender.create(day: "Friday")
Calender.create(day: "Saturday")
Calender.create(day: "Sunday")

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
Activity.create(to_do: "Dinner with friends", location: "Restaurant", duration: "4 Hours", calender_id: 6)
Activity.create(to_do: "Relax and Rcover", location: "Home", duration: "Any duration", calender_id: 7)

Chore.create(to_do: "Cook", calender_id: 7)
Chore.create(to_do: "Clean", calender_id: 6)
Chore.create(to_do: "Laundry", calender_id: 6)


puts "✅ Done seeding!"
