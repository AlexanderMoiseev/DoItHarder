# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user = User.create( email: '123@mail.com', password: '123456', password_confirmation: '123456')


exercise =  Exercise.create(name: "PushUp", created_at: Time.now.to_datetime - 8, updated_at: Time.now.to_datetime - 8, user_id: user.id)


set_list = [

	[ 10, 60, exercise.id, nil,  Time.now.to_datetime - 10,  Time.now.to_datetime - 10 ],
	[ 10, 65, exercise.id, nil,  Time.now.to_datetime - 10,  Time.now.to_datetime - 10 ],

	[ 10, 65, exercise.id, nil,  Time.now.to_datetime - 8,  Time.now.to_datetime - 8 ],
	[ 10, 70, exercise.id, nil,  Time.now.to_datetime - 8,  Time.now.to_datetime - 8 ],

	[ 10, 100, exercise.id, nil,  Time.now.to_datetime - 5,  Time.now.to_datetime - 5 ],

	[ 10, 70, exercise.id, nil,  Time.now.to_datetime - 4,  Time.now.to_datetime - 4 ],

	[ 10, 70, exercise.id, nil,  Time.now.to_datetime - 3,  Time.now.to_datetime - 3 ],
	[ 10, 71, exercise.id, nil,  Time.now.to_datetime - 3,  Time.now.to_datetime - 3 ],
	[ 10, 72, exercise.id, nil,  Time.now.to_datetime - 3,  Time.now.to_datetime - 3 ],

	[ 10, 75, exercise.id, nil,  Time.now.to_datetime - 2,  Time.now.to_datetime - 2 ],

	[ 10, 80, exercise.id, nil,  Time.now.to_datetime - 1,  Time.now.to_datetime - 1 ],

  [ 10, 90, exercise.id, nil,  Time.now.to_datetime ,  Time.now.to_datetime  ]


]


set_list.each do |repetition, weight, exercise_id, routine_id, created_at, updated_at|
  ExerciseSet.create( repetition: repetition, weight: weight, exercise_id: exercise_id, created_at: created_at, updated_at: updated_at )
end


