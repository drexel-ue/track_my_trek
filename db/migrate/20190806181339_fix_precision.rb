class FixPrecision < ActiveRecord::Migration[5.2]
  def change
    change_column :waypoints, :lat, :decimal
    change_column :waypoints, :lng, :decimal
    #Ex:- change_column("admin_users", "email", :string, :limit =>25)
  end
end
