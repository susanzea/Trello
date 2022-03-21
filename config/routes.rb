Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create] do 
      resources :workspaces, only: [:index]
    end

    resource :session, only: [:create, :destroy]

    resources :workspaces, only: [:show, :create, :destroy] do
      resources :boards, only: [:index]
    end

    resources :boards, only: [:show, :create, :destroy] do
      resources :lists, only: [:index]
    end

    resources :lists, only: [:create, :destroy] do
      resources :cards, only: [:index]
    end

    resources :cards, only: [:show, :destroy, :create, :update]
  end
end
