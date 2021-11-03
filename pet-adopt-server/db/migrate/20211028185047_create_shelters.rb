class CreateShelters < ActiveRecord::Migration[6.1]
  def change
    create_table :shelters, id: false do |t|
      t.string :id, null: true 
      t.integer :shelter_id 
      t.string :name 
      t.string :shelter_img_url
      t.string :address
      t.string :shelter_notes
      t.integer :shelter_rating
      t.string :kill_shelter
    end
  end
end
