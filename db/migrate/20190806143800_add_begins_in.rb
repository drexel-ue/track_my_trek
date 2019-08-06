class AddBeginsIn < ActiveRecord::Migration[5.2]
  def change
    add_column :treks, :begins_in, :string
  end
end
