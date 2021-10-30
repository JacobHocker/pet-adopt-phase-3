puts "Destroying old data..."
Dog.destroy_all
Cat.destroy_all
ExoticPet.destroy_all
SpecialAndServicePet.destroy_all
Shelter.destroy_all
puts 

puts "Creating seeds..."
puts 
puts "Creating shelters"
shelter1 = Shelter.create(
    name: "CAP Animal Shelter & Adoption",
    shelter_img_url: "./images/cap-shelter.jpg",
    address: "12547 West Road, Houston, Tx 77082 USA",
    shelter_notes: "A shelter based around Citizens for Animal Protection. Come by and meet your new best friend. All animals are rescues!",
    shelter_rating: 4.3,
    kill_shelter: false 
)
shelter2 = Shelter.create(
    name: "Houston Humane Society",
    shelter_img_url: "./images/houston-humane-society.jpg",
    address: "14285 Cypress North Houston, Houston, Tx 77041 USA",
    shelter_notes: "A shelter built around rescuing abdoned pets!",
    shelter_rating: 3.9,
    kill_shelter: false
)
puts 
puts "Creating dogs..."
Dog.create(name: "Rocko", breed: "Husky", shelter_id: shelter2.id)
Dog.create(name: "Walter", breed: "Pitbull", shelter_id: shelter2.id)
Dog.create(name: "Penny", breed: "German Shepard", shelter_id: shelter1.id)

