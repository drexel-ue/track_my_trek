# == Schema Information
#
# Table name: points
#
#  id         :bigint           not null, primary key
#  lat        :decimal(, )      not null
#  lng        :decimal(, )      not null
#  trek_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Point < ApplicationRecord
    validates :lat, :lng, :trek_id, presence: true

    belongs_to :trek
end
