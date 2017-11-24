Rails.application.routes.draw do
  get 'home/index'

  devise_for :users
   root to: "home#workout"
   
   resources :exercises
   
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
