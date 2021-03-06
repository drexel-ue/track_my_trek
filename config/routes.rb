Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create,:destroy]
    resources :treks, only: [:create, :show,:index]
    resources :friend_requests, only: [:create, :update, :destroy]
  end

end
