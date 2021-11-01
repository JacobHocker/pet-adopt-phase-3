class CreateIndividuals < ActiveRecord::Migration[6.1]
  def change
    create_table :individuals do |t|
      t.string :seller_name
      t.string :note 
    end
  end
end
