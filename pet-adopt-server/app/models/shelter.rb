class Shelter < ActiveRecord::Base 
    has_many :dogs
    has_many :cats 
    has_many :exotics
    has_many :specials
end