Senchamvc::Application.routes.draw do

  resources :organizations
  resources :businesses
  root :to => "businesses#index"
end
