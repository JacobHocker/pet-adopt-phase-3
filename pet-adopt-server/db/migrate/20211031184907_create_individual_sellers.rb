class CreateIndividualSellers < ActiveRecord::Migration[6.1]
  def change
    create_table :individual_sellers do |t|
      t.string :seller_name
      t.string :note 
    end
  end
end
