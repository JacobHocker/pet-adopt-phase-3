class CreateExotics < ActiveRecord::Migration[6.1]
  def change
    create_table :exotics do |t|
      t.string :name
      t.string :breed
      t.string :image_url 
      t.integer :age
      t.integer :price 
      t.string :note
      t.string :shelter_id
    end
  end
end
