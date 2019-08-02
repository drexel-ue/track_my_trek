# == Schema Information
#
# Table name: waypoints
#
#  id         :bigint           not null, primary key
#  lat        :decimal(10, 2)   not null
#  lng        :decimal(10, 2)   not null
#  trek_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Waypoint < ApplicationRecord
    validates :lat, :lng, :trek_id, presence: true

    belongs_to :trek
end
