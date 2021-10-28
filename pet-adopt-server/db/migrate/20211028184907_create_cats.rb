class CreateCats < ActiveRecord::Migration[6.1]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :breed
      t.string :image_url 
      t.integer :age
      t.float :price 
      t.string :note
      t.boolean :kid_friendly
      t.boolean :outdoor_animal
      t.boolean :animal_aggressive
      t.integer :shelter_id
    end
  end
end
