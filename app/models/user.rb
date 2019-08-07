# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  first_name      :string           not null
#  last_name       :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  gender          :string           not null
#  subscribed      :boolean
#  country         :string
#  birth_date      :date
#  friends         :string           default([]), is an Array
#

class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true 
    validates :first_name,:last_name, presence: true
    validates :password_digest, :session_token, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

    has_many :treks
    has_many :sent_requests,
        class_name: :FriendRequest,
        foreign_key: :requestor_id
    has_many :received_requests,
        class_name: :FriendRequest,
        foreign_key: :requestor_id

    after_initialize :ensure_session_token
    
    attr_reader :password

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end    
end
