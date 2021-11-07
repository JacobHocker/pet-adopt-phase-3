puts "Destroying old data..."
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
    shelter_rating: rand(1..5),
    kill_shelter: "No" 
)
Shelter.create(
    #id: "shelter2",
    shelter_id: 2,
    name: "Friends For Life Animal Shelter",
    shelter_img_url: "./images/friends-for-life-animal-shelter.jpg",
    address: "14285 Cypress North Houston, Houston, Tx 77041 USA",
    shelter_notes: "A local shelter dedicated to finding animals & pets the proper homes.",
    shelter_rating: rand(1..5),
    kill_shelter: "Yes"
)
puts 
puts "Created shelters...."
