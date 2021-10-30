class CreateExoticPets < ActiveRecord::Migration[6.1]
  def change
    create_table :exotic_pets do |t|
      t.string :name
      t.string :breed
      t.string :image_url 
      t.integer :age
      t.integer :price 
      t.string :note
      t.integer :shelter_id
    end
  end
end
