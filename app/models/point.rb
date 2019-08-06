class Point < ApplicationRecord
    validates :lat, :lng, :trek_id, presence: true

    belongs_to :trek
end