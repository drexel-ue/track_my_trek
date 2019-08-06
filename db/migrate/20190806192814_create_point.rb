class CreatePoint < ActiveRecord::Migration[5.2]
  def change
    create_table :points do |t|
      t.decimal :lat, null: false
      t.decimal :lng, null: false
      t.integer :trek_id, null: false, index: true
    
      t.timestamps
    end
  end
end
