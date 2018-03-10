Rails.application.routes.draw do
  root to: "home#index"
  get 'routines/index'  
  get 'exercises/index'




get "charts/show_exercise_sets/:exercise_id", to: "charts#show_exercise_sets", as:'charts_show_exercise_sets'

get "routines/show_exercises", to: "routines#show_exercises"
get "routines/add_exercise",  to: "routines#add_exercise"


# get "exercises/load_exercise",  to: "exercises#load_exercise", as: 'exercises_load_exercise'
get "exercises/load_exercise/:id",  to: "exercises#load_exercise", as: 'exercises_load_exercise'
get "exercises/start_exercise/:id",  to: "exercises#start_exercise", as: 'exercises_start_exercise'



# get "routines/show_exercises/:id", to: "routines#show_exercises"
post "routine/create_exercise", to: "routines#create_exercise"
post "exercises/create_set", to: "exercises#create_set"

# post "exercises/create_set2", to: "exercises#create_set2"

resources :exercises do
  member do
    post 'create_set2'
  end
end

  get 'home/index'

  devise_for :users

   
   resources :exercises
   resources :routines
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
