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
    shelter_img_url: "./public/images/cap-shelter.jpg",
    address: "12547 West Road, Houston, Tx 77082 USA",
    shelter_notes: "A shelter based around Citizens for Animal Protection. Come by and meet your new best friend. All animals are rescues!",
    shelter_rating: 4.3,
    kill_shelter: false 
)

binding.pry