class FriendFix < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :friends
  end
end
