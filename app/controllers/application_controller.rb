class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  # Add your routes here
  get "/" do
    { message: "Welcome to my project!" }.to_json
  end

  get '/calenders' do
    calender = Calender.all
    calender.to_json
  end

  get "/calenders/:id" do
    calender = Calender.find(params[:id])
    calender.to_json(include: :activities)
  end



  get "/activities" do
    activity = Activity.all
    activity.to_json()
  end

  get "/activities/:id" do
    activity = Activity.find(params[:id])
    activity.to_json()
  end

  post '/activities' do
    activity = Activity.create(
      to_do: params[:to_do],
      calender_id: params[:calender_id],
      location: params[:location],
      duration: params[:duration])
    activity.to_json
  end

  delete '/activities/:id' do
    activity = Activity.find(params[:id])
    activity.destroy
    activity.to_json
  end 

  patch '/activities/:id' do
    activity = Activity.find(params[:id])
    activity.update(
      to_do: params[:to_do],
      calender_id: params[:calender_id],
      location: params[:location],
      duration: params[:duration])
    activity.to_json
  end

  get "/chores" do
    chore = Chore.all
    chore.to_json()
  end

  get "/chores/:id" do
    chore = Chore.find(params[:id])
    chore.to_json()
  end

  post '/chores' do
    chore = Chore.create(
      to_do: params[:to_do],
      calender_id: params[:calender_id])
      chore.to_json
  end

  delete '/chores/:id' do
    chore = Chore.find(params[:id])
    chore.destroy
    chore.to_json
  end 

  patch '/chores/:id' do
    chore = Chore.find(params[:id])
    chore.update(
      to_do: params[:to_do],
      calender_id: params[:calender_id])
      chore.to_json
  end
  
end
