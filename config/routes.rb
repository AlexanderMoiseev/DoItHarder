Rails.application.routes.draw do
  root to: "home#index"
  get 'routines/index'
get "routines/show_exercises"
# get "routines/show_exercises/:id", to: "routines#show_exercises"


  get 'home/index'

  devise_for :users

   
   resources :exercises
   resources :routines
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
