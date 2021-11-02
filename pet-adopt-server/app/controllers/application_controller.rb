class ApplicationController < Sinatra::Base 
    set :default_content_type, 'application/json'

    get "/dogs" do 
        dogs = Dog.all.order(:name)
        dogs.to_json
    end
    get "/cats" do 
        cats = Cat.all.order(:name)
        cats.to_json
    end
    get "/exotics" do 
        exotics = Exotic.all.order(:name)
        exotics.to_json
    end

    get "/shelters" do
        shelters = Shelter.all.order(:name)
        shelters.to_json(:include => [:dogs, :cats, :exotics])
    end

    post "/dogs" do 
        dog = Dog.create(
            name: params[:name],
            breed: params[:breed],
            image_url: params[:image_url],
            age: params[:age],
            price: params[:price],
            note: params[:note],
            shelter_id: params[:shelter_id]
        )
        dog.to_json
    end
end