class CreateShelters < ActiveRecord::Migration[6.1]
  def change
    create_table :shelters do |t|
      t.string :name 
      t.string :shelter_img_url
      t.string :address
      t.string :shelter_notes
      t.integer :shelter_rating
      t.string :kill_shelter
    end
  end
end
