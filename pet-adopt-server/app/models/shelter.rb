class Shelter < ActiveRecord::Base 
    has_many :dogs
    has_many :cats 
    has_many :exotic_pets
    has_many :special_and_service_pets
end