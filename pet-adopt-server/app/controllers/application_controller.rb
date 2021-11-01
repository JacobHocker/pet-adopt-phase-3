class ApplicationController < Sinatra::Base 
    set :default_content_type, 'application/json'

    get "/dogs" do 
        dogs = Dog.all.order(:name)
        dogs.to_json
    end

    get "/shelters" do
        shelters = Shelter.all.order(:name)
        shelters.to_json(:include => [:dogs, :cats])
    end
end