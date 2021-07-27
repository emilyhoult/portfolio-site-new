Rails.application.routes.draw do
  get '/', to: 'homepage#home', as: 'root'
  get 'photos/', to: 'photos#photos', as: 'photos'
  get 'work/cubo', to: 'work#cubo', as: 'cubo'
  get 'work/glow', to: 'work#glow', as: 'glow'
  get 'work/wanderlist', to: 'work#wanderlist', as: 'wanderlist'
  get 'work/disc', to: 'work#disc', as: 'disc'
  get 'work/paperlite', to: 'work#paperlite', as: 'paperlite'
  get 'work/localshopper', to: 'work#localshopper', as: 'localshopper'
  get 'work/camperworld', to: 'work#camperworld', as: 'camperworld'
end
