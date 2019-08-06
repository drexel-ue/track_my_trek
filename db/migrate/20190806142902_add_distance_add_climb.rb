class AddDistanceAddClimb < ActiveRecord::Migration[5.2]
  def change
    add_column :treks, :distance, :decimal, precision: 5, scale: 2
    add_column :treks, :climb, :decimal, precision: 5, scale: 2
  end
end
