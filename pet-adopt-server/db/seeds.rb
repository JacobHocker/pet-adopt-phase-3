puts "Destroying old data..."
Dog.destroy_all
Cat.destroy_all
ExoticPet.destroy_all
SpecialAndServicePet.destroy_all
Shelter.destroy_all
puts 

puts "Creating seeds..."
puts "Creating dogs..."
Dog.create([
    {
        name: "Rocko",
        breed: "German Sheperd",
        image_url: "placeholder",
        age: 3,
        price: 120.99,
        note: "Rocko has a sweet disposition",
        kid_friendly: true,
        outdoor_animal: false,
        animal_aggressive: false,
        shelter_id: 1
    },
    {
        name: "Jimmy",
        breed: "Pitbull",
        image_url: "placeholder",
        age: 10,
        price: 59.99,
        note: "Jimmy loves to play",
        kid_friendly: true,
        outdoor_animal: false,
        animal_aggressive: false,
        shelter_id: 3
    }
])
puts "Finished dogs..."

