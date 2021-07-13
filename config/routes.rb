Rails.application.routes.draw do
  get '/', to: 'homepage#home', as: 'root'
end
