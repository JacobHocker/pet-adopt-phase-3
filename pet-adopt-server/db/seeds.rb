puts "Destroying old data..."
Dog.destroy_all
Cat.destroy_all
Exotic.destroy_all
Shelter.destroy_all
puts 

puts "Creating seeds..."
puts 
puts "Creating shelters"
Shelter.create(
    #id: "shelter1",
    shelter_id: 1,
    name: "CAP Animal Shelter & Adoption",
    shelter_img_url: "./images/cap-shelter.jpg",
    address: "12547 West Road, Houston, Tx 77082 USA",
    shelter_notes: "A shelter based around Citizens for Animal Protection. Come by and meet your new best friend. All animals are rescues!",
    shelter_rating: 4.3,
    kill_shelter: "No" 
)
Shelter.create(
    #id: "shelter2",
    shelter_id: 2,
    name: "Friends For Life Animal Shelter",
    shelter_img_url: "./images/friends-for-life-animal-shelter.jpg",
    address: "14285 Cypress North Houston, Houston, Tx 77041 USA",
    shelter_notes: "Kill Animals",
    shelter_rating: 3.9,
    kill_shelter: "Yes"
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
    shelter_id: 2)
Dog.create(
    name: "Walter", 
    breed: "Dauschaund", 
    image_url: "./images/weeny-puppy.jpg",
    age: 1,
    price: 120,
    note: "Walter loves to burrow and go into small spaces",
    shelter_id: 2)
Dog.create(
    name: "Titan", 
    breed: "German Shepard", 
    image_url: "./images/german-shepard-1.jpg",
    age: 4,
    price: 210,
    note: "Very loyal and obedient dog.",
    shelter_id: 1)
puts 
puts "Creating cats..."
Cat.create(
    name: "Nala",
    breed: "Munchkin",
    image_url: "./images/munchkin1.png",
    age: 2,
    price: 550,
    note: "Loves to sleep ,and be held.",
    shelter_id: 1)
puts 
puts "Creating exotic pets..."
Exotic.create(
    name: "Jar Jar",
    breed: "Fennec Fox",
    image_url: "./images/fennec1.png",
    age: 6,
    price: 2_000,
    note: "Absolutley loves to burrow and being out in the heat!",
    shelter_id: 2
)

