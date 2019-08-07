class AddIndiciesFriendRequest < ActiveRecord::Migration[5.2]
  def change
    add_index :friend_requests, :requester_id
    add_index :friend_requests, :requestee_id
  end
end
