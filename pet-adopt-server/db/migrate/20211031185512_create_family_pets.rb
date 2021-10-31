class CreateFamilyPets < ActiveRecord::Migration[6.1]
  def change
    create_table :family_pets do |t|
      t.string :name
      t.integer :age 
      t.integer :price
      t.string :note
      t.integer :individual_seller_id 
    end
  end
end
