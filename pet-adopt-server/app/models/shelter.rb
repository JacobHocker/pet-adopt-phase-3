class Shelter < ActiveRecord::Base 
    has_many :dogs
    has_many :cats 
    has_many :exotics
    self.primary_key = :id 
end