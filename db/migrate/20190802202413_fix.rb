class Fix < ActiveRecord::Migration[5.2]
  def change
    drop_table :waypoint

    create_table :waypoints do |t|
      t.decimal :lat, null: false, scale: 2, precision: 10
      t.decimal :lng, null: false, scale: 2, precision: 10
      t.integer :trek_id, null: false, index: true
    
      t.timestamps
    end
  end
end
