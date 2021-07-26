Rails.application.routes.draw do
  get '/', to: 'homepage#home', as: 'root'
  get 'photos/', to: 'photos#photos', as: 'photos'
end
