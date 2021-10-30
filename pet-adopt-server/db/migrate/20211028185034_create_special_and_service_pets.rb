class CreateSpecialAndServicePets < ActiveRecord::Migration[6.1]
  def change
    create_table :special_and_service_pets do |t|
      t.string :name
      t.string :breed
      t.string :image_url 
      t.integer :age
      t.integer :price 
      t.string :note
      t.string :special_needs
      t.string :service 
      t.integer :shelter_id
    end
  end
end
