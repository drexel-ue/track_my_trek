# == Schema Information
#
# Table name: treks
#
#  id          :bigint           not null, primary key
#  map_name    :string           not null
#  activity    :string           not null
#  description :text
#  starts_from :string
#  privacy     :string           default("friends")
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null

class Trek < ApplicationRecord
    validates :map_name, :activity, :user_id, presence: true

    belongs_to :user
    has_many :waypoints
    has_many :points
end
