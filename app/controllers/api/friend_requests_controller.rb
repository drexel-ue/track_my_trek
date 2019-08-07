class Api::FriendRequestsController < ApplicationController
    def create
    end
end

# User.where("first_name like :q or last_name like :q or username like :q", {q: "%#{query_string}%"})