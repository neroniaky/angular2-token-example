Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  resources :private_resource, only: :index
end
