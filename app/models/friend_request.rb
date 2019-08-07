# == Schema Information
#
# Table name: friend_requests
#
#  id           :bigint           not null, primary key
#  requester_id :integer          not null
#  requestee_id :integer          not null
#  accepted     :boolean          default(FALSE)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class FriendRequest < ApplicationRecord
    validates :requester_id, :requestee_id, presence: true

    belongs_to :requestor,
        foreign_key: :requester_id

    belongs_to :requestee,
        foreign_key: :requestee_id
end