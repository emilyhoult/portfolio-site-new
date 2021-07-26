Rails.application.routes.draw do
  get '/', to: 'homepage#home', as: 'root'
  get 'photos/photos', to: 'photos#photos', as: 'photos'
end
