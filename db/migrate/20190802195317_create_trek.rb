class CreateTrek < ActiveRecord::Migration[5.2]
  def change
    create_table :treks do |t|
      t.string :map_name, null: false
      t.string :activity, null: false
      t.text :description
      t.string :starts_from
      t.string :privacy, default: 'friends'
      t.integer :user_id, null: false, index: true 

      t.timestamps
    end

    create_table :waypoint do |t|
      t.decimal :lat, null: false, scale: 2, precision: 10
      t.decimal :lng, null: false, scale: 2, precision: 10
      t.integer :trek_id, null: false, index: true
    
      t.timestamps
    end
    
  end
end
