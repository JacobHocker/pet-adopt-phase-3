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
    kill_shelter: "No" 
)
shelter2 = Shelter.create(
    name: "Houston Humane Society",
    shelter_img_url: "./images/houston-humane-society.jpg",
    address: "14285 Cypress North Houston, Houston, Tx 77041 USA",
    shelter_notes: "A shelter built around rescuing abdoned pets!",
    shelter_rating: 3.9,
    kill_shelter: "No"
)
puts 
puts "Creating dogs..."
Dog.create(
    name: "Rocko", 
    breed: "Siberian Husky", 
    image_url: "./images/husky-puppy.jpg",
    age: 1,
    price: 350,
    note: "Rocko can be hard to make listen ,but will melt your heart with cuddling!",
    shelter_id: shelter2.id)
Dog.create(
    name: "Walter", 
    breed: "Dauschaund", 
    image_url: "./images/weeny-puppy.jpg",
    age: 1,
    price: 120,
    note: "Walter loves to burrow and go into small spaces",
    shelter_id: shelter2.id)
Dog.create(
    name: "Titan", 
    breed: "German Shepard", 
    image_url: "./images/german-shepard-1.jpg",
    age: 4,
    price: 210,
    note: "Very loyal and obedient dog.",
    shelter_id: shelter1.id)
puts 
puts "Creating cats..."
Cat.create(
    name: "Nala",
    breed: "Munchkin",
    image_url: "./images/munchkin1.png",
    age: 2,
    price: 550,
    note: "Loves to sleep ,and be held.",
    shelter_id: shelter1.id)

